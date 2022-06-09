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
    }
    else if(id === 'ustencile'){
        for(let tagId of tagsId){
            if(tagId.id == tag){
                return console.log('Tag déjà utilisé');
            }    
        }
        tagsTemplateUstenciles.innerHTML += ` <div class="tag-style" id="${tag}">${tag} <span  onclick="supprimerTag('${tag}')"> <i class="far fa-times-circle"></i> </span></div>`
    }
    else if(id === 'appareil'){
        for(let tagId of tagsId){
            if(tagId.id == tag){
                return console.log('Tag déjà utilisé');
            }    
        }
        tagsTemplateAppareils.innerHTML += ` <div class="tag-style" id="${tag}">${tag} <span  onclick="supprimerTag('${tag}')"> <i class="far fa-times-circle"></i> </span></div>`
    }
}
// fonction supprimer tag
function supprimerTag(tag){
    const tagSelect= document.getElementById(tag)
    console.log(tagSelect);
    tagSelect.remove()
}