import React from 'react';
import { View, Text } from 'react-native';

import PatientProfile from '../components/patient-profile';

const PatientProfileScreen = (props) => {
    if(props && props.patient) {
        const { patient } = props;
        return (
            <View style={{height: '100%'}}>
                <PatientProfile patient={patient}/>
            </View>
        )
    }

    return (
        <View>
            <Text> No Patient</Text>
        </View>
    )
    
}

export default PatientProfileScreen;
