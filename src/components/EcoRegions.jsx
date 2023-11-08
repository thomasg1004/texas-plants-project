import React, {useState} from 'react'
import '../css/EcoRegions.css'

function EcoRegions() {

    const [selectedEcoRegion, setSelectedEcoRegion] = useState('')

    const ecoregions = ['Pineywoods', 'Gulf Prairies and Marshes', 'Post Oak Savanah', 'Blackland Prairie',
                        'Crosstimbers', 'South Texas Plains', 'Edwards Plataeu', 'Rolling Plains', 'High Plains', 'Trans-Pecos']
    

    return(
        <>
            <h2>Select Your Eco-Region</h2>
            <input className ='input-text' type='text' value={selectedEcoRegion} placeholder='Eco-Region' readOnly />
            <select className='selectMenu' value={selectedEcoRegion} onChange={(e) => setSelectedEcoRegion(e.target.value)}>
                {ecoregions.map((ecoregion) => (
                    <option value={ecoregion} key={ecoregion}>
                        {ecoregion}
                    </option>
                ))}
            </select>
            <br></br>
            <a href='/src/pages/plant-selection.html'><button>Submit</button></a>
        </>
    )

}

export default EcoRegions