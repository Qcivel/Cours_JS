// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1
console.log("***************Exercice 1***************");
let tab =[4,12,5,6,8];

function positionBiggest (tableau){
    let numberMax = tableau [0] ;
    let savePosition = 0 ;
    for (let i = 1 ; i < tableau.length ; i ++){
        if (tableau[i] > numberMax){
            numberMax = tableau[i];
            savePosition = i ;
        }
    }
    return savePosition ;
} 

console.log(positionBiggest(tab));

// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
console.log("***************Exercice 2***************");
function totalTab (tableau){
    let saveNumber = 0 ;
    for (let i = 0 ; i < tableau.length ; i ++){
        saveNumber += tableau [i];
    }
    return saveNumber ;
}
console.log(totalTab(tab));


// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.
console.log("***************Exercice 3***************");
let tab1 = [-1,5,-2,5];
function positiveTab (tableau){
    let saveNumber = 0 ;
    for (let i = 0 ; i < tableau.length ; i ++){
        if (tableau[i] >=0)
            saveNumber += tableau [i];
    }
    return saveNumber ;
}
console.log(positiveTab(tab1));


// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.
console.log("***************Exercice 4***************");
function negativeTab (tableau){
    let saveNumber = 0 ;
    for (let i = 0 ; i < tableau.length ; i ++){
        if (tableau[i] < 0)
        saveNumber += tableau [i];
    }
    return saveNumber ;
}
console.log(negativeTab(tab1));