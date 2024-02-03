import '../App.css';
import { Component } from 'react';
import React from 'react';
import LoginData from '../Data/LoginData';
import SubmitButton from '../components/SubmitButton';
import Inputfield from '../components/inputfield';
import LoginForm from '../components/LoginForm'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Menu';

export default class Login_page extends React.Component {

    
    


render(){
sessionStorage.setItem('status','false')
    return(
        
        <div>
          <LoginForm/>    
        </div> 
      );
}


}