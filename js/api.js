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

// ===========================
// Load Words by Lesson
// ===========================

function loadWords(levelNo) {

    // Show Spinner
    document.getElementById("spinner").classList.remove("hidden");

    fetch(`https://openapi.programming-hero.com/api/level/${levelNo}`)
        .then(res => res.json())
        .then(data => {

            displayWords(data.data);

        });

}
// ===========================
// Display Words
// ===========================

function displayWords(words) {

    const wordContainer = document.getElementById("word-container");

    wordContainer.innerHTML = "";

    // Hide Spinner
    document.getElementById("spinner").classList.add("hidden");

    // No words found
    if (words.length === 0) {

        wordContainer.innerHTML = `
        
        <div class="bg-gray-100 rounded-xl py-20 text-center">

            <p class="text-gray-500">
                এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
            </p>

            <h2 class="text-3xl font-bold mt-4">
                No Word Found
            </h2>

        </div>
        
        `;

        return;
    }

    words.forEach(word => {

        const card = document.createElement("div");

        card.className =
            "bg-white rounded-xl shadow p-6";

        card.innerHTML = `

            <h2 class="text-2xl font-bold">

                ${word.word}

            </h2>

            <p class="mt-2">

                Meaning / Pronunciation

            </p>

            <p class="mt-4 text-xl font-semibold">

                "${word.meaning ?? "অর্থ নেই"} / ${word.pronunciation}"

            </p>

            <div class="flex justify-between mt-8">

                <button
                    onclick="loadWordDetails(${word.id})"
                    class="btn btn-sm">

                    <i class="fa-solid fa-circle-info"></i>

                </button>
           
                <button
                    onclick="pronounceWord('${word.word}')"
                    class="btn btn-sm">

                    <i class="fa-solid fa-volume-high"></i>

                </button>

            </div>

        `;

        wordContainer.appendChild(card);

    });

}