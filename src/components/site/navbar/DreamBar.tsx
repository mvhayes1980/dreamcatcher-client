import * as React from 'react';
import { Navbar, NavLink, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import dreamcatcher from '../../../assets/image.png';

type AcceptedProps = {
    clearToken: () => void
}

export default class DreamBar extends React.Component <AcceptedProps>{
    public render() {
        return(
            <div className='mainDiv'>
                <Navbar >
                
                        <ul id="homeNav">
                            <NavLink to="/">
                                <img src={dreamcatcher} id="logo" height="55px" alt="Dreamalish"/>
                            </NavLink>
                            <a><Link id="hometab" to="/">Home</Link></a>
                        </ul>
                        <ul>
                            <a><Link id="tabs" to="/public">Public</Link></a>
                            <a><Link id="tabs" to="/myposts">My Posts</Link></a>
                            <a><Link id="tabs" to="/profile">Profile</Link></a>
                            <a><Link id="tabs" to="/about">About/Contact</Link></a>
                            <Button id="logoutbutt" onClick={() => this.props.clearToken()}>Logout</Button>
                        </ul>
                </Navbar>
            </div>
        )
    }
}