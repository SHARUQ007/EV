import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      marginHorizontal: 20,
      marginBottom: 65,
    },
    textInput: {
      borderBottomWidth: 0.5,
      borderBottomColor: 'black',
      height: 35,
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 5,
      marginHorizontal: 20,
      padding : 3,
      backgroundColor: 'white',
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    containerbox: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        // position: 'absolute', //Here is the trick
        // bottom: 0, //Here is the trick
        
    },
      text: {
     
  
        height: 35,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
        marginHorizontal: 20,
        padding : 3,
        backgroundColor: 'white',
      },
      bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#EE5407',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
      },
  });

  export default styles;

