// let request = new XMLHttpRequest();
// request.open('get', 'https://jsonplaceholder.typicode.com/users');
// request.send();

// request.onreadystatechange = () => {
//     if (request.readyState == 4) {
//         if (request.status > 199 && request.status < 300) {
//             let data = JSON.parse(request.responseText);
//             fetchData(data);
//         }
//     }
// }


fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => fetchData(data));

function fetchData(users) {
    let usersId = users.map((userObj) => userObj.id)
    let selectElement = document.querySelector('#id_select')

    for (let id of usersId) {
        let optionElement = document.createElement('option')
        optionElement.value = id
        optionElement.text = id
        selectElement.appendChild(optionElement)
    }
}



function getUser() {
    let userId = id_select.value;
    let userObj = users.find((userObj) => userObj.id == userId)
    displayDetails(userObj)
}



function displayDetails(userObj) {
    let htmlData =`
    <div class="card mb-2">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${userObj.name}</li>
            <li class="list-group-item">Username: ${userObj.username}/li>
            <li class="list-group-item">Email: ${userObj.email}</li>
            <li class="list-group-item">Phone: ${userObj.phone}</li>
            <li class="list-group-item">Company: ${userObj.company.name}</li>
        </ul>
    </div>
    `;
    id_result.innerHTML = htmlData;
}