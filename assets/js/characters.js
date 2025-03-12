import { ONE_API } from "./config.js";
import { getQuotesInstance } from "./quotes.js";

// Character Class.
export class Character {
  constructor() {
    this.characterCards = document.getElementsByClassName("character");
    this.startButton = document.getElementById("start-button");
    this.name = "";
    this.id = "";
    this.getCharacterNames = this.getCharacterNames.bind(this);
    this.getCharacterQuotes = this.getCharacterQuotes.bind(this);
    this.addEventListeners();
  }

  // Function to add event listeners to character cards.
  addEventListeners() {
    // Iterate over the character cards and add event listeners to each.
    if (this.characterCards !== null) {
      Array.from(this.characterCards).forEach((character) => {
        character.addEventListener("click", this.getCharacterNames);
        character.addEventListener("touch", this.getCharacterNames);
        // TODO: add event listener for key press (tab) when character is focused.
      });
    }

    if (this.startButton !== null) {
      this.startButton.addEventListener("click", this.getCharacterQuotes);
      this.startButton.addEventListener("touch", this.getCharacterQuotes);
      // TODO: add event listener for key press (enter/return) when character is selected.
    }
  }

  // Event handler to get character names.
  getCharacterNames = (e) => {
    if (e !== undefined) {
      const characterName = e.target.getAttribute("data-name");
      this.name = characterName;
      this.getCharacterID(characterName);
      // TODO: save selected character name to a variable.
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

  async getCharacterQuotes() {
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
          const localResponse = await fetch(`./assets/js/data/${name}.json`);
          const localData = await localResponse.json();
          console.log("Using local data:", localData);
          return new getQuotesInstance(localData);
        } catch (localError) {
          console.error(localError.message);
        }
      }
    };

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
