import * as React from 'react';
import DreamBar from './navbar/DreamBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TopJumbotron from './homeJumbotron/jumbotron';
import { Jumbotron, Button } from 'reactstrap';
import dreams from '../../assests/dreamcatcher.gif';
import APIURL from '../../helper/Environment';
import UserData from '../userData/UserData';
import PostIndex from '../postIndex/PostIndex';
import { DreamType, CommentType, UserType } from '../../types/CustomTypes';
import PublicIndex from '../publicDreams/PublicIndex';

type AcceptedProps = {
    clearToken: () => void
    sessionToken: string
}

type HomeState = {
    user: UserType
}

export default class Home extends React.Component <AcceptedProps, HomeState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            user: {
                username: '',
                profilePic: '',
                nsfwOk: false,
                isAdmin: false,
                dreams: [],
                comments: [],
                id: 0
            }
        }
    }

    fetchUser() {
        let user = this.state.user;
        user.id = 0;
        this.setState({user: user})


        fetch(`${APIURL}/api/users/get`, {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'authorization': this.props.sessionToken
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log("res:", res);
                if (res.id) {
                    this.setState({
                        user: {
                            id: res.id,
                            username: res.username,
                            profilePic: res.profilePic,
                            nsfwOk: res.nsfwOk,
                            isAdmin: res.isAdmin,
                            dreams: res.dreams,
                            comments: res.comments
                        }
                    })
                }
            })
            .catch(err => {
                this.props.clearToken();
            })
    }

    componentWillMount() {
        
        this.fetchUser();
    }

    render() {
        return(
            <div className="main">
            <div className='mainDiv'>
                <BrowserRouter>
                        <DreamBar clearToken={() => this.props.clearToken()}/>
                    {this.state.user.id !== 0 ? 
                    <Switch>
                        <Route exact path="/"><TopJumbotron/></Route>
                        <Route exact path="/profile"><UserData clearToken={() => {this.props.clearToken()}} fetchUser={()=>this.fetchUser()} sessionToken={this.props.sessionToken} user={this.state.user}/></Route>
                        <Route exact path="/myposts"><PostIndex user={this.state.user}fetchUser={()=>this.fetchUser()}dreams={this.state.user.dreams} sessionToken={this.props.sessionToken}/></Route>
                        <Route exact path="/public"><PublicIndex fetchUser={()=>this.fetchUser()}sessionToken={this.props.sessionToken} user={this.state.user}/></Route>
                    </Switch>
                    : null}
                </BrowserRouter>


                
                <div className="body">
                    
                </div>
            </div>
        </div>
        )
    }
}