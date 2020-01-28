import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import StyleSheet from '../src/components/componentsOTP/style'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Login extends React.Component {
    Goto = () => {
        var page = "Login"
        const { changePage } = this.props;
        this.changePage = changePage;
        this.changePage(page);
    }
    render() {
        return (
            <View style={{backgroundColor: '#182e68',alignItems:'center',marginBottom:50}}>
                <View style={{ marginTop: 40 }} />
                <Icon name="security" color="#66CC00" size={100} />
                <Text style={StyleSheet.TextHeadOTPScreen}>รหัส OTP 4 หลัก</Text>
                <Text style={StyleSheet.TextOTPScreen}>กรุณาระบุรหัส OTP บน SMS</Text>
                <Text style={StyleSheet.TextOTPScreen}>ที่เบอร์ <Text style={StyleSheet.TextPhoneOTP}>088-XXX-XXX</Text></Text>
                <View style={StyleSheet.containerFormOTP}>
                    <TextInput
                        style={StyleSheet.InputOTP}
                        textAlign={'center'}
                        keyboardType='numeric'
                        maxLength={1}
                        ref="otpcode1"
                        onChangeText={(event) => {
                            this.setState({ otp1: event });
                            this.refs.otpcode2.focus()
                        }}
                        underlineColorAndroid='#fff' />
                    <TextInput
                        style={StyleSheet.InputOTP}
                        textAlign={'center'}
                        keyboardType='numeric'
                        maxLength={1}
                        ref="otpcode2"
                        onChangeText={(event) => {
                            this.setState({ otp2: event });
                            this.refs.otpcode3.focus()
                        }}
                        underlineColorAndroid='#fff' />
                    <TextInput
                        style={StyleSheet.InputOTP}
                        textAlign={'center'}
                        keyboardType='numeric'
                        maxLength={1}
                        ref="otpcode3"
                        onChangeText={(event) => {
                            this.setState({ otp3: event });
                            this.refs.otpcode4.focus()
                        }}
                        underlineColorAndroid='#fff' />

                    <TextInput
                        style={StyleSheet.InputOTP}
                        textAlign={'center'}
                        keyboardType='numeric'
                        maxLength={1}
                        ref="otpcode4"
                        onChangeText={(event) => {
                            this.setState({ otp4: event });
                            console.log(this.state)
                        }}
                        underlineColorAndroid='#fff' />
                </View>
                <TouchableOpacity style={StyleSheet.buttonOTPSubmit} onPress={this.Goto}>
                    <Text style={StyleSheet.textbuttonOTP}>ยืนยัน</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 120 }} />
            </View>
        );
    }
}




