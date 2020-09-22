import React from 'react';
import { connect } from 'react-redux';
import { Animated, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux'

import { removePatient } from '../actions';

import styles from './styles';

class OptionsPopover extends React.Component {
    render() {
        if(this.props.visible) {
            console.log("visible = " , this.state.popoverAnim)
            return (
                <Animated.View 
                    style={{ 
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        // marginTop: '140%',
                        zIndex: 10,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    }} >
                    <View style={styles.popoverWrapper}>
                        <TouchableWithoutFeedback onPress={() => this.closePopover()}>
                            <View style={styles.popoverBackground}>

                            </View>
                        </TouchableWithoutFeedback>
                        <View style={styles.popoverContainer}>

                            <View style={styles.popoverHeaderContainer}>
                                <Text style={styles.popoverHeaderText}> 
                                    Select an Option
                                </Text>
                            </View>

                            <View style={styles.popoverContentContainer}>
                                <TouchableOpacity 
                                    style={styles.popoverItemWrapper}
                                    onPress={() => this.startConsultation()}
                                    >
                                    <View style={styles.popoverItemTextContainer}>
                                        <Text style={styles.popoverItemText}> Start Consultation</Text>
                                    </View>
                                    <Icon name="ios-checkmark-circle-outline" style={{color: '#a0d911', opacity: 0.8, height: '50%'}} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.popoverItemWrapper}>
                                    <View style={styles.popoverItemTextContainer}>
                                        <Text style={styles.popoverItemText}> View Profile </Text>
                                    </View>
                                    <Icon name="ios-person-outline" style={{color: 'black', opacity: 0.8, height: '50%'}}/>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    style={styles.popoverItemWrapper}
                                    onPress={() => this.removePatient()}>
                                    <View style={styles.popoverItemTextContainer}>
                                        <Text style={styles.popoverItemText}> Remove </Text>
                                    </View>
                                    <Icon name="ios-trash-outline" style={{color: 'red', opacity: 0.8, height: '50%'}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Animated.View>
            ) 
        }  

        return null;
    }

    // renderPopOver = () => {
    //     if(this.state.isPopoverVisible) {
    //         return (
                
    //         )
    //     }
    // }

    constructor(props){
        super(props);
        this.defaultState = {
            isPopoverVisible: false,
            popoverAnim: new Animated.Value(0),
        }
        this.state = {
            isPopoverVisible: false,
            popoverAnim: new Animated.Value(0),
        }
    }

    componentWillMount() {
        this.handleVisibility(this.props);
    }

    componentWillUnmount() {
        this.setState({
            isPopOverVisible: this.defaultState.isPopOverVisible,
            popoverAnim: this.defaultState.popoverAnim
        })
    }

    handleVisibility = (newProps) => {
        if(newProps && newProps.visible) {
            this.toggleOpenPopOver()
        } else {
            this.onCancel('close')
        }
    }

    onCancel = (instruction, patient = {}) => {
        Animated.timing(          // Animate over time
            this.state. popoverAnim,    // The animated value to drive
            {
                toValue: 0,           // Animate to opacity: 1 (opaque)
                duration: 100,       // 2000ms
            }
        ).start(); 
        setTimeout(() => {
            this.setState({
                popoverAnim: new Animated.Value(0)
            })
            
            if(instruction == 'close') {
                Actions.pop();
            } else if(instruction == 'session') {
                Actions.replace('activeSession' , {patient});
            }
        },100)
    }

    removePatient = () => {
        const { QueueID } = this.props.patient;
        // console.log("remove id = " , QueueID)
        this.props.removePatient(QueueID)
        .then(res => {
            if(res.action.payload.data.response == 'ok') {
                this.onCancel('close')
            }
        })
    }

    startConsultation = () => {
        const { patient } = this.props;
        Actions.activeSession({patient})

    }

    toggleOpenPopOver = () => {
        Animated.timing(          // Animate over time
            this.state.popoverAnim,    // The animated value to drive
            {
                toValue: 1,           // Animate to opacity: 1 (opaque)
                duration: 100,       // 2000ms
            }
        ).start();  

        setTimeout(() => {
            this.setState({
                popoverAnim: new Animated.Value(1)
            })
        }, 100)
    }
    
    closePopover = () => {
        this.onCancel('close');

    }
}

export default connect(
    state => ({
        patientQueue: state.patientQueue,
    }),
    dispatch => ({
        removePatient: (queueId) => dispatch(removePatient(queueId))
    })
)(OptionsPopover);
