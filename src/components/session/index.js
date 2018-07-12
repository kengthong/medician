import React from 'react';
import { ListView, View, Text } from 'react-native';
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

import SessionContent from './session-content';

import { Actions } from 'react-native-router-flux';

import getTheme from '../../../native-base-theme/components';
import commonColor from '../../../native-base-theme/variables/commonColor';
import styles from './styles';

//tests
// import AudioManager from '../../lib/audio-manager';

class ActiveSession extends React.Component {
    render() {
        const { patient } = this.state;

        if(!patient) {
            return (
                <View>
                    <Text> no data</Text>
                </View>
            )
        }
        return (
            <StyleProvider style={getTheme(commonColor)}>
                <Container style={{height: '100%'}}>
                    {this.renderHeader(patient)}
                    
                    <Content>
                        {this.renderPatientDetails(patient)}
                        <SessionContent patient={patient} />
                        {/* {this.renderContent(patient)} */}

                        
                    </Content>

                </Container>
            </StyleProvider>
        )
    }

    // renderAudioList() {
    //     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //     return (
    //       <ListView
    //         enableEmptySections
    //         dataSource={ds.cloneWithRows(this.props.records)}
    //         renderRow={(record) => {
    //           return (
    //             // <Swipeable rightButtons={[
    //             //   <TouchableOpacity style={styles.buttonDelete} onPress={() => this.deleteRecord(record)}>
    //             //     <Icon style={styles.iconDelete} name="delete" size={38} color={Colors.white} />
    //             //   </TouchableOpacity>
    //             // ]}>
    //               <TouchableOpacity onPress={() => this.play(record.path)} style={styles.audioItem}>
    //                 <Text style={styles.audioName}>{record.name}</Text>
    //                 <Text style={styles.audioLength}>{AudioManager.getTimeString(record.length)}</Text>
    //               </TouchableOpacity>
    //             // </Swipeable>
    //           );
    //         }}
    //       />
    //     );
    //   }

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

    renderHeader = (patient) => {
        return (
            <Header span >
                <Left style={{width: 100}}>
                    <View style={styles.headerLeft}>
                        
                        <View style={styles.headerLeftButton}>
                            <Button 
                                transparent
                                onPress={() => Actions.pop()}>
                                <Icon name="arrow-back" />
                            </Button>
                        </View>

                    </View>
                </Left>

                <Body>
                    <View 
                        style={styles.headerBody}
                        >
                        <View>
                            <Title>
                                Consultation
                            </Title>

                            <Subtitle>
                                18 May 2018
                            </Subtitle>
                        </View>
                        
                    </View>
                    
                </Body>

                <Right>

                </Right>


            </Header>
        )
    }

    renderPatientDetails = (patient) => {
        return (
            <Card
                transparent
                // style="patientDetailsCard"
            >  
                <CardItem 
                    header
                    style={styles.patientDetailsTitle}
                >
                    <Text note>
                        PatientDetails
                    </Text>
                </CardItem>

                <CardItem 
                    style={styles.patientDetailsCardHeader}
                >
                    <View
                        style={styles.patientDetailsCardPhoto}
                    >
                        <View style={{flexDirection: 'column', width: 50}}>
                            <View>
                                <Thumbnail 
                                    source={{uri: patient.imgUrl}}
                                />
                            </View>

                            <View>
                                <Text>{patient.name}</Text>
                            </View>
                        </View>
                    </View>

                    
                    <View style={styles.patientInformation}>
                        <View>
                            <Text>
                                Gender: M
                            </Text>
                        </View>

                        <View>
                            <Text>
                                Age: 35
                            </Text>
                        </View>
                    </View>

                </CardItem>

            </Card>
        )
    }

    constructor(props) {
        super(props);
        console.log("this.props .patient = " , this.props.patient)
        this.state = {
            patient: this.props.patient
        }
    }
}

export default ActiveSession;