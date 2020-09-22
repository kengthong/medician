import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cHHeaderContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white'
    },
    cHHeader: {
        height: '100%',
        width: '95%',
        // borderBottomWidth: 1,
        // borderColor: '#e8e8e8', 
        // borderStyle: 'solid',
        paddingTop: 20,
        paddingLeft: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cHListItemContainer: {
        width: '90%',
        flexDirection: 'column',
        borderStyle: 'solid',
        borderColor: '#e8e8e8',
        borderBottomWidth: 1,
        padding: 8
    },
    cHListItemContentRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cHListItemDateRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    cHListItemName: {
        fontWeight: 'bold',
    },
    cHListItemTime: {
        opacity: 0.65,
        fontSize: 12,

    },
    cHListItemWrapper: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cHHeaderText: {
        height: '100%',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#e8e8e8', 
        fontWeight: '600',
        fontSize: 16
    },
    cHListWrapper: {
        width: '100%',
        height: '100%',
    },
    cHWrapper: {
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    }
})

export default styles;