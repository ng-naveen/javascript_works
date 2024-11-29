fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=4ebdbe53c433400287cbe4c71b486a93').
then((response) => response.json()).then((data) => displayNews(data))



function displayNews(headlines) {
    let htmlData = `` 
    for (let article of headlines.articles) {
        htmlData += `
        <div class="row my-2">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="card">
                    <img src="${article.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.description}</p>
                        <cite title="Source Title">${article.author}</cite>
                    </div>
                </div>
            </div>
        <div class="col-4"></div>
    </div>
    `
    }
    document.querySelector('#id_result').innerHTML=htmlData;
}



function getCategoryNews(category) {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4ebdbe53c433400287cbe4c71b486a93`).
then((response) => response.json()).then((data) => displayHeadlines(data))
}