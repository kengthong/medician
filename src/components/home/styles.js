import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    greetingsContainer: {
        width: '80%',
        height: '80%',
        // backgroundColor: 'lightblue',
        justifyContent: 'center'
    },
    greetingText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
    },
    greetingsWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
        maxHeight: 100,
        width: '100%'
    },
    headerBody: {
        alignItems: 'center',
        // backgroundColor: 'pink',
        justifyContent: 'center'
    },
    homeContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: '#188fff'
    },
    startButtonContainer: {
        // flex: 1.2,
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderStyle: 'solid',
        // borderColor: '#e8e8e8',
        // borderWidth: 1,
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        marginTop: 2,
        height: '15%',
        // marginBottom: 2,
        // marginLeft: 'auto',
        // marginRight: 'auto'
    },
    startButton: {
        // backgroundColor: '#096dd9',
        // borderRadius: 24,
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: '#096dd9',
        // margin: 12,
        // padding: 6,
        // width: 200,
        width: '100%',
        height: '100%',
        backgroundColor: '#fdbe10',
        alignItems: 'center',
        justifyContent: 'center'
        // height: '70%'

        // marginLeft: 8
    },
    startButtonText: {
        color: 'white',
        // opacity: 0.9,
        fontSize: 20,
        fontWeight: '600'
    },
    statsBadge: {
        borderRadius: 8,
        width: 8,
        height: 8,
        marginRight: 10
    },
    statsContainer: {
        width: '100%',
        alignItems: 'center',
        // height: '30%',
        flexDirection: 'row',
        paddingTop: 0,
        marginBottom: -6,
        backgroundColor: '#40a9ff',
        borderColor: '#e8e8e8',
        borderBottomWidth: 1,
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // flex: 2
        minHeight:90,
        height: '20%'
    },
    statsCount: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    statsDescription: {
        fontSize: 13,
        opacity: 0.85,
        fontWeight: '600',
        justifyContent: 'flex-start',
        color: 'white'
    },
    statsItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: '5%'
    },
    statsItemTop: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '6%'
    },
})

export default styles;