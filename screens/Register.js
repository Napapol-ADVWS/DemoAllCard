import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Regis } from '../src/components/componentsRegister/Regis_component';
var Next = "";
export default class Register extends Component {
    Goto = () => {
        var page = ""
        if(Next == "OTPscreen"){
            page = Next
        }else{
            if(this.props.page == "LoginFacebook" || this.props.page =="LoginGoogle"){
                page = "Login"
            }
            else{
                page = "LoginNumber"
            }
        }
        const {changePage}=this.props;
        this.changePage= changePage;
        this.changePage(page);
        Next="";
    }
    Nextto = () =>{
        Next = "OTPscreen"
        this.Goto();
    }
    render() {
        const{ 
            email=this.props.email,
            givenName=this.props.givenName,
            familyName=this.props.familyName,
            phonenumber=this.props.phonenumber
        } = this.props
        return (
           <View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 50,
                        backgroundColor: '#182e68',
                        paddingLeft: 10,
                        justifyContent: 'space-between'
                    }}>
                    <TouchableOpacity onPress={this.Goto}>
                        <Icon name="chevron-left" color="#FFF" size={30} />
                    </TouchableOpacity>
                </View>
                <Regis Nextto={this.Nextto} email={email} givenName={givenName} familyName={familyName} phonenumber={phonenumber} />
            </View>
       
        )
    }
}