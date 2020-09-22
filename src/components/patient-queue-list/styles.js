import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    hBFilterButton: {
        width: '100%',
        borderColor: '#40a9ff',
        borderWidth: 1,
        height: '100%',
        backgroundColor: '#40a9ff',
        borderStyle: 'solid',
        alignItems: 'center',
        paddingTop: 10
        // backgroundColor: '#e8e8e8'
    },
    hBFilterButtonContainer: {
        width: '50%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    hBFilterButtonText: {
        color: 'white',
        lineHeight: 24,
        fontWeight: '500',
        fontSize: 14
    },
    hBFilterWrapper: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent:'space-around'
    },
    hBStatusWrapper: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
    },
    hBWrapper: {
        flexDirection: 'column',
        width: '100%',
        height: '8%',
        // backgroundColor: '#40a9ff'
        backgroundColor: 'white'
    },
    plMainWrapper: {
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
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
    patientDescriptionContainer: {
        width: '90%',
        // marginTop: '1%',
        height: '100%',
        flexDirection: 'column',
        alignSelf: 'flex-end',
        justifyContent: 'center'
    },
    patientImage: {
        width: 45, 
        height: 45,
        borderColor: '#e8e8e8',
        borderRadius: 22,
        borderWidth: 1,
    },
    patientImageContainer: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    plContainer: {
        // flex: 9,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#e8e8e8', 
        borderStyle: 'solid'
    },
    plHeaderContainer: {
        // padding: 8,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    plHeader: {
        height: '100%',
        width: '95%',
        // borderBottomWidth: 1,
        // borderColor: '#e8e8e8', 
        // borderStyle: 'solid',
        paddingTop: 20,
        paddingLeft: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    plHeaderText: {
        height: '100%',
        width: '100%',
        // borderBottomWidth: 1,
        // borderColor: '#e8e8e8', 
        // borderStyle: 'solid',
        fontWeight: '600',
        fontSize: 16
    },
    plItemActionsWrapper : {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
    },
    plItemContentWrapper: {
        height: '100%',
        width: '80%',
        justifyContent: 'flex-start',
        borderColor: '#e8e8e8', 
        borderStyle: 'solid',
        borderBottomWidth: 1,
        flexDirection:'row',
    },
    plItemWrapper: {
        height: 50,
        // borderBottomWidth: 4,
        // borderTopWidth: 4,
    },
    plItem: {
        // padding: '4%',
        flexDirection: 'row',
        height: '100%',

        // paddingRight: '4%',
    },
    plOptionsButton: {
        justifyContent: 'center',
        // backgroundColor: 'blue'
    },
    plOptionsWrapper: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    patientName: {
        // opacity: 0.9,
        flex: 1
    },
    patientSymptoms: {
        flex:1 ,
        opacity: 0.6,
        fontSize: 12,
        color: 'black',
        // backgroundColor: 'blue'
    },
})

export default styles;