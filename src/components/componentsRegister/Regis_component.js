import React from 'react';
import { Text, View, TextInput, TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StyleSheet from '../componentsRegister/styles'
class Regis extends React.Component {  
    Goto = () => {
        const {Nextto}=this.props;
        this.Nextto= Nextto;
        this.Nextto();
    } 
    
    render() {
        return (
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <View style={StyleSheet.cardRegister}>
                <Text style={StyleSheet.textRegister}>ลงทะเบียนสมาชิก</Text>
                <View style={StyleSheet.inputContainer}>
                    <Text style={{ paddingLeft: 10 }} />
                    <Icon name="user" color="#182e68" size={30} />
                    <Text style={{ paddingRight: 8 }} />
                    <TextInput style={{width:230}}
                        value={this.props.nameUser}
                        placeholder="ชื่อจริง"
                    />
                </View>
                <View style={StyleSheet.inputContainer}>
                    <Text style={{ paddingLeft: 10 }} />
                    <Icon name="user" color="#182e68" size={30} />
                    <Text style={{ paddingRight: 8 }} />
                    <TextInput style={{width:230}}
                           value={this.props.lastNameUser}
                        placeholder="นามสกุล"
                    />
                </View>
                <View style={StyleSheet.inputContainer}>
                    <Text style={{ paddingLeft: 10 }} />
                    <Icon name="phone" color="#182e68" size={30} />
                    <Text style={{ paddingRight: 8 }} />
                    <TextInput style={{width:230}}
                        placeholder="เบอร์โทรศัพท์"
                        value={this.props.phonenumber}
                        keyboardType="numeric"
                    />
                </View>
                <View style={StyleSheet.inputContainer}>
                    <Text style={{ paddingLeft: 10 }} />
                    <Icon name="envelope-o" color="#182e68" size={30} />
                    <Text style={{ paddingRight: 8 }} />
                    <TextInput style={{width:230}}
                        placeholder="อีเมลล์"
                        value={this.props.email}
                        keyboardType="email-address"
                    />
                </View>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={StyleSheet.buttonRegisSubmit} onPress={this.Goto}>
                        <Text style={StyleSheet.textbuttonRegis}>ลงทะเบียน</Text>    
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:100}}/>
                </View>
                </TouchableWithoutFeedback>
        )
    }
}

export {Regis};