// ==========================
// Login System
// ==========================

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", login);

function login() {

    const username = document
        .getElementById("username")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value
        .trim();

    if (username === "") {

        Swal.fire({
    icon: "warning",
    title: "Please enter your name"
                });

        return;
    }

    if (password !== "123456") {

        Swal.fire({
        icon: "error",
        title: "Wrong password!"
    });

        return;
    }

    // Hide Hero
    document.getElementById("hero").classList.add("hidden");

    // Show Navbar
    document.getElementById("navbar").classList.remove("hidden");

    // Show Learn
    document.getElementById("learn").classList.remove("hidden");

    // Show FAQ
    document.getElementById("faq").classList.remove("hidden");

    // Scroll to Learn
    document.getElementById("learn").scrollIntoView({
        behavior: "smooth"
    });

    Swal.fire({
    icon: "success",
    title: `Welcome, ${username}!`,
    timer: 1500,
    showConfirmButton: false
});

}

// ==========================
// Logout
// ==========================

document
    .getElementById("logout-btn")
    .addEventListener("click", logout);

function logout() {

    document
        .getElementById("hero")
        .classList.remove("hidden");

    document
        .getElementById("navbar")
        .classList.add("hidden");

    document
        .getElementById("learn")
        .classList.add("hidden");

    document
        .getElementById("faq")
        .classList.add("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}