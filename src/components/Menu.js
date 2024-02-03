import React , {useEffect} from 'react'
import '../Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                <i className="far fa-address-book"></i>Logout
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/HomePage" exact>
                <i className="far fa-address-book"></i>HOME
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/AddPage" exact>
                <i className="far fa-address-book"></i>Add New
              </NavLink> 
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;