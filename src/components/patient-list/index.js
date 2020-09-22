import React from 'react';
import { connect } from 'react-redux';
import { Text, View, } from 'react-native';
import ListComponent from './list';
import styles from './styles';

class PatientList extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.plHeaderContainer}>
                    <View style={styles.plHeader} >
                        <Text style={styles.plHeaderText}>
                            Patients List
                        </Text>
                    </View>
                </View>
                {console.log("patientslist " , this.props.consultationHistory.patients)}
                {console.log('state.patients = ', this.state.patients)}
                <ListComponent 
                    patients={this.state.patients} 
                    isLive={this.props.consultationHistory.isLive}
                    styles={styles}
                />
            </View>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            patients: this.props.consultationHistory.patients.sort(this.alphaNumericSort)
        }
    }
    componentWillReceiveProps( newProps ) {
        if(this.props.consultationHistory.patients != this.state.patients) {
            this.setState({
                patients: this.props.consultationHistory.patients.sort(this.alphaNumericSort)
            })
        }
    }

    alphaNumericSort = ( a,b ) => {
        let reA = /[^a-zA-Z]/g;
        let reN = /[^0-9]/g;

        let aA = a.PatientName.replace(reA, "");
        let bA = b.PatientName.replace(reA, "");
        if (aA === bA) {
            let aN = parseInt(a.PatientName.replace(reN, ""), 10);
            let bN = parseInt(b.PatientName.replace(reN, ""), 10);
            return aN === bN ? 0 : aN > bN ? 1 : -1;
        } else {
            return aA > bA ? 1 : -1;
        }
    }
}

export default connect(
    state => ({
        consultationHistory: state.consultationHistory
    }),
)(PatientList);
