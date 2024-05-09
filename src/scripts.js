function generateRecipe(response) {
  let recipeAnswer = response.data.answer;

  new Typewriter("#conditioner", {
    strings: `${recipeAnswer}`,
    autoStart: true,
    delay: 0,
    cursor: " ",
  });
}

function handleSubmit(event) {
  event.preventDefault();
  let ingredientElement = document.querySelector("#ingredient");
  let ingredient = ingredientElement.value;
  let ingredientPrompt = `please provide a recipe of a homemade hair conditioner using this ingredient ${ingredient}`;
  let context = `please separate tile, ingredients list, and instructions list with a line break and have them in separate div`;
  let apiKey = `1d4e1fa31e8d90b62bfb5t73ob432508`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${ingredientPrompt}&context=${context}&key=${apiKey}`;

  let conditionerElement = document.querySelector("#conditioner");
  conditionerElement.classList.remove("hidden");
  conditionerElement.innerHTML = `<span class="generating">⏳ ⏳ ⏳ generating conditioner recipe......</span>`;

  axios.get(apiUrl).then(generateRecipe);
}

let conditionerFormElement = document.querySelector("#conditioner-generator-form");
conditionerFormElement.addEventListener("submit", handleSubmit);
