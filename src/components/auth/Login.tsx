import React, {FormEvent} from 'react';
import {Form, FormGroup, Label, Button, Input, Row, Col} from "reactstrap";
import APIURL from '../../helper/Environment';

let errorTimeout: NodeJS.Timeout;

type AcceptedProps = {
    updateToken: (newToken: string) => void
}

type LoginState = {
    username: string,
    password: string,
    error: string
}

export default class Login extends React.Component <AcceptedProps, LoginState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }

    componentDidUpdate() {
        if(this.state.error) {
            errorTimeout = setTimeout(()=>{this.setState({error: ""})}, 2000);
        }
    }

    componentWillUnmount() {
        clearTimeout(errorTimeout);
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (this.state.username && this.state.password) {
            fetch(`${APIURL}/api/users/login`, {
                method: "post",
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .then(res => res.json())
            .then(res => {
                if(res.sessionToken) {
                    this.props.updateToken(res.sessionToken);
                } else {
                    this.setState({error: "Either username or password incorrect"})
                }
            })
        } else {
            this.setState({error: "Please enter both a username and a password!"})
        }
    }

    render() {
        return(
            <Form onSubmit={(e: FormEvent)=> {this.handleSubmit(e)}}>
                <h3 id="login">Dreamalish</h3>
                <h4 id="login">Login</h4>
                <FormGroup>
                    <Label htmlFor="username">Dreamer's Name</Label>
                    <Input value={this.state.username} onChange={(e) => {this.setState({username:e.target.value})}} name="username"/>
                    <Label htmlFor="password">Password</Label>
                    <Input value={this.state.password} onChange={(e) => {this.setState({password:e.target.value})}}type="password" name="password"/>
                </FormGroup>
                <FormGroup>
                    <Button id="submit" type="submit">SUBMIT</Button>
                    {this.state.error ? <h3 style={{color: "red"}}>{this.state.error}</h3>: null}
                </FormGroup>
            </Form>
        )
    }
}