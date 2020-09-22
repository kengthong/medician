import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    detailsContainer: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        // flex:
    },
    detailsContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '80%',
        backgroundColor: 'aliceblue'
    },
    detailsDiagnosisContainer: {
        height: '90%',
        width: '100%',
    },
    detailsDiagnosisHeader: {
        fontWeight: '500',
        fontSize: 15
    },
    detailsDiagnosisText: {
        opacity: 0.9,
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    detailsHeader: {
        height: '40%',
        width: '95%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    detailsHeaderNameContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    detailsHeaderName: {
        fontSize: 18,
        fontWeight: '500',
    },
    detailsHeaderNotesContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    detailsHeaderTextContainer: {
        flex: 5,
    },
    detailsHeaderNotesText: {
        fontSize: 12,
        opacity: 0.65
    },
    detailsImgContainer: {
        flex: 1,
        alignItems: 'center'
    },
    detailsInformationContainer: {
        width: '96%', 
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 8
    },
    detailsInformationContent: {
        width: '90%',
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    detailsInformationHeader: {
        width: '95%',
        flexDirection: 'row',
        // backgroundColor: 'aliceblue',
        alignItems: 'center',

    },
    detailsSessionHeader: {
        fontWeight: '500',
        fontSize: 15
    },
    detailsSessionText: {
        opacity: 0.9,
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    detailsSessionTitleWrapper: {
        height: '10%',
    },
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
    headerSubmit: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 10
    },
    headerWrapper: {
        height: '10%',
        maxHeight: '10%',
        backgroundColor: '#188fff',
        width: '100%',
        paddingTop: 30,
        flexDirection: 'row',
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
    recordContentWrapper: {
        height: '90%',
        width: '100%',
    },
    recordContentContainer: {
        paddingBottom: '5%',
        flexGrow: 1,
        justifyContent: 'center' 
    }
})

export default styles;