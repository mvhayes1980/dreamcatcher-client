import * as React from 'react';
import { Navbar, NavLink, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import dreamcatcher from '../../../assets/dreamcatcherWhite.png';

type AcceptedProps = {
    clearToken: () => void
}

export default class DreamBar extends React.Component <AcceptedProps>{
    public render() {
        return(
            <div id='dreamBar'>
                <Navbar color="dark">
                    <Link to="/"><img src={dreamcatcher} id="logo" height="100px" alt=""/></Link>
                    <ul>
                        <li style={{color: "white"}}>
                            <Link to="/">Home</Link>
                        </li>
                        <li style={{color: "white"}}>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li style={{color: "white"}}>
                            <Link to="/myposts">My Posts</Link>
                        </li>
                        <li style={{color: "white"}}>
                            <Link to="/public">Public Dreams</Link>
                        </li>
                    </ul>
                        <Button onClick={() => this.props.clearToken()}>LOGOUT</Button>
                </Navbar>
            </div>
        )
    }
}