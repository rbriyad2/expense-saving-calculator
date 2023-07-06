function inputVale(InputId) {
    const inputValue = document.getElementById(InputId);
    const inputValuestring = inputValue.value;
    const inputValueAmount = parseInt(inputValuestring);
    return inputValueAmount;
}

function setTextElement(elementId, value){
    const textElementId= document.getElementById(elementId);
    textElementId.innerText = value;
}

function elementText(elementTextId){
    const element = document.getElementById(elementTextId);
    const baelementString = element.innerText;
    const elementNumberValue = parseInt(baelementString);
    return elementNumberValue;
}


document.getElementById('calculateBTN').addEventListener('click', function () {
    const totalIncome = inputVale('totalIncome');
    const foodCost = inputVale('foodCost');
    const rentCost = inputVale('rentCost');
    const clothingCost = inputVale('clothingCost');
    const totalExpenceAmount = foodCost + rentCost + clothingCost;
    const afterExpenceBalance = totalIncome - totalExpenceAmount

    setTextElement('totalExpencesAmount', totalExpenceAmount);
    setTextElement('afterExpenceBalance', afterExpenceBalance);
});

document.getElementById('saveBTN').addEventListener('click', function(){

    const balanceAmount = elementText('afterExpenceBalance');
    const savingparsentage = inputVale('savingAmountpersent');
    const parcentageAmount = (balanceAmount / 100)*savingparsentage;
    setTextElement('saveAmount', parcentageAmount);

    const remainingBalance = balanceAmount - parcentageAmount;

    setTextElement('remainingBalance', remainingBalance);

});