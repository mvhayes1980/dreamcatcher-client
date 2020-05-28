import * as React from 'react';
import { Navbar, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import dreamcatcher from '../../../assets/dreamcatcher.png';

type AcceptedProps = {
    clearToken: () => void
}

export default class DreamBar extends React.Component <AcceptedProps>{
    public render() {
        return(
            <div className='mainDiv'>
                <Navbar color="dark">
                <NavLink to="/">
                        <img src={dreamcatcher} id="logo" height="50px" alt=""/></NavLink>
                    <ul>
                        <li style={{color: "white"}}>
                            <Link to="/"></Link>
                        </li>
                        <li>
                            <Button onClick={() => this.props.clearToken()}>Logout</Button>
                        </li>
                    </ul>
                </Navbar>
            </div>
        )
    }
}