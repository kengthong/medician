import { _postNewConsultationRecord } from '../../services';

export const postNewConsultationRecord = (consultationRecord) => {
    console.log("consultationRecord = "  ,consultationRecord)
    return _postNewConsultationRecord(consultationRecord);
}


// {
    // return {
    //     type: 'POST_NEW_CONSULTATION_RECORD',
    //     payload: {
    //         hi : 'hi'
    //     }
    //     // payload: _postNewConsultationRecord(consultationRecord)
    // }
// }