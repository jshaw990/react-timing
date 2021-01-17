const RACE_STATE = 'RACE_STATE'

export const addState = data => ({
    type: RACE_STATE,
    payload: {
        data
    }
})