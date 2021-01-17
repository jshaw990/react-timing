import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addState } from '../../redux/actions'

import { fetchRaceData } from '../../services/fetchRaceData'

import './display.css'

import chevy from '../../assets/chevy-logo.png'
import ford from '../../assets/ford-logo.png'
import toyota from '../../assets/toyota-logo.png'

function Display() {
    const [ data, setData ] = useState({
        loaded: false,
        data: []
    })

    useEffect(() => {
        let mounted = true 
        fetchRaceData() 
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
                <span className='driver_position'>{index + 1}</span>
                <span className='driver_name'>{state.Name} </span>
                <span className='driver_number'>#{state.Number} </span>
                {state.Manufacturer === 'Toyota' &&
                    <img src={toyota} className='manu_logo' alt='toyota'/> 
                } {state.Manufacturer === 'Chevrolet' &&
                    <img src={chevy} className='manu_logo' alt='chevy'/> 
                } {state.Manufacturer === 'Ford' &&
                    <img src={ford} className='manu_logo' alt='ford'/> 
                }
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
                    <ul className='race_results'>
                        {displayResult}
                    </ul>
                </div>
            )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}

const mapStateToProps = state => {
    return 
}

export default connect(mapStateToProps, { addState })(Display)