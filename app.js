const signInBtn = document.querySelector("#sign-in-btn"),
    signUpBtn = document.querySelector("#sign-up-btn"),
    container = document.querySelector(".container");

document.addEventListener("click", e => {
    if (e.target === signInBtn) container.classList.remove("sign-up-mode");

    if (e.target === signUpBtn) container.classList.add("sign-up-mode");
});