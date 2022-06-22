"use strict";

class App {
  constructor () {
      // api local
      this.recipesApi = new RecipesApi('/data/recipes.json')
      // api github
      // this.recipesApi = new RecipesApi('https://neoqenxzin.github.io/Les-petits-plats/data/recipes.json')
    }
  
    // Je récupère mes recettes json
    async getAllRecipesData() {
    const recipesData = await this.recipesApi.getAllRecipes() 
    return recipesData
  }
   
  //Je selectionne les recettes correspondante a ma recherche
  async getSearchingRecipe(keyword){   
    let RecipeSearchingTab = []
    const recipesData = await app.getAllRecipesData()
    recipesData.forEach(recipe => {
        let ingredientsSearch = false
        for (let ingredientName of recipe.ingredients) {
            if (ingredientName.ingredient.match(keyword)) {
                ingredientsSearch = true
            }
        }
        if (recipe.name.match(keyword) || recipe.description.match(keyword) || ingredientsSearch === true) {
            RecipeSearchingTab.push(recipe)
    }  
  })
  return RecipeSearchingTab
}

//Je selectionne les recettes correspondante a ma recherche
async getMultiSearchingRecipe(arrayIng, arrayApp, arrayUst){   
  let RecipeMultiSearchingTab = []
  // test compare 2 tableaux
  let checker = (arr, target) => target.every(element => arr.includes(element))
  
  const recipesData = await app.getAllRecipesData()
  recipesData.forEach(recipe => {
      let validatorCount = 0
      //Pour les tags Ingredients
      let ingredientsSearch = false
      let tabIngredients = []
      for (let ingredientName of recipe.ingredients) {
        tabIngredients.push(ingredientName.ingredient.toLowerCase())
      }
      if (checker( tabIngredients, arrayIng ) && arrayIng.length > 0) {
        ingredientsSearch = true
        validatorCount++
      }
     
      // Pour les tags Appareils
      let appareilsSearch = false
      let tabAppareils = []
      tabAppareils.push(recipe.appliance.toLowerCase())
      if(checker( tabAppareils, arrayApp ) && arrayApp.length > 0) {
        appareilsSearch = true
        validatorCount++
      }
      // Pour les tags ustenciles
      let ustencilesSearch = false
      let tabUstenciles = []
      for (let ustencile of recipe.ustensils) {
        tabUstenciles.push(ustencile.toLowerCase())
      }
      if (checker( tabUstenciles, arrayUst) && arrayUst.length > 0) {
        ustencilesSearch = true 
        validatorCount++
      }

      // Pour recherche a trois filtres 
      if(arrayApp.length > 0 && arrayUst.length > 0 && arrayIng.length > 0) {
        console.log(validatorCount);
        if(validatorCount === 3){
          RecipeMultiSearchingTab.push(recipe)

        }
      }
      // Pour recherche a 2 filtres
      else if(arrayUst.length > 0 && arrayApp.length > 0 || arrayUst.length > 0 && arrayIng.length > 0 ||  arrayApp.length > 0 &&  arrayIng.length > 0){
      console.log(validatorCount);
      if(validatorCount === 2){
        RecipeMultiSearchingTab.push(recipe)
        
        }
      }
      // Pour recherche 1 filtre
      else if (ingredientsSearch === true || ustencilesSearch === true || appareilsSearch === true) {
         RecipeMultiSearchingTab.push(recipe)
       } 
  
})
return RecipeMultiSearchingTab
  }


  
  // Tableau de tout les ingredients
  async getAllIngredients (listRecette) {
     // ? pourquoi cette ligne non utilisé est indispensables ?
      const allRecipe =  await this.getAllRecipesData() 
      console.log(allRecipe);
      console.log(listRecette);
      let arrayIngredients = []
      listRecette.forEach(recipe => {
        for(let ingredient of recipe.ingredients){
          if(!arrayIngredients.includes(ingredient.ingredient.toLowerCase())){
            arrayIngredients.push(ingredient.ingredient.toLowerCase())
          }
        }
      })
      return arrayIngredients
    }
    //Tableau de tout les ustensiles
    async getAllUstensils (recettesFiltrees) {
      const allRecipe = await this.getAllRecipesData() 
      let arrayUstensils = []
      recettesFiltrees.forEach(recipe => {
        for(let ustensil of recipe.ustensils){
          if(!arrayUstensils.includes(ustensil.toLowerCase())){
            arrayUstensils.push(ustensil.toLowerCase())
          }
        }
      })
      return arrayUstensils
    }
    //Tableau de tout les appareils
    async getAllAppliances (recettesFiltrees) {
      const allRecipe = await this.getAllRecipesData() 
      let arrayAppliances = []
      recettesFiltrees.forEach(recipe => {
          if(!arrayAppliances.includes(recipe.appliance.toLowerCase())){
            arrayAppliances.push(recipe.appliance.toLowerCase())
          }     
      })
      return arrayAppliances
    }
    
    // J'affiche mes recettes
      async displayRecipes (recipesData) {
        const RecetteFactory = new RecipeFactory()
        recipesData.forEach(recipe => {
          const Recette = RecetteFactory.createRecipe(recipe)
          RecetteFactory.displayRecipeCardDOM(Recette)
        })
      }

      // Afficher recette filtrées
      async displayFilterdRecipes(recipesFilteredList) {
        const RecetteFactory = new RecipeFactory()
        recipesFilteredList.forEach(recipe => {
          const Recette = RecetteFactory.createRecipe(recipe)
          RecetteFactory.displayRecipeCardDOM(Recette)
        })
      }

    // initialisation liste recette au lancement du site
    async init (){
      
      const recipesData = await this.getAllRecipesData()
      recettesFiltrees =  recipesData
      this.displayRecipes(recipesData)
    }

  }
  const app = new App()
  app.init()
  

  
// let array = ['rouge']
// let array2 = 'rouge'
// let array3 = ['jaune', 'bleu']

// let checker = (arr, target) => target.every(v => arr.includes(v));

// if(checker(array, array)){
//   console.log("ok");
// }