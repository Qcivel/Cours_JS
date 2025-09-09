
let tab = [15, 15, 15,0,0,0,0];


function mention (tableau){
    // let moyen = (tableau[0]+tableau[1]+tableau[2])/tableau.length;
    let moyen = 0;
    for (let i = 0 ; i < tableau.length ; i++){
        moyen += tableau[i]/tableau.length;
    }

    if (moyen >= 15){
        return "Très bien";
    } else if ( moyen >= 10){
        return "Assez Bien";
    } else {
        return "Refus";
    }
}

console.log(mention(tab));
