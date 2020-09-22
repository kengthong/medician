import React from 'react';
import ConsultationRecord from '../components/consultation-record';

const ConsultationRecordScreen = ({record}) => {
    return (
        <ConsultationRecord 
            record={record}/>
    )
}

export default ConsultationRecordScreen;