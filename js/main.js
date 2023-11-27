

let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function buttonService(event) {
    event.preventDefault();
    
    let hoursWork = document.getElementById("hours").value;
    let typeWork = document.getElementById("typeChoice").value;
    let userDiscount = document.getElementById("discountCode").value;

    let price;
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
        return false;
    }

    document.getElementById("formDiv").classList.add("d-none");
    document.getElementById("finalContainer").classList.remove("d-none");

    document.getElementById("priceId").innerHTML = "Price: €" + price.toFixed(2);
    document.getElementById("hoursId").innerHTML = "Hours requested: " + hoursWork;
    document.getElementById("workId").innerHTML = "Type of work: " + typeWork;
}