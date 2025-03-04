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
    this.previousValueLength = 0;
    this.focusInputOnLoad();
    this.eventListeners();
    this.setFocusInterval();
  }

  // Set focus on input element.
  focusInputOnLoad() {
    this.textInput.focus();
  }

  // Add event listeners.
  eventListeners() {
    this.testInner.addEventListener("click", this.focusOnInput);
    this.testInner.addEventListener("touch", this.focusOnInput);
    this.textInput.addEventListener("input", this.onInputChange);
  }

  // Event handler to focus back on input element when it's out of focus.
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

  // Check if input is in focus and display warning if not.
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
    let previousValueLength = this.previousValueLength;
    const currentValue = e.target.value;
    const currentValueLength = currentValue.length;

    // If the current value length is greater than the previous value length something has been added.
    if (currentValueLength > previousValueLength) {
      const input = currentValue.slice(-1);
      // Check if the input is a space.
      if (input === " ") {
        this.textProgress("space");
        // If not a space, the input is text.
      } else {
        this.textProgress(input);
      }
      // Update the previous value length with the new current value length ready for next input.
      this.previousValueLength = currentValueLength;
      // If the current value length is less than the previous value length, something has been deleted.
    } else if (currentValueLength < previousValueLength) {
      // Check to prevent negative index, decrement letter index here so 'current letter'
      // becomes the 'previous letter'.
      if (this.letterIndex !== 0) {
        this.letterIndex--;
      }
      this.textProgress("delete");
      this.previousValueLength = currentValueLength;
    }

    // TODO: Add function to check if the second line is complete and delete the first line,
    // to move the remaining words up.
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

    // Check if the current word is not active, add active class.
    if (!currentWord.classList.contains("active")) {
      currentWord.classList.add("active");
    }

    // Check to make sure that the current letter index is less than the word length.
    if (letterIndex <= currentWordLength) {
      let currentLetterText = "";

      // If the letter index is less than the word length, set the current letter text to the
      // innerHTML of the current letter.
      if (letterIndex < currentWordLength) {
        currentLetterText = currentLetter.innerHTML;
        // If the letter index matches the word length, it's one more than the last letter
        // due to 0-based indexing. Set the current letter text to 'space'.
      } else if (letterIndex === currentWordLength) {
        currentLetterText = "space";
      }

      // Check if the current letter text is not a 'space'.
      if (currentLetterText !== "space") {
        // Correct input, add correct class and increment letter index.
        if (currentLetterText === input) {
          currentLetter.classList.add("correct");
          this.letterIndex++;
          // If input is delete, remove correct or incorrect class.
        } else if (input === "delete") {
          // If current word is not the first word and the letter index is 0 (start of word)...
          // TODO: Fix when deleting back to the start of a word that you can type again.
          if (this.wordIndex > 0 && this.letterIndex === 0) {
            if (currentLetter.classList.contains("correct")) {
              currentLetter.classList.remove("correct");
              // If the current letter contains the incorrect class, remove it.
            } else if (currentLetter.classList.contains("incorrect")) {
              // If the current letter is an 'extra' incorrectly typed letter, remove it.
              if (currentLetter.classList.contains("extra")) {
                currentLetter.remove();
              }
              currentLetter.classList.remove("incorrect");
              // Check if the previous word contains an error.
            } else if (words[this.wordIndex - 1].classList.contains("error")) {
              // Remove active class from current word.
              if (currentWord.classList.contains("active")) {
                currentWord.classList.remove("active");
              }
              // Decrement word index and set current word to the previous word.
              this.wordIndex--;
              currentWord = words[this.wordIndex];
              // If the new current word (previous word) does not contain the active class
              // then add it.
              if (!currentWord.classList.contains("active")) {
                currentWord.classList.add("active");
              }
              // Set the letter index to the length of the current word.
              this.letterIndex = currentWord.childNodes.length;
            }
          } else {
            // If the current letter contains the correct class, remove it.
            if (currentLetter.classList.contains("correct")) {
              currentLetter.classList.remove("correct");
              // If the current letter contains the incorrect class, remove it.
            } else if (currentLetter.classList.contains("incorrect")) {
              // If the current letter is an 'extra' incorrectly typed letter, remove it.
              if (currentLetter.classList.contains("extra")) {
                currentLetter.remove();
              }
              currentLetter.classList.remove("incorrect");
            }
          }
          // If incorrect input, add incorrect class and increment letter index.
        } else if (currentLetterText !== input) {
          currentLetter.classList.add("incorrect");
          this.letterIndex++;
        }
        // If the current letter text is a 'space'.
      } else if (currentLetterText === "space") {
        if (input === "space") {
          // Add error class if any letters in the word are incorrect.
          // TODO: Ensure that the error class remains when navigating to next word.
          letters.forEach((letter) => {
            if (letter.classList.contains("incorrect")) {
              if (!currentWord.classList.contains("error")) {
                currentWord.classList.add("error");
              }
              // If no errors, remove error class and add 'typed' class so the word
              // cannot be navigated back to.
            } else {
              if (currentWord.classList.contains("error")) {
                currentWord.classList.remove("error");
              }
              if (!currentWord.classList.contains("typed")) {
                currentWord.classList.add("typed");
              }
              if (!words[this.wordIndex + 1].classList.contains("active")) {
                words[this.wordIndex + 1].classList.add("active");
              }
            }
          });
          // Remove active class from current word, increment word index and reset letter index.
          currentWord.classList.remove("active");
          this.wordIndex++;
          this.letterIndex = 0;
          // If an additional word is typed at the end of a word where a space should be
          // add it to the end of the current word.
        } else {
          if (input.length === 1) {
            let newLetter = document.createElement("div");
            newLetter.classList.add("letter", "incorrect", "extra");
            newLetter.innerHTML = input;
            currentWord.appendChild(newLetter);
            this.letterIndex++;
          }
        }
      }
    }
  }
}
