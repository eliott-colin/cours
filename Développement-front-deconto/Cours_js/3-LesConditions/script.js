/*let number = 5;
let text = '5';
let isRainingToday = true;

console.log(number == text);

console.log(number === text);

if (isRainingToday) {
    console.log("Where is my umbrella?");
}

let age=prompt("Quel âge as tu ?");
while(isNaN(age) || age < 0) {
    age=prompt("L'âge n'est pas valide ! Quel âge as tu ?");
}
if(age < 18 ){
    alert(`L’utilisateur a ${age} an(s), il est mineur!`);
}else if(age>62){
    alert(`L’utilisateur a ${age} an(s), il est majeur mais aussi retraité !!`);
}else{
    alert(`L’utilisateur a ${age} an(s), il est majeur!`);
}*/

let age=prompt("Quel âge as tu ?");
while(isNaN(age) || age < 0) {
    age=prompt("L'âge n'est pas valide ! Quel âge as tu ?");
}
switch (Number(age)) {
    case 18:
        alert("il vient d’être majeur")
        break;
    case 25:
        alert("il a un quart de siècle")
        break;
    case 50:
        alert("il a un demi siècle")
        break;
    case 62:
        alert("il vient d’être à la retraite")
        break;
    case 100:
        alert("il vient d’être centenaire")
        break;

}