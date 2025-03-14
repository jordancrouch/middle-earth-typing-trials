// Function to check if the current location is localhost.
export function isProduction() {
  return location.hostname !== "localhost";
}

// Function to convert a string to HTML.
export function stringToHTML(text, returnBody = true) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(text, "text/html");

  if (returnBody) {
    return doc.body;
  } else {
    return Array.from(doc.body.childNodes);
  }
}

// Loading spinner function.
export function loadingSpinner(show = true) {
  let spinner = document.getElementById("spinner");
  spinner.classList.add("show");

  if (show === false) {
    if (spinner.classList.contains("show")) {
      spinner.classList.remove("show");
    }
  }
}
