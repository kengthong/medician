import React from 'react';
import { Text, View } from 'react-native';

import OptionsPopover from '../components/patient-queue-list/options';

class PatientOptions extends React.Component {
    render() {

        const { patient } = this.props;
        const { visible } = this.state;

        console.log("visible = " , visible)
        if(visible) {
            return (
                <View style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <OptionsPopover 
                        visible={visible}
                        patient={patient}
                        toggleVisibility={() => this.toggleVisibility()}
                        />
                </View>
            )
        }

        return null;
    }

    constructor(props) {
        super(props);
        this.state = { 
            visible: false
        }
    }

    componentWillMount() {
        this.setState({
            visible: this.props.visible
        })
    }

    toggleVisibility = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
}

export default PatientOptions;
