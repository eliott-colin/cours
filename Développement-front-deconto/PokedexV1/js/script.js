async function getData(...params) {
    //récup données
    const data = await fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
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
            <div class="containerTypes">
            <span class="types"><img src="${element.apiTypes[1] ? element.apiTypes[1].image: element.apiTypes[0].image}" style="width:25px;">${element.apiTypes[1] ? element.apiTypes[1].name: element.apiTypes[0].name}${cardColor(element,article)}</span>
            ${doubleType(element)}
            </div>
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

      //Changer couleur carte
      function doubleType(element) {
        if (element.apiTypes[1] != null) {
            return `<span class="types2"><img src="${element.apiTypes[0].image}" style="width:25px;"> ${element.apiTypes[0].name}</span>`
        }
        return ""
      }

      //Changer couleur carte
      function cardColor(element,article) {
        switch (element.apiTypes[1] ? element.apiTypes[1].name: element.apiTypes[0].name){
            case 'Plante' :
                article.style.backgroundColor = "darkgreen";
                article.style.borderColor = "darkgreen";
                break;
            case 'Eau' :
                article.style.backgroundColor = "blue";
                article.style.borderColor = "blue";
                break;
            case 'Feu' :
                article.style.backgroundColor = "red";
                article.style.borderColor = "red";
                break;
            case 'Combat' :
                article.style.backgroundColor = "orange";
                article.style.borderColor = "orange";
                break;
            case 'Vol' :
                article.style.backgroundColor = "lightblue";
                article.style.borderColor = "lightblue";
                break;
            case 'Électrik' :
                article.style.backgroundColor = "yellow";
                article.style.borderColor = "yellow";
                break;
            case 'Sol' :
                article.style.backgroundColor = "#8b4513";
                article.style.borderColor = "#8b4513";
                break;
            case 'Roche' :
                article.style.backgroundColor = "darkgoldenrod";
                article.style.borderColor = "darkgoldenrod";
                break;
            case 'Psy' :
                article.style.backgroundColor = "purple";
                article.style.borderColor = "purple";
                break;
            case 'Ténèbres' :
                article.style.backgroundColor = "black";
                article.style.borderColor = "black";
                break;
            case 'Spectre' :
                article.style.backgroundColor = "indigo";
                article.style.borderColor = "indigo";
                break;
            case 'Dragon' :
                article.style.backgroundColor = "darkblue";
                article.style.borderColor = "darkblue";
                break;
            case 'Fée' :
                article.style.backgroundColor = "#FFC0CB";
                article.style.borderColor = "#FFC0CB";
                break;
            case 'Acier' :
                article.style.backgroundColor = "gray";
                article.style.borderColor = "gray";
                break;
            case 'Poison' :
                article.style.backgroundColor = "darkviolet";
                article.style.borderColor = "darkviolet";
                break;
            case 'Insecte' :
                article.style.backgroundColor = "lightgreen";
                article.style.borderColor = "lightgreen";
                break;
            case 'Glace' :
                article.style.backgroundColor = "cyan";
                article.style.borderColor = "cyan";
                break;
            case 'Normal' :
                article.style.backgroundColor = "beige";
                article.style.borderColor = "beige";
                break;  
        }
        return ""
    }
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