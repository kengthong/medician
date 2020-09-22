import { StyleSheet } from 'react-native';


//lC = loginComponent
const styles = StyleSheet.create({
    disabledLoginButton: {
        backgroundColor: '#2D7BF6',
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.6
    },
    fPWrapper: {
        width: '90%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '400',

    },
    headerWrapper: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    lCUserNameInput: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e8e8e8',
        height: 40,
        width: '100%',
        padding: 8
    },
    lCUserNameInputContainer: {
        width: '90%',
        paddingBottom: '2%'
    },
    lCPasswordInputContainer: {
        width: '90%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e8e8e8',
        flexDirection: 'row',
    },
    lCPasswordInput: {
        height: 40,
        width: '80%',
        padding: 8
    },
    lCWrapper: {
        width: '100%',
        height: '30%',
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButton: {
        backgroundColor: '#2D7BF6',
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'

    },  
    loginButtonContainer: {
        width: '100%',
        // marginTop: '4%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        color: 'white',
        fontWeight: '400',
        fontSize:16
    },
    mainWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: '#3E90F7',
        backgroundColor: 'aliceblue',
        height: '100%',
        width: '100%'
    },
    registerWrapper: {
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;
