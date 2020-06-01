import React from 'react';
import {Form, FormGroup, Label, Button, Input, Row, Col} from "reactstrap";
import Signup from './Signup';
import Login from './Login';

type AuthState = {
    
    isLoggingIn: boolean
}

type AcceptedProps = {
    updateToken: (newToken: string) => void
}

export default class Auth extends React.Component <AcceptedProps, AuthState> {
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            isLoggingIn: false
        }
        
    }

    render(){
        return(
            <div id="authDiv">
                <div id="authAlphaDiv">
                    <Button onClick={()=>{this.setState({isLoggingIn: !this.state.isLoggingIn})}}>TOGGLE SIGNUP/LOGIN</Button>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            {this.state.isLoggingIn ? <Login updateToken={this.props.updateToken}/> : <Signup updateToken={this.props.updateToken}/>}
                        </Col>
                        <Col md={{size: 4, offset: 0}}>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}