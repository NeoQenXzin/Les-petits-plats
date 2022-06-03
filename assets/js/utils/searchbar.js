/**Option1 recherche avec while/for */

// Selectionner la barre de recherche
const searchBar = document.getElementById('searchbar')
// mettre ecouteur d'evenement sur input se declenche a partir de 3 lettre
searchBar.addEventListener('keyup', rechercheStart)

function rechercheStart() {
    if (searchBar.value.length > 2) {
        mainSearch(searchBar.value)
    }
    // Quand recherche vide toutes les recettes repassent en display flex
    if (searchBar.value === "") {
    const allCards = document.querySelectorAll('.recette-card')
    for(i=0; i< allCards.length; i++){
        console.log(allCards[i]);
        allCards[i].style.display = "flex"    
    }
    }
}


// recherche occurence dans ingredient , description et titre recette
function mainSearch(searchBarRecherche){
    
    const allCards = document.querySelectorAll('.recette-card')
    for(let card of allCards){
        const ingredientsRecette = card.querySelector('.ingredients-recette')
        const descriptionRecette = card.querySelector('.description-recette')
        const nomRecette = card.querySelector('.nom-recette')

        if(nomRecette.textContent.toLowerCase().includes(searchBarRecherche.toLowerCase()) ||
        descriptionRecette.textContent.toLowerCase().includes(searchBarRecherche.toLowerCase()) || 
        ingredientsRecette.textContent.toLowerCase().includes(searchBarRecherche.toLowerCase())) {
            card.style.display = "flex"    
        }
        else {card.style.display = "none"}
    }
}
