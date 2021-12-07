function createAccount(){
    var name     = document.getElementById('userName');
    var email    = document.getElementById('userEmail');
    var password = document.getElementById('userPassword');
    var regex    =/^([a-zA-Z0-9\-\_\.]{3,16})+\@+([a-zA-Z]{4,7})+\.+([a-zA-Z]{2,3})$/;
    var error    = false;
    if(name.value.length < 4){
        document.getElementById('name-error').innerHTML = "Please enter name";
        document.getElementById('name-error').style.color = "red";
        error = true;
    }
    if(name.value.match(/[^a-z ]/gi)){
        document.getElementById('name-error').innerHTML = "Invalid input";
        document.getElementById('name-error').style.color = "red";
        error = true;
    }
    if(name.value.length >= 4){
        document.getElementById('name-error').innerHTML = "";
    }
    if(email.value.length < 4){
        document.getElementById('email-error').innerHTML = "Please enter email";
        document.getElementById('email-error').style.color = "red";
        error = true;
    }
    if(password.value.length < 4){
        document.getElementById('pass-error').innerHTML = "Please enter password";
        document.getElementById('pass-error').style.color = "red";
        error = true;
    }
    if(regex.test(email.value) == false && email.value.length >= 4){
        document.getElementById('email-error').innerHTML = "Please enter correct email";
        document.getElementById('email-error').style.color = "red";
        error = true;
    }
    if(email.value.length >=4 && regex.test(email.value) == true){
        document.getElementById('email-error').innerHTML = "";
    }
    if(password.value.length >= 4){
        document.getElementById('pass-error').innerHTML = "";
    }
    if(!error){
        document.getElementById('signup-alert').classList.remove('d-none');
        name.value = "";
        email.value = "";
        password.value = "";
        setTimeout(function(){
            document.getElementById('signup-alert').classList.add('d-none');
        },4000)
    }
}

function login(){
    var email    = document.getElementById('email');
    var password = document.getElementById('password');
    var regex    =/^([a-zA-Z0-9\-\_\.]{3,16})+\@+([a-zA-Z]{4,7})+\.+([a-zA-Z]{2,3})$/;
    var error    = false;
    if(email.value.length < 4){
        document.getElementById('error-email').innerHTML = "Please enter email";
        document.getElementById('error-email').style.color = "red";
        error = true;
    }
    if(password.value.length < 4){
        document.getElementById('error-pass').innerHTML = "Please enter password";
        document.getElementById('error-pass').style.color = "red";
        error = true;
    }
    if(regex.test(email.value) == false && email.value.length >= 4){
        document.getElementById('error-email').innerHTML = "Please enter correct email";
        document.getElementById('error-email').style.color = "red";
        error = true;
    }
    if(email.value.length >=4 && regex.test(email.value) == true){
        document.getElementById('error-email').innerHTML = "";
    }
    if(password.value.length >= 4){
        document.getElementById('error-pass').innerHTML = "";
    }
    if(!error){
        document.getElementById('login-alert').classList.remove('d-none');
        email.value = "";
        password.value = "";
        setTimeout(function(){
            document.getElementById('login-alert').classList.add('d-none');
        },4000)
    }
}

function showPass(input){
    var input1 = input.previousElementSibling.previousElementSibling;
    if(input1.type == "text"){
        input1.type = "password";
    }else{
        input1.type = "text";
    }
}