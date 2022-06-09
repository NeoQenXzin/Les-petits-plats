// Je récupère la liste des recette affichée
// function actualSearchTab(){
//     const allCards = document.querySelectorAll('.recette-card')
//     const newList = []
//     for(let card of allCards){
//         const ingredientsRecette = card.querySelector('.ingredients-recette')
//         const descriptionRecette = card.querySelector('.description-recette')
//         const nomRecette = card.querySelector('.nom-recette')
//         if(nomRecette.textContent.toLowerCase().match(searchBarRecherche.toLowerCase()) ||
//         descriptionRecette.textContent.toLowerCase().match(searchBarRecherche.toLowerCase()) || 
//         ingredientsRecette.textContent.toLowerCase().match(searchBarRecherche.toLowerCase())) {
//             // card.style.display = "flex"    
//             newList.push(card)
//         }
//         // else {card.style.display = "none"}
//     }
//     return newList
// }

// Je récupère la liste des recette affichée
function actualSearchTab(){
    const newList = []
    const allCards = document.querySelectorAll('.recette-card.show')
    for(let card of allCards){ 
            newList.push(card)
            console.log('thats it');      
        console.log(newList);
    }
    return newList
}
// Je la passe a mes boutons filtres pour la recherche avancé
// Je nouvelle liste avec les tags






//Fonction tri liste par input bouton filtre
function listRechercheStart(categorie) {
    const listSearchIngredients = document.getElementById('searchbar-ingredients')
    const listSearchAppareils = document.getElementById('searchbar-appareils')
    const listSearchUstenciles = document.getElementById('searchbar-ustenciles')
    
    switch (categorie) {
        case 'ingredients':
            listSearchIngredients.addEventListener('keyup', () => {
                if(listSearchIngredients.value.length > 0){
                    listFiltreRecherche(listSearchIngredients.value)
                }
                else {
                    listFiltreRecherche('null')
                }
            })
            break
            case 'appareils':
                listSearchAppareils.addEventListener('keyup', () => {
                    if(listSearchAppareils.value.length > 0){
                        listFiltreRecherche(listSearchAppareils.value)
                    }
                    else{
                        listFiltreRecherche('null')
                    }
                })
            break
                case 'ustenciles':
                    listSearchUstenciles.addEventListener('keyup', () => {
                        if(listSearchUstenciles.value.length > 0){
                            listFiltreRecherche(listSearchUstenciles.value)
                        }
                        else{
                            listFiltreRecherche('null')
                        }
                    })
            break
            default:
           console.log('pas de categorie');

    }
   
}
// Affiche list recherche sous boutton filtre
function listFiltreRecherche(recherche){
    const allButtonOfList = document.querySelectorAll('.buttons-list')
    let nbreButton = 0
    for(let button of allButtonOfList){
        if(recherche === 'null'){
            button.style.display = 'flex'
        }
        else if(button.id.toLowerCase().match(recherche.toLowerCase())){
            button.style.display = 'flex'
            nbreButton++
        }
        else{
            button.style.display = 'none'
            
        }
    }
    if(nbreButton === 0){
        console.log('Aucun résultats trouvé');
    }
}


// Recherche principale 
// recherche occurence dans ingredient , description et titre recette
function listSearch(searchBarRecherche){
    const allCards = document.querySelectorAll('.recette-card')
    const newList = []
    for(let card of allCards){
        const ingredientsRecette = card.querySelector('.ingredients-recette')
        const descriptionRecette = card.querySelector('.description-recette')
        const nomRecette = card.querySelector('.nom-recette')
        if(nomRecette.textContent.toLowerCase().match(searchBarRecherche.toLowerCase()) ||
        descriptionRecette.textContent.toLowerCase().match(searchBarRecherche.toLowerCase()) || 
        ingredientsRecette.textContent.toLowerCase().match(searchBarRecherche.toLowerCase())) {
            // card.style.display = "flex"    
            newList.push(card)
        }
        // else {card.style.display = "none"}
    }
    return newList
}