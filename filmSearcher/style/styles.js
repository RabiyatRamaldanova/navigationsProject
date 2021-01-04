import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        backgroundColor: '#7C71D8',
    },
    topView: {
        marginTop: 20,
        backgroundColor:'#7C71D8'
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
        alignSelf: 'center',
    },
    search: {
        color: 'pink', 
        alignSelf: 'center', 
        justifyContent: 'center', 
        fontSize: 20, 
        fontStyle: 'italic'
    },
    scroll: {
        flex: 10,
        backgroundColor: '#7C71D8',
    },
    image: {
        flex:1, 
        width: 220, 
        height: 220, 
        backgroundColor: 'white', 
        marginTop: 30, 
        justifyContent: 'center',  
        alignSelf: 'center'
    },
    text: {
        //flex: 0.2, 
        fontSize: 20, 
        marginTop: 3,
        width: 220, 
        alignSelf: 'center',
        color: 'pink',
        textAlign: 'center',
    },
    icon: {
        backgroundColor: '#ccc',
        position: 'absolute',
        right: 0,
        bottom: 0
       },
    mapView: { alignItems: 'center'},
    touchable: {backgroundColor: '#382F85'}
});

export default styles;