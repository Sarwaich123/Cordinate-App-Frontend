import React from 'react'
import { useState } from 'react';
import SubmitButton from './SubmitButton';
import { useHistory } from 'react-router-dom';
import Conditionaltext from './conditionaltext';
import globalvariable from '../Data/globalvariables';
import App from '../App';
const Redirectfunc=(props)=>{
    const[error,seterror]=useState(false)
    const history=useHistory()
    console.log({error})
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username:props.username,password:props.password})
      };
    async function Login(){
     await fetch('https://localhost:44340/Login/output', requestOptions)
     .then(response =>{
      if(response.ok)
      {//activate redirect
        response.text().then(function(result) {
          console.log(result) // add token to some value
          localStorage.setItem('token', result);
          sessionStorage.setItem('status', 'true');
         history.push('/HomePage');
       })
      }
      else{
        console.log('error')
        seterror(true)
    }
     })
 }
    return(
        <div>
        <SubmitButton
          disabled={false}
          text={'Login'}
          onClick={Login}         
          />
        <Conditionaltext value={error}/>
        </div>
    )
}

export default Redirectfunc