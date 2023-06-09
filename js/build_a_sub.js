displaySub = () => {
    let monthSub = document.getElementById("subOut");

    for(let i = 0; i < subData.length; i++){

            let name = subData[i].subName;
            let bread = subData[i].subBread;
            let toppings = subData[i].subToppings;
            let sauce = subData[i].subSauce;
            let price = subData[i].subPrice;

            monthSub.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text"><strong>Bread:</strong> ${bread}</p>
                    <p class="card-text"><strong>Toppings:</strong> ${toppings.join(", ")}</p>
                    <p class="card-text"><strong>Sauce:</strong> ${sauce}</p>
                    <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
                </div>
            </div>`

    }
}


let subOrder = [];

makeSub = () =>{

    let subTotal = 0;

    let subName = document.getElementById("subName").value;
    
    let breadOption = document.getElementsByName("bread");
    let breadValue; 
    for(let i = 0; i < breadOption.length; i++){
        if(breadOption[i].checked){
            breadValue = breadOption[i].value
            subTotal = subTotal + +breadOption[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            topArray.push(toppingOptions[i].value);
            subTotal = subTotal + +toppingOptions[i].dataset.cost
        }
    }

    subOrder.push({
        subName: subName,
        subBread: baseValue,
        subToppings: topArray,
        subSauce: sauce,
        subPrice: subTotal
    });

    console.log(subOrder)

    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("subForm").reset();

}

realTimeCost = () => {

    realTimePrice = 0; 

    let size = document.getElementById("size").value;
    if(size === "Small"){
        realTimePrice = realTimePrice + 20;
    } else if(size === "Medium"){
        realTimePrice = realTimePrice + 40;
    } else if(size === "Large"){
        realTimePrice = realTimePrice + 60;
    }

    let baseOption = document.getElementsByName("baseRadio"); 
    for(let i = 0; i < baseOption.length; i++){
        if(baseOption[i].checked){
            realTimePrice = realTimePrice + +baseOption[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("toppings");
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost
        }
    }

    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"

}

displayOrder = () => {

    let area = document.getElementById("orders");
    let total = document.getElementById("orderTotal");

    area.innerHTML = "";

    let overallTotal = 0; 

    for(let i = 0; i < subOrder.length; i++){

        let name = subData[i].subName;
        let bread = subData[i].subBread;
        let toppings = subData[i].subToppings;
        let sauce = subData[i].subSauce;
        let price = subData[i].subPrice;

        overallTotal += price;

        area.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text"><strong>Bread:</strong> ${bread}</p>
                    <p class="card-text"><strong>Toppings:</strong> ${toppings.join(", ")}</p>
                    <p class="card-text"><strong>Sauce:</strong> ${sauce}</p>
                    <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
                </div>
            </div>`

        total.innerHTML = "R" + overallTotal + ".00"

    }
}

checkout = () => {
    let data = JSON.stringify(subOrder)
    localStorage.setItem("order", data)
    window.location.href = 'pages/checkout.html'
}