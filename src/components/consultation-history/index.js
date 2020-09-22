import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { ListView, RefreshControl, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { fetchAllConsultationHistory } from './actions';
import styles from './styles';

// https://8gpu2xeyl7.execute-api.ap-southeast-1.amazonaws.com/api/v1/fetch-all-patients-medical-records

class ConsultationHistory extends React.Component {
    render() {

        const { List } = this;

        return (
            <ScrollView contentContainerStyle={styles.cHWrapper} >
                <List />
            </ScrollView>
        )
    }

    List = () => {
        let { consultationHistory } = this.props;
        const { refreshing } = this.state;

        if(consultationHistory.data && consultationHistory.isLive) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
            const dataSource = ds.cloneWithRows(consultationHistory.data);

            return (
                <View style={styles.cHListWrapper}>
                    <ListView 
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={this.onRefresh}
                        />
                    }
                    dataSource={dataSource}
                    renderHeader={ () => {
                        return (
                            <View style={styles.cHHeaderContainer}>
                                <View style={styles.cHHeader} >
                                    <Text style={styles.cHHeaderText}>
                                        Consultation History
                                    </Text>
                                </View>
                            </View>
                        )
                    }}
                    renderRow={(consultation) => {
                        const dateModified = consultation.DateModified.__value__.split('T');
                        const date = moment(dateModified[0], 'YYYY-MM-DD').format('DD MMMM YYYY');
                        const time = moment(dateModified[1], 'HH:mm:ss').format('HH.MM a');

                        return (
                            <TouchableHighlight
                                style={styles.cHListItemWrapper}
                                underlayColor="#e8e8e8"
                                onPress={() => this.handleOpenConsultationRecord(consultation)}
                            >
                                <View style={styles.cHListItemContainer}>
                                    <View style={styles.cHListItemContentRow}>
                                        <Text style={styles.cHListItemName}>
                                            {consultation.PatientName}
                                        </Text>
                                        <Text style={styles.cHListItemTime}>
                                            { time }
                                        </Text>
                                    </View>
                                    <View style={styles.cHListItemDateRow}>
                                        <Text>{ date }</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        )
                    }}/>
                </View>
            )
        }

        return null;
    }

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            dataSource: false,
            data: false
        }
    }

    componentDidMount() {
        
    }

    // componentWillReceiveProps(newProps) {
    //     if(newProps.consultationHistory && newProps.consultationHistory.isLive) {
    //         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    //         const data = newProps.consultationHistory.data;

    //         this.setState({
    //             data,
    //             dataSource: ds.cloneWithRows(data)
    //         })
    //     }
    // }

    handleOpenConsultationRecord = (consultationRecord) => {
        Actions.consultationRecord({record: consultationRecord})
    }

    onRefresh = () => {
        this.setState({
            refreshing: true
        })

        this.props.fetchAllConsultationHistory()
        //retrieve data from database

        setTimeout(() => {
            this.setState({
                refreshing: false
            })
        }, 500)
    }
}

export default connect(
    state => ({
        consultationHistory: state.consultationHistory
    }),
    dispatch => ({
        fetchAllConsultationHistory: () => dispatch(fetchAllConsultationHistory())
    })
)(ConsultationHistory);