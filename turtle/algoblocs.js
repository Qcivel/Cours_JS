/*
//exo A1
//Initialisation
setPos(300, 300);
changeColor(color.red);
setLineWidth(10);
faceDown();

// Réalisation
forward(200)
faceRight();
forward(100)
*/

/*
//exo A2
//Initialisation
setPos(300,300);
changeColor(color.green)
setLineWidth(10);
faceLeft();

//Réalisation
forward(100);
left(90);
forward(100);
left(90);
forward(200);
left(90);
forward(200);
*/

/*
//exo A3
//Initialisation
setPos(300, 300);
changeColor(color.red);
setLineWidth(10);
faceLeft();

//Réalisation
forward(100);
backward(100);
left(90);
forward(100);
faceUp();
forward(200);
backward(100);
faceRight(100);
forward(100);
*/

/*
//exo A4
//Initialisation
setPos(200, 400)
changeColor(color.green)
setLineWidth(10)
faceRight();

//Réalisation
forward(100);
arcLeft(50,180)
forward(50);
arcRight(50,180);
forward(100);
*/

/*
//exo A5
//Initialisation
setPos(300,200);
changeColor(color.fuchsia);
faceRight();
setLineWidth(5);

//Réalisation
arcRight(100,180);
arcRight(50,180);
arcLeft(50,180);
arcLeft(100,180);
*/
/*
//exo A6
//Initialisation
setPos(300,500)
changeColor(color.aqua)
faceUp();
setLineWidth(5);

//Réalisation
forward(100);
up();
forward(100);
down();
forward(200);
*/

/*
//exo A7
//Initialisation
setPos(150,300);
changeColor(color.green);
faceDown();
setLineWidth(5);

//Réalisation
forward(100);
arcLeft(50,180);
forward(50);
up()
forward(50);
down();
forward(100);
arcLeft(50,180);
forward(50);
*/

/*
//exo A8
//Initialisation
setPos(200,200);
changeColor(color.fuchsia)
faceUp();
setLineWidth(5);

//Réalisation
forward(100);
right(90);
forward(200);
right(90);
forward(400);
right(90);
forward(100);
up();
forward(100);
right(90);
forward(100);
down();
forward(100);
*/

/*
//exo A9
//Initialisation
setPos(100,400);
changeColor(color.aqua);
setLineWidth(5);
faceRight();

//Réalisation
arcLeft(50,180);
arcRight(50,180);
forward(200);
arcRight(50,180);
arcLeft(50,180);
faceLeft();
forward(200);
*/

/*
//exo A10
//Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(5);
faceRight();

//Réalisation
arcLeft(50,180);
changeColor(color.green);
arcLeft(100,180);
changeColor(color.yellow);
arcLeft(150,180);
*/

/*
//exo A11
//Initialisation
setPos(100,200);
changeColor(color.blue);
setLineWidth(5);
faceUp();

//Réalisation
//yeux bleu
arcRight(50,180);
up();
faceRight();
forward(100);
down();
faceUp();
arcRight(50,180);
up();

//yeux violet
forward(100);
faceLeft();
forward(50);
down();
faceDown();
arcRight(100,180);
*/

/*
//exo B1
//Initialisation
setPos(100,100);
changeColor(color.green);
setLineWidth(10);
faceRight();

//Réalisation
for(let i = 0 ; i < 4 ; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}
*/

/*

//exo B2
//Initialisation
setPos(50,300);
changeColor(color.red);
setLineWidth(10);
faceUp();

//Réalisation
for(let i = 0 ; i < 4 ; i++){
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}
*/

/*
//exo B3
//Initialisation
setPos(200,200);
changeColor(color.fuchsia)
faceRight();
setLineWidth(10);

//Réalisation
for(let i = 0 ; i < 4 ; i++){
    forward(200);
    arcRight(0,90);
}
*/

/*
//exo B4
//Initialisation
setPos(200,400);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

//Réalisation
for (let i = 0 ; i < 3 ; i++){
    forward(200);
    arcLeft(0,120);
}
*/
/*
//exo B5
//Initialisation
setPos(300,400);
changeColor(color.yellow);
faceUp();
setLineWidth(10);

//Réalisation
forward(200);
for (let i = 0 ; i < 3 ; i++) {
    changeColor(color.red);
    forward(100);
    arcRight(0,120)
}
*/

/*

//exo B6
//Initialisation
setPos(100,400);
changeColor(color.red);
setLineWidth(10);
faceRight();

//Réalisation
for (let i = 0 ; i < 2 ; i++) {
    forward(100);
    faceUp();
    forward(100);
    faceRight()
}
changeColor(color.green);
for (let i = 0 ; i < 3 ; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}
*/
/*
//exo B7
//Initialisation
setPos(200,300);
changeColor(color.green);
faceRight();
setLineWidth(10);

//Réalisation
for(let i = 0 ; i < 3 ; i++){
    forward(100);
    arcLeft(0,120);
}
for(let i = 0 ; i < 4 ; i++){
    forward(100);
    arcRight(0,90);
}
*/
/*
//exo B8
//Initialisation
setPos(300,300);
changeColor(color.green);
setLineWidth(10);
faceRight();

//Réalisation

for(let i = 0 ; i < 8 ; i++){
    forward(200);
    arcRight(0,135);
}
*/
/*
//exo B9
//Initialisation
setPos(100,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

//Réalisation
forward(100);
up();
forward(100);
down();
//Triangle
for(let i = 0 ; i < 4 ; i++){
    forward(200);
    arcRight(0,120);
}
*/

/*
//exo B10
//Initialisation
setPos(50,200);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

//Réalisation
for(let i = 0 ; i < 8 ; i++){
    forward(100);
    arcRight(0,135);
}
up();
forward(200);
down();
changeColor(color.yellow);

for(let i = 0 ; i < 8 ; i++){
    forward(200);
    arcLeft(0,135);
}

faceDown();
up();
forward(200);
changeColor(color.fuchsia);
down();
for(let i = 0 ; i < 8 ; i++){
    forward(150);
    arcLeft(0,135);
}
*/
/*
//exo B11
//Initialisation
setPos(200,300);
changeColor(color.red);
setLineWidth(10);
faceRight();

//Réalisation

for (let i = 0 ; i < 4 ; i++){
    forward(100);
    arcLeft(0,90);
    forward(100);
    arcRight(0,90);
    forward(100);
    arcRight(0,90);
}
*/
/*
//exo B12
//Initialisation
setPos(300,300);
changeColor(color.fuchsia);
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 3 ; i++){
    arcRight(0,90);
    forward(100);
}
up();
forward(100);
down();
changeColor(color.green);
for (let i = 0 ; i < 3 ; i++){
    forward(100);
    arcRight(0,90);
}
*/
/*
//exo B13
//Initialisation
setPos(300,300);
changeColor(color.green);
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 8 ; i++){
    forward(100);
    arcLeft(0,135);
    forward(50);
    arcRight(0,90);
    forward(50);
    arcRight(0,90);
}
*/
/*
//exo B14
//Initialisation
setPos(100,100);
changeColor(color.green);
faceRight();
setLineWidth(10);

//Réalisation
forward(50);
for (let i = 0 ; i < 5 ; i++){
    arcRight(0,120);
    forward(100);
    arcLeft(0,120);
    forward(100);
}
arcRight(0,120);
*/

/*
//exo B15
//Initialisation
setPos(300,400);
changeColor(color.red);
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 4 ; i++){
    forward(100);
    arcLeft(100,90);
}
*/
/*
//exo B16
//Initialisation
setPos(100,500);
changeColor(color.green);
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 4 ; i++){
    arcLeft(50,90);
    arcRight(50,90);
}
faceDown();
arcRight(400,90);
*/

/*
//exo B17
//Initialisation
setPos(200,400);
changeColor(color.blue);
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 6 ; i++){
    arcLeft(100,180);
    arcLeft(0,120)
}
*/
/*
//exo B18
//Initialisation
setPos(200,400);
changeColor(color.blue);
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 8 ; i++){
    forward(400);
    arcLeft(0,90);
    forward(100);
    arcLeft(0,45)
}
*/
/*
//exo C1
//Initialisation
setPos(100,300);
changeColor(color.blue);
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 4 ; i++){
    for (let j = 0 ; j < 3 ; j++){
        forward(100);
        arcRight(0,120);
    }
    forward(100);
}
*/
/*
//exo C2
//Initialisation
setPos(200,500);
changeColor(color.fuchsia);
faceUp();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 5 ; i++){
    for (let j = 0 ; j < 4 ; j++){
        forward(50);
        arcRight(0,90);
    }
    up();
    forward(100);
    down();
}
*/
/*
//exo C3
//Initialisation
setPos(100,300);
shiftColor(0.4);
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 3 ; i++){
    for (let j = 0 ; j < 8 ; j++){
        forward(100);
        arcRight(0,135);
    }
shiftColor(0.1);
up();
forward(200);
down()
}
*/

/*
//exo C4
//Initialisation
setPos(100,300);
changeColor(color.yellow);
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 5 ; i++){
    for (let j = 0 ; j < 3 ; j++){
        changeColor(color.red)
        forward(50);
        arcLeft(0,120);
    }
    for (let j = 0 ; j < 4 ; j++){
        changeColor(color.yellow)
        forward(50);
        arcRight(0,90);
    }
    up();
    forward(100);
    down();
}
*/
/*
//exo C5
//Initialisation
setPos(300,300);
shiftColor(0.15)
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 4 ; i++){
    for (let j = 0 ; j < 8 ; j++){
        forward(200);
        left(135);
    }
    shiftColor(0.25);
    right(90);
}
*/
/*
//exo C6
//Initialisation
setPos(300,300);
changeColor(color.green)
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 3 ; i++){
    for (let j = 0 ; j < 4 ; j++){
        forward(100);
        left(120);
    
    }
    forward(100);
    
}
*/
/*
//exo C7
//Initialisation
setPos(300,300);
changeColor(color.green)
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 8 ; i++){
    for (let j = 0 ; j < 3 ; j++){
        forward(100);
        right(120);
    }
    forward(100);
    left(45);
}
*/
/*
//exo C8
//Initialisation
setPos(300,550);
changeColor(color.green)
faceUp();
setLineWidth(10);

//Réalisation
forward(200);
right(45);

for(let i = 0 ; i < 4 ; i++){
    changeColor(color.red);
    for(let j = 0 ; j < 3 ; j++){
        forward(100);
        right(120);
    }
    changeColor(color.yellow);
    forward(100);
    left(90);
}
*/
/*
//exo C9
//Initialisation
setPos(400,400);
changeColor(color.green)
faceRight();
setLineWidth(10);

//Réalisation
for(let i = 0 ; i < 3 ; i++){
    for (let j = 0 ; j < 3 ; j++){
        for (let k = 0 ; k < 4 ; k++) {
            right(90);
            forward(50);
        }
        forward(50);
        right(120);
    }
    // left(120);
    // forward(200);
}
*/
/*
//exo C10
//Initialisation
setPos(300,100);
changeColor(color.green)
faceDown();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 4 ; i++){
    for (let j = 0 ; j < 4 ; j++){
        for (let k = 0 ; k < 4 ; k++){
            right(90);
            forward(50);
        }
        forward(100);
        right(90);
    }
    forward(200);
}
*/
/*
//exo C11
//Initialisation
setPos(200,200);
shiftColor(0.6)
faceRight();
setLineWidth(10);

//Réalisation
for (let i = 0 ; i < 6 ; i++){
    for (let j = 0 ; j < 6 ; j++){
        for (let k = 0 ; k < 6 ; k++ ){
            forward(100);
            left(120)
        }
        forward(100);
        left(60);
    }
    up()
    forward(200);
    down();
    shiftColor(0.10);
    right(60);
}
*/
/*
// exo D10
//Initialisation
setPos(300,300);
changeColor(color.green);
faceRight();
setLineWidth(10);
let longueur;

//Réalisation
longueur = 100;
for(let i = 0 ; i < 10 ; i++){
    forward(longueur);
    right(90);
    longueur = longueur + 50;
    
}
*/
/*
//exo D11
//Initialisation
setPos(100,300);
changeColor(color.green);
faceRight();
setLineWidth(10);
let longueur;

//Réalisation
longueur = 200;
for (let i = 0 ; i < 5 ; i++){
    for (let j = 0 ; j < 3 ; j++){
        forward(longueur);
        left(120);
    }
    forward(longueur);
    longueur = longueur - 50;
}
*/

//exo D12
//Initialisation
setPos(350,300);
changeColor(color.green);
faceRight();
setLineWidth(10);
let longueur;

//Réalisation
longueur = 50;
for (let i = 0 ; i < 6 ; i++){
    for (let j = 0 ; j < 3 ; j++){
        forward(longueur);
        left(120);
    }
    forward(longueur);
    left(60);
    //longueur = longueur + 50;
    longueur +=50;
}












