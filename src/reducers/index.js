import { combineReducers } from 'redux';
import user from './user-reducer.js';
import { patientsReducer } from '../components/patients-list/reducers';

const _reducers = {
    patients: patientsReducer
}

export const reducers = combineReducers(_reducers);