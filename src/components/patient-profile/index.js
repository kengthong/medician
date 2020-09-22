import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import PatientInfo from './patient-info';
import Records from './records';


import { _fetchPatientConsultationRecords } from '../../services';
import styles from './styles';

class PatientProfile extends React.Component {
    render() {
        const { patient } = this.props;

        return (
            <View style={{height: '100%', width: '100%'}}>
                <View style={styles.headerWrapper}>
                    <View style={styles.headerBack}>
                        <TouchableOpacity
                            onPress={() => this.onSelectBack()}>
                            <Icon name="arrow-back" style={{color: 'white'}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerDetails}>
                        <Text style={styles.headerDetailsText}>
                            {patient.PatientName}
                        </Text>
                        {/* <Text style={styles.sHDetailsDateText}> 30th July 2018</Text> */}
                    </View>

                    <View style={styles.headerSubmit}>
                        {/* <TouchableOpacity
                            onPress={() => this.onSelectSave()}
                            style={styles.headerSubmitButton}
                            >
                            <Icon name="ios-checkmark" style={{color: 'white', fontWeight: 'bold', marginTop: '4%'}} />
                        </TouchableOpacity> */}
                    </View>
                </View>

                <PatientInfo 
                    patient={patient} 
                    styles={styles}/>

                <Records 
                    patientRecords={this.state.patientRecords}
                    styles={styles}/>
            </View>
        )
    }
    
    constructor(props) {
        super(props);
        this.state = {
            patientRecords: []
        }
    }

    componentDidMount() {
        let { patient } = this.props;
        if(patient && patient.PatientName) {
            _fetchPatientConsultationRecords(patient.PatientName)
            .then( res => {

                const records = JSON.parse(res.data.data)
                this.setState({
                    patientRecords: records
                })
            })
            .catch( err => console.log('err = ' , err))
        }
    }

    onSelectBack = () => {
        Actions.popTo("mainScreen")
    }
}

export default PatientProfile;
