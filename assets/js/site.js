import { Character } from "./characters.js";

window.addEventListener("load", () => {
  /* Set up variables */
  const charactersButton = document.getElementById("characters-button");

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
          let characters = new Character();
        });
    });
  } else {
    // If landing directly on characters page, instantiate new Character class.
    if (window.location.pathname === "/characters.html") {
      let characters = new Character();
    }
  }
});
