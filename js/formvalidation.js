document.addEventListener(onclick, validateDetails);
document.addEventListener(onblur, verifyName, verifyEmail, verifyPhone, verifyMessage);

function verifyName(){
    var firstName = document.getElementById('firstName').value;
    var nameValidationDetails = document.getElementById('fnameValidation');
    var invalidRegexForTextContent = /^[ ]+$/;

    if (firstName.length < 3 || firstName.match(invalidRegexForTextContent)){
        nameValidationDetails.textContent = 'Name too short!';
        return false;
    }else{
        nameValidationDetails.textContent = '';
        return true;
    }
}

function verifyEmail(){
    var email = document.getElementById('eMailId').value;
    var emailValidationDetails = document.getElementById('emailValidation');
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)){
        emailValidationDetails.textContent = '';
        return true;
    }else{
        emailValidationDetails.textContent = 'The email is incorrect!';
        return false;
    }
}

function verifyPhone(){
    var phoneNumber = document.getElementById('phoneNumber').value;
    var phoneValidationDetails = document.getElementById('phonenumberValidation');
    
    if(phoneNumber.length <= 9  || phoneNumber.length == null){
        phoneValidationDetails.textContent = 'Phone number incorrect! ';
        return false;
    }else{
        phoneValidationDetails.textContent = '';
        return true;
    }
}

function verifyMessage(){
    var message = document.getElementById('message').value;
    var messageValidationDetails = document.getElementById('messageValidation');
    var invalidRegexForTextContent = /^[ ]+$/;
    
    if(message.length <= 9 || message.length == null || message.match(invalidRegexForTextContent)){
        messageValidationDetails.textContent = 'Message must be atleast 10 characters';
        return false;
    }else{
        messageValidationDetails.textContent = '';
        return true;
    }
}

function validateDetails(){
    if (verifyName() == true && verifyEmail() == true && verifyPhone() == true && verifyMessage() == true){
        alert("Your form has been submitted!");
    }else{
        alert("Your form couldn't be submitted! Your details are incorrect");
    }
}