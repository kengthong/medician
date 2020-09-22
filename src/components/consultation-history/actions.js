import { _fetchAllConsultationHistory } from '../../services';


export const fetchAllConsultationHistory = () => {
    console.log('ran 0')
    return {
        type: 'FETCH_CONSULTATION_HISTORY',
        payload: _fetchAllConsultationHistory()
    }
    
}