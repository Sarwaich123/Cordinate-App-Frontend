import '../App.css';
import { Component } from 'react';
import React from 'react';
import LoginData from '../Data/LoginData';
import SubmitButton from './SubmitButton';
import Inputfield from './inputfield';
import { render } from '@testing-library/react';
import Conditionaltext from './conditionaltext';
import { Redirect, Route, browserHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Redirectfunc from './Loginbutton';
import { useHistory } from 'react-router-dom';


 class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
      Disabledflag:false,
      error:false,
      redirecttoAddpage:false,

    }
    this.SetInputValue=this.SetInputValue.bind(this)
  }

  SetInputValue(val,property){

        this.setState({
        [property]:val.target.value
         });}


  render(){
    var isLoggedIn = localStorage.getItem('error')
    console.log(isLoggedIn)
        return (
       <div style={{display:'flex',flexDirection:'row',justifyContent:'center',height:950}}>
       <div className="Logininput-class">  
        <div style={{alignSelf:'center'}}>
        <input
          class="todo-input" 
          onChange={(val)=>this.SetInputValue(val,'username')}   
          placeholder='Username'
          value={this.state.username}
          type='text'                   
          /> 
        </div> 
        <div style= {{alignSelf:'center',marginTop:20,marginBottom:20}}>
        <input
          class="todo-input" 
          onChange={(val)=>this.SetInputValue(val,'password')}   
          placeholder='Password'
          value={this.state.password}
          type='text'                   
          />         
        </div>
        <Redirectfunc username={this.state.username} password={this.state.password}/>
        </div>
        </div>
          
  );
    
}
}
export default withRouter(LoginForm)
