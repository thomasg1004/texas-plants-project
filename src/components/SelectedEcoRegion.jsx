import React, {useState, useEffect} from 'react'

function SelectedEcoregion() {
    const [currEcoRegion, setCurrEcoRegion] = useState('')

    useEffect(() => {
        const ecoregionFromStorage = localStorage.getItem('ecoregion')
        if(ecoregionFromStorage){
            setCurrEcoRegion(ecoregionFromStorage)
        }
    }, [])

    return (
        <>
            <h2>{currEcoRegion}</h2>
        </>
    )

}

export default SelectedEcoregion