import { combineReducers } from 'redux';
import user from './user-reducer.js';
import { patientQueueReducer } from '../components/patient-queue-list/reducer';
import { consultationHistoryReducer } from '../components/consultation-history/reducer';

const _reducers = {
    consultationHistory: consultationHistoryReducer,
    patientQueue: patientQueueReducer
}

export const reducers = combineReducers(_reducers);