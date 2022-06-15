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

  
  // Tableau de tout les ingredients
  async getAllIngredients () {
     // ? pourquoi cette ligne non utilisé est indispensables ?
      const allRecipe =  await this.getAllRecipesData() 
      let arrayIngredients = []
      recettesFiltrees.forEach(recipe => {
        for(let ingredient of recipe.ingredients){
          if(!arrayIngredients.includes(ingredient.ingredient.toLowerCase())){
            arrayIngredients.push(ingredient.ingredient.toLowerCase())
          }
        }
      })
      return arrayIngredients
    }
    //Tableau de tout les ustensiles
    async getAllUstensils () {
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
    async getAllAppliances () {
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


    // initialisation liste recette au lancement du site
    async init (){
      const recipesData = await this.getAllRecipesData()
      recettesFiltrees = recipesData
      this.displayRecipes(recipesData)
    }

  }
  const app = new App()
  app.init()
  

  
