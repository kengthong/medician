import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItemContainer: {
        width: '90%',
        flexDirection: 'row',
        height: 50,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: '#e8e8e8'
    },
    listItemWrapper: {
        width: '100%',
        alignItems: 'center',
    },
    listPatientAvatarText: {
        fontWeight: 'bold',
        // color: 'rgb(245, 106, 0)',
        color: 'white',
        fontSize: 16
    },
    listPatientAvatarWrapper: {
        width: 45, 
        height: 45,
        borderColor: '#e8e8e8',
        borderRadius: 22,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c9c9c9'
    },
    listPatientImageContainer: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listPatientImage: {
        width: 45, 
        height: 45,
        borderColor: '#e8e8e8',
        borderRadius: 22,
        borderWidth: 1,
    },
    listPatientNameContainer: {
        width: '70%',
        justifyContent: 'center'
    },
    listPatientName: {
        fontSize: 16,
        fontWeight: '400'
    },
    listWrapper: {
        height: '100%',
        width: '100%',
    },
    plHeaderContainer: {
        // padding: 8,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: '#e8e8e8'
    },
    plHeader: {
        height: '100%',
        width: '95%',
        paddingTop: 20,
        paddingLeft: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plHeaderText: {
        height: '100%',
        width: '100%',
        fontWeight: '600',
        fontSize: 16
    },
})

export default styles;