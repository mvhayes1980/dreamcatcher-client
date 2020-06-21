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
                        <p>Dreamalish is a a repository of dreams developed for dreamers. It was created in May and June of 2020 by a junior developer team comprised of Eleven Fifty Academy students Timothy Culp, Mariah Curl, Michael V. Hayes, and Jerad Lollar.</p>
                        <p>All rights reserved.</p>
                        </div>

                </Row>
            </Container>
                
        )
    }
}