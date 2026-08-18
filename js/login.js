// ===============================
// Login System
// ===============================

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", login);


// ===============================
// Login Function
// ===============================

function login() {

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();


    // -------------------------------
    // Empty Name
    // -------------------------------

    if (username === "") {

        Swal.fire({
            icon: "warning",
            title: "Please enter your name",
            text: "Your name is required to continue."
        });

        usernameInput.focus();

        return;
    }


    // -------------------------------
    // Wrong Password
    // -------------------------------

    if (password !== "123456") {

        Swal.fire({
            icon: "error",
            title: "Wrong password!",
            text: "Please enter the correct login code."
        });

        passwordInput.focus();

        return;
    }


    // -------------------------------
    // Successful Login
    // -------------------------------

    document.getElementById("hero").classList.add("hidden");

    document.getElementById("navbar").classList.remove("hidden");

    document.getElementById("learn").classList.remove("hidden");

    document.getElementById("faq").classList.remove("hidden");


    

    // Success message

    Swal.fire({
        icon: "success",
        title: `Welcome, ${username}!`,
        text: "Login successful.",
        timer: 1500,
        showConfirmButton: false
    });

}


// ===============================
// Logout
// ===============================

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", logout);


function logout() {

    // Hide logged-in sections

    document.getElementById("navbar").classList.add("hidden");

    document.getElementById("learn").classList.add("hidden");

    document.getElementById("faq").classList.add("hidden");


    // Show Hero again

    document.getElementById("hero").classList.remove("hidden");


    // Clear login fields

    document.getElementById("username").value = "";

    document.getElementById("password").value = "";


    // Go to top

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    // Logout message

    Swal.fire({
        icon: "success",
        title: "Logged out successfully",
        timer: 1200,
        showConfirmButton: false
    });

}