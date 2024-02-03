import './App.css';
import { Component } from 'react';
import Form from './components/Form';
import LoginData from './Data/LoginData';
import { observer } from 'mobx-react';
import LoginForm from '../src/components/LoginForm';
import SubmitButton from './components/SubmitButton';
import Inputfield from './components/inputfield';
import Mymap from './components/map';
import Login_page from './Pages/Login_page';
import AddPage from './Pages/AddPage';
import Home_Page from './Pages/Home_Page';
import Redirectfunc from './components/Loginbutton';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

class App extends Component {
  


render(){

return(
<Router>
<main>
<Route path="/" exact>
<Login_page/>
</Route>
<Route path="/HomePage" exact>
<Home_Page/>
</Route>
<Route path="/AddPage" exact>
<AddPage/>
</Route>
</main>
</Router>  
)
  
  
}

}



export default App;
