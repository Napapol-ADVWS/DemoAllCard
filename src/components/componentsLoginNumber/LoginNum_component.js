import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image,TouchableWithoutFeedback,Keyboard, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StyleSheet from '../componentsLoginNumber/styles'

class LoginNum extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          TextInputValue:"",
        }
      }
    onClickbutton = () =>{
        const {Nextto}=this.props;
        this.Nextto= Nextto;
        this.Nextto(this.state.TextInputValue);
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#182e68' }}>
                <Image
                    source={require('../componentsRegister/image/logo.png')}
                    style={{ width: 180, height: 180 }}
                />
                <Text style={StyleSheet.textLoginNum}>กรุณาใส่หมายเลขโทรศัพท์</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={StyleSheet.inputContainer}>
                        <Text style={{ paddingLeft: 10 }} />
                        <Icon name="phone" color="#182e68" size={30} />
                        <Text style={{ paddingRight: 8 }} />
                        <TextInput style={{width:230}}
                            placeholder="xxx-xxx-xxxx"
                            onChangeText={TextInputValue=>this.setState({TextInputValue})}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={StyleSheet.buttonLogin} onPress={this.onClickbutton}>
                            <Text style={StyleSheet.textbuttonLoginNum}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 180 }} />
                </View>
            </View>
            </TouchableWithoutFeedback>
        )
    }
}

export { LoginNum };