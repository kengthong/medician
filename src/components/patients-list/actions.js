import {
    SET_PATIENTS_LIST
} from './types';

export const _setPatients = ({ patients }) => ({
	type: SET_PATIENTS_LIST,
	patients
})