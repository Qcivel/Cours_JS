/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/

function syracuse(a){
    if (a%2==1){
        console.log(a*3+1);
    } else
        console.log(a/2);
}

syracuse(13);

/*
Écrire une fonction countdown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countdown(3)` devra afficher
3
2
1
0
*/
console.log("countdown")
function countdown (a){
    while(a>=0){
        console.log(a);
        a-=1;
        
}
}

countdown(7);
/*
Écrire une fonction fastCountdown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountdown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/
console.log("fastCountdown");
function fastCountdown (a){
    while(a>=0.1){
        console.log(a);
        a=a/2;
    }
}

fastCountdown(7);

/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/
console.log("envenNumbers");
function evenNumbers(a,b){

    let start;
    let end;

    if (a>b){
        start = b;
        end = a;
    }else {
        start = a;
        end = b;
    }


    for (let i = start+1 ; i < end ; i++){
        if (i % 2 == 0){
            console.log(i);
        }
        
    }
}

evenNumbers(12,5);

/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/

/*
À la main, calculer `euclide(6,10)`.
*/
