import React from 'react';
import moment from 'moment';
import { ListView, RefreshControl, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Records extends React.Component {
    render() {

        let { patientRecords, styles } = this.props;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        const dataSource = ds.cloneWithRows(patientRecords);
        
        return (
            <View style={styles.recordsWrapper}>

                <View style={styles.recordsHeaderWrapper}>
                    <View style={styles.recordsHeaderContainer}>
                        <Text style={styles.recordsHeaderText}> 
                            Consultation History 
                        </Text>
                    </View>
                </View>
                
                {patientRecords && patientRecords.length > 0?
                    <ListView 
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh}
                            />
                        }
                        scrollEnabled
                        dataSource={dataSource}
                        renderRow={(record) => {
                            const dateModified = record.DateModified.__value__.split('T');
                            const date = moment(dateModified[0], 'YYYY-MM-DD').format('DD MMMM YYYY');
                            const time = moment(dateModified[1], 'HH:mm:ss').format('HH.MM a');

                            return (
                                <TouchableHighlight 
                                    underlayColor="#e8e8e8"
                                    style={styles.recordsRowWrapper}
                                    onPress={() => this.handleOpenRecord(record)}>
                                    <View style={styles.recordsRowContainer}>
                                        <Text style={styles.recordDateText}>{date}</Text>
                                        <Text style={styles.recordTimeText}>{time}</Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        }}
                    />
                :
                    <View>
                        <Text> No data </Text>
                    </View>
                }
            </View>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }

    handleOpenRecord = (record) => {
        Actions.consultationRecord({record})
    }

    onRefresh = () => {

    }


}

export default Records;