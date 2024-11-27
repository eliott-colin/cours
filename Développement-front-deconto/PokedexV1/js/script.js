async function getData(...params) {
    //récup données
    const data = await fetch("./data/data.json")
    .then(response => response.json())
    .catch(error => alert("Erreur : " + error));
    console.log(data);
    
    //récup article + affiche article
    data.forEach(element => {
        let article = document.createElement("article")
        article.innerHTML = `
        <figure>
          <picture>
            <img src="${element.image}"/>
          </picture>
          <figcaption>
            <span class="types">${element.apiTypes[0].name}</span>
            <h2>${element.name}</h2>
            <ol>
              <li>Points de vie : ${element.stats.HP} </li>
              <li>Attaque : ${element.stats.attack}</li>
              <li>Défense : ${element.stats.defense}</li>
              <li>Attaque spécial : ${element.stats.special_attack}</li>
              <li>Vitesse : ${element.stats.speed}</li>
            </ol>
          </figcaption>
        </figure>`
      
      document.querySelector("main").append(article)
        console.log(element)
    });
}

getData();


{/* <picture>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Image Bulbizarre" />
</picture>
<figcaption>
<span class="types">Plante</span>
<h2>Bulbizarre</h2>
<ol>
  <li>Points de vie : 39</li>
  <li>Attaque : 52</li>
  <li>Défense : 43</li>
  <li>Attaque spécial : 60</li>
  <li>Vitesse : 65</li>
</ol>
</figcaption>
</figure> */}