console.log('Hello there');

function tempConverter() {
    let tempInC = document.querySelector('#id_tempInC').value
    let tempInF = document.querySelector('#id_tempInF').value
    if (tempInC) {
        let tempInFahrenheit = (tempInC * 1.8) + 32
        document.querySelector('#id_tempInF').value = tempInFahrenheit.toFixed(2)
    }
    else if (tempInF) {
        let tempInCelsius = (tempInF - 32) * (5/9)
        document.querySelector('#id_tempInC').value = tempInCelsius.toFixed(2)  
    }
}
