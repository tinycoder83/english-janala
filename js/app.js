// ===============================
// Navigation
// ===============================

const faqBtn = document.getElementById("faq-btn");

const learnBtn = document.getElementById("learn-btn");


// ===============================
// FAQ Button
// ===============================

faqBtn.addEventListener("click", () => {

    document.getElementById("faq").scrollIntoView({
        behavior: "smooth"
    });

});


// ===============================
// Learn Button
// ===============================

learnBtn.addEventListener("click", () => {

    document.getElementById("learn").scrollIntoView({
        behavior: "smooth"
    });

});