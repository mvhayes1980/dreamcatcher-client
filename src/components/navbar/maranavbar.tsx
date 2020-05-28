import React from 'react';
import Home from '../site/home';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
  import {NavbarBrand, Nav, NavItem} from "reactstrap";
import dreamcatcher from '../../assests/dreamcatcher.png';

export default class NavBar extends React.Component{
    render() {
        return(
            <Router>
                <Nav>
                    <NavLink to="/">
                        <img src={dreamcatcher} id="logo" height="50px" alt=""/></NavLink>
                    <NavbarBrand id="brand">Dream Catcher</NavbarBrand>
                    
                    <div className="navtabs">
                        <NavLink to="/test"><NavItem>Test</NavItem></NavLink>
                    </div>


                    <Route path="/" exact render={ () => {
                        return( <Home/>)
                    }}/>
                    {/* <Route path="/test" exact strict render={ () => {
                        return( <Test/> )
                    }}/> */}
                </Nav>
            </Router>
        )
    }
}