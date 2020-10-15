import React from 'react';
import SocialMediaFollow from '../social media/SocialMediaFollow';
import Contact from '../footer/Contact';
import AboutLogo from '../../../assets/image.png';
import {Container, Row, Col} from 'reactstrap';

type AcceptedProps = {
    sessionToken: string
}

export default class About extends React.Component <AcceptedProps> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            
        }
    }
    

    render(){
        return(
            <Container className="fluid">
                <Row>
                        <div id='socialMediaDiv'>
                        <SocialMediaFollow />
                        </div>
                        <div id="contactDiv">
                        <Contact sessionToken={this.props.sessionToken}/>
                        </div>
                        <img id='aboutLogo' src={AboutLogo}/>
                        <div id="aboutDiv">
                        <h4>About Dreamalish</h4>
                        <p>Dreamalish is a a repository of dreams developed for dreamers. A Typescript React app, it was created in May and June of 2020 by a junior developer team comprised of Timothy Culp, Mariah Curl, Michael V. Hayes, and Jerad Lollar at Eleven Fifty Academy in Indianapolis, IN.</p>
                        <p>All rights reserved.</p>
                        </div>
                        <br/>
                        <br/>

                </Row>
            </Container>
                
        )
    }
}