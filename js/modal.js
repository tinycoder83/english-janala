// ========================================
// Vocabulary Details Modal
// ========================================

function loadWordDetails(wordId) {

    const modal = document.getElementById("wordModal");

    // Show loading state
    modal.innerHTML = `
        <div class="modal-box">

            <div class="flex justify-center py-10">
                <span class="loading loading-spinner loading-lg"></span>
            </div>

        </div>

        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    `;

    modal.showModal();


    fetch(`https://openapi.programming-hero.com/api/word/${wordId}`)
        .then(response => response.json())
        .then(data => {

            displayWordDetails(data.data);

        })
        .catch(error => {

            console.error("Error loading word details:", error);

            modal.innerHTML = `
                <div class="modal-box">

                    <h3 class="text-2xl font-bold text-red-500">
                        Something went wrong!
                    </h3>

                    <p class="mt-3 text-gray-600">
                        We could not load the word details.
                    </p>

                    <form method="dialog">
                        <button class="btn btn-primary mt-6">
                            Close
                        </button>
                    </form>

                </div>
            `;

        });

}


// ========================================
// Display Word Details
// ========================================

function displayWordDetails(word) {

    const modal = document.getElementById("wordModal");

    // Handle missing values
    const wordName = word?.word || "Unknown Word";
    const pronunciation = word?.pronunciation || "Not available";
    const meaning = word?.meaning || "Meaning not available";
    const sentence = word?.sentence || "Example sentence not available";

    const synonyms = Array.isArray(word?.synonyms)
        ? word.synonyms
        : [];


    modal.innerHTML = `

        <div class="modal-box max-w-2xl">

            <!-- Word -->

            <h2 class="text-3xl font-bold text-gray-800">

                ${wordName}

            </h2>


            <!-- Pronunciation -->

            <button
    onclick="pronounceWord('${wordName}')"
    class="text-lg text-primary font-medium mt-2 hover:underline">

    <i class="fa-solid fa-volume-high mr-2"></i>

    ${pronunciation}

</button>


            <!-- Meaning -->

            <div class="mt-7">

                <h3 class="text-xl font-bold">

                    Meaning

                </h3>

                <p class="text-gray-600 mt-2">

                    ${meaning}

                </p>

            </div>


            <!-- Example -->

            <div class="mt-6">

                <h3 class="text-xl font-bold">

                    Example

                </h3>

                <p class="text-gray-600 mt-2 italic">

                    ${sentence}

                </p>

            </div>


            <!-- Synonyms -->

            <div class="mt-6">

                <h3 class="text-xl font-bold">

                    Synonyms

                </h3>

                <div class="flex flex-wrap gap-2 mt-3">

                    ${
                        synonyms.length > 0

                        ? synonyms.map(synonym => `
                            <span class="badge badge-outline py-3 px-4">
                                ${synonym}
                            </span>
                        `).join("")

                        : `
                            <span class="text-gray-500">
                                No synonyms available
                            </span>
                        `
                    }

                </div>

            </div>


            <!-- Close Button -->

            <form method="dialog">

                <button class="btn btn-primary mt-8">

                    Complete Learning

                </button>

            </form>

        </div>


        <!-- Close when clicking outside -->

        <form method="dialog" class="modal-backdrop">

            <button>close</button>

        </form>

    `;

}