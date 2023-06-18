showSub = () => {

    let data = JSON.parse(localStorage.getItem("sub"));
    let items = document.getElementById("subHere");
    let finalArea = document.getElementById("finalPrice");

    let = subTotal = 0;

    for(let i = 0; i < data.length; i++){

        let name = data[i].subName;
        let bread = data[i].subBread;
        let fixings = data[i].subFixings;
        let sauce = data[i].subSauce;
        let drink = data[i].subDrink;
        let price = data[i].subPrice;

        subTotal += price;

        items.innerHTML += `
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

        finalArea.innerHTML = "R" + subTotal + ".00"
    }
}

resetReturn = () => {
    localStorage.removeItem("sub");
    window.location.href = '../index.html'
}