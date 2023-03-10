//step 1: add click event handler with the sumbit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step-2 get the email address inside the email input field
    //alws remember to use value to ge the from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //step-3: get the password 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // DANGER: don't veryfy email password on the client side 
    //step-4 : verify email and password 
    if(email === 'hasanbhuiyan1998@gmail.com' && password === '450252'){
        location.href ='bank.html';
    }
    else{
        alert('হ্যাপ! সয়তান কোনহানের')
    }


})

