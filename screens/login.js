import React,{Component} from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import StyleSheet from '../src/components/componentsLogin/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import {GoogleSignin, statusCodes } from 'react-native-google-signin';
var thisPage = ""
export default class Login extends React.Component {
    componentDidMount(){
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '569463791717-ccnc7viaggejotcoujqt3uv6fgfu1j3q.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            //hostedDomain: '', // specifies a hosted domain restriction
            //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
            //accountName: '', // [Android] specifies an account name on the device that should be used
            //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
          });
    }
    Goto = () => {
        var page = thisPage
        const {changePage}=this.props;
        this.changePage= changePage;
        this.changePage(page);
    }
    LoginByGoogle = (givenName,familyName,email) => {
        var page = "LoginGoogle"
        console.log(givenName)
        const {changePage}=this.props;
        this.changePage= changePage;
        this.changePage(page,givenName,familyName,email);
    }
   _signInGoogle=async()=>{
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo.user.name);
            //this.setState({ userInfo });
            this.LoginByGoogle(userInfo.user.givenName,userInfo.user.familyName,userInfo.user.email)
          } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
              console.log("user cancelled the login flow")
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
              console.log("operation (e.g. sign in) is in progress already")
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
              console.log("play services not available or outdated")
            } else {
              // some other error happened
              console.log("some other error happened")
            }
            console.log(error);
          }
    }

    render() {
        return (
            <View style={StyleSheet.container}>    
                <Image
                    source={require('../assets/image/logo.png')}
                    style={{ width: 180, height: 180 }}
                />
                <Text style={StyleSheet.textLogin1}>เข้าสู่ระบบสมาชิก</Text>
                <TouchableOpacity style={StyleSheet.buttonLoginNumber}  onPress={()=>this.Goto(thisPage="LoginNumber")}>
                    <Text style={StyleSheet.textbuttonNumber}>
                        เข้าสู่ระบบด้วยเบอร์โทรศัพท์
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleSheet.buttonLoginFacebook} onPress={()=>this.Goto(thisPage="LoginFacebook")}>
                    <Text style={StyleSheet.textbuttonFacebookAndGoogle}>
                        เข้าสู่ระบบด้วย  <Icon name="facebook" color="#FFFFFF" size={20} />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleSheet.buttonLoginGoogle} /*onPress={()=>this.Goto(thisPage="LoginGoogle")}*/onPress={this._signInGoogle}>
                    <Text style={StyleSheet.textbuttonFacebookAndGoogle}>
                        เข้าสู่ระบบด้วย  <Icon name="google-plus" color="#FFFFFF" size={20} />
                    </Text>
                </TouchableOpacity>
                <View style={{ justifyContent: 'space-between', marginTop: 100, flexDirection: 'row' }}>
                    <TouchableOpacity >
                        <Text style={StyleSheet.textLogin2}> นโยบายความเป็นส่วนตัว </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 10, color: '#FFFFFF' }}>|</Text>
                    <TouchableOpacity>
                        <Text style={StyleSheet.textLogin2}> เงื่อนไขการใช้ </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}




