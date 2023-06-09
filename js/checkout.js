displayCheck = () => {
    let data = JSON.parse(localStorage.getItem('order'));
    let items = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById('totalOut');

    let = checkTotal = 0;

    for(let i = 0; i < data.length; i++){

        let name = subData[i].subName;
        let bread = subData[i].subBread;
        let toppings = subData[i].subToppings;
        let sauce = subData[i].subSauce;
        let price = subData[i].subPrice;

        checkTotal += price;

        items.innerHTML += `
            <div class="orderLine">
                <p><strong>Sub:</strong> ${name}</p>
                <p><strong>Bread:</strong> ${bread}</p>
                <p><strong>Toppings:</strong> ${toppings.join(', ')}</p>
                <p><strong>Sauce:</strong> ${sauce}</p>
                <p><strong>Price:</strong> ${price}.00</p>
            </div>`

        totalArea.innerHTML = "R" + checkTotal + ".00"
    }
}

resetReturn = () => {
    localStorage.removeItem('order');
    window.location.href = '../index.html'
}