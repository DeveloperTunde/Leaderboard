import {StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import { Colors } from '../constant/Colors';
const {width, height} = Dimensions.get('window');
const STATUSBAR_HEIGHT = StatusBar.currentHeight;


export default  styles = StyleSheet.create({
    statusBar: {
        height: Platform.OS == 'ios'? 70:STATUSBAR_HEIGHT,
      },
      statusBar2: {
        height: 0
      },
      appBar: {
        backgroundColor:'#79B45D',
        height: STATUSBAR_HEIGHT -50,
     },
     text1:{
        fontSize: 15,
        fontWeight: '400',
        color: Colors.gray,
        fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
     },
     text2:{
        fontSize: 10,
        fontWeight: '600',
        color: Colors.gray,
        fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
     },
     screen_container:{
         width,
         height: '100%',
         backgroundColor: '#ffffff',
         paddingTop: Platform.OS == 'ios'? 0: 30
     },
     searchbar: {
        marginHorizontal: 0,
        marginTop: -5,
        width: '70%',
    },
    searchbar_input:{
        paddingVertical: Platform.OS == 'ios' ? 16: 12,
        fontSize: 16,
        borderRadius:10,
        color: Colors.gray,
        fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
        fontWeight:  '400',
        paddingLeft: 40,
       
    },
    header_wrapper:{
        width,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 10,
    },
    header_button:{
        paddingHorizontal: 20,
        paddingVertical: Platform.OS == 'ios' ? 16: 12,
        borderRadius: 10,
        backgroundColor: '#e5e6e7',

    },
    header_button_text:{
        fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
    },
    table_wrapper:{
        width:'100%',
        backgroundColor:Colors.white,
        marginTop: 20,
        paddingHorizontal: 10,
    },
    table_head:{
        width:'100%',
        backgroundColor:Colors.secondary,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    table_body:{
        width:'100%',
        backgroundColor:Colors.white,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    table_column:{
        width: '25%',
        paddingVertical: 16,
        borderWidth: .4,
        borderColor: Colors.black,
        textAlign:'center'
        
    },
 

    centeredView: {
        width: '100%',
        height:'100%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
       // backgroundColor: 'rgba(0, 0, 0, .5)',
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        
      },
      button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 17,
        fontWeight: '400',
        color: Colors.gray,
        fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
      }
    
});