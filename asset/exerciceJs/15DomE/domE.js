
const titre = document.querySelector("h1");
const lien = document.querySelectorAll("a");

lien[0].addEventListener("click", function(){
    titre.classList.add("maCouleur");
});

lien[1].addEventListener("click", function(){
    titre.classList.remove("maCouleur");
});

lien[2].addEventListener("click", function(){
    titre.classList.toggle("maCouleur");
});



// const link = document.querySelector("a");

// function monClic () {
//     console.log("Bonjour");
//     link.removeEventListener("click", monClic);
// }

// link.addEventListener("click", monClic);


// // addEventListener("keydown",function(event){
// //     console.log(event.key);
// // })