import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    menuContainers: { 
        backgroundColor: '#f08080', 
        elevation: 5,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20, 
        marginTop: 10
    },
    menuContainersText: {
        fontSize: 25, 
        color: 'black'
    },
    imageHamburger: {
        width: 30, 
        height: 30, 
        marginLeft: 10
    },
    barView: {
        flex:1, 
        backgroundColor: 'white'
    },
    bar: {
        flex: 0.08 , 
        marginTop: 13, 
        flexDirection: 'row'
    },
    newsBarText: {
        fontStyle: 'italic', 
        fontSize: 20, 
        marginLeft: 30, 
        fontWeight: '700'
    }
})
export default styles;