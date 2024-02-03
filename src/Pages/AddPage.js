import '../App.css';
import { Component } from 'react';
import Form from '../components/Form';
import SubmitButton from '../components/SubmitButton';
import Inputfield from '../components/inputfield';
import Mymap from '../components/map';
import Mapselector from '../components/mapselector';
import React from 'react';
import Navbar from '../components/Menu';
import {
  BrowerRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Redirectfunc from '../components/Loginbutton';
export default class AddPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      latitude:'',
      longitude:'',
    }
    this.SetInputValue=this.SetInputValue.bind(this)
  }
  
  SetInputValue(val,val2){

    this.setState({
    latitude:val
     });
     this.setState({
      longitude:val2
       });
  //  setTimeout(()=>{
   //   console.log('i am inside parent')
   //   console.log(this.state.latitude)
   //   console.log(this.state.longitude)
   // },1000)
    }

render(){
 var value=sessionStorage.getItem('status')
 console.log('i am inside render of Addpages')
 console.log(value)
if(value!="true")
  {
    //redirect to Login Page
    return <Redirect to="/"/>
  }    
 // dashboard code
    return(
        <div>
         <Navbar/> 
        <div style={{display:'flex',flexDirection:'row',width:'auto',height:'auto',justifyContent:'center',alignItems:'center'}}>     
        <div style={{flex:1}}> 
        <Mapselector passtograndparent={this.SetInputValue}/>
        </div>
        <div style={{flex:2}}>
        <Form latitude={this.state.latitude} longitude={this.state.longitude}/>
       
        </div>
        </div>
        </div>
      )
    }
}