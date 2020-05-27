import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import dreams from '../../assests/dreamcatcher.gif';

export default class Home extends React.Component{
    render() {
        return(
            <div className='mainDiv'>
                <div className="body">
                    <div className="container">
                        <Jumbotron id="homeJumbotron">
                            <h1 className="display-3">Welcome!</h1>
                            <hr className="my-2" />
                            <p>Find Easy Projects, Beginner Information and Projects others are doing!</p>
                            <p className="lead">
                            {/* <Button color="primary">Learn More</Button> */}
                            </p>
                        </Jumbotron>
                    </div>
                </div>
            </div>
        )
    }
}