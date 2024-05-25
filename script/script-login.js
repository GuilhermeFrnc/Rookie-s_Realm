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

document.getElementById('form-sing-in').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var email = document.getElementById('singin_email').value;
    var password = document.getElementById('singin_password').value;

    var emailField = document.getElementById('singin_email');
    var passwordField = document.getElementById('singin_password');

    var emailErro = document.getElementById('emailIn_erro');
    var passwordErro = document.getElementById('passIn_erro');

    var isValid = true;

    if (email.trim() === "") {
        emailErro.style.display = 'block';
        emailField.style.border = "solid 1px #ce8714";
        emailField.style.background = '#ce87144f';
        isValid = false;
    } else {
        emailErro.style.display = 'none';
        emailField.style.border = "none";
        emailField.style.background = 'rgba(107, 107, 107, 0.382)';
    }

    if (password.trim() === "") {
        passwordErro.style.display = 'block';
        passwordField.style.border = "solid 1px #ce8714";
        passwordField.style.background = '#ce87144f';
        isValid = false;
    } else {
        passwordErro.style.display = 'none';
        passwordField.style.border = "none";
        passwordField.style.background = 'rgba(107, 107, 107, 0.382)';
    }

    if (isValid) {
        window.location.href = "perfil.html";
    }
});

document.getElementById('form-sing-up').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('singup_name').value;
    var email = document.getElementById('singup_email').value;
    var password = document.getElementById('singup_pass').value;

    var nameField = document.getElementById('singup_name');
    var emailField = document.getElementById('singup_email');
    var passwordField = document.getElementById('singup_pass');

    var nameErro = document.getElementById('nameUp_erro');
    var emailErro = document.getElementById('emailUp_erro');
    var passwordErro = document.getElementById('passUp_erro');

    var isValid = true;

    if (name.trim() === "") {
        nameErro.style.display = 'block';
        nameField.style.border = "solid 1px #ce8714";
        nameField.style.background = '#ce87144f';
        isValid = false;
    } else {
        nameErro.style.display = 'none';
        nameField.style.border = "none";
        nameField.style.background = 'rgba(107, 107, 107, 0.382)';
    }

    if (email.trim() === "") {
        emailErro.style.display = 'block';
        emailField.style.border = "solid 1px #ce8714";
        emailField.style.background = '#ce87144f';
        isValid = false;
    } else {
        emailErro.style.display = 'none';
        emailField.style.border = "none";
        emailField.style.background = 'rgba(107, 107, 107, 0.382)';
    }

    if (password.trim() === "") {
        passwordErro.style.display = 'block';
        passwordField.style.border = "solid 1px #ce8714";
        passwordField.style.background = '#ce87144f';
        isValid = false;
    } else {
        passwordErro.style.display = 'none';
        passwordField.style.border = "none";
        passwordField.style.background = 'rgba(107, 107, 107, 0.382)';
    }

    if (isValid) {
        localStorage.setItem("name", name)
        window.location.href = "perfil.html";
    }
});