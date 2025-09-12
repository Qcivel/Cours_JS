
const bar = document.querySelector(".bar");

addEventListener("scroll",function(test){

    const scrollMax = document.body.scrollHeight - innerHeight;
    const onEstOu = pageYOffset / scrollMax * 100;
    bar.style.width = onEstOu + "%";

    console.log(`
        Hauteur page : ${document.body.scrollHeight}
        Hauteur affichage : ${innerHeight}
        Scroll Position : ${pageYOffset}
    `);
    // console.log(test);
})



