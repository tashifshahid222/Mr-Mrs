// Hide the loader and show the content after 2.5 seconds
// setTimeout(function () {
//   document.getElementById('loader').classList.add('hidden');
//   document.getElementById('content').classList.add('visible');
// }, 2500); // 2500 milliseconds = 2.5 seconds

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.addEventListener("DOMContentLoaded", function () {
  function validateSignup() {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("usernameup").value;
    let email = document.getElementById("emailup").value;
    let password = document.getElementById("passwordup").value;

    if (username === "" || email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
        confirmButtonColor: "#fd5d5d",
      });
    } else {
      // Store user details in localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      Swal.fire({
        icon: "success",
        title: "Registered Successfully!",
        text: "Now log in using the same credentials.",
        confirmButtonColor: "#fd5d5d",
      }).then(() => {
        window.location.href = "./index.html"; // Redirect to home page
      });
    }
  }

  function validateSignin() {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
        confirmButtonColor: "#fd5d5d",
      });
    } else if (username === storedUsername && password === storedPassword) {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome back!",
        confirmButtonColor: "#fd5d5d",
      }).then(() => {
        window.location.href = "./index.html"; // Redirect to home page
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Incorrect username or password!",
        confirmButtonColor: "#fd5d5d",
      });
    }
  }

  document.getElementById("signupbtn").addEventListener("click", validateSignup);
  document.querySelector(".lg").addEventListener("click", validateSignin);
});
