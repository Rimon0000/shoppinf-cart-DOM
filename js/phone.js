// phone number function
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value ;
    const previousPhoneNumber = parseInt(phoneNumberString)
    
    let newPhoneNumber ;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

//price function
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneNumberElement = document.getElementById('phone-total');
    phoneNumberElement.innerText = phoneTotalPrice;
}

//plus
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true)

    updatePhoneTotalPrice(newPhoneNumber);
    //calculate sub total
    calculateSubTotal();
})

//minus
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false)

    updatePhoneTotalPrice(newPhoneNumber);
    //calculate sub total
   calculateSubTotal();
})