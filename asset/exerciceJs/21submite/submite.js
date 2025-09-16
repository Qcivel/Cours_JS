
const monLien = document.querySelector("button");
const formulaire = document.querySelector("form");

monLien.addEventListener("click", function (event) {
    event.preventDefault(); // Le lien ne redirige plus.
    console.log("Clic intercepté, pas de redirection !");
    formulaire.reset();
});
