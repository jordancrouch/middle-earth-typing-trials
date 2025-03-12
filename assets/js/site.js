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
  const loadCharactersPage = async (e) => {
    if (e !== undefined) {
      if (
        e.type === "click" ||
        e.type === "touchstart" ||
        (e.type === "keydown" && e.key === "Enter")
      ) {
        e.preventDefault();
        // Get the href attribute of the characters button
        let charactersLink = charactersButton.getAttribute("href");
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
          const newHeader = html.querySelector("#header");
          const newMain = html.querySelector("#main");
          const currentHeader = document.getElementById("header");
          currentHeader.replaceWith(newHeader);
          const updatedHeader = document.getElementById("header");
          updatedHeader.insertAdjacentElement("afterend", newMain);

          const characters = new Character();
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Add event listeners to the characters button, if it exists.
  if (charactersButton !== null) {
    charactersButton.addEventListener("click", loadCharactersPage);
    charactersButton.addEventListener("touch", loadCharactersPage);
    charactersButton.addEventListener("keydown", loadCharactersPage);
  }

  // If navigating directly on characters page, instantiate new Character class.
  if (isProduction()) {
    if (
      window.location.pathname === "/middle-earth-typing-trials/characters.html"
    ) {
      let characters = new Character();
    }
  } else if (window.location.pathname === "/characters.html") {
    let characters = new Character();
  }
});
