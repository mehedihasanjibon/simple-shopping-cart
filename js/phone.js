function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberString = phoneNumberField.value;
    const preViousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if(isIncrease){
        newPhoneNumber = preViousPhoneNumber + 1; 
    }
    else{
        newPhoneNumber = preViousPhoneNumber - 1; 
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
};

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById("phone-total");
    phoneTotalElement.innerText = phoneTotalPrice;
};

document.getElementById("btn-phone-plus").addEventListener("click", function(){
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);

    /* const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberString = phoneNumberField.value;
    const preViousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = preViousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;

    calculate total

    const currentPhoneTotal = getTextElementValueById("phone-total");
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);

    const currentPhoneTotal = getTextElementValueById("phone-total");
    const currentCaseTotal = getTextElementValueById("case-total");
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById("sub-total");
    subTotalElement.innerHTML = currentSubTotal; */

    calculateSubTotal();
});

document.getElementById("btn-phone-minus").addEventListener("click", function(){
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
});