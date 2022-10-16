const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");
const submit = document.querySelector(".signup");

submit.addEventListener('click' , function (event) {
    if (password != confirm_password)
    {
        event.preventDefault();
        password.classList.add("error");
        confirm_password.classList.add("error");

    }

 });