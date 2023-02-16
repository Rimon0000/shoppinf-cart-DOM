//get phone total
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;

}

//setElementValueById
function setElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerHTML = value;
}

//calculate sub total
function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total')
    const currentCaseTotal = getTextElementValueById('case-total')

    //calculate sub total
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setElementValueById('sub-total', currentSubTotal);
   

    //calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setElementValueById('tax-total', taxAmount);

    //calculate total amount
    const totalAmount = currentSubTotal + taxAmount;
    setElementValueById('price-total', totalAmount);
    
}