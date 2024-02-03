import '../App.css';
import React from 'react';
import Navbar from '../components/Menu';
import accordian from '../components/accordian';
import {
  BrowerRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Accordian from '../components/accordian';
export default class Home_Page extends React.Component {
 
render()
    { // dashboard code
      
    return(
        <div>
        <Navbar/>
          <header>
           <h1 style={{fontSize:24,marginTop:-20}}>Add Home Page</h1>   
          </header>    
          <Accordian/>  
        </div>
      )
    

}
}