import React from 'react'
import SubmitButton from './SubmitButton'
import '../accordianstyle.css'
import AccordionItem from '../components/accordianitem'
const hiddenTexts = [{
  label: 'Button 1',
  value: 'Text of Accordion 1'
},
{
  label: 'Button 2',
  value: 'Text of Accordion 2'
},
{
  label: 'Button 3',
  value: 'Text of Accordion 3'
},
{
  label: 'Button 4',
  value: 'Text of Accordion 4'
}];
class Accordion extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        visibility: false,
        responseresult:[],

    }
    //this.Getuser = this.Getuser.bind(this)
    this.Getuser=this.Getuser.bind(this)
    
}

componentDidMount()
{
  this.Getuser();
}


async Getuser(){
  const requestOptions = {
     method: 'GET',
     headers: { 'Content-Type': 'application/json'},
   };
   await fetch('https://localhost:44340/ViewRecord/Getuser',requestOptions)
   .then(response =>{
    if(response.ok)
    {
      response.text().then((result)=> {
        this.setState({
          responseresult: JSON.parse(result) 
         })
     
     })
    setTimeout(()=>
    {console.log('i am inside timeout')
    console.log(this.state.responseresult)
    this.setState({
      visibility:true 
     }) },2000)  
  }
    else{
      console.log('error in fetching data')
  }
  })
}
render() {
  const activeStatus = this.state.visibility ? true : false
  if(activeStatus)
  { 
   console.log(this.state.responseresult)
  //  const itemsArr = this.state.responseresult.split('},');
  //  console.log(itemsArr);
    //console.log(hiddenTexts)
  return (
      <div className="accordion">
        {this.state.responseresult.map((hiddenText) => <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />)} 
      </div>
  );
}
else return null;
}
}
export default Accordion

