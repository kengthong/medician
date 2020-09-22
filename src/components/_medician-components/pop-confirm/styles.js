import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
        borderBottomLeftRadius: 4,
        width: '50%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',
        borderColor: '#e8e8e8',
        borderRightWidth: 1,
        borderStyle: 'solid'
    },
    popConfirmButtonYes: {
        borderBottomRightRadius: 4,
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
})

export default styles;