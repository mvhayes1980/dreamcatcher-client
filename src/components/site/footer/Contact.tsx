import React, { FormEvent } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';


type AcceptedProps = {
    sessionToken: string,

}

type ContactState = {

}


export default class Contact extends React.Component <AcceptedProps> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
        }
    }

    

    render(){
        return(
            <div>
                <Form action="https://formspree.io/meqlelzo" method="post" role="form">
                    <FormGroup>
                        <label>Email:</label>
                        <input type="email" name="email" placeholder='email'/>
                        <label>Message:</label>
                        <input type="textarea" name="message" placeholder="message"/>
                    </FormGroup>

                </Form>
            </div>
        )
    }
}