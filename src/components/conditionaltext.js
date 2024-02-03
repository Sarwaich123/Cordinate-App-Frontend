import '../App.css';
import { Component } from 'react';
import React from 'react';

export default class Conditionaltext extends React.Component {

  render(){
    if(this.props.value)
    {
        return(
            <div style={{display:'flex',flexDirection:'row',marginBottom:30,justifyContent:'center'}}>
            <text className="logintext">Wrong Password</text>
            </div>
            )
    }
    else return null
}
}



