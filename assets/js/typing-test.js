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
  }

  // Add event listeners to inner container.
  eventListeners() {
    this.testInner.addEventListener("click", this.focusOnInput);
    this.testInner.addEventListener("touch", this.focusOnInput);
  }

  // Event handler to focus back on input element.
  focusOnInput = (e) => {
    this.textInput.focus();
    this.checkInputFocus();
  };

  setFocusInterval() {
    window.setInterval(() => {
      console.log("interval has completed.");
      this.checkInputFocus();
    }, this.intervalTime);
  }

  checkInputFocus() {
    let activeElement = document.activeElement;
    let input = this.textInput;
    let textContainer = this.textContainer;
    if (activeElement === input) {
      console.log("input is focused");
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
}
