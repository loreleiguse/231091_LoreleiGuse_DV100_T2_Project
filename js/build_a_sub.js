subMonth = () => {

    let subWeek = document.getElementById("subMade");

    for(let i = 0; i < subData.length; i++){
        let name = subData[i].subName;
        let bread = subData[i].subBread;
        let fixings = subData[i].subFixings;
        let sauce = subData[i].subSauce;

        subWeek.innerHTML += `
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Name:</strong> ${name}</li>
                    <li class="list-group-item"><strong>Bread:</strong> ${bread}</li>
                    <li class="list-group-item"><strong>Fixings:</strong> ${fixings.join(", ")}</li>
                    <li class="list-group-item"><strong>Sauce:</strong> ${sauce}</li>
                </ul>
            </div>`
    }
}

let subOrder = [];

whatSub = () => {

    let totalPrice = 0;

    let name = document.getElementById("name").value;
    let bread = document.getElementsByName("bread");
    let breadValue;

    for(let i = 0; i < bread.length; i++){
        if(bread[i].checked){
            breadValue = bread[i].value
            totalPrice = totalPrice + +bread[i].dataset.cost
        }
    }

    let fixings = document.getElementsByName("fixings");
    let fixArray = [];

    for(let i = 0; i < fixings.length; i++){
        if(fixings[i].checked){
            fixArray.push(fixings[i].value)
            totalPrice = totalPrice + +fixings[i].dataset.cost
        }
    }

    let sauce = document.getElementsByName("sauce");
    let sauceArray = [];

    for(let i = 0; i < sauce.length; i++){
        if(sauce[i].checked){
            sauceArray.push(sauce[i].value)
            totalPrice = totalPrice + +sauce[i].dataset.cost
        }
    }

    let drink = document.getElementsByName("drink");
    let drinkArray = [];

    for(let i = 0; i < drink.length; i++){
        if(drink[i].checked){
            drinkArray.push(drink[i].value)
            totalPrice = totalPrice + +drink[i].dataset.cost
        }
    }

    subOrder.push({
        subName: name,
        subBread: breadValue,
        subFixings: fixArray,
        subSauce: sauceArray,
        subDrink: drinkArray,
        subPrice: totalPrice
    })

    console.log(subOrder)

    document.getElementById("currentPrice").innerHTML = "R0.00";

    document.getElementById("subForm").reset ();
}

currentPrice = () => {

    let currentCost = 0;

    let bread = document.getElementsByName("bread");
    for(let i = 0; i < bread.length; i++){
        if(bread[i].checked){
            currentCost = currentCost + +bread[i].dataset.cost
        }
    }

    let fixings = document.getElementsByName("fixings");
    for(let i = 0; i < fixings.length; i++){
        if(fixings[i].checked){
            currentCost = currentCost + +fixings[i].dataset.cost
        }
    }

    let sauce = document.getElementsByName("sauce");
    for(let i = 0; i < sauce.length; i++){
        if(sauce[i].checked){
            currentCost = currentCost + +sauce[i].dataset.cost
        }
    }

    let drink = document.getElementsByName("drink");
    for(let i = 0; i < drink.length; i++){
        if(drink[i].checked){
            currentCost = currentCost + +drink[i].dataset.cost
        }
    }

    document.getElementById("currentPrice").innerHTML = "R" + currentCost + ".00"
}

showSandwich = () => {
    let area = document.getElementById("sandwich");
    let cost = document.getElementById("subTotal");

    area.innerHTML = "";

    let finalTotal = 0;

    for(let i = 0; i < subOrder.length; i++){
        let name = subOrder[i].subName;
        let bread = subOrder[i].subBread;
        let fixings = subOrder[i].subFixings;
        let sauce = subOrder[i].subSauce;
        let drink = subOrder[i].subDrink;
        let price = subOrder[i].subPrice;

        finalTotal += price;

        cost.innerHTML = "R" + finalTotal + ".00";

        area.innerHTML += `
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Name:</strong> ${name}</li>
                    <li class="list-group-item"><strong>Bread:</strong> ${bread}</li>
                    <li class="list-group-item"><strong>Fixings:</strong> ${fixings.join(", ")}</li>
                    <li class="list-group-item"><strong>Sauce:</strong> ${sauce}</li>
                    <li class="list-group-item"><strong>Drink:</strong> ${drink}</li>
                    <li class="list-group-item"><strong>Price:</strong> R${price}.00</li>
                </ul>
            </div>`
    }
}

checkout = () => {
    let data = JSON.stringify(subOrder)
    localStorage.setItem("sub", data)
    window.location.href = '../pages/checkout.html'
}