import { TypingTest } from "./typing-test.js";

// Quotes Instance function.
let quotesInstance;
export function getQuotesInstance(data) {
  if (!quotesInstance) {
    quotesInstance = new Quotes(data);
  }
  return quotesInstance;
}

// Quotes Class.
export class Quotes {
  constructor(data) {
    this.quoteData = data;
    this.allQuotes = [];
    this.usedQuoteIndices = [];
    this.remainingQuoteIndices = [];
    this.processedQuotes = this.processQuotes(
      this.getRandomQuotes(this.getAllQuotes(), 10),
    );
    this.loadTypingTest(data);
  }

  // Function to convert a string to HTML. Return body by default.
  stringToHTML(text, returnBody = true) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");

    if (returnBody) {
      return doc.body;
    } else {
      return Array.from(doc.body.childNodes);
    }
  }

  // Function to create a random array up to the maximum number of remaining quotes,
  // as long as the index has not already been used.
  createRandomArray(size, maxNumber) {
    let randomArray = [];
    let usedQuotesIncdices = this.usedQuoteIndices;
    let randomNumber;
    for (let i = 0; i < size; i++) {
      do {
        randomNumber = Math.floor(Math.random() * maxNumber + 1);
      } while (usedQuotesIncdices.includes(randomNumber));
      randomArray.push(randomNumber);
    }

    return randomArray;
  }

  // Function to get a random quote from the array of quotes.
  getRandomQuotes(quotes, number) {
    let allQuotes = quotes;
    let randomArray = this.createRandomArray(number, allQuotes.length - 1);
    let quotesToUse = [];

    randomArray.forEach((index) => {
      quotesToUse.push(allQuotes[index]);
      this.usedQuoteIndices.push(index);
    });

    return quotesToUse;
  }

  // Function to wrap text in HTML tags.
  textWrap(prefix, text, suffix) {
    return `${prefix}${text}${suffix}`;
  }

  // Sort quote data into an array of quotes.
  getAllQuotes() {
    const quotes = this.quoteData.docs;
    const allQuotes = [];
    if (quotes.length) {
      quotes.forEach((quote, index) => {
        this.remainingQuoteIndices.push(index);
        allQuotes.push(quote.dialog);
      });
    }

    return allQuotes;
  }

  // Take the new quotes array, shuffle it, and wrap each word in a div element.
  processQuotes(unprocessedQuotes) {
    let words = [];
    unprocessedQuotes.map((quote) => {
      quote = quote.split(" ");
      quote.map((word) => {
        // Wrap the letters in separate divs before wrapping the word in a div.
        let wrappedLetters = this.processLetters(word);
        // Wrap the returned wrapped letters in a containing 'words' div.
        let wrappedWord = this.textWrap(
          "<div class='word'>",
          wrappedLetters,
          "</div>",
        );
        words.push(wrappedWord);
      });
    });

    words = words.join("");
    return words;
  }

  // Take the word and wrap each letter in a div element.
  processLetters(word) {
    let letters = [];
    word = word.split("");
    word.map((letter) => {
      let wrappedLetter = this.textWrap(
        "<div class='letter'>",
        letter,
        "</div>",
      );
      letters.push(wrappedLetter);
    });
    letters = letters.join("");

    return letters;
  }

  // Load typing test HTML and populate quotes.
  loadTypingTest() {
    fetch("typing-test.html")
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw response;
      })
      .then((text) => {
        let html = this.stringToHTML(text);
        let testWrapper = html.querySelector("#typing-test-wrapper");
        let currentHeader = document.getElementById("header");
        let currentMain = document.getElementById("main");
        currentHeader.replaceWith(testWrapper);
        currentMain.remove();
      })
      .then(() => {
        document.getElementById("text-container").innerHTML =
          this.processedQuotes;
      })
      .then(() => {
        const test = new TypingTest(
          document.getElementById("typing-test-wrapper"),
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Get one unused quote from the quote data.
  getOneUnusedQuote() {
    // Check if there are any quotes that haven't been used already.
    if (this.remainingQuoteIndices.length === 0) {
      return null;
    }

    let randomIndex;
    // Get a random index from the remaining quotes.
    do {
      randomIndex =
        this.remainingQuoteIndices[
          Math.floor(Math.random() * this.remainingQuoteIndices.length)
        ];
    } while (this.usedQuoteIndices.includes(randomIndex));
    // Remove the index from the remaining quotes and add it to the used quotes.
    this.remainingQuoteIndices = this.remainingQuoteIndices.filter(
      (index) => index !== randomIndex,
    );
    this.usedQuoteIndices.push(randomIndex);

    return this.processQuotes([this.quoteData.docs[randomIndex].dialog]);
  }
}
