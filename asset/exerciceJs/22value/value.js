
const monTxt = document.querySelector("textarea");
const rendu = document.querySelector("div");


monTxt.addEventListener("keyup", function(){
    rendu.innerHTML = marked (monTxt.value);
    
});

monStockage = localStorage;
localStorage.setItem("monChat", "Tom");
console.log(localStorage.getItem("monChat"));