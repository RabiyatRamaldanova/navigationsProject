import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red'
    },
    display: {
      flex: 0.3,
      backgroundColor: '#172533', 
      justifyContent: 'flex-end', 
      alignItems: 'flex-end'
    },
    buttonContainer: {
      flex: 0.7, 
      flexDirection: 'row', 
      backgroundColor: '#172533'
    },
    numberButtonsContainer: {
      flex: 0.75, 
      flexDirection: 'row', 
      flexWrap: 'wrap',
      justifyContent:'center', 
      alignItems: 'center'
    },
    signButtonsContainer: {
      flex: 0.25, 
      alignItems: 'center', 
      justifyContent: 'flex-start'
    },
    numberButtons: {
      width: '32%', 
      height: '19%',
      backgroundColor: '#1D2E3E', 
      marginRight: '1%', 
      marginBottom:'1%', 
      justifyContent:'center', 
      alignItems: 'center'
   },
  signButtons: { 
    width: '100%',
    marginRight: '1%', 
    marginTop: '1.7%', 
    marginBottom: '1.2%', 
    height: '19%', 
    backgroundColor: '#4BCEA9', 
    justifyContent:'center', 
    alignItems: 'center'
  },
  a: {
    color: '#F86F6F',
    fontSize: 30
  },
  b: {
    color: '#4BCEA9',
    fontSize: 30
  },
  c: {
    color: '#172533', 
    fontSize: 30
  },
  displayText: {
    fontSize: 30,
    color: 'red'
  },
  equalityButton: {
    width: '100%', 
    height: '19%', 
    marginRight: '1%', 
    marginTop: '2%', 
    marginBottom: '0.3%', 
    backgroundColor: '#4BCEA9', 
    justifyContent:'center', 
    alignItems: 'center'
  },
  zeroButton: {
    width: '65%', 
    height: '19%', 
    backgroundColor: '#1D2E3E', 
    marginRight: '1%', 
    marginBottom:'1%', 
    justifyContent:'center', 
    alignItems: 'center'
  }
  });

  export default styles;