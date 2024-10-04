function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "7f04b746839fb9480ae129200267toa1";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a poem expert and write very good short poem. Your mission is to write a 4 line poem in basic HTML. Make sure to be short and do not include any messages except the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");

  axios.get(apiUrl).then(displayPoem);

  let poemElement = document.querySelector("#poem");
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);
