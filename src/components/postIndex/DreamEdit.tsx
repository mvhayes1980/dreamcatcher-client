import React, { FormEvent } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button, Modal, ModalBody } from 'reactstrap';
import APIURL from '../../helper/Environment';
import { DreamType } from '../../types/CustomTypes';

type AcceptedProps = {
    sessionToken: string,
    setDreamToEdit: (dream: DreamType) => void,
    dream: DreamType

    fetchUser: () => void
}

type DreamEditState = {
    dream: DreamType
}

export default class DreamEdit extends React.Component <AcceptedProps, DreamEditState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            dream: this.props.dream
        }
    }

    updateDream (e: FormEvent) {
        e.preventDefault();
        fetch(`${APIURL}/api/dreams/update/${this.state.dream.id}`, {
            method: "put",
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
            <div>
                <Modal isOpen={true}>
                    <Button onClick={()=>{this.props.setDreamToEdit({
                        category: "",
                        comments: [],
                        content: "",
                        isNSFW: false,
                        title: ""
                    })}}>CANCEL</Button>
                <ModalBody>
                <Form onSubmit={(e: FormEvent)=> {this.updateDream(e)}}>
                    <h3 id="updateDream">Update Dream</h3>
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
                        <Label htmlFor="content">Content: {this.state.dream.content.length}/255</Label>
                        <Input name="content" value={this.state.dream.content} onChange={(e) => {
                            let dream = this.state.dream;
                            dream.content = e.target.value;
                            this.setState({dream: dream});
                        }} type="textarea" draggable="false" maxLength={255}></Input>
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
                        <Button id="updateButton" disabled={(!this.state.dream.content && !this.state.dream.title)} type="submit">UPDATE</Button>
                    </FormGroup>
                </Form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}