class RecipeFactory {
    constructor (data) {
        if (data) {
            return new Recipe(data)
        }
    }
    
    recipeFactory (data) {
        const { name, servings, id, ingredients, time, description, appliance, ustensils } = data

        function getRecipeCardDOM () {
          const searchResultSection = document.querySelector('.search-result')
          searchResultSection.innerHTML +=
            `
            <div class="recetteCard">
                <div class="img-proto"></div>
                <div class="recette-content">
                    <div class="titre-duree-recette">
                        <h2><span class="nom-recette"> ${name} </span> <span class="duree-recette"><img src="assets/img/time.svg" alt="icone horloge">  ${time} min</span><h2>
                    </div>
                    <div class="ingredients-description-recette">
                        <div class="ingredients-recette"> 
                        ${ingredients[1].ingredient} : ${ingredients[1].quantity} ${ingredients[1].unit ? ingredients[1].unit : ""} </div>
                        <div class="description-recette">${description}</div>
                    </div>
                </div>
            </div>
            `
        }

        return { name, servings, id, ingredients, time, description, appliance, ustensils, getRecipeCardDOM }
    }
}