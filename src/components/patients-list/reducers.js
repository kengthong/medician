import {
    SET_PATIENTS_LIST
} from './types';

const defaultState = {
	data:{msg: 'test'},
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