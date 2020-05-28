import * as React from 'react';
import Navbar from '../navbar/Navbar';

export default class Home extends React.Component{
    public render() {
        return(
            <div className='mainDiv'>
                <Navbar/>
            </div>
        )
    }
}