import env from 'react-dotenv'

export function fetchData() {
    const API_KEY = env.API_KEY
    const URL = 'https://api.sportsdata.io/nascar/v2/json/raceresult/580?key=' + API_KEY
    
    return fetch(URL)
        .then(console.log('API IS ATTEMPTING TO RETURN... LOADING DATA'))
        .then(data => data.json())
        .catch(console.log('API LOADING ERROR'))
}

//export default FetchData