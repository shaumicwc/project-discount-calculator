document.getElementById('apply-btn').addEventListener('click',function(){
    const inputPrice = document.getElementById('price-input');
    const inputPriceValue = parseFloat(inputPrice.value); 
    const calculation =  (30/100) * inputPriceValue;
    const calculationValue = inputPriceValue - calculation;
    const payAmmount = document.getElementById('pay-output');
    payAmmount.innerText = calculationValue;
})