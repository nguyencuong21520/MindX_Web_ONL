let form_signup = document.getElementById("signup_form");
form_signup.onsubmit = (e) => {
  e.preventDefault();

  setText("#suEmail", "");
  setText("#suPassword", "");
  setText("#sucfPassword", "");

  let email = form_signup.email.value;
  let password = form_signup.password.value;
  let cfpassword = form_signup.cfpassword.value;

  if (!email) {
    setText("#suEmail", "email is required");
  }

  if (!password) {
    setText("#suPassword", "password is required");
  } else if (password.length < 6) {
    setText("#suPassword", "password length must be at least 6 character");
  }

  if (!cfpassword) {
    setText("#sucfPassword", "confirm password is required");
  } else if (cfpassword != password) {
    setText("#sucfPassword", "confirm password not matched");
  } else {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        firebase.auth().currentUser.sendEmailVerification();
        sweetAlert("success", "Successfully, please check your email");
        // ...
      })
      .catch((error) => {
        var errorMessage = error.message;
        sweetAlert("error", errorMessage);
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
