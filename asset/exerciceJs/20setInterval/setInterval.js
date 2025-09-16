



const monTitre = document.querySelector("h1");
let count = 4;


monTitre.addEventListener("click", function(){

    let interval = setInterval(function(){
        console.log(count);
        console.log("ATTENTION");
        if (count > 0){
            count --;
            monTitre.innerHTML = count;
        }
        },1000);

    setTimeout (function(){
        
        monTitre.innerHTML = "GO GO GO !!!!";
        console.log("Interval arrêté !");
        clearInterval(interval);
    },4000);

});