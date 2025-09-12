// addEventListener("click", function () {
//     console.log("1 Click");
// });
//Permet d'afficher le nombre de click par l'utilisateur dans la console.

// addEventListener("click",function(unEvent){
//     // console.log(unEvent);
//     // console.log("X =",unEvent.x);
//     // console.log("Y =",unEvent.y);
// });
// Permet d'afficher la position du click dans la console.

// addEventListener("click", function(unEvent){
//     const monImg = document.createElement("img");
//     monImg.setAttribute("src","004_-_Charmander_.jfif");
//     console.log(unEvent.x, unEvent.y);
//     document.body.appendChild(monImg);
    
// })
//Permet d'afficher une image quand on click


// addEventListener("click", function(unEvent){
//     const monImg = document.createElement("img");
//     let taille = 90;
    
//     monImg.setAttribute("src",`https://placecats.com/${taille}/${taille}/`);

//     monImg.style.position="absolute";
//     monImg.style.left = unEvent.x - taille /2 + "px";
//     monImg.style.top = unEvent.y - taille /2 + "px";

    
//     document.body.appendChild(monImg);
    
// })
//Permet de faire afficher l'image au millieu du curseur.


const unTruc = document.querySelector("h1");

addEventListener("mouseout",function(){
    unTruc.style.display = "block";
});



