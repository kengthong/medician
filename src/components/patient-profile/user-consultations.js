import React from 'react';
import { Body, Container, Header, Content, Left, List, ListItem, Right, Text, Separator } from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

const UserConsultations = (props) => {
    const { patient } = props;

    const renderList = () => {
        const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        console.log("consultations = " , patient)
        return (
            <Content>
                {patient.consultations.map( c => {
                    console.log("dates =" , c.date.format("M"))
                    return (
                        <ListItem
                            onPress={() => Actions.patientsQueue({c})}>
                            <Left>
                                <Text style={{fontSize: 12}}> {c.date.format('DD MMM YYYY')}</Text>
                            </Left>

                            <Body>
                                <Text> {c.symptoms} </Text>
                            </Body>
                            <Right />
                        </ListItem>
                    )
                })}
            </Content>
        )
    }
    return (
        <Container>
            <Content>

                {renderList()}
                <Separator bordered>
                    <Text> June 2018 </Text>
                </Separator>

                <ListItem>
                    <Text> 14 June 2018 Chris</Text>
                </ListItem>

                <ListItem>
                    <Text> 01 June 2018 Chris</Text>
                </ListItem>

                <Separator bordered>
                    <Text> May 2018</Text>
                </Separator>

                <ListItem>
                    <Text> 19 May 2018 </Text>
                </ListItem>

                <ListItem>
                    <Text> 13 May 2018 </Text>
                </ListItem>
            </Content>
        </Container>
    )
}

export default UserConsultations;