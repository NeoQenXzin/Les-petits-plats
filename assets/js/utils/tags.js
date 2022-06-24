// Fonction affichage Tags
function displayTag(tag, id){
   const tagsTemplateIngredients = document.querySelector('.tags-ingredients')
   const tagsTemplateUstenciles = document.querySelector('.tags-ustensiles')
   const tagsTemplateAppareils = document.querySelector('.tags-appareils')
   const tagsId = document.querySelectorAll('.tag-style')
    console.log(tagsTemplateIngredients, id);
   
    if(id === 'newingredient'){
        for(let tagId of tagsId){
            if(tagId.id == tag){
                return console.log('Tag déjà utilisé');
            }    
        }
        tagsTemplateIngredients.innerHTML += ` <div class="tag-style" id="${tag}">${tag.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'_')} <span  onclick="supprimerTag('${tag}')"> <i class="far fa-times-circle"></i> </span></div>`
        tagsSaveIngredients.push(tag.toLowerCase())
    }
    else if(id === 'ustencile'){
        for(let tagId of tagsId){
            if(tagId.id == tag){
                return console.log('Tag déjà utilisé');
            }    
        }
        tagsTemplateUstenciles.innerHTML += ` <div class="tag-style" id="${tag}">${tag} <span  onclick="supprimerTag('${tag}')"> <i class="far fa-times-circle"></i> </span></div>`
        tagsSaveUstenciles.push(tag.toLowerCase())
    }
    else if(id === 'appareil'){
        for(let tagId of tagsId){
            if(tagId.id == tag){
                return console.log('Tag déjà utilisé');
            }    
        }
        tagsTemplateAppareils.innerHTML += ` <div class="tag-style" id="${tag}">${tag} <span  onclick="supprimerTag('${tag}')"> <i class="far fa-times-circle"></i> </span></div>`
        tagsSaveAppareils.push(tag.toLowerCase())
    }
    //On reinitialise la barre de recherche et on actualise la recherche avec le tags
    searchBar.value = ""
    rechercheStart()
}

// fonction supprimer tag
function supprimerTag(tag){
    const tagSelect= document.getElementById(tag)
    console.log(tagSelect);
    tagSelect.remove()
    // Supprime tags du tableau de sauvegarde
   let  myIndexIngr = tagsSaveIngredients.indexOf(tag)
if (myIndexIngr !== -1) {
   tagsSaveIngredients.splice(myIndexIngr, 1)
}
   let  myIndexApp = tagsSaveAppareils.indexOf(tag)
if (myIndexApp !== -1) {
   tagsSaveAppareils.splice(myIndexApp, 1)
}
   let  myIndexUst = tagsSaveUstenciles.indexOf(tag)
if (myIndexUst !== -1) {
   tagsSaveUstenciles.splice(myIndexUst, 1)
}
verifTagsRestant() 
}

// Si plus de tag reinitialise la liste des recettes, sinon reactualise la liste en prenant en compte les tags restant
function verifTagsRestant(){
    if(tagsSaveIngredients.length < 1 && tagsSaveAppareils.length < 1 && tagsSaveUstenciles.length < 1){
        const searchResultSectionBasic = document.querySelector('.search-result')
        searchResultSectionBasic.innerHTML =''
        app.init()
        searchBar.value = ''
    }
    
        //On actualise la recherche
        rechercheStart()    
    
}