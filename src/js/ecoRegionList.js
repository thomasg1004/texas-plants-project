const selectedEcoRegion = localStorage.getItem('ecoregion')

export function createEcoRegionList(selected){
    selectedEcoRegion = selected

}

const ecoRegionElement = document.getElementById(ecoregion)
ecoRegionElement.innerHTML = selectedEcoRegion
