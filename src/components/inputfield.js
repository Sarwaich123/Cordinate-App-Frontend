import '../App.css';
import { Component } from 'react';
import LoginData from '../Data/LoginData';
import React from 'react';

export default class Inputfield extends React.Component{

  
  render(){
  return (

      <input
      
      onChange={(e)=>this.props.onChange()}
      value={this.props.value}
      placeholder={this.props.placeholder}
      type={this.props.type}
      />     
 
  );  
}
}

