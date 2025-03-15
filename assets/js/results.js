import { isProduction, stringToHTML } from "./utils.js";
import { getQuotesInstance } from "./quotes.js";
import { Character } from "./characters.js";

// Results Class.
export class Results {
  constructor(data) {
    this.wrapperElement = document.getElementById("wrapper");
    this.restartTest = this.restartTest.bind(this);
    this.loadCharactersPage = this.loadCharactersPage.bind(this);
    this.loadResultsHTML(data);
  }

  // Load the results html file and replace the current header and main elements.
  async loadResultsHTML(data) {
    try {
      const response = await fetch("results.html");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text();
      const html = stringToHTML(text);
      const newHeader = html.querySelector("#header");
      const newMain = html.querySelector("#main");
      const currentHeader = document.getElementById("header");
      const currentMain = document.getElementById("main");
      currentHeader.replaceWith(newHeader);
      currentMain.replaceWith(newMain);
      await this.processResults(data);
      this.addEventListeners();
    } catch (error) {
      console.error(error);
    }
  }

  // Process the results data.
  async processResults(data) {
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

  async addEventListeners() {
    this.wrapperElement.addEventListener("click", this.restartTest);
    this.wrapperElement.addEventListener("touch", this.restartTest);
    this.wrapperElement.addEventListener("keydown", this.restartTest);

    this.wrapperElement.addEventListener("click", this.loadCharactersPage);
    this.wrapperElement.addEventListener("touch", this.loadCharactersPage);
    this.wrapperElement.addEventListener("keydown", this.loadCharactersPage);
  }

  restartTest(e) {
    if (e.target && e.target.matches("#restart-test")) {
      if (
        e.type === "click" ||
        e.type === "touchstart" ||
        (e.type === "keydown" && e.key === "Enter")
      ) {
        e.preventDefault();
        const quotesInstance = getQuotesInstance();
        quotesInstance.loadTypingTest();
      }
    }
  }

  async loadCharactersPage(e) {
    if (e.target && e.target.matches("#new-characters-button")) {
      if (
        e.type === "click" ||
        e.type === "touchstart" ||
        (e.type === "keydown" && e.key === "Enter")
      ) {
        e.preventDefault();

        // Get the href attribute of the characters button
        let charactersLink = "characters.html";
        // Check if the current location is localhost, else add repo path to the characters link
        if (isProduction()) {
          charactersLink = "/middle-earth-typing-trials/" + charactersLink;
        } else {
          charactersLink = "/" + charactersLink;
        }
        try {
          const response = await fetch(charactersLink);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const text = await response.text();
          const html = stringToHTML(text);
          const newWrapper = html.querySelector("#wrapper");
          const currentWrapper = document.getElementById("wrapper");
          newWrapper.style.opacity = 0;
          currentWrapper.replaceWith(newWrapper);

          // New promise to wait for transition to complete before creating a new Character instance, so that the elements exist for the event listeners.
          await new Promise((resolve) => {
            newWrapper.style.transition = "opacity 1s ease-in-out";
            newWrapper.style.opacity = 1;

            newWrapper.addEventListener("transitionend", () => {
              resolve({ once: true });
            });
          });
          let characters = new Character();
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
}
