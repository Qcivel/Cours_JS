
// let i = 0 ;
// let dessin = [];

// while(i<10){
//     i++;
//     dessin.push("#");
//     console.log(dessin);
// }

let tab = [15, 15, 15];

function moyenne (tableau){
let moyen = 0;
    for (let i = 0 ; i < tableau.length ; i++){
        moyen += tableau[i]/tableau.length;
    }
    return moyen;
}

console.log(moyenne(tab));