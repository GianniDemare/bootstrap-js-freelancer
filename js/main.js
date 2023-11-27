

let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

let projectCards = [{
    name: "Cabin",
    Image: "cabin",
},
{
    name: "Cake",
    Image: "cake",
},
{
    name: "Circus",
    Image: "circus",
},
{
    name: "Game",
    Image: "game",
},
{
    name: "Safe",
    Image: "safe",
},
{
    name: "Submarine",
    Image: "submarine",
}]

for(let i=0; i <= discountCodes.length; i++) {
    addCard(projectCards[i])

};


function buttonService(event) {
    event.preventDefault();
    
    let hoursWork = document.getElementById("hours").value;
    let typeWork = document.getElementById("typeChoice").value;
    let userDiscount = document.getElementById("discount").value;

    let price =0;
    price = parseFloat(price);

    if (typeWork == "backend") {
        price = hoursWork * 20.5;
        typeWork = "Back-End Developer"
    } else if (typeWork == "frontend") {
        price = hoursWork * 15.3;
        typeWork = "Front-End Developer"
    } else if (typeWork == "analyst") {
        price = hoursWork * 33.6;
        typeWork = "Project Analyst"
    }
    
    if (discountCodes.includes(userDiscount)) {
        price = price / 100 * 75;
    }

    if (userDiscount.length >= 1 && !discountCodes.includes(userDiscount)) {
        document.getElementById("discountMessage").classList.remove("d-none");
    }

    

    document.getElementById("priceId").innerHTML = "Price: " + price.toFixed(2) + "€";
    document.getElementById("hoursId").innerHTML = "Hours Requested: " + hoursWork;
    document.getElementById("workId").innerHTML = "Type of Work: " + typeWork;
}

function addCard(nameOfArray) {
    document.getElementById("cardList").innerHTML += `
    <div class="col-md-6 col-lg-4 mb-5">
    <div class="card">
    <img class="card-img-top" src="img/${nameOfArray.Image}.png" alt="cabin">
    <div class="card-body text-center">
      <h5>${nameOfArray.name} Website</h5>
      <a href="#" class="card-link btn btn-info">Preview</a>
      <a href="#" class="card-link btn btn-outline-info">Visit site</a>
    </div>
  </div>
  </div>
    `;
}
    

    



