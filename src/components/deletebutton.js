import React from 'react'
import SubmitButton from './SubmitButton'
import { useState } from 'react'
const Deletebutton=(props)=>{
//var myid=this.props.id
  async function Deleteuser(){
    const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json'},
       body: JSON.stringify({id:1002})
     };
     await fetch('https://localhost:44340/ViewRecord/deleteuser',requestOptions)
     .then(response =>{
      if(response.ok)
      {
        response.text().then((result)=> {
          this.setState({
            responseresult: JSON.parse(result) 
           })
       
       }) 
    }
      else{
        console.log('error in fetching data')
    }
    })
  }

return(
        <div>

          <SubmitButton
            disabled={false}
            text={'Delete'}
            onClick={Deleteuser}           
            />  
        </div>

)    
}
export default Deletebutton

