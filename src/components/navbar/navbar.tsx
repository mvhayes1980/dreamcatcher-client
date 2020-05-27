import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
  import {NavbarBrand, Nav, NavItem} from "reactstrap";
import dreamcatcher from '../../assests/dreamcatcher.png';

export default class NavBar extends React.Component{
    public render() {
        return(
            <Router>
                <Nav>
                    <NavLink to="/">
                        <img src={dreamcatcher} id="logo" height="50px" alt=""/></NavLink>
                    <NavbarBrand id="brand">Dream Catcher</NavbarBrand>
                    
                    <div className="navtabs">
                        <NavLink to="/test"><NavItem>Test</NavItem></NavLink>
                    </div>
                </Nav>
            </Router>
        )
    }
}