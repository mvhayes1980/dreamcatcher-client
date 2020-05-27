import * as React from 'react';
import TopJumbotron from './homeJumbotron/jumbotron';
import { Jumbotron, Button } from 'reactstrap';
import dreams from '../../assests/dreamcatcher.gif';

export default class Home extends React.Component{
    public render() {
        return(
            <div className="main">
            <div className="mainDiv">
                <TopJumbotron/>
                <div className="body">
                    
                </div>
            </div>
        </div>
        )
    }
}