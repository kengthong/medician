import axios from 'axios';
import { 
    SET_PATIENT_QUEUE 
} from './reducer/type';


import { _fetchQueueByDate, _removePatient } from '../../services';

export const fetchQueueByDate = ( date ) => {
    return {
        type: SET_PATIENT_QUEUE,
        payload: axios({
            method: 'post',
            url: 'https://8gpu2xeyl7.execute-api.ap-southeast-1.amazonaws.com/api/v1/fetch-patients-in-queue',
            withCredentials: true,
            data: {
                datenow: date
            }
        })
        // payload: _fetchQueueByDate(date)
    }
}

export const removePatient = (queueId) => {
    return {
        type: 'REMOVE_PATIENT_FROM_QUEUE',
        queueId: queueId,
        payload : _removePatient(queueId),
        
    }
}