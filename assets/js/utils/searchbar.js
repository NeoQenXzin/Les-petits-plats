// liste recette pour tester code
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
// si clic sur icone rechercher
const iconSearch = document.getElementById('icon-search')
iconSearch.addEventListener('click', () => {
    if (searchBar.value.length > 2) {
        rechercheStart()

    } else {
        alert('Vous devez rentrer au moins 3 caractères dans la barre de recherche')
    }
})
// mettre ecouteur d'evenement sur input se declenche a partir de 3 lettre
searchBar.addEventListener('keyup', rechercheStart)

async function rechercheStart() {
    if (tagsSaveIngredients[0] || tagsSaveAppareils[0] || tagsSaveUstenciles[0]) {
        newrecherche(searchBar.value.toLowerCase())
    } else if (searchBar.value.length > 2) {
        mainSearch(searchBar.value)
    }
    if (searchBar.value === "" && !tagsSaveIngredients.length > 0 && !tagsSaveAppareils.length > 0 && !tagsSaveUstenciles.length > 0) {
        document.querySelector('.search-result').innerHTML = ""
        recettesFiltrees = await getAllRecipesList()
        await app.displayRecipes(recettesFiltrees)
        noResultDiv.innerText = ''

    }
}


// afficher uniquement les recettes qui contiennent le mot taper dans la barre de recherche dans leur titre, description ou ingrédients
async function mainSearch(keyword) {
    const recipesFilteredData = await getRecipesMainSearch(keyword)
    app.displayRecipes(recipesFilteredData)
}
async function getRecipesMainSearch(keyword) {
    let resultat = false

    const recipesFilteredData = []
    document.querySelector('.search-result').innerHTML = ""
    if (tagsSaveIngredients[0] || tagsSaveAppareils[0] || tagsSaveUstenciles[0]) {
        recipesData = recettesFiltrees

    } else {
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
        if (recipe.name.toLowerCase().match(keyword) || recipe.description.toLowerCase().match(keyword) || ingredientsSearch === true) {
            resultat = true
            recipesFilteredData.push(recipe)
        } else if (!resultat === true) {
            noResultDiv.innerText = `"Aucune recette ne correspond à votre critère... Vous pouvez chercher " tarte aux pommes", "poissons", etc."`
        } else {
            noResultDiv.innerText = ''
        }
    })
    recettesFiltrees = recipesFilteredData
    return recipesFilteredData

}

// Recherche avec tags
async function newrecherche(searchBarValue) {
    noResultDiv.innerText = ''
    recettesFiltrees = await app.getMultiSearchingRecipe(tagsSaveIngredients, tagsSaveAppareils, tagsSaveUstenciles)

    app.displayFilterdRecipes(recettesFiltrees)
    if (searchBarValue.length > 2) {
        mainSearch(searchBarValue)
        noResultDiv.innerText = ''
    }

}