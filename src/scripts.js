function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#conditioner", {
    strings: `Rice, oil`,
    autoStart: true,
    delay: 20,
    cursor: " ",
  });
}

let conditionerFormElement = document.querySelector(
  "#conditioner-generator-form"
);
conditionerFormElement.addEventListener("submit", generateRecipe);
