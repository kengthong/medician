import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Image, ListView, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';

// import { 
//     Badge,
//     Body,
//     Button,
//     Card,
//     CardItem,
//     Container,
//     Content,
//     Header,
//     Icon,
//     Left,
//     Right,
//     StyleProvider,
//     Text,
//     Thumbnail,
//     Title 
// } from 'native-base';


import { fetchQueueByDate } from '../patient-queue-list/actions';
import PatientQueueList from '../patient-queue-list';

import styles from './styles';


class HomeComponent extends React.Component {
    render() {   
        const { patients } = this.state;
        const { DayStatistics, GreetingComponent, PatientsList, TopThreePatients, StartNewConsult } = this; 

        console.log("patient queue = " , this.props.patientQueue)
        console.log("Consultation history = " , this.props.consultationHistory)
        if(!this.props.patientQueue.isLive || !this.props.consultationHistory.isLive) {
            return (
                <View>
                    <Text>LOADing..</Text>
                </View>
            )
        }
        return (
            <View style={styles.homeContainer}>
                <GreetingComponent />
                <View
                    style={{width: '100%', backgroundColor: 'white', height: '85%'}}>
                    {/* <View style={{height: '40%',}}> */}
                        <DayStatistics />
                        <StartNewConsult patients={patients}/>
                    {/* </View> */}
                    <View style={{height: '65%', backgroundColor: 'blue'}}>
                        <PatientsList/>
                    </View>

                </View>
                
                {/* patients={patients}/> */}
            </View>
        )
    }

    DayStatistics = () => {
        const queueCount = this.props.patientQueue.queue.length || 0;
        const consultedCount = this.props.consultationHistory.data.length || 0;
        return (

            <View style={styles.statsContainer}>
                <View style={styles.statsItem}>

                    <View style={styles.statsItemTop}>
                        {/* <View style={[styles.statsBadge, {backgroundColor: 'orange',}]} /> */}

                        <Text style={styles.statsCount}>{queueCount}</Text>
                    </View>

                    <Text style={styles.statsDescription}> in queue</Text>
                </View>

                <View style={{
                    borderColor: '#e8e8e8',
                    borderStyle: 'solid',
                    borderRightWidth: 1,
                    height: '60%'}} />

                <View style={styles.statsItem}>

                    <View style={styles.statsItemTop}>
                        {/* <View style={[styles.statsBadge, {backgroundColor: 'blue',}]} /> */}

                        <Text style={styles.statsCount}>{consultedCount}</Text>
                    </View>

                    <Text style={styles.statsDescription}> consults today</Text>
                </View>

                {/* <View style={styles.statsItem}>
                    <View style={[styles.statsBadge, {backgroundColor: 'green',}]} />

                    <Text style={styles.statsCount}>13</Text>

                    <Text style={styles.statsDescription}> in total</Text>
                </View> */}
            </View>
        )
    }

    GreetingComponent = () => {
        return (
            <View style={styles.greetingsWrapper}>
                <View style={styles.greetingsContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.greetingText}>
                            Good Morning
                        </Text>
                        <Text style={{fontSize: 20, paddingLeft: 6, fontWeight: '600', color: 'white'}}>
                            Keng Thong
                        </Text>
                    </View>
                    <Text style={styles.greetingText}>
                        Monday, 30th July
                    </Text>
                </View>
            </View>
        )
    }

    PatientsList = () => {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        const dataSource = ds.cloneWithRows(this.props.patientQueue.queue);

        if(this.props.patientQueue.isLive) {

            return (
                <View style={styles.plContainer}>
                    <PatientQueueList />
                </View>
            )
        }
        
        return null;
    }

    StartNewConsult = () => {
        const topPatient = this.props.patientQueue.queue[0];
        return (
            <View style={styles.startButtonContainer}>

                <TouchableOpacity 
                    style={styles.startButton}
                    onPress={() => {
                        let topPatient = {
                            PatientName: "Amy",
                            Urgency: 'Urgent',
                            imgUrl: "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
                            subtitle: "Runny nose ",
                            consultations: [
                                {
                                    date: "14 June 2018",
                                    symptoms: "Flu, fever",
                                    description: 'He fell sick two days ago, having a severe stomach pain',
                                    medications: ['antibiotics','panadol','chloromophomine']
                                }
                            ]
                        }
                        if(topPatient) {
                            Actions.push('activeSession', { patient: topPatient})
                        }
                    }
                        // Actions.activeSession({patient: topPatient})
                    }
                >
                    <Text style={styles.startButtonText}>
                        Start next Consultation
                        {/* START NEXT CONSULTATION */}
                    </Text> 
                </TouchableOpacity>
            </View>
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

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            patients: false, 
            dataSource: false,
            refreshing: false
        }
    }

    onRefresh = () => {
        this.setState({
            refreshing: true
        })
        // this.props.onRefresh('home')
        //retrieve data from database
        setTimeout(() => {
            this.setState({
                refreshing: false
            })
        }, 500)
    }

    toggleOpenPopOver = (patient) => {
        Actions.patientOptions({patient, visible: true})
    }
}

export default connect(
    state => ({
        patientQueue: state.patientQueue,
        consultationHistory: state.consultationHistory
    }),
    dispatch => ({
        fetchQueueByDate: (date) => dispatch(fetchQueueByDate(date))
    })
)(HomeComponent);