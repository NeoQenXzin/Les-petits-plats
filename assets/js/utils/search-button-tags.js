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

// Liste recette filtrée recupéré de searchbar.js
let recettesFiltrees;


// Afficher et générer template filtrage par ingrédient 
async function rechercheRecetteIngredient() {
    const listIngredients = await app.getAllIngredients(recettesFiltrees)
    console.log(recettesFiltrees);
    console.log(listIngredients);
    // On reinitialise l'affichage des boutons filtres
    initButtonFilter()
    //On remplace le bouton par un input
    ingredientButton.style.display = 'none'
    inputIngredient.style.display = 'flex'
    inputIngredient.innerHTML = `
    <div class="searchfilterbar"><input id="searchbar-ingredients" type="search" value="" placeholder="Rechercher un ingredient" onclick="listRechercheStart('ingredients')">
        <span class="box-arrow arrow-up" onclick="closeFilter(id = 'ingredient')"><i class="fas fa-chevron-up"></i></span>
    </div>
        <div class="search-list-container-ingredients search-list"></div>
    `
    //On construit le template de la liste
    const searchList = document.querySelector('.search-list-container-ingredients')
    for (let ingredient of listIngredients) {
                let newingredient = ingredient.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,' ')
                searchList.innerHTML += `
                <button id="${newingredient}" class="buttons-list" onclick="displayTag('${newingredient}', id='newingredient')">${newingredient}</button
                `
    }
}

// Afficher et générer template filtrage par ustenciles
async function rechercheRecetteUstencile() {
    const listUstenciles = await app.getAllUstensils(recettesFiltrees)
    console.log(listUstenciles);
    console.log(recettesFiltrees);

    // On reinitialise l'affichage des boutons filtres
    initButtonFilter()
    //On remplace le bouton par un input
    ustensilesButton.style.display = 'none'
    inputUstenciles.style.display = 'flex'
    inputUstenciles.innerHTML = `
    <div class="searchfilterbar"><input id="searchbar-ustenciles" type="search" value="" placeholder="Rechercher un ustenciles" onclick="listRechercheStart('ustenciles')">
        <span class="box-arrow arrow-up" onclick="closeFilter(id = 'ustencile')"><i class="fas fa-chevron-up"></i></span>
    </div>
        <div class="search-list-container-ustenciles search-list"></div>
    `
    //On construit le template de la liste
    const searchList = document.querySelector('.search-list-container-ustenciles')
    for (let ustencile of listUstenciles) {
        searchList.innerHTML += `
           <button id="${ustencile}" class="buttons-list" onclick="displayTag('${ustencile}', id='ustencile')">${ustencile}</button
        `
    }
}

// Afficher et générer template filtrage par appareils
async function rechercheRecetteAppareil() {
    const listAppareils = await app.getAllAppliances(recettesFiltrees)
    console.log(recettesFiltrees);
    console.log(listAppareils);
    // On reinitialise l'affichage des boutons filtres
    initButtonFilter()
    //On remplace le bouton par un input
    appareilButton.style.display = 'none'
    inputAppareils.style.display = 'flex'
    inputAppareils.innerHTML = `
        <div class="searchfilterbar"><input id="searchbar-appareils" type="search" value="" placeholder="Rechercher un appareil" onclick="listRechercheStart('appareils')">
            <span class="box-arrow arrow-up" onclick="closeFilter(id = 'appareil')"><i class="fas fa-chevron-up"></i></span>
        </div>
        <div class="search-list-container-appareil search-list"></div>
    `
    //On construit le template de la liste
    const searchList = document.querySelector('.search-list-container-appareil')
    for (let appareil of listAppareils) {
        searchList.innerHTML += `
           <button id="${appareil}" class="buttons-list" onclick="displayTag('${appareil}', id='appareil')">${appareil}</button
        `
    }
}

// Fermer filtre si clic hors d'un input button filtre recherche
const closeFilterIfOutInput = (() => {
    return function ({
        target: el
    }) {
        let inputIngredientSearch = document.getElementById('searchbar-ingredients')
        let inputAppareilsSearch = document.getElementById('searchbar-appareils')
        let inputUstencilesSearch = document.getElementById('searchbar-ustenciles')
        if (el === inputIngredientSearch) {
            id = 'ingredient'
        } else if (el === inputAppareilsSearch) {
            id = 'appareil'
        } else if (el === inputUstencilesSearch) {
            id = 'ustencile'
        } else {
            id = 'nothing'
        }
        if (el !== inputIngredientSearch && el !== inputAppareilsSearch && el !== inputUstencilesSearch) {
            closeFilter(id)
        }
    }
})()
document.addEventListener('click', closeFilterIfOutInput)


// Fermer un filtre en cliquant sur la flêche
function closeFilter(id) {
    if (id === 'ingredient') {
        ingredientButton.style.display = 'flex'
        inputIngredient.style.display = 'none'
    } else if (id === 'appareil') {
        appareilButton.style.display = 'flex'
        inputAppareils.style.display = 'none'
    } else if (id === 'ustencile') {
        ustensilesButton.style.display = 'flex'
        inputUstenciles.style.display = 'none'
    } else {
        closeAllFilters()
    }
}

// Fermer tout les filtres
function closeAllFilters() {
    ingredientButton.style.display = 'flex'
    inputIngredient.style.display = 'none'
    appareilButton.style.display = 'flex'
    inputAppareils.style.display = 'none'
    ustensilesButton.style.display = 'flex'
    inputUstenciles.style.display = 'none'
}

// transformer bouton en input de recherche avec liste de tag
function initButtonFilter(){
    if (ustensilesButton.style.display === 'none' || appareilButton.style.display === 'none') {
        inputUstenciles.style.display = 'none'
        ustensilesButton.style.display = 'flex'
        inputAppareils.style.display = 'none'
        appareilButton.style.display = 'flex'
    }
    else  if (ingredientButton.style.display === 'none' || appareilButton.style.display === 'none') {
        inputIngredient.style.display = 'none'
        ingredientButton.style.display = 'flex'
        inputAppareils.style.display = 'none'
        appareilButton.style.display = 'flex'
    }
    else  if (ingredientButton.style.display === 'none' || ustensilesButton.style.display === 'none') {
        inputIngredient.style.display = 'none'
        ingredientButton.style.display = 'flex'
        inputUstenciles.style.display = 'none'
        ustensilesButton.style.display = 'flex'
    }
}