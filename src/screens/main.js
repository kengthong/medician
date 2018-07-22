import React from 'react';
import MainTabBar from '../components/main-tab-bar';
import HeaderBar from '../components/main-header/header-bar';
import { View } from 'react-native';

const MainScreen = () => {
    return (
        <View style={{backgroundColor: 'white'}}>
            <HeaderBar height={'10%'}/>     
            <MainTabBar height={'90%'}/>
        </View>
    )
}

export default MainScreen;