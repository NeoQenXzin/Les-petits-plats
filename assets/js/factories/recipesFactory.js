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

                <p> ${id} </p>
                <p> ${servings} </p>
                <p> ${ingredients[1].ingredient} </p>
                <p> ${ustensils[0]} </p>
                <p> ${time} minutes </p>
                <p> ${description} </p>
                <p> ${appliance} </p>
                <h2> ${name} <h2>

            </div>
            `
        }

        return { name, servings, id, ingredients, time, description, appliance, ustensils, getRecipeCardDOM }
    }
}