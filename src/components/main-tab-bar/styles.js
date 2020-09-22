import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tabBar: {
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderTopWidth: 0.5,
        // marginBottom: 10,
        marginTop: 10
    },
    tabBarRow: {
        
        justifyContent: 'center'
    },
    tabIcon: {
        color: '#3C3C3C',
        height: 25,
        width: 25
    },
    tabIconStart: {
        color: 'red',
        // backgroundColor: 'red',
        height: 30
    },
    tabIconSelected: {
        color: '#2D7BF5',
        height: 25,
        width: 25
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
