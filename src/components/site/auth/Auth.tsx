import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

type AuthState = {
    username: string,
    password: string,
    profilePic: string,
    nsfwOk: boolean
}
type AcceptedProps = {
    updateToken: (newToken: string) => void
}

export default class Auth extends React.Component<AcceptedProps, AuthState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            username: '',
            password: '',
            profilePic: '',
            nsfwOk: false
        }
    }


    render() {
        return (
            <div>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">Dreamer's Name</Label>
                                <Input value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }} name="username"></Input>
                                <Label htmlFor="password">Password</Label>
                                <Input value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" name="password"></Input>
                            </FormGroup>
                        </Form>
                        <FormGroup>
                        <button type="submit">Submit</button>
                        </FormGroup>
                    </Col>
                </Row>
            </div>
        )
    }
}