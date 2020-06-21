import React from 'react';
import {
    Jumbotron
} from 'reactstrap';

export default class Home extends React.Component {
    render() {
        return (
            <div className='mainDiv'>
                <div className="body">
                    <Jumbotron id="homeJumbotron"/>
                </div>
            </div>
        )
    }
}