
const lien = document.querySelectorAll("button"); //Bouton changement de coupe
const hair = document.body.getElementsByTagName("img")[3]; // Lien des images des coupes

let hairColor = "black";
let count = 1 ;

// Changement de coupe

lien[0].addEventListener("click", function(){
    console.log("CLICK-GAUCHE");
    console.log(count);
    count -= 1;
    console.log(count);
    if (count <= 1){
        count = 1;
        lien[0].style.opacity="0.5";
    } else if (count > 1){
        lien[1].style.opacity="1";
    }
    hair.setAttribute("src", `asset/img/hair-${hairColor}-${count}.png`);
    
});

lien[1].addEventListener("click", function(){
    console.log("CLICK-DROIT");
    console.log(count);
    count +=1;
    console.log(count);
    if (count >= 3 ){
        count = 3;
        lien[1].style.opacity="0.5";
    } else if (count < 3){
        lien[0].style.opacity="1";
    }
    hair.setAttribute("src", `asset/img/hair-${hairColor}-${count}.png`);
    
});

//Couleurs des cheveux

lien[2].addEventListener("click", function(){
    hairColor = "black"
    hair.setAttribute("src", `asset/img/hair-${hairColor}-${count}.png`);
});

lien[3].addEventListener("click", function(){
    hairColor = "blond";
    hair.setAttribute("src", `asset/img/hair-${hairColor}-${count}.png`);
});

lien[4].addEventListener("click", function(){
    hairColor = "turquoise";
    hair.setAttribute("src", `asset/img/hair-${hairColor}-${count}.png`);
});








