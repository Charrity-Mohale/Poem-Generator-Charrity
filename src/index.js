function generatePoem(event) {
    event.preventDefault();
    
    let poemElement = document.querySelector("#poem");

    new Typewriter("#poem", {
      strings: ["Hello World"],
        autoStart: true,
        delay: 10,
      cursor: "",
    });
}


let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);