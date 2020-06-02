import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import dreams from '../../assests/dreamcatcher.gif';

export default class Home extends React.Component{
    render() {
        return(
            <div className='mainDiv'>
                <div className="body">
                        <Jumbotron id="homeJumbotron">
                            {/* <h1 className="display-3">Welcome to Dream Catcher!</h1>
                            <hr className="my-2" />
                            <p></p>
                            <p>Share your dreams and encounter others' realities.</p> */}
                            <p className="lead">
                            {/* <Button color="primary">Learn More</Button> */}
                            </p>
                        </Jumbotron>
                </div>
            </div>
        )
    }
}