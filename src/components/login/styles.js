import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        height: 350,
        borderRadius: 4,
        // width: '85%',
        // width: '85%',
        // height: '40%'
    },
    contentContainer: {
        width: '95%',
        height: 400,
        

        // backgroundColor: 'lightblue',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignContent: 'center',
        // textAlign: 'center'
    },
    contentWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        // flexDirection: 'column',
        // justifyContent: 'center',
        
        // backgroundColor: 'green',
        height: '100%',
        width: '100%'
        // alignContent: 'center'
    },
    formContainer: {
        width: '100%',
        // backgroundColor: 'lightblue'
    },
    formItem:{
        backgroundColor: '#e8e8e8',
        paddingLeft: 16,
        marginLeft: -2,
        // border: '1px solid black',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#dddddd',
        borderStyle: 'solid',

    },
    input: {
        color: 'black',
        fontSize: 14,
    },
    inputLabel: {
        paddingLeft: 8,
        paddingTop: 2,
        // paddingBottom: 4
    },
    loginButton: {
        height: 50,
        width: '100%',
        padding: 8,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'

    },
    loginWrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(82, 159, 244, 0.54)',
        // width: '100%',
        // height: '100%',
    },
    logoRow: {
        // backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    logoStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 200,
        // alignContent: 'center'
    }
})

export default styles;
