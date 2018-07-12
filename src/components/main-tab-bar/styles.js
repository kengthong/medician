import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tabBar: {
        height: 60,
        backgroundColor: 'white',
        borderTopWidth: 0.5,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tabIcon: {
        color: '#3C3C3C',
        height: 25
    },
    tabIconStart: {
        color: 'red',
        // backgroundColor: 'red',
        height: 30
    },
    tabIconSelected: {
        color: '#2D7BF5',
        height: 25
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabTitle: {
        fontSize: 11,
        color: '#3C3C3C'
    }
})

export default styles;
