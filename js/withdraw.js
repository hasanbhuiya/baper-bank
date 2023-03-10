// step 1: 
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawwField = document.getElementById('withdraw-field');
    const newwithdrawAmountString = withdrawwField.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountString);

    const previousTotalWithdrawAmount = document.getElementById('total-withdraw');
    const previousWithdrawAmountString = previousTotalWithdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    const currentTotalWithdrawAmount = previousWithdrawAmount + newwithdrawAmount;
    previousTotalWithdrawAmount.innerText = currentTotalWithdrawAmount;

    const balanceTotalElement = document.getElementById('balnace-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawwField.value = '';

})