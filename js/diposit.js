//step 1: add event listner to the deposit button 
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step 2: get the deposit amount from the deposit input field
    //for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)

    //step 3: get the current deposit total 
    //for non input (element other than input, textarea )use innerText get the text 
    const depositTotalElement = document.getElementById('deposit-total') ;
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step 4: add numbers to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step 5: balance current total 
    const balaceTotalElement = document.getElementById('balace-total');
    const previousBalanceTotalString = balaceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    //step 6: calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balaceTotalElement.innerText = currentBalanceTotal;

    // step 7: clear tehe deposit field
    depositField.value = ' ';
})