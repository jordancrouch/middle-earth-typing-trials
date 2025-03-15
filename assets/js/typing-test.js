import { stringToHTML } from "./utils.js";
import { getQuotesInstance } from "./quotes.js";
import { Results } from "./results.js";

// Typing Test Class.
export class TypingTest {
  constructor(el) {
    this.testWrapper = el;
    this.testInner = el.querySelector("#typing-test-inner-container");
    this.textInput = document.querySelector("#text-input");
    this.textContainer = el.querySelector("#text-container");
    this.focusWarning = el.querySelector("#focus-warning");
    this.timerText = el.querySelector("#timer");
    this.testTimer = document
      .getElementById("time-select")
      .querySelector('input[type="radio"]:checked').value;
    this.focusInterval = null;
    this.timerInterval = null;
    this.timerRunning = false;
    this.intervalTime = 1000;
    this.inputEvents = 0;
    this.wordIndex = 0;
    this.letterIndex = 0;
    this.currentWordLength = 0;
    this.previousValueLength = 0;
    this.caret = el.querySelector("#caret");
    this.wordsToRemove = [];
    this.removedWords = [];
    this.totalInputs = 0;
    this.correctInputs = 0;
    this.setTimer();
    this.focusInputOnLoad();
    this.eventListeners();
    this.setFocusInterval();
    this.setCaretPosition();
  }

  // Set the timer.
  setTimer() {
    this.timerText.textContent = this.testTimer + "s";
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
  focusOnInput = () => {
    this.textInput.focus();
    this.checkInputFocus();
  };

  // Set interval to check if input is in focus.
  setFocusInterval() {
    this.focusInterval = setInterval(() => {
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
      // Pause timer.
      this.pauseTimer();
      // Update the test timer with the current timer value.
      this.testTimer = parseInt(
        document.querySelector("#timer").textContent.slice(0, -1),
      );

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

    // Start the timer if it is not already running.
    if (!this.timerRunning) {
      this.startTimer(this.testTimer, this.timerText);
    }

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
    let wordError = false;
    let wordStyles = getComputedStyle(currentWord);
    let wordHeight =
      currentWord.offsetHeight +
      parseFloat(wordStyles.marginTop) +
      parseFloat(wordStyles.marginBottom);
    let wordsToRemove = this.wordsToRemove;
    let removedWords = this.removedWords;
    let caret = this.caret;

    // Check if the current word is not active, add active class.
    if (!currentWord.classList.contains("active")) {
      currentWord.classList.add("active");
      caret.style.left = currentWord.offsetLeft + "px";
      caret.style.top = currentWord.offsetTop + "px";
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
          this.moveCaret(currentLetter, "forward", "letter");
          this.correctInputs++;
          this.totalInputs++;

          // If input is delete, remove correct or incorrect class.
        } else if (input === "delete") {
          // If current word is not the first word and the letter index is 0 (start of word)...
          if (this.wordIndex > 0 && this.letterIndex === 0) {
            if (currentLetter.classList.contains("correct")) {
              currentLetter.classList.remove("correct");
              this.moveCaret(currentLetter, "backward", "letter");
              // If the current letter contains the incorrect class, remove it.
            } else if (currentLetter.classList.contains("incorrect")) {
              // If the current letter is an 'extra' incorrectly typed letter, remove it.
              if (currentLetter.classList.contains("extra")) {
                this.moveCaret(
                  currentLetter.previousSibling,
                  "backward",
                  "extra",
                );
                currentLetter.remove();
              } else {
                this.moveCaret(currentLetter, "backward", "letter");
              }
              currentLetter.classList.remove("incorrect");
              // Check if the previous word contains an error.
            } else if (words[this.wordIndex - 1].classList.contains("error")) {
              // Remove typed class from previous word.
              if (words[this.wordIndex - 1].classList.contains("typed")) {
                words[this.wordIndex - 1].classList.remove("typed");
              }
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
              this.moveCaret(currentWord, "backward", "word");
            }
          } else {
            // If the current letter contains the correct class, remove it.
            if (currentLetter.classList.contains("correct")) {
              currentLetter.classList.remove("correct");
              this.moveCaret(currentLetter, "backward", "letter");
              // If the current letter contains the incorrect class, remove it.
            } else if (currentLetter.classList.contains("incorrect")) {
              // If the current letter is an 'extra' incorrectly typed letter, remove it.
              if (currentLetter.classList.contains("extra")) {
                this.moveCaret(
                  currentLetter.previousSibling,
                  "backward",
                  "extra",
                );
                currentLetter.remove();
              } else {
                this.moveCaret(currentLetter, "backward", "letter");
              }
              currentLetter.classList.remove("incorrect");
            }
          }
          // If incorrect input add incorrect class, increment letter index,
          // move caret to the next letter and increment total inputs.
        } else if (currentLetterText !== input) {
          currentLetter.classList.add("incorrect");
          this.letterIndex++;
          this.moveCaret(letters[letterIndex], "forward", "letter");
          this.totalInputs++;
        }
        // If the current letter text is a 'space'.
      } else if (currentLetterText === "space") {
        if (input === "space") {
          // Check if the current word contains any incorrect letters and set wordError to true.
          letters.forEach((letter) => {
            if (letter.classList.contains("incorrect")) {
              wordError = true;
            }
          });

          // If the word contains an error, add error class to the word.
          if (wordError === true) {
            if (!currentWord.classList.contains("error")) {
              currentWord.classList.add("error");
            }
            // If no errors, remove error class if it exists so it can't be navigated back to.
          } else if (wordError === false) {
            if (currentWord.classList.contains("error")) {
              currentWord.classList.remove("error");
            }
          }
          // Add typed class to current word if it doesn't already have it.
          if (!currentWord.classList.contains("typed")) {
            currentWord.classList.add("typed");
          }
          // If the next word is not active, add active class.
          if (!words[this.wordIndex + 1].classList.contains("active")) {
            words[this.wordIndex + 1].classList.add("active");
          }
          // Remove active class from current word.
          if (currentWord.classList.contains("active")) {
            currentWord.classList.remove("active");
          }
          // Increment word index, set letter index to 0, increment inputs,
          // update word index and current word, move caret to the next word.
          this.wordIndex++;
          this.letterIndex = 0;
          this.correctInputs++;
          this.totalInputs++;
          wordIndex = this.wordIndex;
          currentWord = words[wordIndex];
          this.moveCaret(currentWord, "forward", "word");

          // If the next word is the first word of a line and the word is in the second row.
          if (
            currentWord.offsetLeft ===
              Math.round(parseFloat(wordStyles.marginLeft)) &&
            this.letterIndex === 0 &&
            currentWord.offsetTop ===
              Math.round(wordHeight * 2 + parseInt(wordStyles.marginTop))
          ) {
            // Iterate over each word.
            words.forEach((word) => {
              // If the word is in the first row, add it to the wordsToRemove array.
              if (
                word.offsetTop <
                wordHeight + parseInt(wordStyles.marginTop)
              ) {
                wordsToRemove.push(word);
              }
            });
            // Iterate over the wordsToRemove array, add it to the removedWord array
            // and remove the word from the text container.
            wordsToRemove.forEach((word) => {
              removedWords.push(word);
              word.remove();
            });
            // Subtract the amount of words removed from the word index.
            this.wordIndex = wordIndex - wordsToRemove.length;
            // Update the caret position.
            this.setCaretPosition();
            // Reset the wordsToRemove array.
            this.wordsToRemove = [];
            // Update the removedWords property with the removed words.
            this.removedWords = removedWords;

            // Add new quote to the text container.
            const quotesInstance = getQuotesInstance();
            let randomQuote = quotesInstance.getOneUnusedQuote();
            if (randomQuote) {
              randomQuote = stringToHTML(randomQuote, false);
              randomQuote.forEach((word) => {
                text.appendChild(word);
              });
            }
          }

          // If an additional letter is typed at the end of a word where a space should be
          // add it to the end of the current word.
        } else {
          if (input.length === 1) {
            let newLetter = document.createElement("div");
            newLetter.classList.add("letter", "incorrect", "extra");
            newLetter.innerHTML = input;
            currentWord.appendChild(newLetter);
            this.letterIndex++;
            this.moveCaret(newLetter, "forward", "letter");
            this.totalInputs++;
          }
        }
      }
    }
  }

  // Set caret position.
  setCaretPosition() {
    let caret = this.caret;
    let caretWidth = caret.style.width;
    let text = this.textContainer;
    let words = text.childNodes;
    let wordIndex = this.wordIndex;
    let letterIndex = this.letterIndex;
    let currentWord = words[wordIndex];
    let letters = currentWord.childNodes;
    let currentLetter = letters[letterIndex];

    caret.style.height = currentLetter.offsetHeight + "px";
    caret.style.left = currentWord.offsetLeft - caretWidth / 2 + "px";
    caret.style.top = currentWord.offsetTop + "px";
  }

  // Move caret forward or backward.
  moveCaret(element, direction, type) {
    let caret = this.caret;
    let caretWidth = caret.style.width;
    let elementWidth = element.offsetWidth;
    let text = this.textContainer;
    let words = text.childNodes;
    let wordIndex = this.wordIndex;
    let letterIndex = this.letterIndex;
    let currentWord = words[wordIndex];
    let letters = currentWord.childNodes;
    let currentLetter = letters[letterIndex];

    // If the direction is forward.
    if (direction === "forward") {
      // If the type is letter, set the caret position to the left of the current letter.
      if (type === "letter") {
        caret.style.left =
          element.offsetLeft + elementWidth - caretWidth / 2 + "px";
        caret.style.top = element.offsetTop + "px";
        // If the type is word, set the caret position to the left of the current word.
      } else if (type === "word") {
        caret.style.left = element.offsetLeft + "px";
        caret.style.top = element.offsetTop + "px";
      }
      // If the direction is backward.
    } else if (direction === "backward") {
      // If the type is letter, set the caret position to the right of the current letter.
      if (type === "letter") {
        // If the letter is not the last letter in the word.
        if (letterIndex !== letters.length - 1) {
          caret.style.left =
            element.nextSibling.offsetLeft -
            elementWidth -
            caretWidth / 2 +
            "px";
          caret.style.top = element.nextSibling.offsetTop + "px";
          // If the letter is the first letter in the word.
        } else if (letterIndex === 0) {
          caret.style.left = element.offsetLeft - caretWidth / 2 + "px";
          caret.style.top = element.offsetTop + "px";
        } else {
          caret.style.left =
            element.previousSibling.offsetLeft +
            elementWidth -
            caretWidth / 2 +
            "px";
          caret.style.top = element.offsetTop + "px";
        }
        // If the type is word, set the caret position to the right of the current word.
      } else if (type === "word") {
        caret.style.left = element.offsetLeft + element.offsetWidth + "px";
        caret.style.top = element.offsetTop + "px";
        // If the type is an extra letter, set the caret position to the right of the current letter.
      } else if (type === "extra") {
        caret.style.left = element.offsetLeft + elementWidth + "px";
        caret.style.top = element.offsetTop + "px";
      }
    }
  }

  // Timer function.
  startTimer(duration, element) {
    this.timerRunning = true;
    // Set the time to the duration minus 1 to match the interval time.
    let time = duration - 1,
      seconds;
    this.timerInterval = setInterval(() => {
      // Calculate the minutes and seconds.
      seconds = parseInt(time % 60, 10);
      element.textContent = seconds + "s";

      // Decrement time and check if the time is less than 0. If so, clear the interval.
      // TODO: add function to show results when timer reaches 0.
      if (--time < 0) {
        clearInterval(this.focusInterval);
        clearInterval(this.timerInterval);
        const results = new Results(this);
      }
    }, this.intervalTime);
  }

  // Pause timer function.
  pauseTimer() {
    this.timerRunning = false;
    clearInterval(this.timerInterval);
  }
}
