// Affiche list recherche sous boutton filtre
function listFiltreRecherche(recherche){
    const allButtonOfList = document.querySelectorAll('.buttons-list')
    let nbreButton = 0
    for(let button of allButtonOfList){
        if(recherche === 'null'){
            button.style.display = 'flex'
        }
        else if(button.id.toLowerCase().match(recherche.toLowerCase())){
            button.style.display = 'flex'
            nbreButton++
        }
        else{
            button.style.display = 'none'
            
        }
    }
    if(nbreButton === 0){
        console.log('Aucun résultats');
    }
}
//Fonction tri liste par input bouton filtre
function listRechercheStart(categorie) {
    const listSearchIngredients = document.getElementById('searchbar-ingredients')
    const listSearchAppareils = document.getElementById('searchbar-appareils')
    const listSearchUstenciles = document.getElementById('searchbar-ustenciles')
    
    switch (categorie) {
        case 'ingredients':
            listSearchIngredients.addEventListener('keyup', () => {
                if(listSearchIngredients.value.length > 0){
                    listFiltreRecherche(listSearchIngredients.value)
                }
                else {
                    listFiltreRecherche('null')
                }
            })
            break
            case 'appareils':
                listSearchAppareils.addEventListener('keyup', () => {
                    if(listSearchAppareils.value.length > 0){
                        listFiltreRecherche(listSearchAppareils.value)
                    }
                    else{
                        listFiltreRecherche('null')
                    }
                })
            break
                case 'ustenciles':
                    listSearchUstenciles.addEventListener('keyup', () => {
                        if(listSearchUstenciles.value.length > 0){
                            listFiltreRecherche(listSearchUstenciles.value)
                        }
                        else{
                            listFiltreRecherche('null')
                        }
                    })
            break
            default:
           console.log('pas de categorie');

    }
   
}