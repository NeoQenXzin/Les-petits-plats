class RecipeFactory {
    constructor () {
        
    }
    

    // Permet dans rentrer dans modele
    createRecipe(singleRecetteData){
        return new Recipe(singleRecetteData)
    }

        
         displayRecipeCardDOM (data) {

            const searchResultSection = document.querySelector('.search-result')

            searchResultSection.innerHTML +=
                `
                    <div class="recette-card show">
                
                        <div class="img-proto"></div>
                        <div class="recette-content">
                        <div class="titre-duree-recette">
                            <h2><span class="nom-recette"> ${data.name} </span> <span class="duree-recette"><img src="assets/img/time.svg" alt="icone horloge">  ${data.time} min</span><h2>
                        </div>
                        <div class="ingredients-description-recette">
                            <div class="ingredients-recette" id="list-ingredients${data.id}"> </div>
                            <div class="description-recette">${data.description}</div>
                        </div>
                    </div>
                    `
            // Affichage des ingrédients     
            data.ingredients.forEach(ingredient => {
                const template = document.getElementById('list-ingredients'+data.id)
                if(ingredient.quantity && ingredient.unit){
                    template.innerHTML += 
                        `  ${ingredient.ingredient} : ${ingredient.quantity} ${ingredient.unit} 
                            <br> 
                        `       
                }
                else if (ingredient.quantity){
                    template.innerHTML += 
                    `  ${ingredient.ingredient} : ${ingredient.quantity}
                        <br> 
                    `      
                }
                else {
                    template.innerHTML += 
                    `  ${ingredient.ingredient} 
                        <br> 
                    `      
                }
            })
            
        }
    }
