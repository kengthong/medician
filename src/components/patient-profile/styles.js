import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerBack: {
        flex: 1.5,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerDetails: {
        flex: 4,
        justifyContent: 'center'
    },
    headerDetailsText: {
        color: 'white',
        // fontSize: 18,
        fontWeight: 'bold',
        // textAlign: 'center'
    },
    headerWrapper: {
        height: '10%',
        maxHeight: '10%',
        backgroundColor: '#188fff',
        width: '100%',
        paddingTop: 30,
        flexDirection: 'row',
    },
    headerSubmit: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 10
    },
    headerSubmitButton: {
        // padding: 8,
        height: '60%',
        justifyContent: 'center',
        width: 36,
        alignItems: 'center',
        borderRadius: 2,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
        // backgroundColor: 'white'
    },
    patientInfoAvatarText: {
        fontWeight: 'bold',
        // color: 'rgb(245, 106, 0)',
        color: 'white',
        fontSize: 16
    },
    patientInfoAvatarWrapper: {
        width: 60, 
        height: 60,
        borderColor: '#e8e8e8',
        borderRadius: 22,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c9c9c9'
    },
    patientInfoContainer: {
        height: '35%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: '5%'
    },
    patientInfoImageContainer: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    patientInfoImage: {
        width: 60, 
        height: 60,
        borderColor: '#e8e8e8',
        borderRadius: 22,
        borderWidth: 1,
    },
    patientInfoWrapper: {
        height: '25%',
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    patientInfoContentWrapper: {
        height: '100%',
        width: '70%',
        justifyContent: 'center'
    },
    recordDateText: {
        fontWeight: '400',
        fontSize: 16,
    },
    recordTimeText: {
        opacity: 0.8,
        fontWeight: '300',
        fontSize: 12
    },
    recordsHeaderWrapper: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recordsHeaderContainer: {
        height: '100%',
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e8e8e8'
    },
    recordsHeaderText: {
        fontSize: 16,
        fontWeight: '500',
    },
    recordsRowContainer: {
        width: '90%',
    },
    recordsRowWrapper: {
        width: '100%',
        padding: 8,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: '#e8e8e8',
        justifyContent: 'center'
    },
    recordsWrapper: {
        height: '60%',
        width: '100%',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderColor: '#e8e8e8',
        backgroundColor: 'white'
    }
})

export default styles;