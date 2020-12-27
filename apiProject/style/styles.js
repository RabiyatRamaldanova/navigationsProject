import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        backgroundColor: 'pink'
    },
    topView: {
        flex: 0.2, 
        marginTop: 20
    },
    inputText: {
        flex: 0.6, 
        backgroundColor: 'white', 
        fontSize: 20
    },
    button: {
        flex: 0.4, 
        backgroundColor: 'yellow', 
        width: '40%', 
        alignSelf: 'center'
    },
    search: {
        color: 'pink', 
        alignSelf: 'center', 
        justifyContent: 'center', 
        fontSize: 20, 
        fontStyle: 'italic'
    },
    scroll: {
        flex: 0.8
    },
    image: {
        flex:0.9, 
        width: 180, 
        height: 200, 
        backgroundColor: 'white', 
        marginTop: 30, 
        justifyContent: 'center',  
        alignSelf: 'center'
    },
    text: {
        flex: 0.2, 
        fontSize: 20, 
        alignSelf: 'center',  
        marginTop: 10
    }
});

export default styles;