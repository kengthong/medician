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
    }
})

export default styles;