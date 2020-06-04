import React from 'react';
import {
    Jumbotron, Button, Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
import Dream from '../../../assets/dreams.jpg';
import Team from '../../../assets/team.jpg';
import DreamCatcher from '../../../assets/dreamcatcherWhite.png';

export default class Home extends React.Component {
    render() {
        return (
            <div className='mainDiv'>
                <div className="body">
                    <Jumbotron id="homeJumbotron">
                        {/* <h1 className="display-3">Welcome to Dream Catcher!</h1>
                            <hr className="my-2" />
                            <p></p>
                            <p>Share your dreams and encounter others' realities.</p> */}
                        <p className="lead">
                            {/* <Button color="primary">Learn More</Button> */}
                        </p>
                    </Jumbotron>
                    <div className="cards">
                        <CardDeck>
                            <Card className="midCard">
                                <CardImg top width="100%" src={Dream} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>ABOUT THIS APP</b></CardTitle>
                                    <CardText>This site was made so you can tell other users about your dreams, whether they be dark, playful or NSFW. You can express any dream that you have here! </CardText>
                                </CardBody>
                            </Card>
                            <Card className="rightCard">
                                <CardImg top width="100%" src={Team} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><b>CONTACT THE TEAM</b></CardTitle>
                                    <CardText>Visit our Facebook page <a href="https://www.facebook.com/Dreamcatcher-109954340744900" target="blank">HERE</a>!</CardText>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>
                    
                </div>
            </div>
        )
    }
}