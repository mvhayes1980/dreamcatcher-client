import React, { FormEvent } from 'react';
import {Form, FormGroup, Label, Button, Input, Row, Col} from "reactstrap";
import APIURL from '../../helper/Environment';

let errorTimeout: NodeJS.Timeout;

type AcceptedProps = {
    updateToken: (newToken: string) => void
}

type SignupState = {
    username: string,
    password: string,
    profilePic: string,
    nsfwOk: boolean,
    error: string
}

export default class Signup extends React.Component <AcceptedProps, SignupState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            username: '',
            password: '',
            profilePic: '',
            nsfwOk: false,
            error: ''
        }
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (this.state.username && this.state.password && this.state.profilePic) {
            fetch(`${APIURL}/api/users/create`, {
                method: "post",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                    profilePic: this.state.profilePic,
                    nsfwOk: this.state.nsfwOk
                })
            })
                .then(res => res.json())
                .then(res => {
                    this.props.updateToken(res.sessionToken);
                })
        } else {
            this.setState({error: "All fields require text."})
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

    render() {
        return(
            <Form onSubmit={(e: FormEvent) => this.handleSubmit(e)}>
                <h3 id='signup'>SIGNUP</h3>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label id="authLabel" htmlFor="username">Dreamer's Name</Label>
                            <Input value={this.state.username} onChange={(e) => {this.setState({username:e.target.value})}} name="username" placeholder="create dreamername"/>
                            <br/>
                            <Label id="authLabel" htmlFor="password">Password</Label>
                            <Input value={this.state.password} onChange={(e) => {this.setState({password:e.target.value})}}type="password" name="password" placeholder="password" />
                        </FormGroup>
                    {/* </Col>
                    <Col> */}
                        <FormGroup>
                            <Label id="authLabel" htmlFor="profilePic" >Profile Picture</Label>
                            <Input value={this.state.profilePic} placeholder="Image URL" onChange={(e) => {this.setState({profilePic:e.target.value})}} name="profilePic" type="text" />
                            <br/>
                            <Row>
                                <Col>
                                    <Label id="authLabel" htmlFor="nsfwOk">NSFW content OK?</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Input type="checkbox" id="NSFWbox" onChange={(e) => {this.setState({nsfwOk: !this.state.nsfwOk})}} name="nsfwOk"/>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Row>
                <br/>
                <FormGroup>
                    <Button id="submit" type="submit">SUBMIT</Button>
                    {this.state.error ? <h3 style={{color: "red"}}>{this.state.error}</h3>: null}
                </FormGroup>
            </Form>
        )
    }
}