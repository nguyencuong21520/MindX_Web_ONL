let form_signup = document.getElementById("signup_form")
form_signup.onsubmit = (e)=>{
    e.preventDefault();

    let email = form_signup.email.value;
    let password = form_signup.password.value;
    let cfpassword = form_signup.cfpassword.value;
}