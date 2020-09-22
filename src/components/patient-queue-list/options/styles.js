import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    popoverBackground: {
        width: '100%',
        height: '70%',
    },
    popoverContainer: {
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 20,
        minHeight: 200,
        height: '30%'

    },
    popoverContentContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
    },
    popoverHeaderContainer: {
        // height: 50,
        paddingTop: 20,
        paddingBottom: 15,
        // marginBottom: 10,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: '#e8e8e8'
        // marginBottom: 10,
    },
    popoverHeaderText: {
        opacity: 0.6,
        fontWeight: 'bold',
    },
    popoverItemText: {
        fontWeight: '600',
        opacity: 0.8,
        textAlign: 'center',
        // backgroundColor: 'aliceblue'
    },
    popoverItemTextContainer: {
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    popoverItemWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '29%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 10,
        paddingBottom: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e8e8e8',
        height:90,
        borderRadius: 16
    },
    popoverWrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})

export default styles;