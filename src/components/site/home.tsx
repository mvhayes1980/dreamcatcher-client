import * as React from 'react';
import Navbar from '../navbar/navbar';

export default class Home extends React.Component{
    public render() {
        return(
            <div className='mainDiv'>
                <Navbar/>
            </div>
        )
    }
}