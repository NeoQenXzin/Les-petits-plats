// Fonction affichage Tags
function displayTag(tag, id){
    console.log(tag, id);
    if(id === 'ingredient'){
        tagsTemplateIngredients = document.querySelector('.tags-ingredients')
        tagsTemplateIngredients.innerHTML += ` <div class="tag-style" id="${tag.innerText}">${tag.innerText} <span  onclick="supprimerTag('${tag.innerText}')"> <i class="far fa-times-circle"></i> </span></div>`
    }
    else if(id === 'ustencile'){
        tagsTemplateUstenciles = document.querySelector('.tags-ustensiles')
        tagsTemplateUstenciles.innerHTML += ` <div class="tag-style" id="${tag.innerText}">${tag.innerText} <span  onclick="supprimerTag('${tag.innerText}')"> <i class="far fa-times-circle"></i> </span></div>`
    }
    else if(id === 'appareil'){
        tagsTemplateAppareils = document.querySelector('.tags-appareils')
        tagsTemplateAppareils.innerHTML += ` <div class="tag-style" id="${tag.innerText}">${tag.innerText} <span  onclick="supprimerTag('${tag.innerText}')"> <i class="far fa-times-circle"></i> </span></div>`
    }
}
// fonction supprimer tag
function supprimerTag(tag){
    const tagSelect= document.getElementById(tag)
    console.log(tagSelect);
    tagSelect.remove()
}