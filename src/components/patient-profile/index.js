import React from 'react';
import { View } from 'react-native';
import { Button, Card, Container, Header, Title, Content, Icon, Left, Right, Body, StyleProvider, Tab, Tabs, TabHeading, Text, Thumbnail } from 'native-base';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import getTheme from '../../../native-base-theme/components';
import commonColor from '../../../native-base-theme/variables/commonColor';

import UserConsultations from './user-consultations';

class PatientProfile extends React.Component {
    render() {
        const { patient } = this.state;
        console.log("props = " , this.props)
        if(!this.props.patient) {
            return (
                <View>
                    <Text> Patient not loaded</Text>
                </View>
            )
        }

        return (
            <StyleProvider style={getTheme(commonColor)}>
                <Container style={{height: 400}}>
                    {/* <Text> PATIENT PROFILE </Text> */}

                    <Header span>
                        <Left>
                            <Button 
                                transparent
                                onPress={() => Actions.pop()}>
                                <Icon name="arrow-back" />
                            </Button>
                        </Left>

                        <Body>
                            {/* Profile header */}
                            <Grid>
                                <Row size={2}>
                                    <Col style={{width: 70}}>
                                        <Thumbnail 
                                            source={{uri: patient.imgUrl}}
                                            />
                                    </Col>

                                    <Col style={{width: '100%'}}>
                                        <Text> Name: {patient.name}</Text>
                                    </Col>
                                </Row>

                                {/* <Row size={1}>
                                    
                                </Row> */}
                            </Grid>
                            
                        </Body>

                        <Right>

                        </Right>


                    </Header>

                    <Tabs>
                        <Tab
                            onPress={() => this.setState({active: 'consultations'})}
                            heading={ 
                                <TabHeading> 
                                    <Text> Consultations</Text>
                                </TabHeading> 
                            }
                        />

                        <Tab 
                            onPress={() => this.setState({active: 'history'})}
                            heading="History"
                        />
                            {/* <Text>
                                History
                            </Text> */}
                    </Tabs>

                    <Content>
                        {this.renderContent()}
                    </Content>

                </Container>
            </StyleProvider>
        )
    }

    renderContent = () => {
        const { active, patient } = this.state;

        if(active === 'consultations') {
            return (
                <UserConsultations patient={patient}/>
            )
        }

        return (
            <Text> History </Text>    
        )
    }

    constructor(props) {
        super(props);
        // console.log("Props = " , props)

        this.state = {
            patient: props.patient,
            active: 'consultations'
        }
    }

    componentWillMount() {
        this.setState({
            patient: this.props.patient
        })

        setTimeout(() => {
            console.log("patietns = " , this.props.patient)
        },)
    }
}

export default PatientProfile;

