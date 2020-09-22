import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class Details extends React.Component {
    render() {
        const { record, height, styles } = this.props;
        console.log("record = ", record)
        return (
            <View style={{height: height, width: '90%', marginLeft: 'auto', marginRight: 'auto',}}>
                <View style={styles.detailsSessionTitleWrapper}>
                    <Text style={styles.detailsSessionHeader}> 
                        Session: 
                    </Text>
                    <Text style={styles.detailsSessionText}> 
                        {record.TranscribedConsultation}
                    </Text>
                </View>

                <View style={styles.detailsDiagnosisContainer}>
                    <Text style={styles.detailsDiagnosisHeader}>
                        Diagnosis:
                    </Text>

                    <Text style={styles.detailsDiagnosisText}>
                        {record.DiagnosisText}
                    </Text>
                </View>
            </View>
        )
    }
}

export default Details;