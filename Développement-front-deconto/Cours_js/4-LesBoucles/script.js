let i = 0;
let res = 0;
while(i <100){
   i++
    res= res+i
    console.log(res,i)
}

let num = prompt("Saissisez un nombre entre 1 et 100.");
let resnum = 0;
let n = 0
do {
    n++
    resnum= resnum+n
    console.log(res,n)
} while (n < num);

let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < 8; index++) {
    console.log(tab[index])
}
for (let index = 0; index < tab.length; index++) {
    console.log(tab[index])
}
