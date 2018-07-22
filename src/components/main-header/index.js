import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import HomeComponent from '../home';
import HeaderBar from './header-bar';
import PatientList from '../patients-list/index';


class MainTabs extends React.Component {

    render() {
        let { activeTab, patients } = this.state;

        return (
            // <View>
                <HeaderBar toggleActive={this.toggleActive}/>
                /* <View>

                    { activeTab == 'home' ? 
                        this.renderHomeContent(patients)
                        :
                        activeTab == 'patients' ?
                        this.renderPatientsList(patients)
                        :
                        'Test'
                    }
                </View> */
            /* </View> */
        )

        // onPress={() => Actions.activeSession({ patient: patients[0] }) }>
    }

    renderHomeContent = (patients) => {
        return (
            <View style={{ height: '100%'}}>
                <HomeComponent patients={patients}/>
            </View>
        )
    }

    renderPatientsList = (patients) => {
        return (
            <PatientList 
                patients={patients}
                />
        )
    }

    constructor(props) {
        super(props);
        this.state = { 
            activeTab: 'home',
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
            ]
        }
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         activeTab: 'home',
            // patients: [
            //     {
            //         name: "Chris",
            //         imgUrl: "https://us.123rf.com/450wm/robuart/robuart1703/robuart170300728/73855318-emotion-avatar-man-happy-successful-face-vector.jpg?ver=6",
            //         subtitle: 'Sore throat',
            //         consultations: [
            //             {
            //                 date:  moment("2018-06-14"),
            //                 symptoms: "Stomachache",
            //                 description: 'He fell sick two days ago, having a severe stomach pain',
            //                 medications: ['Charcoal pills']
            //             },
            //             {
            //                 date:  moment("2018-06-01"),
            //                 symptoms: "Vomitting, fever",
            //                 description: 'He fell sick two days ago, having a severe stomach pain',
            //                 medications: ['Charcoal pills','panadol']
            //             },
            //             {
            //                 date:  moment("2018-05-19"),
            //                 symptoms: "Headache, fever",
            //                 description: 'He fell sick two days ago, having a severe stomach pain',
            //                 medications: ['antibiotics','panadol']
            //             },
            //             {
            //                 date: moment("2018-05-03"),
            //                 symptoms: "Flu, Cough",
            //                 description: 'He fell sick two days ago, having a severe stomach pain',
            //                 medications: ['Cough Syrup','chloromophomine']
            //             },
            //         ]
            //     },
            //     {
            //         name: "Amy",
            //         imgUrl: "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg",
            //         subtitle: "Runny nose ",
            //         consultations: [
            //             {
            //                 date: "14 June 2018",
            //                 symptoms: "Flu, fever",
            //                 description: 'He fell sick two days ago, having a severe stomach pain',
            //                 medications: ['antibiotics','panadol','chloromophomine']
            //             }
            //         ]
            //     }
            // ]
    //     }
    // }
    

    toggleActive = (activeTab) => {
        this.setState({
            activeTab
        })
    }
}

export default MainTabs;
