import * as React from 'react';
import DreamBar from './navbar/DreamBar';
import { BrowserRouter, Switch } from 'react-router-dom';
import TopJumbotron from './homeJumbotron/jumbotron';
import { Jumbotron, Button } from 'reactstrap';
import dreams from '../../assests/dreamcatcher.gif';
import APIURL from '../../helper/Environment';

type AcceptedProps = {
    clearToken: () => void
    sessionToken: string
}

type DreamType = {
    content: string,
    category: string,
    userId: number,
    isNSFW: boolean
}

type CommentType = {
    content: string,
    dreamId: number,
    userId: number
}

type HomeState = {
    username: string,
    profilePic: string,
    nsfwOk: boolean,
    dreams: DreamType[],
    comments: CommentType[]
}

export default class Home extends React.Component <AcceptedProps, HomeState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            username: '',
            profilePic: '',
            nsfwOk: false,
            dreams: [],
            comments: []
        }
    }

    componentWillMount() {
        fetch(`${APIURL}/api/users/get`, {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'authorization': this.props.sessionToken
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    render() {
        return(
            <div className="main">
            <div className='mainDiv'>
                <BrowserRouter>
                    <Switch>
                        <DreamBar clearToken={() => this.props.clearToken()}/>
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