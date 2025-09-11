
const film = {
    nom : "Iron-Man",
    style : "Action",
    langue : "fr"
}

const {nom, style:genre,langue} = film;
console.log(nom,genre,langue);


const notes = [12,17,8,9,11,15,14];

const [francais, philo, Lv1, Lv2] = notes;

console.log(notes[4],notes[5],notes[6]);

function melange(tab) {

    for (let i = 0 ; i < tab.length ; i++){
        const random = Math.floor(Math.random() * tab.length);
        [tab[i], tab[random]] = [tab[random], tab[i]];
    }
    return tab
}
console.log(melange([1,2,3,4,5,6]));