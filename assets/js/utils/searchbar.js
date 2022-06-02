/** Option 2 recherche fonctionnelle*/
// Selectionner la barre de recherche
const searchBar = document.getElementById('searchbar')
// mettre ecouteur d'evenement sur input se declenche a partir de 3 lettre
searchBar.addEventListener('keyup', rechercheStart)

function rechercheStart() {
    if (searchBar.value.length > 2) {
        getAllrecipesSearch(searchBar.value)
    }
    else if (searchBar.value === "") {
    app.displayRecipes()
}
}


// afficher uniquement les recettes qui contiennent le mot taper dans la barre de recherche dans leur titre, description ou ingrédients
async function getAllrecipesSearch(keyword) {
    const recipesData = await app.getAllRecipesData()
    document.querySelector('.search-result').innerHTML = ""
    const RecetteFactory = new RecipeFactory()

    recipesData.forEach(recipe => {
        let ingredientsSearch = false
        for (let ingredientName of recipe.ingredients) {

            if (ingredientName.ingredient.match(keyword)) {
                ingredientsSearch = true
            }
        }
        // affiche template des résultats correspondants
        if (recipe.name.match(keyword) || recipe.description.match(keyword) || ingredientsSearch === true) {
            const Recette = RecetteFactory.createRecipe(recipe)
            RecetteFactory.displayRecipeCardDOM(Recette)
    }
})
}
// recherche occurence dans ingredient , description et titre recette
// function mainSearch(searchBarRecherche){
//     console.log(searchBarRecherche);
// }
// recherche occurence dans ingredient 
// function occurenceIngredient(ingredient, recherche) {
//     let ingredientTest = ingredient
//     let rechercheCible = recherche

//     for (i = 0; i < ingredient.length; i++) {
//         if (rechercheCible.indexOf(ingredientTest[i]) === -1) {
//             return false
//         }
//         console.log("occurence trouvée");
//     }
// }