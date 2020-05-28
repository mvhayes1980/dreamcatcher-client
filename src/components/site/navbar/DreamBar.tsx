import * as React from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class DreamBar extends React.Component{
    public render() {
        return(
            <div className='mainDiv'>
                <Navbar color="dark">
                    <ul>
                        <li style={{color: "white"}}>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </Navbar>
            </div>
        )
    }
}