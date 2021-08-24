let form_signin = document.getElementById("sign_form")

form_signin.onsubmit = (e)=>{
    e.preventDefault();

    let email = form_signin.email.value
    let password = form_signin.password.value

    console.log(email);
    console.log(password);
}

// đặt id cho form
// đặt name cho các thẻ input
// đặt type của button là submit

// query vào form
// form khi mà submit đừng quên preventDefault()

