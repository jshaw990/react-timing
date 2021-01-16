import React, { useEffect, useState } from 'react'

import { fetchData } from '../services/fetchData'

function Display() {
    const [ data, setData ] = useState({
        loaded: false,
        data: []
    })

    useEffect(() => {
        let mounted = true 
        fetchData() 
            .then(items => {
                if (mounted) {
                    setData({
                        loaded: true,
                        data: items 
                    })
                    console.log('API HAS RETURNED SUCCESSFUL')
                    console.log(items)
                } else {
                    console.log('ERROR: NOT MOUNTED')
                }
        })
        return () => mounted = false
    }, [])

    if(data.loaded === true && data.data.DriverRaces !== undefined) {
        console.log(data)
        const raceResults = data.data.DriverRaces

        const displayResult = raceResults.map((state, index) =>
            <li key={index} className='driver'>
                <div className='driver_info'>
                    <span className='driver_name'>{state.Name} </span>
                    <span className='driver_number'>#{state.Number} </span>
                    <span className='driver_manu'>- {state.Manufacturer}</span>
                </div>
            </li>
        )
        const raceOver = data.data.Race.IsOver
            return (
                <div>
                    {raceOver ? ( 
                        <div className='checkered'>Checkered Flag!</div>
                    ) : ( 
                        <div className='green_flag'>Green Flag!</div> 
                    )}
                    <h1>{data.data.Race.SeriesName} {data.data.Race.Name}</h1>
                    <div>{data.data.Race.DateTime}</div>
                    <ol>
                    {displayResult}
                    </ol>
                </div>
            )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}

export default Display