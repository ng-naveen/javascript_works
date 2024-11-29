function getWether() {
    let location = id_location.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8a9658985de4c0923b73c035d84da799&q=${location}&units=metric`).
    then(response => response.json()).then(data => displayWether(data));
}


function getCurrentLocationWether() {
    navigator.geolocation.getCurrentPosition((position) =>{
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8a9658985de4c0923b73c035d84da799&units=metric`).
        then((response) => response.json()).then((data) => displayWether(data));    
    })
}


function displayWether(wetherData) {
    let location = wetherData.name;
    let temp = wetherData.main.temp;
    let feelsLike = wetherData.main.feels_like;
    let pressure = wetherData.main.pressure;
    
    let htmlData = `
    <div class="card">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Location: ${location}</li>
        <li class="list-group-item">Temp: ${temp}</li>
        <li class="list-group-item">Feels like: ${feelsLike}</li>
        <li class="list-group-item">Pressure: ${pressure}</li>
    </ul>
    </div>
    `
    document.querySelector('#id_result').innerHTML=htmlData;
}


