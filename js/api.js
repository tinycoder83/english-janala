// ===========================
// Load All Lessons
// ===========================

function loadLessons() {

    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => displayLessons(data.data));

}

loadLessons();


// ===========================
// Display Lesson Buttons
// ===========================

function displayLessons(lessons) {

    const lessonContainer = document.getElementById("lesson-container");

    lessonContainer.innerHTML = "";

    lessons.forEach(lesson => {

        const button = document.createElement("button");

        button.innerHTML = `
        
            <i class="fa-solid fa-book-open"></i>

            Lesson-${lesson.level_no}
        
        `;

        button.className =
            "lesson-btn btn btn-outline btn-primary";

        button.onclick = function () {

            loadWords(lesson.level_no);

        };

        lessonContainer.appendChild(button);

    });

}