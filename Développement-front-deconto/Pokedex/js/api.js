
async function getData(...params) {
    const data = await fetch("./json/data.json")
    .then(response => response.json())
    .catch(error => alert("Erreur : " + error));

      
    console.log(data);
}

getData();


// /* OU si on a pas besoin du catch  : */
// const reponse = await fetch("data.json");
// const data = await reponse.json();