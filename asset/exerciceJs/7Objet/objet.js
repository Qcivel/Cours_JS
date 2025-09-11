
let voiture = {
    "nbCheveaux" : 500,
    "vitesseMax" : 450,
    "faiblesse" : ["accélération","adhérence"]
};
let afficher = "vitesseMax";

console.log(voiture.vitesseMax);
console.log(voiture["vitesseMax"]);
console.log(voiture [afficher]);
console.log(voiture.faiblesse[1]);

voiture.marque = "BMW";
console.log(voiture.hasOwnProperty("marque"));
delete voiture.marque;
console.log(voiture.hasOwnProperty("marque"));


const guitare = {
    "nbCorde" : 6,
    "marque" : ["fender","Gibson"],
    "micro" : 2
};

console.log(guitare.nbCorde);
guitare.type = "Acoustique";
console.log(guitare.hasOwnProperty("type"));
console.log(guitare.marque[1]);
guitare.nbCorde = 7;
console.log(guitare.nbCorde);
guitare.marque = ["LTD"];
console.log(guitare.marque);

let musique = {
    
    "micro" : 2,
    "groupe" : {
        "ACDC" : "Rock",
        "Elmore James" : "blues",
        "membre" : {
            "guitariste" : [1,2,3],
            "chanteur" : 2,
            "Trompetiste" : "Aucun",
        }
    }
};

console.log(musique.groupe.membre.chanteur);
console.log(musique.groupe.membre.guitariste);

console.log(musique.groupe.membre.guitariste[1]);

let bibliotheque = {
    "ranger" : [1,2,3],
    "livre" : {
        "policier" : 1,
        "Romance" : 2,
    }
    "film" : {
        
    }
    "serie" : {
        "Sitcoms" : "Friends",
        //Meilleurs série de l'univers
        "Action" : "Peaky Blinder",
        //Tres bonne série
        ""

    }
};