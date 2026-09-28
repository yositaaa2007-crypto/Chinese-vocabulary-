function showPage(page) {

    document.querySelectorAll("section")
        .forEach(section => {
            section.style.display = "none";
        });

    document.getElementById(page)
        .style.display = "block";
}


function displayVocabulary(list) {

    const container =
        document.getElementById("wordList");

    container.innerHTML = "";

    list.forEach(word => {

        container.innerHTML += `

        <div class="word-card">

            <div class="chinese">
                ${word.chinese}
            </div>

            <div class="pinyin">
                ${word.pinyin}
            </div>

            <p>
                <strong>คำแปล:</strong>
                ${word.thai}
            </p>

            <p>
                <strong>หมวด:</strong>
                ${word.category}
            </p>

            <div class="example">

                ${word.exampleChinese}

                <br>

                ${word.examplePinyin}

                <br>

                ${word.exampleThai}

            </div>

            <button
                class="sound"
                onclick="speak('${word.chinese}')">

                🔊 ฟังเสียง

            </button>

        </div>

        `;
    });
}


function speak(text) {

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "zh-CN";

    speech.rate = 0.8;

    speechSynthesis.speak(speech);
}


document
    .getElementById("search")
    .addEventListener("input", function () {

        const keyword =
            this.value.toLowerCase();

        const result =
            vocabulary.filter(word =>

                word.chinese
                    .toLowerCase()
                    .includes(keyword)

                ||

                word.pinyin
                    .toLowerCase()
                    .includes(keyword)

                ||

                word.thai
                    .toLowerCase()
                    .includes(keyword)

            );

        displayVocabulary(result);

    });


displayVocabulary(vocabulary);

showPage("home");
