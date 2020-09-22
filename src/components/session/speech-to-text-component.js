import React from 'react';
import debounce from 'debounce';
import { Animated, Easing, Keyboard, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button,
    Card,
    CardItem,
    Form,
    Icon,
    // Text,
    Textarea,
    
} from 'native-base';
import axios from 'axios';

import { Asset, Audio, FileSystem, Font, Video, Permissions, Sound} from 'expo';
import {RECORDING_OPTIONS_SET_HIGH_QUALITY, Base64} from './config';
import styles from './styles.js';

class SpeechToTextComponent extends React.Component {
    render() {

        let { isRecording, isRecordingDone } = this.state;
        console.log('heighg ; " ,  '  ,this.state.keyboardHeight)
        return (
            <Animated.View 
                style={[
                    styles.sTTWrapper, 
                    // {paddingBottom: this.state.keyboardHeight}
                    // {transform: [{ translateY: this.state.keyboardHeight }],}

                ]}
                >

                <View style={styles.sTTTextWrapper}>
                    {/* <View style={styles.sTTTitleContainer}> */}
                    <View>
                        <Text
                            style={styles.sTTSessionTextHeaders}>
                            Session Title
                        </Text>
                        <View style={styles.sTTSessionTitleInputContainer}>
                            <TextInput 
                                keyboardType="default"
                                style={styles.sTTSessionTitleInput}
                                onChangeText={(text) => this.onChangeConsultationText(text)}
                                value={this.props.sessionData.consultationtext}
                                autoCorrect={false}
                                placeholder="Ref Number: 13088"
                                underlineColorAndroid='rgba(0,0,0,0)'
                                // numberOfLines={this.state.textInputHeight}
                            />
                        </View>
                    </View>

                    {/* <View style={styles.sTTNotesWrapper}> */}
                    <View>
                        <Text style={styles.sTTSessionTextHeaders}>
                            Notes
                        </Text>
                        <View style={styles.sTTSessionTitleInputContainer}>
                            <TextInput 
                                keyboardType="default"
                                multiline = {true}
                                style={styles.sTTSessionNotesInput}
                                textAlignVertical='top'
                                onChangeText={(text) => this.onChangeDiagnosisText(text)}
                                placeholder="Symptoms include fever, headache ..."
                                value={this.props.sessionData.diagnosistext}
                                autoCorrect={false}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                // numberOfLines={this.state.textInputHeight}
                            />
                            {this.renderRecordButton()}
                        </View>
                    </View>
                </View>
            </Animated.View>
            
        )
    }

    renderRecordButton = () => {
        const { isRecording } = this.state;

        return (
            <View style={styles.sTTButtonWrapper}>
                {/* { isRecordingDone?
                        <View style={styles.sTTCompleted} >
                            <Text style={{
                                    fontSize: 16, 
                                    paddingBottom: 4, 
                                    color: 'white',
                                    fontWeight: '600'
                                }}>
                                Consultation completed
                            </Text>

                            <Text 
                                style={{paddingLeft: 4, color: 'white'}}>
                                {this._getRecordingTimestamp()}
                            </Text>
                        </View>
                        : */}

                <View style={styles.sTTButtonContainer}>
                    {       isRecording?
                            <TouchableOpacity
                                style={styles.sTTButtonRecording}
                                onPress={() => this._onRecordPressed()}
                                >
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name="md-mic" style={{color: 'black', fontSize: 18, position: 'absolute'}}/>
                                    {this._micButton()}
                                </View>
                                {/* <Text style={{color: 'white'}}>
                                {this._getRecordingTimestamp()}
                                </Text> */}
                            </TouchableOpacity>  
                                
                            // </View>

                            : 
                            <TouchableOpacity
                                style={styles.sTTButton}
                                onPress={() => this._onRecordPressed()}
                                >
                                {/* <Icon name="md-mic" style={{color: 'white', fontSize: 16}}/> */}
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name="md-mic" style={{color: 'black', fontSize: 18, position: 'absolute'}}/>
                                </View>
                                {/* <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}> Start Consultation </Text> */}
                            </TouchableOpacity>

                        }
                </View>

                <View>
                    { isRecording? 
                        <Text style={{opacity: 0.65}}> Listening</Text>
                        :
                        <Text style={{opacity: 0.65}}> Tap here to start speaking </Text>
                    }
                </View>
            </View>
        )
    }

    constructor(props) {
        super(props);
        this.recording = null;
        this.sound = null;
        this.isSeeking = false;
        this.shouldPlayAtEndOfSeek = false;
        this.timer = null;
        this.spinValue = new Animated.Value(0)

        this.state = {
            haveRecordingPermissions: false,
            isLoading: false,
            isRecordingDone: false,
            recordingDuration: 0,
            isRecording: false,
            patient: this.props.patient,
            sessionData: this.props.sessionData,
            animated: new Animated.Value(0),
            opacityA: new Animated.Value(0.5),
            keyboardHeight: new Animated.Value(0)
        }

        this.recordingSettings = JSON.parse(JSON.stringify(RECORDING_OPTIONS_SET_HIGH_QUALITY));
        this.asyncUpdateParentState = debounce(this.asyncUpdateParentState, 1500);
        // this._uploadAudioAsync = this._uploadAudioAsync.bind(this);
    }

    componentDidMount() {
        Audio.setIsEnabledAsync(true);
        Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentLockedModeIOS: false,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        });
        this._askForAudioPermission();
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
        this.state = {}
        this.recording = null;
    }


    keyboardWillShow = (event) => {
        console.log("event start" , event)
        console.log("this.state.keyboard start = " , this.state.keyboardHeight)
        this.setState({
            keyboardHeight: -event.endCoordinates.height
        })
        Animated.timing(this.state.keyboardHeight, {
            duration: 500,
            toValue: event.endCoordinates.height * -1,
        })
    }

    keyboardWillHide = (event) => {
        console.log("event end" , event)
        console.log("this.state.keyboard end = " , this.state.keyboardHeight)
        this.setState({
            keyboardHeight: 0
        })
        Animated.timing(this.state.keyboardHeight, {
            duration: 500,
            toValue: 0,
        })
    }

    _runAnimation = () => {
        const { animated, opacityA } = this.state;

        Animated.loop(
            Animated.parallel([
                Animated.timing(animated, {
                    toValue: 1,
                    duration: 1000,

                }),
                Animated.timing(opacityA, {
                    toValue: 0,
                    duration: 1000,

                })
            ])
        ).start();
    }
    
    _stopAnimation = () => {
        Animated.loop(
            Animated.parallel([
                Animated.timing(animated),
                Animated.timing(opacityA)
            ])
        ).stop();
    }

    _micButton = () => {
        const { isRecording, animated, opacityA, } = this.state;
        if (isRecording) {
            //some function
            this._runAnimation();
            return (
                <Animated.View style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    backgroundColor: '#b1b1b1',
                    opacity: opacityA,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [
                        {
                            scale: animated
                        }
                    ]
                }}>
                    {/* <View style={{
                        backgroundColor: 'green', 
                        zIndex: 10, 
                        height: 60, 
                        width: 60,
                        borderRadius: 50,
                        position: 'absolute',
                        }}>
                        
                    </View> */}
                </Animated.View>
            );
        } else {
            //some function
            return (
                <View style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: 'rgba(153,0,0,0.4)',
                }}>
                    {/* icon or image */}
                </View>
            );
        }
    }

    _askForAudioPermission = async () => {
        const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        this.setState({
            haveRecordingPermissions: response.status === 'granted',
        });
    };

    _getMMSSFromMillis(totalSeconds) {
        // const totalSeconds = millis / 1000;
        const seconds = Math.floor(totalSeconds % 60);
        const minutes = Math.floor(totalSeconds / 60);
    
        const padWithZero = number => {
          const string = number.toString();
          if (number < 10) {
            return '0' + string;
          }
          return string;
        };
        return padWithZero(minutes) + ':' + padWithZero(seconds);
    }
    
    _getRecordingTimestamp() {
        if (this.state.isRecording) {
          return `${this._getMMSSFromMillis(this.state.recordingDuration)}`;
        }
        return `${this._getMMSSFromMillis(this.state.recordingDuration)}`;
    }

    _onStopPressed = async () => {
        this.setState({
            // isRecordingDone: true,
            isRecording: false
        })
        if(this.recording && !this.state.unloading) {
            this.setState({unloading: true})
            await this.recording.stopAndUnloadAsync();
            this.setState({unloading: false})
    
            //call _record and send audio in intervals
            let uri = this.recording.getURI();
            this._uploadAudioAsync(uri)
            this.recording = null;
        } else {
            console.log("already unloading at stop")
        }
        
        clearInterval(this.timer)
    };

    _onRecordPressed = () => {
        if (this.state.isRecording) {
          this._onStopPressed()
        } else {
            this.setState({
                isRecording: true
            })  
            this._stopPlaybackAndBeginRecording();
            this.timer = setInterval( () => {
                this.setState({
                    recordingDuration: this.state.recordingDuration + 1
                })
            }, 1000)
            
          
        //   this.activateFakeResponse()
        }
    };

    _updateScreenForRecordingStatus = (status) => {
        // if (status.canRecord) {
        //   this.setState({
        //     isRecording: status.isRecording,
        //     recordingDuration: status.durationMillis,
        //   });
        // } else if (status.isDoneRecording) {
        //   this.setState({
        //     isRecording: false,
        //     recordingDuration: status.durationMillis,
        //   });
        //   if (!this.state.isLoading) {
        //     this._stopRecordingAndEnablePlayback();
        //   }
        // }
        console.log('updates screen for recording status')
      };

    _startRecording = async () => {

        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        });

        const recording = new Audio.Recording();
        // await recording.prepareToRecordAsync(Expo.Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        // await recording.prepareToRecordAsync(Expo.Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY);
        await recording.prepareToRecordAsync(this.recordingSettings);
        console.log("ran 0")    
        // recording.setOnRecordingStatusUpdate(this._updateScreenForRecordingStatus);
        setTimeout(() => console.log("ran ? = ", recording), 2000)

        await recording.startAsync();

        console.log("ran 1")

        this.setState({
            isLoading: false,
        });
        this.recording = recording;

        setTimeout(() => {

            this._sendAudioInIntervals(recording);


        }, 3000 )
    }

    _sendAudioInIntervals = async (recording) => {

        if(recording && !this.state.unloading) {
            this.setState({unloading: true})
            await recording.stopAndUnloadAsync();
            this.setState({unloading: false})
            if(this.state.isRecording) {
                this._startRecording();
            }
    
            //call _record and send audio in intervals
            let uri = recording.getURI();
            this._uploadAudioAsync(uri)
        } else {
            console.log('already unloading in sending')
        }
        
    }
    
    _stopPlaybackAndBeginRecording = async () => {
        this.setState({
            isLoading: true,
        });
        // if (this.sound !== null) {
        //     await this.sound.unloadAsync();
        //     this.sound.setOnPlaybackStatusUpdate(null);
        //     this.sound = null;
        // }
        // if (this.recording !== null) {
        //     this.recording.setOnRecordingStatusUpdate(null);
        //     this.recording = null;
        // }

        this._startRecording();
        // await recording.prepareToRecordAsync(Expo.Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        // recording.setOnRecordingStatusUpdate(this._updateScreenForRecordingStatus);

        // this.recording = recording;
        // await this.recording.startAsync(); // Will call callback to update the screen.
    }

    _uploadAudioAsync = async (uri) => {
        console.log("URII = " , uri);
        let newUri = uri.replace('file:///', '');
        const response = await fetch(uri);
        const blob = await response.blob();

        //console.log("New URII = " , newUri);
        //let newFile = File.createFromFileName(newUri);
        let reader = new FileReader();
        reader.readAsDataURL(blob);
        
        let scope = this;
        reader.onload = function() {
            console.log("result 64 = " , reader.result)
            let uploadedData = reader.result.split(',')[1]
            // console.log("result 64 = " , uploadedData)
            let _data = {
                audio: uploadedData,
                encoding: 'AMR_WB',
                sample_rate: 16000
            }

            let data = {
                audio: uploadedData,
                encoding: "AMR",
                sample_rate:  "16000"   
            }
            //console.log("result = " , reader.result)
            //console.log("result = " , reader)
            // let apiUrl = 'https://8gpu2xeyl7.execute-api.ap-southeast-1.amazonaws.com/api/v1/submit-audio-all-types';
            const apiUrl = 'https://8gpu2xeyl7.execute-api.ap-southeast-1.amazonaws.com/api/v1/submit-audio-custom';
            // let apiUrl = 'https://8gpu2xeyl7.execute-api.ap-southeast-1.amazonaws.com/api/v1/submit-audio-all-types';
            let options = {
                method: 'POST',
                body: JSON.stringify(_data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
              };

            console.log("options: ' " , _data)
           
            //  fetch(apiUrl, options)
             axios({
                 url: apiUrl,
                 method: 'post',
                 data: _data
             })
             .then( res => {
                 console.log(" res = " , res.data);
                 let newWords = res.data.data.results[0].alternatives[0].transcript || '';
                 console.log("new words = " , newWords)
                let oldWords = scope.props.sessionData.diagnosistext || '';
                const newDiagnosisText = oldWords + " " + newWords;

                scope.onChangeDiagnosisText(newDiagnosisText)
                // scope.setState({
                //     sessionData: {
                //         ...scope.state.sessionData,
                //         diagnosisText: scope.state.sessionData.diagnosisText + " " + newWords
                //     }
                // })
             })
             .catch( err => console.log("error making request" , err))
        };
        reader.onerror = function (error) {
            console.log("error = " , error)
        };
      }

      asyncUpdateParentState = (obj) => {
          this.props.asyncUpdateParentState(obj)
      }

      onChangeConsultationText = (text) => {   
          const obj = {
              consultationtext: text
          }

          this.props.updateParentState(obj)
      }

      onChangeDiagnosisText = (text) => {
          const obj = {
              diagnosistext: text
          }

          this.props.updateParentState(obj)
        //   this.asyncUpdateParentState(obj)
      }

}

export default SpeechToTextComponent;