// Le but de cet exercice est de simuler des combats entre des personnages
// Un personnage sera représenté par un nom, un nombre de points de vie, un nombre de points de mana, une force

// 1) Comment faire pour stocker toutes ces informations dans une seule variable ?

// 2) Créer une variable firstPlayer et stocker dedans le personnage "Nico Minoru" qui a 50 points de vie, 100 points de mana, et 10 de force.
console.log("***************exo2***************");

let NAME = 0;
let HP = 1;
let MANA = 2 ;
let STRENGTH = 3;
let SPELL = 4;
let firstPlayer = ["Nico Minoru", 120, 100, 50,80];
console.log(firstPlayer[NAME]);


// 3) Créer une variable secondPlayer et stocker dedans le personnage "Spiderman" qui a 120 points de vie, 0 point de mana, et 50 de force.
let secondPlayer = ["Spiderman", 120, 100, 50,80];
console.log(secondPlayer[NAME]);
// 4) Donner 25 points de vie supplémentaires au premier personnage.
// firstPlayer[HP]+=25;
console.log(firstPlayer[HP])


// 5) Créer une fonction displayInfo qui reçoit un personnage en entrée et qui affiche dans la console un message à propos de ce personnage (cf en dessous de la fonction).
let pointHp = "point";
let pointMana = "point";
let pointStrength = "point";

function displayInfo(player) {
    // console.log(`${player.name} a tant de point de vie`)
    

    if (player[HP] > 1){
        pointHp = "points";
    } else
        pointHp = "point"
    if (player[MANA] > 1){
        pointMana = "points";
    } else
        pointMana = "point";
    if (player[STRENGTH] > 1){
        pointStrength = "points";
    } else
        pointStrength = "point";

	console.log(player[NAME],"a",player[HP],pointHp,"de vie",player[MANA],pointMana,"de mana et",player[STRENGTH],pointStrength,"de force");
}
// Par exemple, 
displayInfo(firstPlayer);
// devra afficher :
// Nico Minoru a 50 points de vie, 100 points de mana et 10 points de force.

// 6) Trouver l'erreur de français dans la fonction précédente (:innocent:) en la testant avec le second personnage.
// l'erreur est le "s" dans point.
// 7) Corriger la fonction pour faire disparaître cette erreur.

// https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/11/12201506/clean_259.jpg
// 8) Le deuxième personnage a perdu 3 de vie. Décrémenter la variable correspondante.
// secondPlayer[HP]-=3;
// 9) Vérifier que
displayInfo(secondPlayer);
// affiche bien : "Spiderman a 117 points de vie, 0 point de mana, et 50 de force."

// 10) Écrire une fonction directHit qui reçoit deux personnages en entrée et qui fait perdre des points de vie au second. Le nombre de points de vie perdus sera égal à la force du premier personnage.
function directHit(player1, player2) {
	console.log(player1[NAME],"HIT",player2[NAME]);
    player2[HP]-=player1[STRENGTH];
    console.log(player2[NAME], "a maintenant",player2[HP],"HP");
}
// directHit(firstPlayer,secondPlayer);
// 11) Utiliser la fonction précédente pour que le second personnage tape le premier personnage.
// directHit(secondPlayer, firstPlayer); 
	


// 12) Le second personnage boit une potion de soin ! Ajouter 3 points de vie à Spiderman.
// secondPlayer[HP]+=3;
// 13) Le premier personnage va boire plusieurs potions.
// let randomNumber = Math.floor(Math.random()*8)+2;
// console.log("Nico Minoru s'apprête à boire",randomNumber,"potions de vie !");
// firstPlayer[HP]+=randomNumber;
// displayInfo(firstPlayer);

// 14) Écrire une fonction qui reçoit deux personnages A et B en entrée et qui fait lancer un sort à A pour attaquer B
// Cette fonction doit :
// - vérifier que le personnage a au moins 10 points de mana ; si ce n'est pas le cas, la fonction est terminée
// - faire perdre 10 points de mana à A
// - faire perdre 25 points de vie à B

// function spellMana (a,b){

//     // if (a[MANA] >= 10){
//     //     a[MANA]-=10;
//     //     b[HP]-=25;
//     //     console.log("HIT 25!!");
//     // } else
//     //     console.log("No mana!!")
// }
// spellMana(firstPlayer,secondPlayer);
// spellMana(secondPlayer,firstPlayer);

function spellMana (player){
    let costSpell = 10;
    if (player[MANA] >= costSpell){
    player[MANA]-=costSpell;
    }
    else{
        return false;
        }

} 


//15 Écris une fonction isAlive(player) qui reçoit un joueur en paramètre et retourne true si le joueur a encore des points de vie, false sinon.
//  Exemple attendu :
// Si Spiderman a 117 HP, isAlive(secondPlayer) doit renvoyer true.
// Si on met ses HP à 0, isAlive(secondPlayer) doit renvoyer false.

function isAlive(player){

    return player[HP] > 0;
}

console.log(isAlive(firstPlayer));

//16 Écris une fonction fight(player1, player2) qui :

// Fait attaquer player1 contre player2 (comme dans directHit).
// Puis, si player2 est encore en vie, fait attaquer player2 contre player1.
// À la fin, affiche l’état des deux joueurs avec displayInfo.

function fight(player1,player2){
    let player1Count = 0;
    let player2Count = 0;
    let player1HpSave = player1[HP];
    let player2HpSave = player2[HP];
    let player1ManaSave = player1[MANA];
    let player2ManaSave = player2[MANA];

    console.log(player1[NAME],"engage le combat contre",player2[NAME]);

    while ((player1Count!=3) && (player2Count!=3)){
        player1[HP] = player1HpSave;
        player2[HP] = player2HpSave;
        player1[MANA] = player1ManaSave;
        player2[MANA] = player2ManaSave;

        while (isAlive(player1) && isAlive(player2)) {

            //attaque de player1
            console.log(player1[NAME],"Attaque",player2[NAME]);
            // Chance d'attaque
            if(Math.random() < 0.3){
            console.log(player1[NAME]," a raté son attaque !")
            }// chance de cc
            else if (Math.random() < 0.1){
            console.log(player1[NAME],"cout critique !");
            player2[HP]-=player1[STRENGTH]*2;
            console.log(player1[NAME],"inflige un cout critique de ",(player1[STRENGTH]*2))

            } else if ((spellMana(player1)) && (Math.random() < 0.3)){
                console.log(player1[NAME],"lance un sort !");
                player2[HP]-=player1[SPELL];

            } else {
            player2[HP]-=player1[STRENGTH];
            console.log(player1[NAME],"attaque et inflige",player1[STRENGTH],"dégats");
            console.log(player1[NAME],"a",player1[HP],"HP et",player2[NAME],"a",player2[HP],"HP");
            }

            if(!isAlive(player2)){
                console.log(player2[NAME],"Est mort !!!");
                player1Count +=1;
                console.log(player1[NAME],"a gagné",player1Count,"fois");
            }

            //Attaque de player2
            console.log(player2[NAME],"Attaque",player1[NAME]);
            //Chance d'attaque
            if(Math.random() < 0.3){
            console.log(player2[NAME]," a raté son attaque !")
            }
            // Chance de cc
            else if (Math.random() < 0.3){
            console.log(player2[NAME],"cout critique !");
            player1[HP]-=player2[STRENGTH]*2;
            console.log(player2[NAME],"inflige un cout critique de ",(player2[STRENGTH]*2))

            } else if ((spellMana(player2)) && (Math.random() < 0.8)){
            console.log(player2[NAME],"lance un sort !");
            player1[HP]-=player2[SPELL];

            } else {
            player1[HP]-=player2[STRENGTH];
            console.log(player2[NAME],"attaque et inflige",player2[STRENGTH],"dégats");
            console.log(player1[NAME],"a",player1[HP],"HP et",player2[NAME],"a",player2[HP],"HP");
            }

            if(!isAlive(player1)){
            console.log(player1[NAME],"Est mort!!!")
            player2Count +=1;
            console.log(player2[NAME],"a gagné",player2Count,"fois");
            }
        }
        console.log(player1[NAME],"a",player1[HP],"HP et",player2[NAME],"a",player2[HP],"HP");
        
    } if (player1Count == 3){
    return console.log(player1[NAME],"a gagné")
    } else {
    return console.log(player2[NAME],"a gagné")
    }
    
    
}
fight(firstPlayer,secondPlayer);
