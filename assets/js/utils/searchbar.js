/**Option1 recherche avec while/for */

const noResultDiv = document.getElementById('no-result')
// Selectionner la barre de recherche
const searchBar = document.getElementById('searchbar')
// mettre ecouteur d'evenement sur input se declenche a partir de 3 lettre
searchBar.addEventListener('keyup', rechercheStart)

async function rechercheStart() {
    if (searchBar.value.length > 2) {
        mainSearch(searchBar.value)
        // Je recupere les recettes correspondantes a la recherche dans un tableau
        recettesFiltrees = await app.getSearchingRecipe(searchBar.value)
         
    }
    // Quand recherche vide toutes les recettes repassent en display flex
    if (searchBar.value === "") {
        //if tag ... else a completer
        recettesFiltrees = await app.getAllRecipesData()
        const allCards = document.querySelectorAll('.recette-card')
        for (i = 0; i < allCards.length; i++) {
            allCards[i].classList.add('show')
        }
        noResultDiv.innerText =''

    }
}


// recherche occurence dans ingredient , description et titre recette
function mainSearch(searchBarRecherche) {
    let resultat = false
    const allCards = document.querySelectorAll('.recette-card')
    for (let card of allCards) {
        const ingredientsRecette = card.querySelector('.ingredients-recette')
        const descriptionRecette = card.querySelector('.description-recette')
        const nomRecette = card.querySelector('.nom-recette')

        if (nomRecette.textContent.toLowerCase().match(searchBarRecherche.toLowerCase()) ||
            descriptionRecette.textContent.toLowerCase().match(searchBarRecherche.toLowerCase()) ||
            ingredientsRecette.textContent.toLowerCase().match(searchBarRecherche.toLowerCase())) {

            card.classList.add('show')
            resultat = true
            if (card.classList.contains('hide')) {
                card.classList.remove('hide')
            }
        } else {
            card.classList.add('hide')
            if (card.classList.contains('show')) {
                card.classList.remove('show')
            }
        }
    }

    if(!resultat === true){
        noResultDiv.innerText = `"Aucune recette ne correspond à votre critère... Vous pouvez chercher " tarte aux pommes", "poissons", etc."`
    }
    else{
        noResultDiv.innerText =''
    }

   
}