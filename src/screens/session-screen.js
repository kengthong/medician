import React from 'react';
import ActiveSession from '../components/session';
import { View, Text } from 'react-native';

const ActiveSessionScreen = ({patient}) => {
    console.log("active ses = " , patient)
    return (
        <ActiveSession patient={patient}/>
        // <View>
        //     <Text> is this working</Text>
        // </View>
    )
}

export default ActiveSessionScreen;