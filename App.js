import React, { Component } from "react";
import {
    View
} from "react-native";
import Login from './screens/login'
import Register from './screens/Register'
import LoginNumber from './screens/loginNumber'
import OTPscreen from './screens/OTPsreen'


export default class App extends Component{
  changePage = (page,data_1,data_2,data_3) =>{
    this.setState({
      page:page,
      data_1:data_1,
      data_2:data_2,
      data_3,data_3
    })
  }
  
  constructor(props){
    super(props);
    this.state = {
      page:"Login",
      data_1:"",
      data_2:"",
      data_3:"",
    }
  }
  render(){
    var DisplayPage = <Login changePage ={this.changePage}/>
    const{ 
      email=this.state.data_3,
      givenName=this.state.data_1,
      familyName=this.state.data_2,
      phonenumber=this.state.data_1,
      page=this.state.page
    } = this.props
    switch(this.state.page) {
        case 'Login':
            DisplayPage = <Login changePage ={this.changePage}/>
          break;
        case 'LoginFacebook':
            DisplayPage = <Register changePage ={this.changePage} page={page}/>
          break;
        case 'LoginGoogle':
            DisplayPage = <Register changePage ={this.changePage} email ={email} givenName={givenName} familyName={familyName} page={page}/>
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
