import React from 'react';
import { Image, Text, View } from 'react-native';

const PatientInfo = (props) => {
    let { patient, styles } = props;

    const renderAvatar = (patient, styles) => {
        if(patient.PatientName){
            const avatar = patient.PatientName.split(' ').reduce(
                ( acc, cur ) => acc += cur.charAt(0), 
                ''
            )
            return (
                <View style={styles.patientInfoAvatarWrapper}>
                    <Text style={styles.patientInfoAvatarText}>
                        {avatar}
                    </Text>
                </View>
            )
        }
    }

    return (
        <View style={styles.patientInfoWrapper}>
            <View style={styles.patientInfoContainer} >
                <View style={styles.patientInfoImageContainer}>
                    {patient.imgUrl?
                        <Image 
                        style={styles.patientInfoImage}
                        source={{uri: patient.imgUrl}} />
                        :
                        renderAvatar(patient, styles)
                    }
                </View>

                <View style={styles.patientInfoContentWrapper}>
                    <Text> {patient.PatientName}</Text>
                    <Text> DOB: 10th April 1984</Text>
                </View>
            </View>
        </View>
    )
}

export default PatientInfo;