let form_signin = document.getElementById("sign_form");

form_signin.onsubmit = (e) => {
  e.preventDefault();

  setText("#siEmail", "");
  setText("#siPassword", "");

  let email = form_signin.email.value;
  let password = form_signin.password.value;

  if (email.length < 4) {
    setText("#siEmail", "Email is not valid");
  }
  if (password.length < 6) {
    setText("#siPassword", "Password is not valid");
  }
  if (email && password) {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        if(user.emailVerified){
            open("./chat.html","_self")
        }else{
            sweetAlert("error", "Must verify your email")
        }
        // ...
      })
      .catch((error) => {
        var errorMessage = error.message;
        sweetAlert("error", errorMessage)
      });
  }
};

let setText = (query, content) => {
  document.querySelector(query).innerHTML = content;
};

let sweetAlert = (icon, content) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: content,
  });
};
