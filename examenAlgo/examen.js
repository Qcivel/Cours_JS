console.log("****************1.2 Question 9****************");

for (let i = 1 ; i < 4 ; i++){
    for (let j = 7 ; j < 10 ; j++){
        console.log(i,j);
    }
}


console.log("2 TP1 - Les jours de la semaine")
console.log("****************2 Question 26****************");
let t = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
console.log(t);

console.log("****************2 Question 27****************");
console.log("le nom qui correspond à 3 est",t[3]);
console.log("****************2 Question 28****************");

function nameOfDay(n){
    console.log(t[n]);
}

nameOfDay(3);

console.log("****************2 Question 29****************");

function bissextiles (années){

    

    if (années%400 == 0){
        console.log(années, "est bissextile car multiple de 400");
    } else if (années%4 == 0 && années%100 != 0){
        console.log(années, "est bissextile car multiple de 4 et n'est pas multiple de 100");
    } else 
        console.log (années, "n'est pas bissextile car pas multiple de 400");
        
}

bissextiles(2000);

console.log("****************2 Question 30****************");

function isLeapYear (year){


    // if (year%400 == 0){
    //     return true;
    // }
    
    // if (year%4 == 0 && year%100 != 0){
    //     return true;
    // }

    // return false;

// détermine si year est bissextil ou non
    return year%400==0 || (year%4 == 0 && year%100 != 0);
        
}

console.log(isLeapYear(2020));

console.log("****************2 Question 31****************");

function nbOfDaysBetweenYears (year1,year2){

    let total = 0 ; 
    //determine combien d'années il y a entre year1 et year
    for (let year = year1 ; year <= year2; year++ ){
        total += 365 ;
        if (isLeapYear(year)){
            total++;
        }
    }
    return total;

}

console.log(nbOfDaysBetweenYears (2021,2021));
console.log(nbOfDaysBetweenYears (2020,2021));
console.log(nbOfDaysBetweenYears (2000,2021));

console.log("****************2 Question 32****************");

// let tabTest = [];
//     for (let i = 1 ; i <=7777 ; i++){
//         tabTest.push(i);
//     }
//         console.log(tabTest);

function nbOfDaysInYear (year){

    let yearMonth = [31,28,31,30,31,31,30,31,30,31];

    if (isLeapYear(year)){
        yearMonth[1]=29;
    }
    return yearMonth;
    
    }
    console.log(nbOfDaysInYear (2020));


console.log("****************2 Question 33****************");

function numOfMonth (mois){
    let month = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre",]

    for (let i = 0 ; i < month.length ; i++){
        if (month[i] == mois)
        return i;
    }
}

console.log(numOfMonth ("février"));



