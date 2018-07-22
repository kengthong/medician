import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import { styles } from './index.css.js';

class MainHeader extends React.Component {
    render() {
        const { activeTab } = this.state;
        const { height } = this.props;

        return (
            <View style={[styles.headerWrapper, {height: height}]}>
                <View style={styles.headerTitleRow}>
                    <View style={styles.drawer}>
                        <TouchableOpacity
                            transparent
                            >
                            <Icon style={styles.drawerMenu} name="md-menu" />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.headerTitle}>
                        <Text style={{fontWeight: 'bold', color: 'white'}} >Medician</Text>
                    </View>

                    <View style={styles.headerActions}>
                        <Icon style={{fontSize: 24, color: 'white'}} name="ios-notifications-outline" />
                    </View>
                </View>

                {/* <View style={styles.headerTabsWrapper}>
                    <TouchableOpacity
                        onPress={() => this.handleTabPress('home')}
                        style={[
                            styles.headerTabItem, 
                            activeTab == 'home' ? styles.activeTab : styles.unActiveTab
                            ]}>
                        <View>
                            <Text style={activeTab == 'home' ? styles.activeText : styles.unActiveText}> Home </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.handleTabPress('patients')}
                        style={[
                            styles.headerTabItem,
                            activeTab == 'patients' ? styles.activeTab : styles.unActiveTab
                            ]}>
                        <View>
                            <Text style={activeTab == 'patients' ? styles.activeText : styles.unActiveText}> Patients </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.handleTabPress('history')}
                        style={[
                            styles.headerTabItem,
                            activeTab == 'history' ? styles.activeTab : styles.unActiveTab
                            ]}>
                        <View>
                            <Text style={activeTab == 'history' ? styles.activeText : styles.unActiveText}> History </Text>
                        </View>
                    </TouchableOpacity>

                </View> */}
            </View>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'home'
        }
    }

    handleTabPress = (name) => {

        this.setState({
            activeTab: name
        })

        this.props.toggleActive(name)
    }
}

export default MainHeader;