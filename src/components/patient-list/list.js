import React from 'react';
import { ListView, Image, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchAllConsultationHistory } from '../consultation-history/actions';

class ListComponent extends React.Component {
    render() {

        let { patients, isLive, styles } = this.props;
        console.log("patients lpropsist = " , this.props)

        if(isLive && patients) {
            
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
            const dataSource = ds.cloneWithRows(patients);
            
            return (
                <View style={styles.listWrapper}>
                    {patients.length >0 ?
                        <ListView 
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this.onRefresh}
                                />
                            }
                            dataSource={dataSource}
                            renderRow={(patient) => {
                                console.log("patient = = " , patient)
                                return (
                                    <TouchableOpacity 
                                        style={styles.listItemWrapper}
                                        onPress={() => this.handlePressPatient(patient)}
                                    >
                                        <View style={styles.listItemContainer}>
                                            {/* <View style={styles.listPatientImageContainer}>
                                                {patient.imgUrl?
                                                    <Image 
                                                    style={styles.patientImage}
                                                    source={{uri: patient.imgUrl}} />
                                                    :
                                                    this.renderAvatar(patient, styles)
                                                }
                                            </View> */}

                                            <View style={styles.listPatientNameContainer}>
                                                <Text style={styles.listPatientName}>
                                                    {patient.PatientName}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />

                        :
                        <ScrollView>

                        </ScrollView>
                    }
                </View>
            )
        }

        return (
            <View>
                <Text>Loading...</Text>
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
                <View style={styles.listPatientAvatarWrapper}>
                    <Text style={styles.listPatientAvatarText}>
                        {avatar}
                    </Text>
                </View>
            )
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }

    handlePressPatient = (patient) => {
        Actions.patientProfile({patient})
    }

    onRefresh = () => {
        this.setState({
            refreshing: true
        })

        this.props.fetchAllConsultationHistory()
        //retrieve data from database

        setTimeout(() => {
            this.setState({
                refreshing: false
            })
        }, 500)
    }
}

export default connect(
    state => ({
        consultationHistory: state.consultationHistory,
    }),
    dispatch => ({
        fetchAllConsultationHistory: () => dispatch(fetchAllConsultationHistory())
    })
)(ListComponent);
