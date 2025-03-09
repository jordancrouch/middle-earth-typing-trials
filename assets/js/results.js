// Results Class.
export class Results {
  constructor(data) {
    this.results = [];
    this.loadResultsHTML(data);
  }

  stringToHTML(text) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    return doc.body;
  }

  loadResultsHTML(data) {
    fetch("results.html")
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw response;
      })
      .then((text) => {
        let html = this.stringToHTML(text);
        let newHeader = html.querySelector("#header");
        let newMain = html.querySelector("#main");
        let currentHeader = document.getElementById("header");
        let currentMain = document.getElementById("main");
        currentHeader.replaceWith(newHeader);
        currentMain.replaceWith(newMain);
      })
      .then(() => {
        this.processResults(data);
      });
  }

  processResults(data) {
    console.log(data);

    let wpm = document.getElementById("wpm");
    let accuracy = document.getElementById("accuracy");
    let words = document.getElementById("words");
    let characters = document.getElementById("textCharacters");
    let errors = document.getElementById("errors");
    let raw = document.getElementById("raw");
    let time = document.getElementById("time");
    let totalCorrectWordCharacters = 0;

    let testTimer = data.testTimer;
    let removedWords = data.removedWords;
    let remainingWords = data.textContainer.childNodes;

    removedWords.map((word) => {
      // Iterate through correct words.
      if (!word.classList.contains("error")) {
        Array.from(word.childNodes).forEach((char) => {
          totalCorrectWordCharacters++;
        });

        // Additional increment added for space character.
        totalCorrectWordCharacters++;
      }
    });

    Array.from(remainingWords).forEach((word) => {
      // Iterate over correct remaining words.
      if (!word.classList.contains("error")) {
        Array.from(word.childNodes).forEach((char) => {
          if (char.classList.contains("correct")) {
            totalCorrectWordCharacters++;
          }
        });

        // If word has been fully typed correctly, additional
        // increment added for space character.
        if (word.classList.contains("typed")) {
          totalCorrectWordCharacters++;
        }
      }
    });

    // Calculate WPM
    // Total correct characters divided by 5, divided by test time,
    // multiplied by 60 to standardise to words per minute.
    wpm.textContent = (totalCorrectWordCharacters / 5 / testTimer) * 60;
  }
}
