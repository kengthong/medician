import React from 'react';
import { View } from 'react-native';
import { 
    Button,
    Container,
    Header,
    Content,
    Body,
    Icon,
    Segment,
    SwipeRow,
    Tab,
    Tabs,
    Text,
    Thumbnail,
    Title
} from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class PatientList extends React.Component {

    render() {

        const { queue, patients, history } = this.state;

        if(!patients) {
            return (
                <View> No patients</View>
            )
        }
    
        return (
            <Container>
                <Header hasSegment>
                    <Body>
                        <Title> Patients </Title>
                    </Body>
                </Header>
                <Segment
                            style={{}} >
                    <Button 
                        first 
                        onPress={() => this.setState({queue:true, history: false})}
                        active={queue}
                    >
                        <Text>
                            Queue
                        </Text>
                    </Button>
                    <Button 
                        last 
                        onPress={() => this.setState({history:true, queue: false})}
                        active={history}
                    >
                        <Text>
                            History
                        </Text>
                    </Button>
                </Segment>
    
                {queue? 
                    <Content>
                        {patients.map( (patient, i) => {
                            return (
                                <SwipeRow 
                                    // onClick={() => this.onPressPatient(patient)}
                                    key={i}
                                    // style={{padding: 8}}
                                    rightOpenValue={-75}
                                    body={
                                        <View style={{flexDirection: 'row'}}>
                                            <Thumbnail 
                                                // style={{width: 30, height: 30}}
                                                circle
                                                source={{ uri: patient.imgUrl }} />
                                            
                                            <View style={{flexDirection: 'column', justifyContent: 'flex-start'}} >
                                                <Text>{patient.name}</Text>
                                                <View style={{flexDirection: 'row'}}>
                                                    <Text note>{patient.subtitle}</Text>        
                                                </View>

                                                

                                                <View style={{ marginLeft: 20, flexDirection: 'row', justifyContent: 'space-between'}} >
                                                    <Text 
                                                        style={{color: 'blue', }}
                                                        note onPress={() => this.viewProfile(patient)}>
                                                        View Profile
                                                    </Text>
                                                    {/* <Button 
                                                        style={{width: 20}}
                                                        onPress={() => this.viewProfile(patient)}>    
                                                        <Icon name="md-user" />
                                                    </Button> */}
                                                </View>
                                            </View>

                                            <Text note>3:43 pm</Text>
                                        </View>
                                    }
                                    right={
                                        <Button 
                                            onPress={() => this.onPressPatient(patient)}>    
                                                <Icon name="md-add" />
                                        </Button>
                                    }
                                    // onPress={() => this.onPressPatient(patient)}>
                                />
                            )
                        })}
                    </Content>:
                    
                    <Content>
                        <Text>History</Text>
                    </Content>
                }
                
            </Container>
        )
    }


    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            queue: true,
            history: false
        }
    }

    componentWillMount() {
        this.setState({
            patients: this.props.patients
        })
    }

    onPressPatient = (patient) => {
        // console.log("patient = " , patient);
        console.log("paitents = " , this.props.patientsList)
        // Actions.activeSession({patient})
    }
    
    viewProfile = ( patient ) => {
        Actions.patientProfile({patient})
    }
}

export default connect(
    state => ({
        patientsList: state.patients
    })
)(PatientList);