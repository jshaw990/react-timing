// Fetch Individual Race Data from sportsdata.io

import env from 'react-dotenv'

export function fetchRaceData() {
    const API_KEY = env.API_KEY
    const URL = 'https://api.sportsdata.io/nascar/v2/json/raceresult/580?key=' + API_KEY
    
    return fetch(URL)
        .then(console.log('API IS ATTEMPTING TO RETURN... LOADING DATA'))
        .then(data => data.json())
        .catch(console.log('API LOADING ERROR'))
}
