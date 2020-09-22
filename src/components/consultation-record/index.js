import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';

import { Actions } from 'react-native-router-flux';

import Details from './details';
import styles from './styles';

class ConsultationRecord extends React.Component {
    render() {
        const { record } = this.props;
        return (
            <View style={{height: '100%', width: '100%'}}>
                <View style={styles.headerWrapper}>
                    <View style={styles.headerBack}>
                        <TouchableOpacity
                            onPress={() => this.onSelectBack()}>
                            <Icon name="arrow-back" style={{color: 'white'}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerDetails}>
                        <Text style={styles.headerDetailsText}>
                            {record.PatientName}
                        </Text>
                        {/* <Text style={styles.sHDetailsDateText}> 30th July 2018</Text> */}
                    </View>

                    <View style={styles.headerSubmit}>
                        {/* <TouchableOpacity
                            onPress={() => this.onSelectSave()}
                            style={styles.headerSubmitButton}
                            >
                            <Icon name="ios-checkmark" style={{color: 'white', fontWeight: 'bold', marginTop: '4%'}} />
                        </TouchableOpacity> */}
                    </View>
                </View>

                <View style={styles.recordContentWrapper}>
                    <ScrollView
                        contentContainerStyle={styles.recordContentContainer}
                        scrollEnabled
                        >
                        {this.renderPatientDetails(record)}
                        <Details 
                            record={record}
                            height='70%'
                            styles={styles}/>
                    </ScrollView>
                </View>
            </View> 
        )
    }

    renderAvatar = (record, styles) => {
        if(record.PatientName){
            const avatar = record.PatientName.split(' ').reduce(
                ( acc, cur ) => acc += cur.charAt(0), 
                ''
            )
            return (
                <View style={styles.patientInfoAvatarWrapper}>
                    <Text style={styles.patientInfoAvatarText}>
                        {avatar}
                    </Text>
                </View>
            )
        }
    }

    renderPatientDetails = (record) => {
        return (
            <View style={styles.detailsContainer}>
                <View style={styles.detailsHeader}>
                    <View style={styles.detailsImgContainer}>
                        {this.renderAvatar(record, styles)}
                    </View>
                    <View style={styles.detailsHeaderTextContainer}>
                        <View style={styles.detailsHeaderNameContainer}>
                            <Text style={styles.detailsHeaderName}> {record.PatientName}</Text>
                        </View>
                        {/* <View style={styles.detailsHeaderNotesContainer}>
                            <Text style={styles.detailsHeaderNotesText}> {record.Urgency} </Text>
                        </View> */}
                    </View>
                </View>

                <View style={styles.detailsInformationContainer}>
                    <View style={styles.detailsInformationHeader}>
                        <Icon name="ios-list-outline" style={{paddingRight: 8, fontSize: 22}}/> 
                        <Text style={{opacity: 0.8}}>Personal Information</Text>
                    </View>
                    <View style={styles.detailsInformationContent}>
                        <Text style={{opacity: 0.65}}> Gender: Male </Text>
                        <Text style={{opacity: 0.65}}> Age: 34</Text>
                        <Text style={{opacity: 0.65}}> Records </Text>
                    </View>
                </View>

            </View>
        )
    }

    onSelectBack = () => {
        Actions.popTo("mainScreen")
    }
}

export default ConsultationRecord;