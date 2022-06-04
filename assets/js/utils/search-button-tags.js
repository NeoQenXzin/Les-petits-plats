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
        <input id="searchbar-ingredients" type="search" value="" placeholder="Rechercher un ingredient"><span class="box-arrow"><i class="fas fa-chevron-up"></i></span>
        <div class="search-list-container-ingredients"></div>
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
        <input id="searchbar-ustenciles" type="search" value="" placeholder="Rechercher un ustenciles"><span class="box-arrow"><i class="fas fa-chevron-up"></i></span>
        <div class="search-list-container-ustenciles"></div>
    `
    //On construit le template de la liste
    const searchList = document.querySelector('.search-list-container-ustenciles')
    for(let ustencile of listUstenciles){
        searchList.innerHTML += `
           <button id="${ustencile}" class="buttons-list">${ustencile}</button
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
        <input id="searchbar-appareils" type="search" value="" placeholder="Rechercher un appareil"><span class="box-arrow"><i class="fas fa-chevron-up"></i></span>
        <div class="search-list-container-appareil"></div>
    `
    //On construit le template de la liste
    const searchList = document.querySelector('.search-list-container-appareil')
    for(let appareil of listAppareils){
        searchList.innerHTML += `
           <button id="${appareil}" class="buttons-list">${appareil}</button
        `
    }
}

