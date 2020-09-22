import { SET_PATIENT_QUEUE } from './type';


const defaultState = {
    isLive: false,
    queue: []
}

export const patientQueueReducer = ( state = defaultState, action ) => {
    switch(action.type) {
        case 'SET_PATIENT_QUEUE_FULFILLED': 
            const _queue = JSON.parse(action.payload.data.data);
            console.log("action.payload.data = " , _queue)
            return {
                ...state,
                isLive: true,
                queue: _queue
            }

        case 'REMOVE_PATIENT_FROM_QUEUE_FULFILLED':
            const queueId = JSON.parse(action.payload.config.data).queueid;
            return {
                ...state,
                isLive: true,
                queue: state.queue.filter( patient => patient.QueueID != queueId)
            }

        default:
            return state
    }
}