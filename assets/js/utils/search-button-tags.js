// Boutons filtre
const ingredientButton = document.getElementById('buttonFilterIngredient')
const appareilButton = document.getElementById('buttonFilterAppareils')
const ustensilesButton = document.getElementById('buttonFilterUstensiles')

// boutons container  input et liste (se substitue aux boutons filtre)
const inputIngredient = document.getElementById('button-contain-ingredients')
const inputAppareils = document.getElementById('button-contain-appareils')
const inputUstenciles = document.getElementById('button-contain-ustenciles')

// Evenements
ingredientButton.addEventListener('click', rechercheRecetteIngredient)
appareilButton.addEventListener('click', rechercheRecetteAppareil)
ustensilesButton.addEventListener('click', rechercheRecetteUstencile)




// Fonction filtrage par ingrédient 
async function rechercheRecetteIngredient() {
    const listIngredients = await app.getAllIngredients()
    // On reinitialise l'affichage des boutons filtres
    if(ustensilesButton.style.display === 'none' || appareilButton.style.display === 'none'){
        inputUstenciles.style.display = 'none'
        ustensilesButton.style.display = 'flex'
        inputAppareils.style.display = 'none'
        appareilButton.style.display = 'flex'
    }
    //On remplace le bouton par un input
    ingredientButton.style.display = 'none'
    inputIngredient.style.display = 'flex'
    inputIngredient.innerHTML = `
    <div class="searchfilterbar"><input id="searchbar-ingredients" type="search" value="" placeholder="Rechercher un ingredient" onclick="listRechercheStart()"><span class="box-arrow"><i class="fas fa-chevron-up"></i></span></div>
        <div class="search-list-container-ingredients search-list"></div>
    `
    //On construit le template de la liste
    const searchList = document.querySelector('.search-list-container-ingredients')
    for(let ingredient of listIngredients){
        searchList.innerHTML += `
           <button id="${ingredient}" class="buttons-list">${ingredient}</button
        `
    }
}

// Fonction filtrage par ustenciles
async function rechercheRecetteUstencile() {
    const listUstenciles = await app.getAllUstensils()
    // On reinitialise l'affichage des boutons filtres
    if(ingredientButton.style.display === 'none' || appareilButton.style.display === 'none'){
        inputIngredient.style.display = 'none'
        ingredientButton.style.display = 'flex'
        inputAppareils.style.display = 'none'
        appareilButton.style.display = 'flex'
    }
    //On remplace le bouton par un input
    ustensilesButton.style.display = 'none'
    inputUstenciles.style.display = 'flex'
    inputUstenciles.innerHTML = `
    <div class="searchfilterbar"><input id="searchbar-ustenciles" type="search" value="" placeholder="Rechercher un ustenciles" onclick="listRechercheStart()"><span class="box-arrow"><i class="fas fa-chevron-up"></i></span></div>
        <div class="search-list-container-ustenciles search-list"></div>
    `
    //On construit le template de la liste
    const searchList = document.querySelector('.search-list-container-ustenciles')
    for(let ustencile of listUstenciles){
        searchList.innerHTML += `
           <button id="${ustencile}" class="buttons-list" onclick="displayTag(${ustencile})">${ustencile}</button
        `
    }
}

// Fonction filtrage par appareils
async function rechercheRecetteAppareil() {
    const listAppareils = await app.getAllAppliances()
    // On reinitialise l'affichage des boutons filtres
    if(ingredientButton.style.display === 'none' || ustensilesButton.style.display === 'none'){
        inputIngredient.style.display = 'none'
        ingredientButton.style.display = 'flex'
        inputUstenciles.style.display = 'none'
        ustensilesButton.style.display = 'flex'
    }
    //On remplace le bouton par un input
    appareilButton.style.display = 'none'
    inputAppareils.style.display = 'flex'
    inputAppareils.innerHTML = `
        <div class="searchfilterbar"><input id="searchbar-appareils" type="search" value="" placeholder="Rechercher un appareil" onclick="listRechercheStart()"><span class="box-arrow"><i class="fas fa-chevron-up"></i></span></div>
        <div class="search-list-container-appareil search-list"></div>
    `
    //On construit le template de la liste
    const searchList = document.querySelector('.search-list-container-appareil')
    for(let appareil of listAppareils){
        searchList.innerHTML += `
           <button id="${appareil}" class="buttons-list">${appareil}</button
        `
    }
}



//Fonction tri liste par input


function listRechercheStart() {
    const listSearchIngredients = document.getElementById('searchbar-ingredients')
    const listSearchAppareils = document.getElementById('searchbar-appareils')
    const listSearchUstenciles = document.getElementById('searchbar-ustenciles')
    listSearchIngredients.addEventListener('keyup', () => {
        if(listSearchIngredients.value.length > 0){
            // console.log(listSearchBar.value);
            listFiltreRecherche(listSearchIngredients.value)
            // listSearch(listSearchBar.value)
        }
    })
    listSearchAppareils.addEventListener('keyup', () => {
        if(listSearchAppareils.value.length > 0){
            // console.log(listSearchBar.value);
            listFiltreRecherche(listSearchAppareils.value)
            // listSearch(listSearchBar.value)
        }
    })
    listSearchUstenciles.addEventListener('keyup', () => {
        if(listSearchUstenciles.value.length > 0){
            // console.log(listSearchBar.value);
            listFiltreRecherche(listSearchUstenciles.value)
            // listSearch(listSearchBar.value)
        }
    })
   
}

function listFiltreRecherche(recherche){
    const allButtonOfList = document.querySelectorAll('.buttons-list')
    // console.log(allButtonOfList);
    for(let button of allButtonOfList){
        if(button.id.toLocaleLowerCase().includes(recherche.toLocaleLowerCase())){
            button.style.display = 'flex'
        }
        else{
            button.style.display = 'none'
        }
    }
}


// recherche occurence dans ingredient , description et titre recette
function listSearch(searchBarRecherche){
    const allCards = document.querySelectorAll('.recette-card')
    for(let card of allCards){
        const ingredientsRecette = card.querySelector('.ingredients-recette')
        const descriptionRecette = card.querySelector('.description-recette')
        const nomRecette = card.querySelector('.nom-recette')

        if(nomRecette.textContent.toLowerCase().includes(searchBarRecherche.toLowerCase()) ||
        descriptionRecette.textContent.toLowerCase().includes(searchBarRecherche.toLowerCase()) || 
        ingredientsRecette.textContent.toLowerCase().includes(searchBarRecherche.toLowerCase())) {
            card.style.display = "flex"    
        }
        else {card.style.display = "none"}
    }
}


// Fonction affichage Tags
function displayTag(tag){
    console.log(tag);
    tagsTemplateUstenciles = document.querySelector('.tags-ustensiles')
    tagsTemplateUstenciles.innerHTML += ` <div class="tag-style" id="${tag.innerText}">${tag.innerText} <span  onclick="supprimerTag('${tag.innerText}')"> <i class="far fa-times-circle"></i> </span></div>`
}
// fonction supprimer tag
function supprimerTag(tag){
    const tagSelect= document.getElementById(tag)
    console.log(tagSelect);
    tagSelect.remove()
}
