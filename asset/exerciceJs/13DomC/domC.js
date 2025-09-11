


const lien = document.body.getElementsByTagName("a")[0];

console.log(lien.getAttribute("href")); // Contenu du href original
lien.setAttribute("href","http://super.com");

console.log(lien.getAttribute("href"));// href modifié
