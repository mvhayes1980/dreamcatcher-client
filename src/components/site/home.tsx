import * as React from 'react';
import DreamBar from './navbar/DreamBar';
import { BrowserRouter, Switch } from 'react-router-dom';

export default class Home extends React.Component{
    public render() {
        return(
            <div className='mainDiv'>
                <BrowserRouter>
                    <Switch>
                        <DreamBar/>
                        <h3>HOME</h3>

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}