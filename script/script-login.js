function mudarForm(formId) {
    var formSingUp = document.getElementById('form-sing-up');
    var formSingIn = document.getElementById('form-sing-in');

    if (formId === 'form-sing-in') {
        formSingUp.style.display = 'none';
        formSingIn.style.display = 'block';
    } else if (formId === 'form-sing-up') {
        formSingIn.style.display = 'none';
        formSingUp.style.display = 'block';
    }
}

function validateSignInForm() {
    var email = document.getElementById('singin_email').value;
    var password = document.getElementById('singin_password').value;

    var emailField = document.getElementById('singin_email');
    var passwordField = document.getElementById('singin_password');

    var emailerro = document.getElementById('emailIn_erro');
    var passworderro = document.getElementById('passIn_erro');

    var isValid = true;

    if(email.trim() == ""){
        emailerro.style.display='block';
        emailField.style.border="solid 1px #ce8714";
        emailField.style.background='#ce87144f';
        isValid= false;
    }else{
        emailerro.style.display='none';
        emailField.style.border="none";
        emailField.style.background='rgba(107, 107, 107, 0.382)';
        isValid= true;
    }

    if(password.trim() == ""){
        passworderro.style.display='block';
        passwordField.style.border="solid 1px #ce8714";
        passwordField.style.background='#ce87144f';
        isValid= false;
    }
    else{
        passworderro.style.display='none';
        passwordField.style.border="none";
        passwordField.style.background='rgba(107, 107, 107, 0.382)';
        isValid= true;
    }
    return isValid;
}

function validateSignUpForm() {
    var name = document.getElementById('singup_name').value;
    var email = document.getElementById('singup_email').value;
    var password = document.getElementById('singup_pass').value;

    var nameField = document.getElementById('singup_name');
    var emailField = document.getElementById('singup_email');
    var passwordField = document.getElementById('singup_pass');

    var nameerro = document.getElementById('nameUp_erro');
    var emailerro = document.getElementById('emailUp_erro');
    var passworderro = document.getElementById('passUp_erro');

    var isValid = true;

    if(name.trim() == ""){
        nameerro.style.display='block';
        nameField.style.border="solid 1px #ce8714";
        nameField.style.background='#ce87144f';
        isValid= false;
    }else{
        nameerro.style.display='none';
        nameField.style.border="none";
        nameField.style.background='rgba(107, 107, 107, 0.382)';
        isValid= true;
    }

    if(email.trim() == ""){
        emailerro.style.display='block';
        emailField.style.border="solid 1px #ce8714";
        emailField.style.background='#ce87144f';
        isValid= false;
    }else{
        emailerro.style.display='none';
        emailField.style.border="none";
        emailField.style.background='rgba(107, 107, 107, 0.382)';
        isValid= true;
    }

    if(password.trim() == ""){
        passworderro.style.display='block';
        passwordField.style.border="solid 1px #ce8714";
        passwordField.style.background='#ce87144f';
        isValid= false;
    }else{
        passworderro.style.display='none';
        passwordField.style.border="none";
        passwordField.style.background='rgba(107, 107, 107, 0.382)';
        isValid= true;
    }
    return isValid;
}