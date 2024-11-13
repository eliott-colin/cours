/* Toutes les variables */
let li = document.querySelector("#listeCourses li");
let dateJour = new Date(Date.now());
let dateJourFr = dateJour.toLocaleDateString('fr-FR');
let titledate = document.querySelector('h2');
let myInput = document.querySelector("input")
let btn = document.querySelector(".btn")
let liste = document.querySelector("ul")


console.log(myInput.innerHTML)
/* Tous les évènements */
titledate.innerHTML = titledate.innerHTML +" : " + dateJourFr;

li.addEventListener('click', ()=>{
    li.classList.toggle("itemCheck")
})
li.addEventListener('dblclick', ()=>{
    liste.removeChild(li)
})

btn.addEventListener('click',()=>{
    addProduct();
})

/* Les fonctions */
function addProduct(){
    if (myInput.value == "") {
        alert("erreur de saisie");
    } else {
        alert("Produit ajouté");
        let newLi = document.createElement("li");
        let vartemp = true;
        document.querySelectorAll("li").forEach(element => {
            vartemp = vartemp && element.innerHTML != myInput.value;
        })
            if(vartemp){
            newLi.innerHTML = myInput.value;
            liste.appendChild(newLi);
            newLi.addEventListener('click', ()=>{
                newLi.classList.toggle("itemCheck")
            })
            newLi.addEventListener('dblclick', ()=>{
                liste.removeChild(newLi)
            })
        }
    }
}