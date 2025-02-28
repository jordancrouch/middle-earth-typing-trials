window.addEventListener("DOMContentLoaded", () => {
  const charactersButton = this.document.getElementById("characters-button");

  const stringToHTML = (text) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    return doc.body;
  };

  if (charactersButton) {
    const charactersLink = charactersButton.getAttribute("href");
    charactersButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.fetch(charactersButton.getAttribute("href"))
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
        });
    });
  }
});
