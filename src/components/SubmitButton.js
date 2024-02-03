import '../App.css';
import { Component } from 'react';
import React from 'react';

export default class SubmitButton extends React.Component {

  render(){
        return (
        <div className="submitbutton">
          <button
            className="btn"
            onClick={ ()=>this.props.onClick() }
            disabled={this.props.disabled}
          >
          {this.props.text}
          </button>  
        </div>   
  );  
}
}

