

const txt = document.body.getElementsByTagName("p");


const texteTab = Array.from(txt);
texteTab.map (txt => txt.innerHTML = "LOL HACKED");

console.log(texteTab);

