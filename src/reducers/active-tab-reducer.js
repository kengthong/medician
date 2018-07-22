import {
    SET_ACTIVE
} from './types';

const defaultState = {
    active: 'home',
	isLive: false,
}

export const patientsReducer = ( state = defaultState, action ) => {

	switch(action.type){

		// case SET_ACTIVE_FILTER:
		// 	return {
		// 		...state,
		// 		isLive: true,
		// 		activeFilter: action.filter
		// 	}
		case SET_PATIENTS_LIST:
        // console.log("returning")
            console.log('action.paitents = ' , action.patients)
			return {
				...state,
				isLive: true,
				data: action.patients,
			}

		default:
				return state;
		}
}