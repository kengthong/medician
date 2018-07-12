import React from 'react';
import { View } from 'react-native';
import { 
    Badge,
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Header,
    Icon,
    Left,
    Right,
    StyleProvider,
    Text,
    Thumbnail,
    Title 
} from 'native-base';

import getTheme from '../../../native-base-theme/components';
import commonColor from '../../../native-base-theme/variables/commonColor';

import styles from './styles';


class HomeComponent extends React.Component {
    render() {   
        const { patients } = this.state;
        return (
            
                <Container>

                    {this.renderHeader()}

                    <Content>
                        {this.renderHomeContent(patients)}
                    </Content>
                </Container>

            // </StyleProvider>
        )
    }

    renderHeader = () => {
        return (
            <Header>
                <Left>
                    <Button
                        transparent
                        >
                        <Icon name="md-menu" />
                    </Button>
                </Left>

                <Body style={styles.headerBody} >
                    {/* Profile header */}
                    <Title>Medician</Title>
                </Body>

                <Right>
                    
                </Right>


            </Header>
        )
    }

    renderHomeContent = (patients) => {
        const { DayStatistics, TopThreePatients } = this; 
        return (
            <View style={{alignItems: 'center', flexDirection: 'column'}}>
                <DayStatistics />
                <TopThreePatients patients={patients}/>
            </View>
        )
    }

    DayStatistics = () => {
        return (
            <View style={{
                    width: '99%',
                    height: '30%',
                    flexDirection: 'row',
                    paddingTop: 0,
                    marginBottom: -6
                }}>
                <Card>
                    <CardItem 
                        header
                        transparent
                        style={{
                            alignItems: 'center',
                            justifyContent:'center',
                            borderBottomWidth: 1,
                            borderBottomColor: '#e8e8e8',
                            borderStyle: 'solid',
                            backgroundColor: 'rgba(82, 159, 244, 0.54)'
                        }}
                    >
                        <Text>
                            Queue
                        </Text>
                    </CardItem>

                    <CardItem
                        style={{
                            alignItems: 'center',
                            justifyContent:'center',
                        }}    
                    >
                        <Text>5</Text>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem 
                        header
                        transparent
                        style={{
                            alignItems: 'center',
                            justifyContent:'center',
                            borderBottomWidth: 1,
                            borderBottomColor: '#e8e8e8',
                            borderStyle: 'solid',
                            backgroundColor: 'rgba(82, 159, 244, 0.54)'
                        }}
                    >
                        <Text>
                            Consulted
                        </Text>
                    </CardItem>

                    <CardItem
                        style={{
                            alignItems: 'center',
                            justifyContent:'center',
                        }}    
                    >
                        <Text>54</Text>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem 
                        header
                        transparent
                        style={{
                            alignItems: 'center',
                            justifyContent:'center',
                            borderBottomWidth: 1,
                            borderBottomColor: '#e8e8e8',
                            borderStyle: 'solid',
                            backgroundColor: 'rgba(82, 159, 244, 0.54)'
                        }}
                    >
                        <Text>
                            Total
                        </Text>
                    </CardItem>

                    <CardItem
                        style={{
                            alignItems: 'center',
                            justifyContent:'center',
                        }}    
                    >
                        <Text>59</Text>
                    </CardItem>
                </Card>
            </View>
        )
    }

    TopThreePatients = ({patients}) => {
        
        return (
            <Card style={{width: '98%', height: '40%'}}>
                <CardItem 
                    header
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#e8e8e8',
                        borderStyle: 'solid',
                    }}>
                    <Button 
                        rounded 
                        small
                    > 
                        <Text>Start next Consultation</Text> 
                    </Button>
                </CardItem>

                    
                <CardItem>
                    <Text note>Patients in line</Text>
                </CardItem>
                
                {patients.map( (patient, i) =>{
                    return (
                        <CardItem key={i}>
                            <Thumbnail 
                                source={{uri: patient.imgUrl}} 
                                small
                            />
                            <Text>{patient.name}</Text>
                            {console.log("top 3 = ",  patients)}
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    )
                })}
                <CardItem footer>
                    <Right>
                        <Text note>
                            View more
                        </Text>
                    </Right>
                </CardItem>

            </Card>
        )
    }

    constructor(props){
        super(props);
        this.state = {
            patients: this.props.patients
        }
    }
}

export default HomeComponent;