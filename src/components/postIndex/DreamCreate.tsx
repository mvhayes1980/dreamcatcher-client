import React, { FormEvent } from 'react'
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import APIURL from '../../helper/Environment';
import { DreamType } from '../../types/CustomTypes';

type AcceptedProps = {
    sessionToken: string

    fetchUser: () => void
}

type DreamCreateState = {
    dream: DreamType
}

export default class DreamCreate extends React.Component <AcceptedProps, DreamCreateState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            dream: {
                content: '',
                category: 'joy',
                isNSFW: false,
                title: '',
                comments: []
            }
        }
    }

    handleSubmit(e:FormEvent) {
        e.preventDefault();
        fetch(`${APIURL}/api/dreams/create`, {
            method: "post",
            headers: {
                'content-type': 'application/json',
                'authorization': this.props.sessionToken
            },
            body: JSON.stringify({
                dream: this.state.dream
            })
        })
            .then(res=>res.json())
            .then(res=> {
                console.log(res);
                this.setState({dream: {
                    content: "",
                    category: "joy",
                    isNSFW: false,
                    title: '',
                    comments: []
                }})
                this.props.fetchUser();
            })
    }

    render() {
        return(
            <div className="newDream">
                <Form  onSubmit={(e:FormEvent)=> {this.handleSubmit(e)}}>
                    <h3  id="nd">New Dream</h3>
                    <FormGroup>
                        <Label htmlFor="title">Title:</Label>
                        <Input name="title" value={this.state.dream.title} onChange={e => {
                            let dream = this.state.dream;
                            dream.title = e.target.value;
                            this.setState({dream: dream});
                        }}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="category">Category:</Label>
                        <Input name="category" value={this.state.dream.category} type="select" onChange={e => {
                            let dream = this.state.dream;
                            dream.category = e.target.value;
                            this.setState({dream: dream});
                        }}>
                            <option value={"joy"}>Joy</option>
                            <option value={"despair"}>Despair</option>
                            <option value={"fear"}>Fear</option>
                            <option value={"desire"}>Desire</option>
                            <option value={"love"}>Love</option>
                            <option value={"confusion"}>Confusion</option>
                            <option value={"humiliation"}>Humiliation</option>
                            <option value={"envy"}>Envy</option>
                            <option value={"mundanity"}>Mundanity</option>
                            <option value={"fortune"}>Fortune</option>
                            <option value={"rage"}>Rage</option>
                            <option value={"memory"}>Memory</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="content">Content: {this.state.dream.content.length}/250</Label>
                        <Input name="content" value={this.state.dream.content} onChange={(e) => {
                            let dream = this.state.dream;
                            dream.content = e.target.value;
                            this.setState({dream: dream});
                        }} type="textarea" draggable="false" maxLength={250}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Label htmlFor="isNSFW">NSFW?</Label>
                            </Col>
                            <Col>
                                <Input type="checkbox" checked={this.state.dream.isNSFW} onChange={()=>{
                                    let dream = this.state.dream;
                                    dream.isNSFW = !dream.isNSFW;
                                    this.setState({dream: dream});
                                }}/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Button  disabled={(!this.state.dream.content && !this.state.dream.title)}  type="submit" id="postButt">POST</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}