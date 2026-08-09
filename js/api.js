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

        button.addEventListener("click", () => {

            // Remove active class from all buttons
            document.querySelectorAll(".lesson-btn").forEach(btn => {
                btn.classList.remove("active");
            });

            // Add active class to clicked button
            button.classList.add("active");

            // Load words
            loadWords(lesson.level_no);

        });

        lessonContainer.appendChild(button);

    });

}

// ===========================
// Load Words by Lesson
// ===========================

function loadWords(levelNo) {

    const spinner = document.getElementById("spinner");
    const wordContainer = document.getElementById("word-container");

    // Show spinner
    spinner.classList.remove("hidden");

    // Clear previous words
    wordContainer.innerHTML = "";

    fetch(`https://openapi.programming-hero.com/api/level/${levelNo}`)
        .then(res => res.json())
        .then(data => {

            displayWords(data.data);

        })
        .catch(error => {

            console.error("Error loading words:", error);

            wordContainer.innerHTML = `
                <div class="bg-red-50 rounded-xl p-10 text-center">
                    <p class="text-red-500">
                        Failed to load vocabulary.
                    </p>
                </div>
            `;

            spinner.classList.add("hidden");

        });

}
// ===========================
// Display Words
// ===========================

// ===========================
// Display Vocabulary Cards
// ===========================

function displayWords(words) {

    const wordContainer = document.getElementById("word-container");

    // Hide spinner
    document.getElementById("spinner").classList.add("hidden");

    // Clear old cards
    wordContainer.innerHTML = "";

    // No Word Found
    if (!words || words.length === 0) {

        wordContainer.innerHTML = `
            <div class="bg-gray-100 rounded-2xl py-20 text-center">

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

    // Create cards
    words.forEach(word => {

        const meaning = word.meaning || "অর্থ পাওয়া যায়নি";
        const pronunciation = word.pronunciation || "উচ্চারণ পাওয়া যায়নি";

        const card = document.createElement("div");

        card.className =
            "bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-md transition";

        card.innerHTML = `

            <h2 class="text-2xl font-bold text-gray-800">
                ${word.word || "Unknown Word"}
            </h2>

            <p class="font-medium text-gray-600 mt-5">
                Meaning / Pronunciation
            </p>

            <p class="text-lg font-semibold mt-2">
                ${meaning} / ${pronunciation}
            </p>

            <div class="flex justify-between items-center mt-8">

                <!-- Details -->
                <button
                    onclick="loadWordDetails(${word.id})"
                    class="btn btn-sm btn-outline"
                    title="View details">

                    <i class="fa-solid fa-circle-info"></i>

                </button>

                <!-- Pronunciation -->
                <button
                    onclick="pronounceWord('${word.word || ""}')"
                    class="btn btn-sm btn-outline"
                    title="Pronounce word">

                    <i class="fa-solid fa-volume-high"></i>

                </button>

            </div>

        `;

        wordContainer.appendChild(card);

    });

}