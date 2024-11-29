function bmiCalculator() {
    let = healty_img = 'https://www.shutterstock.com/shutterstock/photos/353506304/display_1500/stock-vector-cartoon-healthy-strong-man-vector-illustration-353506304.jpg'
    let = overweight_img = 'https://cdn5.vectorstock.com/i/1000x1000/47/49/flat-overweight-obese-unhappy-man-at-scale-vector-23814749.jpg'
    let = underweight_img = 'https://c8.alamy.com/comp/W3WRDG/illustration-of-an-underweight-man-in-skin-and-bones-W3WRDG.jpg'

    let height = parseFloat(id_height.value / 100);
    let weight = parseFloat(id_weight.value);
    let calculatedBMI = (weight / (height ** 2)).toFixed(2);
    let result = {
        height: height * 100,
        weight: weight,
        bmi: calculatedBMI,
    }
    if (calculatedBMI < 18.5) {
        result.status = 'Underweight'
        result.image = underweight_img
    }
    else if (calculatedBMI > 25) {
        result.status = 'Overweight'
        result.image = overweight_img
    }
    else {
        result.status = 'Helathy'
        result.image = healty_img
    }
    displayResult(result)
}

function displayResult(result) {
    let htmlData = `
    <div class="card shadow" style="width: 18rem;">
        <img src="${result.image}" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">${result.status}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${result.height}</li>
        <li class="list-group-item">${result.weight}</li>
        <li class="list-group-item">${result.bmi}</li>
    </ul>
    </div>`
    id_result.innerHTML=htmlData
}
