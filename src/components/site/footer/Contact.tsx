import React, { FormEvent } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';


type AcceptedProps = {
    sessionToken: string,

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
                <h4>Contact Us</h4>
                <Form action="https://formspree.io/meqlelzo" method="post" role="form">
                    <FormGroup>
                        <Col>
                            <Row>
                            <Label>Email:</Label>
                            <Input type="email" name="email" placeholder='email'/>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                            <Label>Subject</Label>
                            <Input type="text" name="subject" placeholder="subject"/>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                            <Label>Message:</Label>
                            <Input type="textarea" name="message" placeholder="message"/>
                            </Row>
                        </Col>
                        <br/>
                        <Col>
                            <Row>
                                <Input type="submit" value="send"/>
                            </Row>
                        </Col>
                    </FormGroup>
                    
                </Form>
            </div>
        )
    }
}
