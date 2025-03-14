import { isProduction, stringToHTML } from "./utils.js";
import { ONE_API } from "./config.js";
import { getQuotesInstance } from "./quotes.js";

// Character Class.
export class Character {
  constructor() {
    this.wrapperElement = document.getElementById("wrapper");
    this.mainElement = document.getElementById("main");
    this.charactersButton = document.getElementById("characters-button");
    this.characterCards = document.getElementsByClassName("character");
    this.startButton = document.getElementById("start-button");
    this.name = "";
    this.id = "";
    this.loadCharactersPage = this.loadCharactersPage.bind(this);
    this.getCharacterNames = this.getCharacterNames.bind(this);
    this.getCharacterQuotes = this.getCharacterQuotes.bind(this);
    this.addEventListeners();
  }

  // Function to add event listeners to character cards and start button.
  addEventListeners() {
    // Add event listeners to load characters page from index page.
    this.wrapperElement.addEventListener("click", this.loadCharactersPage);
    this.wrapperElement.addEventListener("touch", this.loadCharactersPage);
    this.wrapperElement.addEventListener("keydown", this.loadCharactersPage);
    // Add event listeners to get character names.
    this.wrapperElement.addEventListener("click", this.getCharacterNames);
    this.wrapperElement.addEventListener("touch", this.getCharacterNames);
    this.wrapperElement.addEventListener("keydown", this.getCharacterNames);
    // Add event listeners to get character quotes.
    this.wrapperElement.addEventListener("click", this.getCharacterQuotes);
    this.wrapperElement.addEventListener("touch", this.getCharacterQuotes);
    this.wrapperElement.addEventListener("keydown", this.getCharacterQuotes);
    // Add event listener to prevent backspace key from navigating back when test ends and
    // the results are displayed.
    window.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.closest("input")) {
        e.preventDefault();
      }
    });
  }

  // Fetch the characters page and replace the current page with the new page
  async loadCharactersPage(e) {
    if (e.target && e.target.matches("#characters-button")) {
      if (
        e.type === "click" ||
        e.type === "touchstart" ||
        (e.type === "keydown" && e.key === "Enter")
      ) {
        e.preventDefault();
        // Get the href attribute of the characters button
        let charactersLink = this.charactersButton.getAttribute("href");
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
        } catch (error) {
          console.error(error);
        }
      }
    }
  }

  // Event handler to get character names.
  getCharacterNames = (e) => {
    if (e.target && e.target.matches("picture")) {
      if (
        e.type === "click" ||
        e.type === "touchstart" ||
        (e.type === "keydown" && e.key === "Enter")
      ) {
        const characterCards = this.characterCards;
        if (!e.target.classList.contains("active")) {
          Array.from(characterCards, (character) => {
            if (
              character.querySelector("picture").classList.contains("active")
            ) {
              character.querySelector("picture").classList.remove("active");
            }
          });
          e.target.classList.add("active");
        }
        const characterName = e.target.getAttribute("data-name");
        this.name = characterName;
        this.getCharacterID(characterName);
      }
    }
  };

  // Function to get the character ID used by the One API.
  getCharacterID(name) {
    const characterIDs = {
      aragorn: "Aragorn II Elessar",
      boromir: "Boromir",
      frodo: "Frodo Baggins",
      gandalf: "Gandalf",
      gimli: "Gimli",
      gollum: "Gollum",
      legolas: "Legolas",
      "merry-and-pippin": ["Meriadoc Brandybuck", "Peregrin Took"],
      samwise: "Samwise Gamgee",
    };

    // Iterate over character IDs and set the ID for the specified character.
    for (const [key, value] of Object.entries(characterIDs)) {
      if (name === key) {
        this.id = value;
      }
    }
  }

  // Function to fetch character quotes from the One API.
  async getCharacterQuotes(e) {
    if (e.target && e.target.matches("#start-button")) {
      if (
        e.type === "click" ||
        e.type === "touchstart" ||
        (e.type === "keydown" && e.key === "Enter")
      ) {
        // Set # of characters to 0.
        let size = 0;

        // If one character has been selected.
        if (typeof this.id === "string") {
          size = 1;
          // Else if multiple characters have been selected.
        } else if (Array.isArray(this.id)) {
          size = Object.keys(this.id).length;
        }
        const API_KEY = ONE_API;
        const headers = new Headers({
          Authorization: `Bearer ${API_KEY}`,
        });
        const options = {
          headers: headers,
        };

        const fetchQuotes = async (name, id) => {
          try {
            const url = `https://the-one-api.dev/v2/character?name=${id}`;
            const response = await fetch(url, options);
            const data = await response.json();
            const characterID = data.docs[0]._id;
            const characterURL = `https://the-one-api.dev/v2/character/${characterID}/quote`;
            const quoteResponse = await fetch(characterURL, options);
            const quoteData = await quoteResponse.json();
            return new getQuotesInstance(quoteData);
          } catch (error) {
            console.error(error.message);

            // Fallback to local JSON data.
            // TODO: create/update object property to show icon
            // front-end that local data is being used.
            try {
              const localResponse = await fetch(
                `./assets/js/data/${name}.json`,
              );
              const localData = await localResponse.json();
              console.log("Using local data:", localData);
              return new getQuotesInstance(localData);
            } catch (localError) {
              console.error(localError.message);
            }
          }
        };

        // Fetch quotes based on the number of characters selected.
        if (size === 1) {
          return await fetchQuotes(this.name, this.id);
        } else if (size > 1) {
          const promises = Object.keys(this.id).map((key) =>
            fetchQuotes(this.name, this.id[key]),
          );
          return await Promise.all(promises);
        }
      }
    }
  }
}
