const defaultState = {
    isLive: false,
    data: [],
    patients: []
}

export const consultationHistoryReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'FETCH_CONSULTATION_HISTORY_FULFILLED':
            const consultationHistory = JSON.parse(action.payload.data.data);
            console.log("ran 1")
            const filteredList = consultationHistory.filter( oneHist => oneHist.PatientName.indexOf('TEST') == -1);
            return {
                ...state,
                isLive: true,
                data: filteredList.reverse(),
                patients: filteredList.map( oneHist => {
                    return {
                        PatientName: oneHist.PatientName 
                    }
                })
            }

        default: 
            return state;
    }
}