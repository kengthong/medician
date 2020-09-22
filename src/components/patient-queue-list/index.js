import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Image, ListView, RefreshControl, ScrollView, Text, TouchableOpacity, TouchableHighlight, View, } from 'react-native';
import { Icon } from 'native-base';

import { Actions } from 'react-native-router-flux';
import { _removePatient } from '../../services';
import { fetchQueueByDate } from './actions';


import OptionsPopover from './options';
import styles from './styles.js';

class PatientQueueList extends React.Component {
    render() {
        const { dataSource, isPopoverVisible, refreshing,  } = this.state;
        const { List, HeaderBar } = this;
        return (
            <View style={styles.plMainWrapper}>
                {/* <OptionsPopover 
                    visible={isPopoverVisible}
                    removePatient={this.removePatient} /> */}
                {/* <HeaderBar /> */}
                <List patients={this.props.patients} />
            </View>
        )
    }

    List = () => {
        const { patientQueue } = this.state;

        if(patientQueue && patientQueue.isLive && patientQueue.queue) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
            const dataSource = ds.cloneWithRows(patientQueue.queue);

            return (
                <View style={styles.plContainer}>
                    <View style={styles.plHeaderContainer}>
                        <View style={styles.plHeader} >
                            <Text style={styles.plHeaderText}>
                                Patients in queue
                            </Text>
                        </View>
                    </View>

                    {patientQueue.queue.length >0 ?
                        <ListView
                            style={{flex: 1}}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this.onRefresh}
                                />
                            }
                            scrollEnabled
                            dataSource={dataSource}
                            renderRow={(patient) => {
                                return (
                                    <TouchableHighlight 
                                        underlayColor="#e8e8e8"
                                        style={styles.plItemWrapper}
                                        onPress={() => this.toggleOpenPopOver(patient)}
                                        // delayLongPress={1000}
                                    >
                                        <View style={styles.plItem}>
                                            <View style={styles.patientImageContainer}>
                                                {patient.imgUrl?
                                                    <Image 
                                                    style={styles.patientImage}
                                                    source={{uri: patient.imgUrl}} />
                                                    :
                                                    this.renderAvatar(patient, styles)
                                                }
                                            </View>
        
                                            <View style={styles.plItemContentWrapper}>
                                                <View style={styles.patientDescriptionContainer}>
                                                    <Text style={styles.patientName}>{patient.PatientName}</Text>
                                                    <Text style={styles.patientSymptoms}>  {patient.Urgency}</Text>
                                                </View>
        
                                                <View style={styles.plItemActionsWrapper}>
                                                    <View style={styles.optionsWrapper}>
                                                        <TouchableOpacity 
                                                            style={styles.optionsButton}
                                                            onPress={() => this.toggleOpenPopOver(patient)}
                                                        >
                                                            <Icon name="ios-more" style={{fontSize: 24, opacity: 0.8}}/>
                                                        </TouchableOpacity>
        
                                                    </View>
                                                    {/* <OptionsPopover /> */}
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableHighlight>
                                )
                            }}
                        />
                        :
                        <ScrollView 
                            contentContainerStyle={{height: '100%', width: '100%', alignItems: 'center'}}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this.onRefresh}
                                />
                            }>
                            <View style={{width: '90%',}}>
                                <Text style={{opacity: 0.65, fontSize: 16}}> No patients at the moment</Text>
                            </View>
                        </ScrollView>
                    }
                </View>
            )
        }
        return null;
    }

    HeaderBar = () => {
        return (
            <View style={styles.hBWrapper}>
                {/* <Text>Patients List</Text> */}
                <View style={styles.hBFilterWrapper}>
                    <TouchableOpacity style={styles.hBFilterButtonContainer}>
                        <View style={styles.hBFilterButton}>    
                            <Text style={styles.hBFilterButtonText}> Urgent </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.hBFilterButtonContainer}>
                        <View style={styles.hBFilterButton}>
                            <Text style={styles.hBFilterButtonText}> Non-Urgent </Text> 
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.hBStatusWrapper}>
                    <Text>statuses</Text>
                </View> */}
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
        this.state = {
            patients: false,
            dataSource: false,
            refreshing: false,
            isPopoverVisible: false,
            patientQueue: {
                isLive: true,
                queue: [
                {
                    PatientName: "Chris",
                    imgUrl: "https://us.123rf.com/450wm/robuart/robuart1703/robuart170300728/73855318-emotion-avatar-man-happy-successful-face-vector.jpg?ver=6",
                    Urgency: 'Urgent',
                    subtitle: 'Sore throat',
                    consultations: [
                        {
                            date:  moment("2018-06-14"),
                            symptoms: "Stomachache",
                            description: 'He fell sick two days ago, having a severe stomach pain',
                            medications: ['Charcoal pills']
                        },
                        {
                            date:  moment("2018-06-01"),
                            symptoms: "Vomitting, fever",
                            description: 'He fell sick two days ago, having a severe stomach pain',
                            medications: ['Charcoal pills','panadol']
                        },
                        {
                            date:  moment("2018-05-19"),
                            symptoms: "Headache, fever",
                            description: 'He fell sick two days ago, having a severe stomach pain',
                            medications: ['antibiotics','panadol']
                        },
                        {
                            date: moment("2018-05-03"),
                            symptoms: "Flu, Cough",
                            description: 'He fell sick two days ago, having a severe stomach pain',
                            medications: ['Cough Syrup','chloromophomine']
                        },
                    ]
                },
                {
                    PatientName: "Amy",
                    imgUrl: "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
                    subtitle: "Runny nose ",
                    Urgency: 'Non Urgent',
                    consultations: [
                        {
                            date: "14 June 2018",
                            symptoms: "Flu, fever",
                            description: 'He fell sick two days ago, having a severe stomach pain',
                            medications: ['antibiotics','panadol','chloromophomine']
                        }
                    ]
                }
            ]
            }
        }
    }

    componentDidMount() {
        
        // const date = moment().format('YYYY-MM-DD');
        // this.props.fetchQueueByDate(date)
        // _test()
        // console.log('_test = "' , date , "hi")
        // date)
        // .then( res => {
        //     console.log("data = " , res.data   )
        //     const patients = JSON.parse(res.data.data);
            // console.log("paitents = "  , patients)
            // this.setState({
            //     patients,
            //     dataSource: ds.cloneWithRows(patients)
            // })
        //     // console.log('res.data = " , ' , res.data)
        //     // console.log('res = ' ,  JSON.parse(res.data.data))
        // })
        // .catch( err => console.log("error = " , err))
    }

    // componentWillReceiveProps(newProps) {
    //     if(newProps.patientQueue && newProps.patientQueue.isLive) {
    //         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    //         const patients = newProps.patientQueue.queue;

    //         this.setState({
    //             patients,
    //             dataSource: ds.cloneWithRows(patients)
    //         })
    //     }
    // }

    onRefresh = () => {
        this.setState({
            refreshing: true
        })

        const date = moment().format('YYYY-MM-DD');
        this.props.fetchQueueByDate(date)

        //retrieve data from database

        setTimeout(() => {
            this.setState({
                refreshing: false
            })
        }, 500)
    }

    removePatient = (QueueID) => {
        // console.log("queueueueuee id = " , QueueID)
        _removePatient(QueueID)
        .then( res => {
            this.setState({
                patients: this.state.patients.map( patient => patient.QueueID != QueueID)
            })
        })
        .catch( err => console.log("ERROR = " , err))
    }

    toggleOpenPopOver = (patient) => {
        Actions.patientOptions({patient, visible: true})
        // this.setState({
        //     isPopoverVisible: true
        // })
    }
}

export default connect(
    state => ({
        patientQueue: state.patientQueue
    }),
    dispatch => ({
        fetchQueueByDate: (date) => dispatch(fetchQueueByDate(date))
    })
)(PatientQueueList);
