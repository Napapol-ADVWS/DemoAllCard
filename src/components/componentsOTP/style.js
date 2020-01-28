import {StyleSheet} from 'react-native'

export default StyleSheet.create({
     containerOTP: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#182e68'
      },
      containerFormOTP: {
        justifyContent: 'space-between', 
        flexDirection: 'row',
        alignItems:'center' 
      },
      textbuttonOTP:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
      },
      buttonOTPSubmit: {
        width:200,
        height:60,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dd7534',
        padding: 10,
        borderRadius: 100 / 5,
      },
      InputOTP:{
        width:50,
        marginRight:10,
        marginTop:30,
        fontSize:30,
        color:'#dd7534',
        fontWeight:'bold',
        backgroundColor:'#FFF',
        borderRadius: 100 / 5,
      },
      TextHeadOTPScreen:{
          color:'#FFF',
          fontWeight:'bold',
          fontSize:20,
          marginTop:20
      },
      TextOTPScreen:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:15,
        marginBottom:10
    },
      TextPhoneOTP:{
        color:'#dd7534',
        fontWeight:'bold',
        fontSize:15
    }
});