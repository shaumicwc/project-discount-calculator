
document.getElementById('apply-btn').addEventListener('click',function(){
    const inputPrice = document.getElementById('price-input');
    const inputPriceValue = parseFloat(inputPrice.value);
    const cupon = document.getElementById('cupon');
    const cuponValue = cupon.value;

    if(cuponValue === 'DISCOUNT30'){
        const calculation =  (30/100) * inputPriceValue;
        const calculationValue = inputPriceValue - calculation;
        const payAmmount = document.getElementById('pay-output');
        payAmmount.innerText = calculationValue;
    } else {
        const payAmmount = document.getElementById('pay-output');
        payAmmount.innerText = inputPriceValue;
    }
})