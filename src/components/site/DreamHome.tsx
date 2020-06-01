import * as React from 'react';
import DreamBar from './navbar/DreamBar';
import { BrowserRouter, Switch } from 'react-router-dom';
import TopJumbotron from './homeJumbotron/jumbotron';
import { Jumbotron, Button } from 'reactstrap';
import dreams from '../../assests/dreamcatcher.gif';
import APIURL from '../../helper/Environment';
<<<<<<< HEAD
=======
import UserData from '../userData/UserData';
import PostIndex from '../postIndex/PostIndex';
import { DreamType, CommentType, UserType } from '../../types/CustomTypes';
import PublicIndex from '../publicDreams/PublicIndex';
>>>>>>> 9220e87ab8a534216377b855bf9c377aa25b6a75

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
<<<<<<< HEAD
                        <DreamBar clearToken={() => this.props.clearToken()}/>
                        <h3>HOME</h3>

=======
                        <Route exact path="/"><TopJumbotron/></Route>
                        <Route exact path="/profile"><UserData clearToken={() => {this.props.clearToken()}} fetchUser={()=>this.fetchUser()} sessionToken={this.props.sessionToken} user={this.state.user}/></Route>
                        <Route exact path="/myposts"><PostIndex user={this.state.user}fetchUser={()=>this.fetchUser()}dreams={this.state.user.dreams} sessionToken={this.props.sessionToken}/></Route>
                        <Route exact path="/public"><PublicIndex fetchUser={()=>this.fetchUser()}sessionToken={this.props.sessionToken} user={this.state.user}/></Route>
>>>>>>> 9220e87ab8a534216377b855bf9c377aa25b6a75
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