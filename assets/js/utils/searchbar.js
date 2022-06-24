async function getAllRecipesList() {
    const response = await fetch('/data/recipes.json')
    let data = await response.json()
    let recipes = await data.recipes
    return recipes
    }

/** Option 2 recherche fonctionnelle*/
//recherche tags
const noResultDiv = document.getElementById('no-result')
let tagsSaveIngredients = []
let tagsSaveAppareils = []
let tagsSaveUstenciles = []
// Selectionner la barre de recherche
const searchBar = document.getElementById('searchbar')
// mettre ecouteur d'evenement sur input se declenche a partir de 3 lettre
searchBar.addEventListener('keyup', rechercheStart)

async function rechercheStart() {
    if(tagsSaveIngredients[0] || tagsSaveAppareils[0] || tagsSaveUstenciles[0]){
        newrecherche(searchBar.value.toLowerCase())
    }
   if (searchBar.value.length > 2) {
        mainSearch(searchBar.value)
    }
    if (searchBar.value === "" && tagsSaveIngredients[''] && tagsSaveAppareils[''] && tagsSaveUstenciles['']) {
        // recettesFiltrees = await getAllRecipesList()
        app.displayRecipes(recettesFiltrees)
        noResultDiv.innerText =''
    
}
}


// afficher uniquement les recettes qui contiennent le mot taper dans la barre de recherche dans leur titre, description ou ingrédients
async function mainSearch(keyword) {
    const recipesFilteredData = await getRecipesMainSearch(keyword)
     console.log(recipesFilteredData);
    app.displayRecipes(recipesFilteredData)
   
}
async function getRecipesMainSearch(keyword){
    let resultat = false

    const recipesFilteredData = []
    document.querySelector('.search-result').innerHTML = ""
    if(tagsSaveIngredients[0] || tagsSaveAppareils[0] || tagsSaveUstenciles[0]){
        recipesData = recettesFiltrees
        
    }else{
        recipesData = await getAllRecipesList()
    }
    recipesData.forEach(recipe => {
        let ingredientsSearch = false
        for (let ingredientName of recipe.ingredients) {

            if (ingredientName.ingredient.match(keyword)) {
                ingredientsSearch = true
            }
        }
        // affiche template des résultats correspondants
        if (recipe.name.match(keyword) || recipe.description.match(keyword) || ingredientsSearch === true) {
            resultat = true
           recipesFilteredData.push(recipe)
        }
        if(!resultat === true){
            noResultDiv.innerText = `"Aucune recette ne correspond à votre critère... Vous pouvez chercher " tarte aux pommes", "poissons", etc."`
        }
        else{
            noResultDiv.innerText =''
        }
})
recettesFiltrees = recipesFilteredData
return recipesFilteredData

}


/**Option1 recherche avec while/for */


// Selectionner la barre de recherche

// mettre ecouteur d'evenement sur input se declenche a partir de 3 lettre

// async function rechercheStart() {
    // si recherche tag en cours
//     if(tagsSaveIngredients[0] || tagsSaveAppareils[0] || tagsSaveUstenciles[0]){
//         newrecherche(searchBar.value.toLowerCase())
//     }
    
//     if (searchBar.value.length > 2) {
//         mainSearch(searchBar.value)
       
        
//     }
//     // Quand recherche vide toutes les recettes repassent en display flex
//     if (searchBar.value === "") {
//         recettesFiltrees = await app.getAllRecipesData()
//         const allCards = document.querySelectorAll('.recette-card')
//         for (i = 0; i < allCards.length; i++) {
//             allCards[i].classList.add('show')
//         }
//         noResultDiv.innerText =''
//     }
// }


// recherche occurence dans ingredient , description et titre recette
// function mainSearch(searchBarRecherche) {
//     let resultat = false
//     const allCards = document.querySelectorAll('.recette-card')
//     for (let card of allCards) {
//         const ingredientsRecette = card.querySelector('.ingredients-recette')
//         const descriptionRecette = card.querySelector('.description-recette')
//         const nomRecette = card.querySelector('.nom-recette')

//         if (nomRecette.textContent.toLowerCase().match(searchBarRecherche.toLowerCase()) ||
//             descriptionRecette.textContent.toLowerCase().match(searchBarRecherche.toLowerCase()) ||
//             ingredientsRecette.textContent.toLowerCase().match(searchBarRecherche.toLowerCase())) {

//             card.classList.add('show')
//             resultat = true
//             if (card.classList.contains('hide')) {
//                 card.classList.remove('hide')
//             }
//         } else {
//             card.classList.add('hide')
//             if (card.classList.contains('show')) {
//                 card.classList.remove('show')
//             }
//         }
//     }

//     if(!resultat === true){
//         noResultDiv.innerText = `"Aucune recette ne correspond à votre critère... Vous pouvez chercher " tarte aux pommes", "poissons", etc."`
//     }
//     else{
//         noResultDiv.innerText =''
//     }

   
// }

// Recherche avec tags
async function newrecherche(searchBarValue){
    noResultDiv.innerText =''
    recettesFiltrees = await app.getMultiSearchingRecipe(tagsSaveIngredients, tagsSaveAppareils, tagsSaveUstenciles)

    app.displayFilterdRecipes(recettesFiltrees)
    if(searchBarValue.length > 2){
        recettesFiltrees = await app.getMultiSearchingRecipe(tagsSaveIngredients, tagsSaveAppareils, tagsSaveUstenciles)
        mainSearch(searchBarValue)
    }
   
}
