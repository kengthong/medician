import axios from 'axios';

export const _fetchQueueByDate = ( date ) => axios({
    method: 'post',
    url: 'https://8gpu2xeyl7.execute-api.ap-southeast-1.amazonaws.com/api/v1/fetch-patients-in-queue',
    withCredentials: true,
    data: {
        datenow: date
    }
})

export const _fetchAllConsultationHistory = () => axios({
    method: 'post',
    url: 'https://8gpu2xeyl7.execute-api.ap-southeast-1.amazonaws.com/api/v1/fetch-all-patients-medical-records',
    withCredentials: true,
    data: {}
})

export const _fetchPatientConsultationRecords = (PatientName) => axios({
    method: 'post',
    url: 'https://8gpu2xeyl7.execute-api.ap-southeast-1.amazonaws.com/api/v1/fetch-patient-medical-records-by-name',
    withCredentials: true,
    data: {
        patientname: PatientName
    }
})

export const _postNewConsultationRecord = (consultationRecord) => axios({
    url: 'https://8gpu2xeyl7.execute-api.ap-southeast-1.amazonaws.com/api/v1/add-patient-medical-record',
    method: 'post',
    withCredentials: true,
    data: consultationRecord
    // {
    //     "doctorid":1,
    //     "clinicid":1,
    //     "patientname":"TESTAPIRecords",
    //     "patientnric":"S9876543",
    //     "age":37,
    //     "consultationtext": "Test Consultation",
    //     "diagnosistext": "Test Diagnosis"
    // }
})

export const _postRequestLogin = ({userName, password}) => axios({
    url: 'https://8gpu2xeyl7.execute-api.ap-southeast-1.amazonaws.com/api/v1/user-login',
    method: 'post',
    withCredentials: true,
    data: {
        username: userName,
        password
    }
})

export const _removePatient = (queueid) => {
    return (
        queueid,
        axios({
            url: 'https://8gpu2xeyl7.execute-api.ap-southeast-1.amazonaws.com/api/v1/remove-patient-from-queue',
            method: 'post',
            withCredentials: true,
            data: {
                queueid
            }
        })
    )
}