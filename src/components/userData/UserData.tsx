import React, {FormEvent, ChangeEvent} from 'react';
import { Form, FormGroup, Label, Row, Col, Button, Input } from 'reactstrap';
import APIURL from '../../helper/Environment';
import { useHistory, BrowserRouter, Redirect } from 'react-router-dom';
import reactRouter from 'react-router-dom';
import {DreamType, CommentType, UserType} from '../../types/CustomTypes';

type AcceptedProps = {
    sessionToken: string,
    clearToken: () => void,
    fetchUser: () => void,


    user: UserType
}

type UserDataState = {
        error: string,
        done: boolean,

        user: {
            username: string,
            profilePic: string,
            nsfwOk: boolean,
            isAdmin: boolean,
            dreams: DreamType[],
            comments: CommentType[],
            id: number
        }
}


let errorTimeout: NodeJS.Timeout;

// let history = useHistory();

export default class UserData extends React.Component <AcceptedProps, UserDataState> {
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            error: "",
            done: false,

            user: {
                username: this.props.user.username,
                profilePic: this.props.user.profilePic,
                nsfwOk: this.props.user.nsfwOk,
                isAdmin: this.props.user.isAdmin,
                dreams: this.props.user.dreams,
                comments: this.props.user.comments,
                id: this.props.user.id
            }
        }
    }

    compareUsers() {
        return (
            this.props.user.username === this.state.user.username &&
            this.props.user.profilePic === this.state.user.profilePic &&
            this.props.user.nsfwOk === this.state.user.nsfwOk
        )
    }

    handleSubmit(e: FormEvent) {
        console.log(this.props.user, this.state.user)
        e.preventDefault();
        if (!this.compareUsers()) {
            fetch(`${APIURL}/api/users/update`, {
                method: "put",
                headers: {
                    'content-type': 'application/json',
                    'authorization': this.props.sessionToken
                },
                body: JSON.stringify({
                    username: this.state.user.username,
                    profilePic: this.state.user.profilePic,
                    nsfwOk: this.state.user.nsfwOk
                })
                
            })
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                this.setState({done: true})
                this.props.fetchUser();
                // history.push('/');
            })
        } else {
            this.setState({error: "Please change something before submitting!"})
        }
    }

    deleteUser() {
        fetch(`${APIURL}/api/users/delete`, {
            method: "delete",
            headers: {
                'content-type': 'application/json',
                'authorization': this.props.sessionToken
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.props.clearToken();
                this.setState({done: true})
            })
    }

    componentDidUpdate() {
        if(this.state.error) {
            errorTimeout = setTimeout(()=>{this.setState({error: ""})}, 2000);
        }
    }

    componentWillUnmount() {
        clearTimeout(errorTimeout);
    }

    componentWillUpdate() {
        clearTimeout(errorTimeout);
    }
   
    render(){
        return(
            <div>
                {this.state.done ? <Redirect to="/"/> : null}
                <h1 id="profileHead">MY DREAMALISH PROFILE</h1>
                <Row id="profileRow">
                    <Col md={{size: 6, offset:3}}>
                        <Form id="profileForm" onSubmit={(e: FormEvent) => this.handleSubmit(e)}>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <img className="profilePic" id="profile" height={100} width={100} src={this.state.user.profilePic} alt=""/>
                                        <br/>
                                        <Label htmlFor="username">Dreamer's Name</Label>
                                        <Input value={this.state.user.username} onChange={(e) => {
                                            let newUser = this.state.user;
                                            newUser.username = e.target.value;
                                            this.setState({user: newUser})
                                        }} name="username"/>

                                        
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label htmlFor="profilePic" >Profile Picture</Label>
                                        <Input value={this.state.user.profilePic} placeholder="Image URL" onChange={(e) => {
                                            let newUser = this.state.user;
                                            newUser.profilePic = e.target.value;
                                            this.setState({user: newUser})
                                        }} name="profilePic" type="text" />
                                        <hr/>
                                        <Row>
                                            <Col id="nsfw">
                                                <Label htmlFor="nsfwOk">NSFW content OK?</Label>
                                                <Input id="profNSFW" type="checkbox" checked={this.state.user.nsfwOk} onChange={(e) => {
                                            let newUser = this.state.user;
                                            newUser.nsfwOk = !this.state.user.nsfwOk;
                                            this.setState({user: newUser})
                                        }} name="nsfwOk"/>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Button id="saveChanges" type="submit" disabled={this.compareUsers()}>SAVE CHANGES</Button>
                                <Button id="deleteUser" color="danger" onClick={() => {this.deleteUser()}}>DELETE USER</Button>

                                {this.state.error ? <h3 style={{color: "red"}}>{this.state.error}</h3>: null}
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                
            </div>
        )
    }
}