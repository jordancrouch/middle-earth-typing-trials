// Typing Test Class.
export class TypingTest {
  constructor(el) {
    this.testWrapper = el;
    this.testInner = el.querySelector("#typing-test-inner-container");
    this.textInput = document.querySelector("#text-input");
    this.textContainer = el.querySelector("#text-container");
    this.focusWarning = el.querySelector("#focus-warning");
    this.intervalTime = 2000;
    this.inputEvents = 0;
    this.wordIndex = 0;
    this.letterIndex = 0;
    this.currentWordLength = 0;
    this.focusInputOnLoad();
    this.eventListeners();
    this.setFocusInterval();
  }

  focusInputOnLoad() {
    this.textInput.focus();
  }

  // Add event listeners.
  eventListeners() {
    this.testInner.addEventListener("click", this.focusOnInput);
    this.testInner.addEventListener("touch", this.focusOnInput);
    this.textInput.addEventListener("input", this.onInputChange);
    // this.textInput.addEventListener("change", this.onInputChange);
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
          if (e.data.length === 1) {
            input = e.data;
          }
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
      // console.log(`Input: ${input}`);
      // console.log(`Word index: ${this.wordIndex}`);
      // console.log(`Letter index: ${this.letterIndex}`);
    }
  };

  // Function to track progress of text.
  textProgress(input) {
    let text = this.textContainer;
    let words = text.childNodes;
    let wordIndex = this.wordIndex;
    let letterIndex = this.letterIndex;
    let currentWord = words[wordIndex];
    let letters = currentWord.childNodes;
    let currentWordLength = letters.length;
    let currentLetter = letters[letterIndex];

    if (!currentWord.classList.contains("active")) {
      currentWord.classList.add("active");
    }

    // Check to make sure that the current letter index is less than the word length.
    if (letterIndex <= currentWordLength) {
      let currentLetterText = "";

      // If the letter index matches a letter key.
      if (letterIndex < currentWordLength) {
        currentLetterText = currentLetter.innerHTML;
        // If the letter index matches the word length, it's one more than the last letter
        // due to 0-based indexing. Set the current letter text to 'space'.
      } else if (letterIndex === currentWordLength) {
        currentLetterText = "space";
      }

      // Check if the current letter text is not 'space'.
      if (currentLetterText !== "space") {
        // Correct input, add correct class and increment letter index.
        if (currentLetterText === input) {
          currentLetter.classList.add("correct");
          this.letterIndex++;
          // If input is delete, remove correct or incorrect class.
        } else if (input === "delete") {
          // If current word is not the first word and the letter index is 0 (start of word).
          if (this.wordIndex > 0 && this.letterIndex === 0) {
            // If the previous word contains an error.
            if (words[this.wordIndex - 1].classList.contains("error")) {
              if (currentWord.classList.contains("active")) {
                currentWord.classList.remove("active");
              }
              this.wordIndex--;
              currentWord = words[this.wordIndex];
              if (!currentWord.classList.contains("active")) {
                currentWord.classList.add("active");
              }
              this.letterIndex = currentWord.childNodes.length + 1;
            }
          }
          if (currentLetter.classList.contains("correct")) {
            currentLetter.classList.remove("correct");
          } else if (currentLetter.classList.contains("incorrect")) {
            if (currentLetter.classList.contains("extra")) {
              currentLetter.remove();
            }
            currentLetter.classList.remove("incorrect");
          }
          // If incorrect input, add incorrect class and increment letter index.
        } else if (currentLetterText !== input) {
          currentLetter.classList.add("incorrect");
          this.letterIndex++;
        }
      } else if (currentLetterText === "space") {
        if (input === "space") {
          // Add error class if any letters in the word are incorrect.
          letters.forEach((letter) => {
            if (letter.classList.contains("incorrect")) {
              if (!currentWord.classList.contains("error")) {
                currentWord.classList.add("error");
              }
            } else {
              if (!currentWord.classList.contains("typed")) {
                currentWord.classList.add("typed");
              }
            }
          });
          // Remove active class from current word, increment word index and reset letter index.
          currentWord.classList.remove("active");
          this.wordIndex++;
          this.letterIndex = 0;
        } else {
          if (input.length === 1) {
            let newLetter = document.createElement("div");
            newLetter.classList.add("letter", "incorrect", "extra");
            newLetter.innerHTML = input;
            currentWord.appendChild(newLetter);
            this.letterIndex++;
          }
        }
        // TODO: Else statement for incorrect input, appending the input to the end of the current word.
      }
    }
  }
}
