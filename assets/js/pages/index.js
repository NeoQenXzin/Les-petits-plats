class App {
  constructor () {
      // api local
      this.recipesApi = new RecipesApi('/data/recipes.json')
      // api github
      // this.recipesApi = new RecipesApi('https://neoqenxzin.github.io/Les-petits-plats/data/recipes.json')
    }
  
    async getAllRecipesData() {
    const recipesData = await this.recipesApi.getAllRecipes() 
    return recipesData
  }
    
    async displayRecipes () {
      // Je récupère mes datas json
      const recipesData = await this.getAllRecipesData() 
      // Je prepare l'accès de mes templates a ma RecipeFactory
      const RecetteFactory = new RecipeFactory()
      
      recipesData.forEach(recipe => {
        const Recette = RecetteFactory.createRecipe(recipe)
        // console.log(Recette, Recette.ingredients);
        RecetteFactory.displayRecipeCardDOM(Recette)
      })
    }

    // Tableau de tout les ingredients
    async getAllIngredients () {
      const allRecipe = await this.getAllRecipesData()
      const arrayIngredients = []
      allRecipe.forEach(recipe => {
        for(let ingredient of recipe.ingredients){
          // console.log(ingredient.ingredient)
          if(!arrayIngredients.includes(ingredient.ingredient.toLowerCase())){
            arrayIngredients.push(ingredient.ingredient.toLowerCase())
          }
        }
      })
      // console.log(arrayIngredients);
      return arrayIngredients
    }
    
    //Tableau de tout les ustensiles
    async getAllUstensils () {
      const allRecipe = await this.getAllRecipesData()
      const arrayUstensils = []
      allRecipe.forEach(recipe => {
        for(let ustensil of recipe.ustensils){
          // console.log(ustensil)
          if(!arrayUstensils.includes(ustensil.toLowerCase())){
            arrayUstensils.push(ustensil.toLowerCase())
          }
        }
      })
      // console.log(arrayUstensils);
      return arrayUstensils
    }
    //Tableau de tout les appareils
    async getAllAppliances () {
      const allRecipe = await this.getAllRecipesData()
      const arrayAppliances = []
      allRecipe.forEach(recipe => {
          if(!arrayAppliances.includes(recipe.appliance.toLowerCase())){
            arrayAppliances.push(recipe.appliance.toLowerCase())
          }     
      })
      // console.log(arrayAppliances);
      return arrayAppliances
    }

  }
  const app = new App()
  app.displayRecipes()
 
  
