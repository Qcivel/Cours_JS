// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
console.log("*************ex1*************");
let tab = [1,2,3,4];


function table(tableau){
    
    console.log(tableau[tableau.length-1]);
}

table(tab);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
console.log("*************ex2*************");
function returntab (tableau){
    
    return(tableau[tableau.length-1]);
}

console.log(returntab(tab));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
console.log("*************ex3*************");

function minTab (tableau) {

    let valmin=tableau[0];
    for (let i = 1 ; i < tableau.length ; i++){
        if (tableau[i] < valmin ){
            valmin = tableau[i];
            }
    }
      return valmin;
}

console.log(minTab(tab));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
console.log("*************ex4*************");
function maxTab (tableau) {

    let valmax=tableau[0];
    for (let i = 1 ; i < tableau.length ; i++){
        if (tableau[i] > valmax ){
            valmax = tableau[i];
            }
    }
      return valmax;
}

console.log(maxTab(tab));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
console.log("*************ex6*************");
let tab1 = [12,65,78,552,64,15,12];

function egalTab (tableau,n){
count = 0;
   
    for (let i = 0 ; i < tableau.length ; i++){
        if (tableau[i] == n){
           count++
        }
    }
    return count;
}
console.log(egalTab(tab1,1));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
console.log("*************ex7*************");


function trueTab (tableau,n){
let exist = false 

    for (let i = 0 ; i < tableau.length-1 ; i++){
        if (tableau[i] == n){
            exist = true;
        } 
    }
     console.log(exist);
}
trueTab(tab1,65);
// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].


    let tabTest = []
    for (let i = 1 ; i <7777 ; i++){
        tabTest.push(i);
    }
        console.log(tabTest);


// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]