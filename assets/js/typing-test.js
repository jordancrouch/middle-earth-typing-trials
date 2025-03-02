// Typing Test Class.
export class TypingTest {
  constructor(el) {
    this.testWrapper = el;
    this.testInner = el.querySelector("#typing-test-inner-container");
    this.textInput = document.querySelector("#text-input");
    this.textContainer = el.querySelector("#text-container");
    this.focusWarning = el.querySelector("#focus-warning");
    this.intervalTime = 2000;
    this.eventListeners();
    this.setFocusInterval();
    this.inputEvents = 0;
    this.wordIndex = 0;
    this.letterIndex = 0;
  }

  // Add event listeners.
  eventListeners() {
    this.testInner.addEventListener("click", this.focusOnInput);
    this.testInner.addEventListener("touch", this.focusOnInput);
    this.textInput.addEventListener("input", this.onInputChange);
  }

  // Event handler to focus back on input element.
  focusOnInput = (e) => {
    this.textInput.focus();
    this.checkInputFocus();
  };

  // Set interval to check if input is in focus.
  setFocusInterval() {
    window.setInterval(() => {
      this.checkInputFocus();
    }, this.intervalTime);
  }

  // Check if input is in focus.
  checkInputFocus() {
    let activeElement = document.activeElement;
    let input = this.textInput;
    let textContainer = this.textContainer;
    if (activeElement === input) {
      if (textContainer.classList.contains("blur")) {
        textContainer.classList.remove("blur");
      }
      if (!this.focusWarning.classList.contains("opacity-0")) {
        this.focusWarning.classList.add("opacity-0");
      }
    } else if (activeElement !== input) {
      if (!textContainer.classList.contains("blur")) {
        textContainer.classList.add("blur");
      }

      if (this.focusWarning.classList.contains("opacity-0")) {
        this.focusWarning.classList.remove("opacity-0");
      }
    }
  }

  // Event handler for input change.
  onInputChange = (e) => {
    if (e !== undefined) {
      console.log(e);
      let input = "";
      // If text input, set text data to variable.
      if (e.inputType === "insertText") {
        if (e.data !== " ") {
          input = e.data;
        } else if (e.data === " ") {
          input = "space";
        }
        // If backspace, set input as 'delete' and decrement letter index.
      } else if (e.inputType === "deleteContentBackward") {
        input = "delete";
        // Prevent negative index.
        if (this.letterIndex !== 0) {
          this.letterIndex--;
        }
      }
      this.textProgress(input);
      console.log(`Input: ${input}`);
      console.log(`Word index: ${this.wordIndex}`);
      console.log(`Letter index: ${this.letterIndex}`);
    }
  };

  // Functin to track progress of text.
  textProgress(input) {
    let text = this.textContainer;
    let words = text.childNodes;
    let wordIndex = this.wordIndex;

    // Iterate over the words in the text container.
    for (const [key, value] of Object.entries(words)) {
      // Set the current word to active.
      if (Number(key) === wordIndex) {
        value.classList.add("active");

        let letters = value.childNodes;
        let wordLength = letters.length;
        let letterIndex = this.letterIndex;
        // Iterate over the letters in the current word.
        for (const [key, value] of Object.entries(letters)) {
          if (Number(key) === letterIndex) {
            // Check to make sure that the current letter index is less than the word length.
            if (Number(key) <= wordLength) {
              let letter = value.innerHTML;
              // Correct input, add correct class and increment letter index.
              if (letter === input) {
                value.classList.add("correct");
                this.letterIndex++;
                // If input is delete, remove correct or incorrect class.
              } else if (input === "delete") {
                if (value.classList.contains("correct")) {
                  value.classList.remove("correct");
                } else if (value.classList.contains("incorrect")) {
                  value.classList.remove("incorrect");
                }
                // If incorrect input, add incorrect class and increment letter index.
              } else if (letter !== input) {
                value.classList.add("incorrect");
                this.letterIndex++;
              }
            }
          }
        }
      }
    }
  }
}
