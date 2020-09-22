import React from 'react';
import TabNavigator from 'react-native-tab-navigator';
import moment from 'moment';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Icon, StyleProvider } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import getTheme from '../../../native-base-theme/components';
import commonColor from '../../../native-base-theme/variables/commonColor';

import ConsultationHistory from '../consultation-history';
import HomeComponent from '../home';
import PatientQueueList from '../patient-queue-list/index';
import PatientList from '../patient-list';

import { fetchQueueByDate } from '../patient-queue-list/actions';
import { fetchAllConsultationHistory } from '../consultation-history/actions';

import styles from './styles';

class MainTabBar extends React.Component {

    render() {

        const { patients } = this.state;
        const { height } = this.props;
        const { RenderTabBarContents } = this;
        
        return (
            <StyleProvider
                style={getTheme(commonColor)}
                >
                <View style={{height: height}}>
                    
                    <TabNavigator tabBarStyle={styles.tabBar}>

                        <TabNavigator.Item
                            name="patients"  
                            selected={this.state.selectedTab === 'Patients List'}
                            tabStyle={styles.tabItem}
                            title="Patients"
                            titleStyle={styles.tabTitle}
                            renderIcon={() => 
                                <Icon
                                    name='ios-people'
                                    style={styles.tabIcon}
                                    />
                            }
                            renderSelectedIcon={() => 
                                <Icon
                                    name='ios-people'
                                    style={styles.tabIconSelected}
                                    />
                            }
                            // badgeText={patients.length}
                            onPress={() => this.setState({ selectedTab: 'Patients List'})}>

                            <PatientList 
                                patients={patients}
                                />

                        </TabNavigator.Item>

                        <TabNavigator.Item
                            name="home"  
                            tabStyle={styles.tabItem}
                            selected={this.state.selectedTab === 'home'}
                            title="Home"
                            renderIcon={() => 
                                <Icon 
                                    style={styles.tabIcon}
                                    name="ios-home" />
                            }
                            renderSelectedIcon={ () => 
                                <Icon 
                                    style={styles.tabIconSelected}
                                    name="ios-home" />
                            }
                            // badgeText="1"
                            onPress={() => {
                                this.setState({ selectedTab: 'home'})
                                // Actions.login()
                            }}>
                            
                            <HomeComponent 
                                patients={patients} 
                            />

                        </TabNavigator.Item>

                        <TabNavigator.Item
                            name="history"  
                            selected={this.state.selectedTab === 'history'}
                            tabStyle={styles.tabItem}
                            title="History"
                            titleStyle={styles.tabTitle}
                            renderIcon={() => 
                                <Icon 
                                    name="ios-calendar"
                                    style={styles.tabIcon}/>
                            }
                            renderSelectedIcon={() => 
                                <Icon 
                                    name="ios-calendar"
                                    style={styles.tabIconSelected}/>
                            }
                            // badgeText="2"
                            onPress={() => {
                                this.setState({ selectedTab: 'history'})
                            }}>

                            <ConsultationHistory />

                        </TabNavigator.Item>
                    </TabNavigator>

                </View>
            </StyleProvider>
        )
    }

    constructor(props) {
        super(props);
        this.state = { 
            selectedTab: 'home',
            patients: [
                {
                    name: "Chris",
                    imgUrl: "https://us.123rf.com/450wm/robuart/robuart1703/robuart170300728/73855318-emotion-avatar-man-happy-successful-face-vector.jpg?ver=6",
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
                    name: "Amy",
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
            ],
            refreshing: false
        }
    }

    componentDidMount() {
        const date = moment().format('YYYY-MM-DD');
        this.props.fetchQueueByDate(date)
        this.props.fetchAllConsultationHistory()
    }

    componentWillMount() {
        // this.props._setPatients({ 
        //     patients: this.state.patients
        // })
        // console.log('anything ran?')
    }
}

export default connect(
    state => ({
        
    }),
    dispatch => ({
        fetchQueueByDate: (date) => dispatch(fetchQueueByDate(date)),
        fetchAllConsultationHistory: () => dispatch(fetchAllConsultationHistory())
    })
)(MainTabBar);
