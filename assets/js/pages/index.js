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
  }
  const app = new App()
  app.displayRecipes()
  
