import { Character } from "./characters.js";

window.addEventListener("load", () => {
  // Custom popover close button
  const popover = document.getElementById("settings-popover");
  const popoverClose = document.getElementById("popover-close");

  const closePopover = (e) => {
    if (
      e.type === "click" ||
      e.type === "touchstart" ||
      (e.type === "keydown" && e.key === "Enter")
    ) {
      e.preventDefault();
      if (popover.matches(":popover-open")) {
        popover.hidePopover();
      }
    }
  };

  if (popoverClose) {
    popoverClose.addEventListener("click", closePopover);
    popoverClose.addEventListener("touch", closePopover);
    popoverClose.addEventListener("keydown", closePopover);
  }

  let characters = new Character();
});
