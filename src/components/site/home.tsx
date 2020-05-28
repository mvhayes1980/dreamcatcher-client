import * as React from 'react';
import DreamBar from './navbar/DreamBar';
import { BrowserRouter, Switch } from 'react-router-dom';
import TopJumbotron from './homeJumbotron/jumbotron';
import { Jumbotron, Button } from 'reactstrap';
import dreams from '../../assests/dreamcatcher.gif';

export default class Home extends React.Component{
    render() {
        return(
            <div className="main">
            <div className='mainDiv'>
                <BrowserRouter>
                    <Switch>
                        <DreamBar/>
                        <h3>HOME</h3>

                    </Switch>
                </BrowserRouter>


                <TopJumbotron/>
                <div className="body">
                    
                </div>
            </div>
        </div>
        )
    }
}