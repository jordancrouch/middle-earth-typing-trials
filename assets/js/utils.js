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

  if (spinner !== null) {
    window.scrollTo(0, 0, { behavior: "smooth" });

    if (show === true) {
      if (spinner.classList.contains("hidden")) {
        spinner.classList.remove("hidden");
      }
    } else if (show === false) {
      if (!spinner.classList.contains("hidden")) {
        spinner.classList.add("hidden");
      }
    }
  }
}

// Function to display a notice for local data.
export function localDataActive(hide = false) {
  let localDataNotice = document.getElementById("local-data");

  if (localDataNotice !== null) {
    if (hide === true) {
      if (localDataNotice.classList.contains("active")) {
        localDataNotice.classList.remove("active");
      }
    } else if (hide === false) {
      if (!localDataNotice.classList.contains("active")) {
        localDataNotice.classList.add("active");
      }
    }
  }
}
