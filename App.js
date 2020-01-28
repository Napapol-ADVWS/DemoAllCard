import React, { Component } from "react";
import {
    View
} from "react-native";
import Login from './screens/login'
import Register from './screens/Register'
import LoginNumber from './screens/loginNumber'
import OTPscreen from './screens/OTPsreen'


export default class App extends Component{
  changePage = (page,data) =>{
    this.setState({
      page:page,
      data:data
    })
  }
  
  constructor(props){
    super(props);
    this.state = {
      page:"Login",
      data:""
    }
  }
  render(){
    var DisplayPage = <Login changePage ={this.changePage}/>
    const{ 
      email="mydeverlop@gmail.com",
      nameUser="Napapol",
      lastNameUser="Kwanthong",
      phonenumber=this.state.data
    } = this.props
    switch(this.state.page) {
        case 'Login':
            DisplayPage = <Login changePage ={this.changePage}/>
          break;
        case 'LoginFacebook':
            DisplayPage = <Register changePage ={this.changePage} email ={email} nameUser={nameUser} lastNameUser={lastNameUser}/>
          break;
        case 'LoginGoogle':
            DisplayPage = <Register changePage ={this.changePage} email ={email}/>
          break;
        case 'LoginNumber':
            DisplayPage = <LoginNumber changePage ={this.changePage}/>
          break;
        case 'Register':
            DisplayPage = <Register changePage ={this.changePage} phonenumber={phonenumber}/>
          break;
        case 'OTPscreen':
            DisplayPage = <OTPscreen changePage={this.changePage}/>
          break;
    }
    return(
      <View >
        {DisplayPage}
      </View>
    )
  }
}
