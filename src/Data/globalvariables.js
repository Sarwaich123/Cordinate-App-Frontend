import React from 'react';
import App from '../App';
export default class globalvariable extends React.Component {
    constructor(props){
        super(props)
        this.state={
          token:'',
          isAuth:false,   
        }
      }

settoken(variable)
{
    this.setState({
        token:variable
         });
}
gettoken(){
    return this.state.token
}

}
