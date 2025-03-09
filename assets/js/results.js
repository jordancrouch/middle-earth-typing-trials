// Results Class.
export class Results {
  constructor(data) {
    this.results = [];
    this.loadResultsHTML(data);
  }

  // Convert string to HTML.
  stringToHTML(text) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    return doc.body;
  }

  // Load the results html file and replace the current header and main elements.
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

  // Process the results data.
  processResults(data) {
    let wpm = document.getElementById("wpm");
    let accuracy = document.getElementById("accuracy");
    let words = document.getElementById("words");
    let characters = document.getElementById("textCharacters");
    let errors = document.getElementById("errors");
    let raw = document.getElementById("raw");
    let time = document.getElementById("time");
    let totalCorrectWordCharacters = 0;
    let totalWordCharacters = 0;

    let testTimer = data.testTimer;
    let removedWords = data.removedWords;
    let remainingWords = data.textContainer.childNodes;

    // Iterate over the removed (completed) words.
    removedWords.map((word) => {
      // Iterate over the characters in the word.
      Array.from(word.childNodes).forEach(() => {
        // Check if word has been typed correctly. If so, increment correct word characters.
        if (!word.classList.contains("error")) {
          totalCorrectWordCharacters++;
        }
        // Increment total word characters for raw WPM calculation.
        totalWordCharacters++;
      });

      // Additional increment added for space character per (completed) word.
      totalCorrectWordCharacters++;
      totalWordCharacters++;
    });

    // Iterate over the remaining words.
    Array.from(remainingWords).forEach((word) => {
      // Iterate over the characters in the word.
      Array.from(word.childNodes).forEach((char) => {
        // Check if the word has either been typed, or is the active word.
        if (
          word.classList.contains("typed") ||
          word.classList.contains("active")
        ) {
          // If the word doesn't have an error, add the correct characters to the total.
          if (!word.classList.contains("error")) {
            if (char.classList.contains("correct")) {
              totalCorrectWordCharacters++;
              totalWordCharacters++;
              // Increment total word characters for raw WPM calculation.
            } else if (char.classList.contains("incorrect")) {
              totalWordCharacters++;
            }
            // Increment total word characters for incorrect words/characters
            // for raw WPM calculation.
          } else if (word.classList.contains("error")) {
            if (
              char.classList.contains("correct") ||
              char.classList.contains("incorrect")
            ) {
              totalWordCharacters++;
            }
          }
        }
      });

      // Additional increment added for space character per completed word.
      if (word.classList.contains("typed")) {
        totalCorrectWordCharacters++;
        totalWordCharacters++;
      }
    });

    // Display the results.
    wpm.textContent = this.calculateWPM(totalCorrectWordCharacters, testTimer);
    accuracy.textContent =
      this.calculateAccuracy(data.correctInputs, data.totalInputs) + "%";
    // Calculate the total words by dividing the total correct word characters by 5.
    words.textContent = Math.round(totalCorrectWordCharacters / 5);
    characters.textContent = totalCorrectWordCharacters;
    // Calculate the total errors by subtracting the total correct inputs from the total inputs.
    errors.textContent = data.totalInputs - data.correctInputs;
    time.textContent = testTimer + "s";
    raw.textContent = this.calculateWPM(totalWordCharacters, testTimer);
  }

  // Calculate WPM
  // Total characters divided by 5, divided by test time, multiplied by 60
  // to standardise result to words per minute.
  calculateWPM(characters, time) {
    return Math.round((characters / 5 / time) * 60);
  }

  // Calculate accuracy by dividing the correct characters by the total characters.
  calculateAccuracy(correct, total) {
    return Math.round((correct / total) * 100);
  }
}
