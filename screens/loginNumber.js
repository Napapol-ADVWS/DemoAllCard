
import React, { Component } from 'react';
import {View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {LoginNum} from '../src/components/componentsLoginNumber/LoginNum_component' 
var Next = "";
var PhoneNumber ="";
export default class LoginNumber extends Component {  
    Goto = () => {  
        var page = ""
        if(Next == "Register"){
            page = Next
        }else{
            page = "Login"
        }
        const {changePage}=this.props;
        this.changePage= changePage;
        this.changePage(page,PhoneNumber);
        Next=""
    }
    Nextto = (TextInputValue) =>{
        Next = "Register"
        PhoneNumber = TextInputValue
        this.Goto();
    }
    render() {
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
                <LoginNum Nextto={this.Nextto}/>
            </View>
        )
    }

}


