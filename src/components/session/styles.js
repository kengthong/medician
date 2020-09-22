import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contentBody: {
        // flexDirection: 'column',
        height: 500,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    headerBody: {
        // backgroundColor: 'pink',
        // height: 
        width: 200,
        flexDirection: 'column'
    },
    headerLeft: {
        flexDirection: 'row',
        // maxWidth: 50,
        maxWidth: 100,
        // backgroundColor: 'pink'
    },
    headerLeftButton: {
        width: 200
    },
    headerBodyDetails: {
        flexDirection: 'row'
    },
    patientAvatar: {
        height: 45,
        width: 45,
    },  
    patientAvatarText: {
        fontWeight: 'bold',
        // color: 'rgb(245, 106, 0)',
        color: 'white',
        fontSize: 16
    },
    patientAvatarWrapper: {
        width: 45, 
        height: 45,
        borderColor: '#e8e8e8',
        borderRadius: 22,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgb(253, 227, 207)',
        backgroundColor: '#c9c9c9'
    },
    patientDetailsCard: {
        width: '98%',
        flexDirection: 'row',
        // justifyContent:'flex-start'
    },
    patientDetailsTitle: {
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        borderStyle: 'solid',
    },
    patientDetailsCardPhoto: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    patientInformation: {
        flexDirection: 'column',
        paddingLeft: 10
    },
    popConfirmButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '30%',
        width: '100%',
        borderColor: '#e8e8e8',
        borderTopWidth: 1,
        borderStyle:'solid'
    },
    popConfirmButtonNo: {
        borderRadius: 4,
        width: '50%',
        height: '100%%',
        justifyContent:'center',
        alignItems: 'center',
        borderColor: '#e8e8e8',
        borderRightWidth: 1,
        borderStyle: 'solid'
    },
    popConfirmButtonYes: {
        borderRadius: 4,
        width: '50%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center'
    },
    popConfirmInnerContainer: {
        height: '20%',
        width: '60%',
        borderRadius: 10,
        backgroundColor: 'white',
        position: 'absolute',
        flexDirection: 'column',
    },
    popConfirmOuterContainer: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        // zIndex: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    popConfirmTextContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70%',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    sCContainer: {
        // height: '100%',
        paddingBottom: '5%',

        flexGrow: 1,
        justifyContent: 'center' 
        // alignItems: 'center'
    },
    sCWrapper: {
        height: '90%',
        width: '100%',
    },
    sessionWrapper: {
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        flex: 1
    },
    sHBack: {
        flex: 1.5,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sHDetails: {
        flex: 4,
        justifyContent: 'center'
    },
    // sHDetailsDateText: {
    //     color: 'white'
    // },
    sHDetailsText: {
        color: 'white',
        // fontSize: 18,
        fontWeight: 'bold',
        // textAlign: 'center'
    },
    sHSubmit: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 10
    },
    sHSubmitButton: {
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
    sHWrapper: {
        height: '10%',
        maxHeight: '10%',
        backgroundColor: '#188fff',
        width: '100%',
        paddingTop: 30,
        flexDirection: 'row',
        flex: 1
    },
    sPDetailsContainer: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        // flex:
    },
    sPDetailsContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '80%',
        backgroundColor: 'aliceblue'
    },
    sPDetailsHeader: {
        height: '40%',
        width: '95%',
        // borderBottomColor: '#e8e8e8',
        // borderStyle: 'solid',
        // borderBottomWidth: 1,
        // borderBottomColor: '#e8e8e8',
        // borderStyle: 'solid',
        // borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    sPDetailsHeaderNameContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    spDetailsHeaderName: {
        fontSize: 18,
        fontWeight: '500',
    },
    spDetailsHeaderNotesContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    spDetailsHeaderTextContainer: {
        flex: 5
    },
    spDetailsHeaderNotesText: {
        fontSize: 12,
        opacity: 0.65
    },
    sPDetailsImgContainer: {
        flex: 1,
        alignItems: 'center'
    },
    sPDetailsInformationContainer: {
        width: '96%', 
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    spDetailsInformationContent: {
        width: '90%',
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    sPDetailsInformationHeader: {
        width: '95%',
        flexDirection: 'row',
        // backgroundColor: 'aliceblue',
        alignItems: 'center',

    },
    sTTButton: {
        // backgroundColor: '#2D7BF6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        overflow: 'hidden',
        width: 60,
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 50,
        // width: '96%',
        // marginLeft:'auto',
        // marginRight: 'auto',
    },
    sTTButtonContainer: {
        // backgroundColor: '#e8e8e8',
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 10,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        // borderRadius: 100
    },
    sTTButtonRecording: {
        // backgroundColor: '#2D7BF6',
        // backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 50,
        // borderRadius: 4,
        overflow: 'hidden'
    },
    sTTButtonWrapper: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e8e8e8',
        borderTopWidth: 0,
        backgroundColor: 'white',
        // width: '96%',
        // marginLeft:'auto',
        // marginRight: 'auto',
    },
    sTTCompleted: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(82, 196, 26)',
        height: 60,
        marginTop: 10
    },
    sTTNotesWrapper: {
        width: '100%',
        height: '80%',
    },
    sTTOuterWrapper: {
        width: '100%',
        height: '70%',
    },
    sTTSessionNotesInput: {
        height: 180,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderBottomWidth: 0,
        padding: 8,
        opacity: 0.8,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        width: '90%',
    },
    sTTSessionTextHeaders: {
        fontSize: 14,
        fontWeight: '500',
        padding: 8,
        width: '96%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    sTTSessionTitleInput: {
        height: 40,
        padding: 8,
        // opacity: 0.8,
        borderRadius: 4,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        width: '90%',
    },
    sTTSessionTitleInputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    sTTTextWrapper: {
        width: '100%',
        flexDirection: 'column',
        height: '100%',
        paddingBottom: 40
    },
    sTTTitleContainer: {
        height:'20%',
        width: '100%',
    },
    sTTWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
})

export default styles;