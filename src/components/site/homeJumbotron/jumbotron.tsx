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
                    {/* <div className="cards">

                        <CardDeck>
                                <Card className="leftCard">
                                <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Button>Button</Button>
                                </CardBody>
                            </Card>
                            <Card className="midCard">
                                <CardImg top width="100%" src={Dream} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Tell us about your dreams!</CardTitle>
                                    <CardText>This site was made so you can tell other users about your dreams, whether they be dark, playful or NSFW. You can express any dream that you have here! </CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                            <Card className="rightCard">
                                <CardImg top width="100%" src={Team} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Dream Catcher Team!</CardTitle>
                                    <CardSubtitle>More about us.</CardSubtitle>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>*/}
                    
                </div>
            </div>
        )
    }
}