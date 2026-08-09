// ===============================
// Vocabulary Details Modal
// ===============================

function loadWordDetails(wordId) {

    const modal = document.getElementById("wordModal");

    modal.showModal();

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

    fetch(`https://openapi.programming-hero.com/api/word/${wordId}`)
        .then(res => res.json())
        .then(data => {

            const word = data.data;

            displayWordDetails(word);

        })
        .catch(error => {

            console.error(error);

            modal.innerHTML = `
                <div class="modal-box">

                    <h3 class="text-xl font-bold text-red-500">
                        Something went wrong!
                    </h3>

                    <form method="dialog">
                        <button class="btn mt-5">
                            Close
                        </button>
                    </form>

                </div>
            `;

        });

}


// ===============================
// Display Word Details
// ===============================

function displayWordDetails(word) {

    const modal = document.getElementById("wordModal");

    const synonyms = word.synonyms || [];

    modal.innerHTML = `

        <div class="modal-box">

            <h2 class="text-3xl font-bold">

                ${word.word}

                <span class="text-primary">
                    (${word.pronunciation || "N/A"})
                </span>

            </h2>

            <div class="mt-6">

                <h3 class="font-bold text-lg">
                    Meaning
                </h3>

                <p class="mt-2">
                    ${word.meaning || "No meaning found"}
                </p>

            </div>

            <div class="mt-6">

                <h3 class="font-bold text-lg">
                    Example
                </h3>

                <p class="mt-2">
                    ${word.sentence || "No example found"}
                </p>

            </div>

            <div class="mt-6">

                <h3 class="font-bold text-lg">
                    Synonyms
                </h3>

                <div class="flex flex-wrap gap-2 mt-3">

                    ${
                        synonyms.length
                            ? synonyms.map(item => `
                                <span class="badge badge-outline">
                                    ${item}
                                </span>
                            `).join("")
                            : `<span>No synonyms found</span>`
                    }

                </div>

            </div>

            <form method="dialog">

                <button class="btn btn-primary mt-8">

                    Complete Learning

                </button>

            </form>

        </div>

    `;

}