import React from 'react';
import { connect } from 'react-redux';
import { BackHandler, ListView, Image, Keyboard, KeyboardAvoidingView,  View, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { 
    Body,
    Button,
    Card,
    CardItem,
    Container, 
    Content, 
    Form,
    Header,
    Icon,
    Left,
    Right,
    StyleProvider,
    Subtitle,
    Textarea,
    Title,
    Thumbnail
} from 'native-base';

import SpeechToTextComponent from './speech-to-text-component';

import { Actions } from 'react-native-router-flux';

import PopConfirm from '../_medician-components/pop-confirm';
import { removePatient } from '../patient-queue-list/actions';
import { postNewConsultationRecord } from './actions';

import styles from './styles';

//tests
// import AudioManager from '../../lib/audio-manager';

class ActiveSession extends React.Component {
    render() {
        const { patient, onSelectBack } = this.state;

        if(!patient) {
            return (
                <View>
                    <Text> no data</Text>
                </View>
            )
        }
        return (

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{flex: 1}}>
                <View style={styles.sessionWrapper}>
                    { onSelectBack?
                        <PopConfirm 
                            onSelectContinue={() => Actions.popTo('mainScreen')}
                            onSelectCancel={() => this.onSelectCancelBack()}
                            subtitle='All unsaved changes will be lost'
                            title='Are you sure to exit?'
                            visible={this.state.onSelectBack}
                        />
                        :
                        <PopConfirm 
                            onSelectContinue={() => this.onSelectSaveContinue()}
                            onSelectCancel={() => this.onSelectCancelSave()}
                            // subtitle='All unsaved changes will be lost'
                            title='Are you sure to save consultation?'
                            visible={this.state.onSelectSubmit}
                        />
                    }
                    <View style={styles.sHWrapper}>
                        <View style={styles.sHBack}>
                            <TouchableOpacity
                                onPress={() => this.onSelectBack()}>
                                <Icon name="arrow-back" style={{color: 'white'}}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.sHDetails}>
                            <Text style={styles.sHDetailsText}>Consultation</Text>
                            {/* <Text style={styles.sHDetailsDateText}> 30th July 2018</Text> */}
                        </View>

                        <View style={styles.sHSubmit}>
                            <TouchableOpacity
                                onPress={() => this.onSelectSave()}
                                style={styles.sHSubmitButton}
                                >
                                <Icon name="ios-checkmark" style={{color: 'white', fontWeight: 'bold', marginTop: '4%'}} />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.sCWrapper}>
                        <ScrollView 
                            contentContainerStyle={styles.sCContainer}
                            scrollEnabled>

                            {this._renderPatientDetails(patient)}
                            {this._renderSpeechToTextComponent(patient)}

                        </ScrollView>
                    </View>


                </View>
            </TouchableWithoutFeedback>
        )
    }

    _renderPatientDetails = (patient) => {
        return (
            <View style={styles.sPDetailsContainer}>
                <View style={styles.sPDetailsHeader}>
                    <View style={styles.sPDetailsImgContainer}>
                        {patient.imgUrl?
                            <Image 
                            style={styles.patientAvatar}
                            source={{uri: patient.imgUrl}} />
                            :
                            this.renderAvatar(patient, styles)
                        }
                    </View>
                    <View style={styles.spDetailsHeaderTextContainer}>
                        <View style={styles.sPDetailsHeaderNameContainer}>
                            <Text style={styles.spDetailsHeaderName}> {patient.PatientName}</Text>
                        </View>
                        <View style={styles.spDetailsHeaderNotesContainer}>
                            <Text style={styles.spDetailsHeaderNotesText}> {patient.Urgency} </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.sPDetailsInformationContainer}>
                    <View style={styles.sPDetailsInformationHeader}>
                        <Icon name="ios-list-outline" style={{paddingRight: 8, fontSize: 22}}/> 
                        <Text style={{opacity: 0.8}}>Personal Information</Text>
                    </View>
                    <View style={styles.spDetailsInformationContent}>
                        <Text style={{opacity: 0.65}}> Gender: Male </Text>
                        <Text style={{opacity: 0.65}}> Age: 34</Text>
                        <Text style={{opacity: 0.65}}> Records </Text>
                    </View>
                </View>

            </View>
        )
    }

    _renderSpeechToTextComponent = (patient) => {
        return (
            <View style={styles.sTTOuterWrapper}>
                <SpeechToTextComponent 
                    sessionData={this.state.sessionData}
                    asyncUpdateParentState={this.updateConsultation}
                    updateParentState={this.updateConsultation}
                    patient={patient} />    
            </View>
                
        )
    }

    renderContent = (patient) => {
        return (
            <Card 
                style={{height: '50%'}}>
                <CardItem>
                    <Button
                        type="primary"
                        >
                        <Text> Start Consultation </Text>
                        <Icon name="md-mic" />
                    </Button>    
                </CardItem>

                <CardItem>
                    <Form>
                        <Textarea 
                            rowSpan={5} 
                            bordered 
                            style={{width: '100%'}}
                            placeholder="Start Consultation to start automatic text input" 
                        />
                    </Form>
                </CardItem>
            </Card>
        )
    }

    renderAvatar = (patient, styles) => {
        if(patient.PatientName){
            const avatar = patient.PatientName.split(' ').reduce(
                ( acc, cur ) => acc += cur.charAt(0), 
                ''
            )
            return (
                <View style={styles.patientAvatarWrapper}>
                    <Text style={styles.patientAvatarText}>
                        {avatar}
                    </Text>
                </View>
            )
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            patient: this.props.patient,
            onSelectBack: false,
            onSelectSubmit: false,
            sessionData: {
                doctorid: 1,
                clinicid: 1,
                age: 35,
                consultationtext: '',
                diagnosistext: '',
                patientname: '',
                patientnric: 'a'
            },
        }
        // "doctorid":1,
        // "clinicid":1,
        // "patientname":"TESTAPIRecords",
        // "patientnric":"S9876543",
        // "age":37,
        // "consultationtext": "Test Consultation",
        // "diagnosistext": "Test Diagnosis"
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onSelectBack);
        if(this.props.patient) {
            this.setState({
                sessionData: {
                    ...this.state.sessionData,
                    // age: this.props.patient.Age,
                    consultationtext: '',
                    diagnosistext: '',
                    patientname: this.props.patient.PatientName,
                    // patientnric: this.props.patient.PatientNRIC || '',
                },
            })
        }
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onSelectBack);
    }

    onSelectBack = () => {
        this.toggleBackState();
        return true;
    }

    onSelectCancelBack = () => {
        this.toggleBackState()
    }

    onSelectCancelSave = () => {
        this.toggleSaveState()
    }

    onSelectSave = () => {
        this.toggleSaveState()
    }

    onSelectSaveContinue = () => {

        const { sessionData } = this.state;
        console.log("session data = " , sessionData)
        const { QueueID } = this.props.patient;
        
        postNewConsultationRecord(sessionData)
        .then( res => {
            if(res.data.response == 'ok') {
                this.toggleSaveState();
                this.props.removePatient(QueueID)
                Actions.popTo('mainScreen');
            }
        })
        .catch(err => console.log("err = " , err ))
        
        // postNewConsultationRecord(sessionData 

        // Actions.popTo('mainScreen');
    }

    toggleBackState = () => {
        this.setState({
            onSelectBack: !this.state.onSelectBack
        })
    }

    toggleSaveState = () => {
        this.setState({
            onSelectSubmit: !this.state.onSelectSubmit
        })
    }

    updateConsultation = (values) => {
        console.log("UPDATED CONSULTATION VALUE = ", values)
        console.log("updated state ? + " , this.state.sessionData)
        this.setState({
            sessionData: {
                ...this.state.sessionData,
                ...values
            }
        })
    }

} 
// export default ActiveSession;
export default connect(
    state => ({
        // patientQueue: state.patientQueue
    }),
    dispatch => ({
        removePatient: (QueueID) => dispatch(removePatient(QueueID))
    })
)(ActiveSession);