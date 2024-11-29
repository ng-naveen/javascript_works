fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => displayData(data));


function displayData(products) {

    let htmlData = ``

    for (let product of products) {
        htmlData += `
        <div class="col-3">
            <div class="card" style="width: 100%;">
                <img src="${product.image}" class="card-img-top" alt="..." style="width: 300px; height: 350px;">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${product.price}</li>
                    <li class="list-group-item">${product.category}</li>
                    <li class="list-group-item">${product.rating.rate}</li>
                </ul>
            </div>    
        </div>
        `
    }
    document.querySelector('#id_result').innerHTML=htmlData;
}

function getCategoryProducts(category) {
    if (category == '1') {
        category = "electronics";
    }
    else if (category == '2') {
        category = "jewelery";
    }
    else if (category == '3') {
        category = "men's clothing";
    }
    else {
        category = "women's clothing";
    }
    fetch(`https://fakestoreapi.com/products/category/${category}`).then(response => response.json()).then(data => displayData(data))
}
