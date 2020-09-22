import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#0b5fff'
    },
    activeText: {
        color: '#0b5fff',
    },
    drawer: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerMenu: {
        // opacity: 0.65,
        color: 'white'
    },
    headerActions: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerWrapper: {
        // backgroundColor: 'blue',
        // height: '100%',
        paddingTop: 30,
        flexDirection: 'column',
        backgroundColor: '#1890ff'
    },
    headerTabsWrapper: {
        flexDirection: 'row',
        height: '45%',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#d9d9d9',
        borderStyle: 'solid',
    },
    headerTabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    headerTitle: {
        flex: 4,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    headerTitleRow: {
        height: '100%',
        flexDirection: 'row',
        // paddingTop: 10
    },
    unActiveTab: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9'
    },
    unActiveText : {
        color: 'black',
        opacity: 0.65
    }
})
