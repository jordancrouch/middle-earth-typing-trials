import { Character } from "./characters.js";
import { Quotes } from "./quotes.js";

window.addEventListener("load", () => {
  /* Set up variables */
  // Get the 'choose a character' button.
  const charactersButton = document.getElementById("characters-button");
  // Get all the character cards.
  const characterCards = document.getElementsByClassName("character");

  // Function to check if the current location is localhost.
  const isProduction = () => {
    return location.hostname !== "localhost";
  };

  // Function to convert a string to HTML.
  const stringToHTML = (text) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    return doc.body;
  };

  // Event handler to get character names.
  const getCharacterNames = (e) => {
    const characterName = e.target.getAttribute("data-name");
    console.log(characterName);
    // TODO: save selected character name to a variable.
  };

  // Iterate over the character cards and add event listeners to each.
  Array.from(characterCards).forEach((character) => {
    character.addEventListener("click", getCharacterNames);
    character.addEventListener("touch", getCharacterNames);
    // TODO: add event listener for return/enter key press when character is focused.
  });

  // Fetch the characters page and replace the current page with the new page
  // if the characters button exists and is clicked.
  // TODO: add touch and keypress event listeners.
  if (charactersButton !== null) {
    // Get the href attribute of the characters button
    let charactersLink = charactersButton.getAttribute("href");
    // Check if the current location is localhost, else add repo path to the characters link
    if (isProduction()) {
      charactersLink = "/middle-earth-typing-trials" + charactersLink;
    }
    charactersButton.addEventListener("click", (e) => {
      e.preventDefault();
      fetch(charactersLink)
        .then((response) => {
          if (response.ok) {
            return response.text();
          }
          throw response;
        })
        .then((text) => {
          let html = stringToHTML(text);
          let newHeader = html.querySelector("#header");
          let newMain = html.querySelector("#main");
          let currentHeader = document.getElementById("header");
          currentHeader.replaceWith(newHeader);
          let updatedHeader = document.getElementById("header");
          updatedHeader.insertAdjacentElement("afterend", newMain);
        })
        .then(() => {
          getCharacterNames();
        });
    });
  }

  // Get the character names
  // getCharacterNames();
  // const character = new Character("gandalf");
  // console.log(character);
  // console.log(character.getCharacterQuotes());

  const quotes = new Quotes();

  const textContainer = document.getElementById("text-container");
  if (textContainer !== null) {
    textContainer.innerHTML = quotes.processedQuotes;
  }
});
