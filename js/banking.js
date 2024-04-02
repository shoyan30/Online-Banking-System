function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear the deposit input field
    inputField.value = '';

    return amountValue;
}
function updateField(totalFieldId, newAmount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText =  previousTotal + newAmount;
   
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(newDepositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
   
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + newDepositAmount;
    }else{
        balanceTotal.innerText = previousBalanceTotal - newDepositAmount;
    }
}



// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    
    const newDepositAmount =  getInputValue('deposit-input');

    if(newDepositAmount>0){
        updateField('deposit-total', newDepositAmount );
    updateBalance(newDepositAmount,true);
    }
    
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    
    const newWithdrawAmount = getInputValue('withdraw-input');
   
    const currentBalance = getCurrentBalance();

    if(newWithdrawAmount>0 && newWithdrawAmount<currentBalance){
        updateField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
   

   
})