class App {
    constructor () {
        // api local
        this.recipesApi = new RecipesApi('/data/recipes.json')
        // api github
        // this.photographersApi = new PhotographerApi('https://neoqenxzin.github.io/Les-petits-plats/data/recipes.json')
      }
    
      async displayRecipes () {
        // Je récupère mes datas de mon fichier photographers.json
        const recipesData = await this.recipesApi.getAllRecipes()
        
        // Je prepare l'accès de mes templates a ma RecipeFactory
        const Template = new RecipeFactory()
        
        recipesData.forEach(recipe => {
          const recipeModel = Template.recipeFactory(recipe)
          recipeModel.getRecipeCardDOM()
        })
      }
    }
    const app = new App()
    app.displayRecipes()
    
