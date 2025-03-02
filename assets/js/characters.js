import { ONE_API } from "./config.js";

// Character Class.
export class Character {
  constructor(name) {
    this.name = name;
    this.id = "";
    this.getCharacterID();
  }

  // Function to get the character ID used by the One API.
  getCharacterID() {
    const characterIDs = {
      aragorn: "Aragorn II Elessar",
      boromir: "Boromir",
      frodo: "Frodo Baggins",
      gandalf: "Gandalf",
      gimli: "Gimli",
      gollum: "Gollum",
      legolas: "Legolas",
      "merry-and-pippin": ["Meriadoc Brandybuck", "Peregrin Took"],
      sam: "Samwise Gamgee",
    };

    // Iterate over character IDs and set the ID for the specified character.
    for (const [key, value] of Object.entries(characterIDs)) {
      if (this.name === key) {
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

    if (size === 1) {
      const url = `https://the-one-api.dev/v2/character?name=${this.id}`;
      fetch(url, options)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const characterID = data.docs[0]._id;
          const characterURL = `https://the-one-api.dev/v2/character/${characterID}/quote`;

          fetch(characterURL, options)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else if (size > 1) {
      for (const key of Object.keys(this.id)) {
        const url = `https://the-one-api.dev/v2/character?name=${this.id[key]}`;

        fetch(url, options)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            const characterID = data.docs[0]._id;
            const characterURL = `https://the-one-api.dev/v2/character/${characterID}/quote`;

            fetch(characterURL, options)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.log(error.message);
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    }
  }
}
