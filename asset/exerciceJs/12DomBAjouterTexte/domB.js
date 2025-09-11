


function ajoutTexte(pseudo, duTexte) {
    const newTxt = document.createElement("p");

    newTxt.innerHTML = `<strong> ${pseudo}</strong> : ${duTexte}`;
    document.body.appendChild(newTxt);
}



ajoutTexte("José", "AZERTYUIOP");
ajoutTexte("Sarah", "wxcvb");
ajoutTexte("Truc","Aucune idée");