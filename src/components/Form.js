import React from 'react'
import SubmitButton from './SubmitButton'
import { useState } from 'react'
const Form=(props)=>{
  const[name,setname]=useState('')
  const[password,setpassword]=useState('')
  const[role,setrole]=useState('')
  const[station,setstation]=useState('')
  //const[latitude,setlatitude]=useState('')

  
 async function Adddata(){

   const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username:name,password:password,Station_City:station,Role:role,Latitude:props.latitude,Longitude:props.longitude})
    };
    await fetch('https://localhost:44340/ViewRecord/adduser',requestOptions)
    .then(response =>{
     if(response.ok)
     {//activate redirect
      console.log('success')
     }
     
    else{
       console.log('error')
   }
   })
}

return(
<div>
<div className="Logininput">
        <div style={{display:'flex',flexDirection:'column'}}> 
        <div style={{marginBottom:20,marginLeft:17}}>
        <input
          class="todo-input" 
          placeholder='Name'
          type='text'
          onChange={e => setname(e.target.value)}
          value={name}

                             
          />
        </div>
        <div style={{marginBottom:20,marginLeft:17}}>
        <input
          class="todo-input"  
          placeholder='Password'
          type='text'
          onChange={e => setpassword(e.target.value)}
          value={password}  
                          
          /> 
        </div>
        <div style={{marginBottom:20,marginLeft:17}}>
        <input
          class="todo-input"  
          placeholder='Role'
          type='text'
          onChange={e => setrole(e.target.value)}
          value={role} 
                         
          /> 
          </div>
         <div class="select">  
         <select name="todos" class="filter-todo" value={station} onChange={e=>setstation(e.target.value)}>
         <option value="none">Station </option>
         <option value="Lahore">Lahore </option>
         <option value="Karachi">Karachi </option>    
         </select>
         </div>
         <div style={{display:'flex',flexDirection:'row',marginBottom:20,marginLeft:17}}>
        <div>
        <input
          class="todo-input1"  
          placeholder='Latitude'
          type='number'
          defaultValue={props.latitude}                  
          />
          </div>
          <div> 
          <input
          class="todo-input1"  
          placeholder='Longitude'
          type='number' 
          defaultValue={props.longitude}                   
          /> 
          </div>
          </div>
          <div>
          <SubmitButton
            disabled={false}
            text={'Submit'}
            onClick={Adddata}           
            />  
        </div>
        </div> 
        </div>
   
</div>
)    
}
export default Form

