import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

class PopConfirm extends React.Component {
    render() {

        const { visible, title, subtitle } = this.props;
        if(visible) {
            return (
                <Animated.View 
                    style={{
                        opacity: this.state.popConfirmAnim,
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        backgroundColor:'blue',
                        zIndex: 10,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }} >
                        <View style={styles.popConfirmOuterContainer}>
                            <View style={styles.popConfirmInnerContainer}>
                                <View style={styles.popConfirmTextContainer}>
                                    <Text style={{ fontSize: 15, marginBottom: 4, fontWeight: '600', textAlign: 'center'}}>
                                        {title}
                                    </Text>
                                    {subtitle? 
                                        <Text style={{opacity: 0.8, fontSize: 12, textAlign: 'center'}}>
                                        {subtitle}
                                        </Text>
                                        :
                                        null
                                    }
                                </View>
                                <View style={styles.popConfirmButtonContainer}>
                                    <TouchableOpacity
                                        onPress={() => this.onSelectCancel()}
                                        style={styles.popConfirmButtonNo}>
                                        <Text style={{color: 'rgb(0,122,255)', fontWeight: '600'}}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.onSelectContinue()} 
                                        style={styles.popConfirmButtonYes}>
                                        <Text style={{color: 'rgb(0,122,255)', fontWeight: '400'}}>Continue</Text>
                                    </TouchableOpacity>
    
                                </View>
                            </View>
                        </View>
                </Animated.View>
            )
        }

        return null
    }

    constructor(props) {
        super(props);
        this.state = {
            popConfirmAnim: new Animated.Value(0),
            visible: this.props.visible
        }
    }

    componentWillReceiveProps(newProps) {
        if(this.state.visible != newProps.visible) {
            this.toggleVisibility(newProps.visible)
        }
    }

    onSelectCancel = () => {

        Animated.timing(          // Animate over time
            this.state.popConfirmAnim,    // The animated value to drive
            {
                toValue: 0,           // Animate to opacity: 1 (opaque)
                duration: 100,       // 2000ms
            }
        ).start(); 
        setTimeout(() => {
            this.setState({
                onSelectBack: false,
                popConfirmAnim: new Animated.Value(0)
            })
            this.props.onSelectCancel()
        },100)
    }

    onSelectContinue = () => {
        Animated.timing(          // Animate over time
            this.state.popConfirmAnim,    // The animated value to drive
            {
                toValue: 0,           // Animate to opacity: 1 (opaque)
                duration: 100,       // 2000ms
            }
        ).start();  

        setTimeout(() => {
            this.setState({
                popConfirmAnim: new Animated.Value(0)
            })
        }, 100)

        this.props.onSelectContinue()
    }

    toggleVisibility = (newProps) => {
        Animated.timing(          // Animate over time
            this.state.popConfirmAnim,    // The animated value to drive
            {
                toValue: 1,           // Animate to opacity: 1 (opaque)
                duration: 100,       // 2000ms
            }
        ).start();  

        setTimeout(() => {
            this.setState({
                popConfirmAnim: new Animated.Value(1)
            })
        }, 100)
    }
}

export default PopConfirm;