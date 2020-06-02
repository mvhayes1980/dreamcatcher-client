import React, { FormEvent } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button, Modal, ModalBody } from 'reactstrap';
import APIURL from '../../helper/Environment';
import { DreamType } from '../../types/CustomTypes';

type AcceptedProps = {
    sessionToken: string,
    setDreamToEdit: (dream: DreamType) => void,

    fetchUser: () => void
}

type DreamEditState = {
    dreamToEdit: DreamType,
}

export default class DreamEdit extends React.Component <AcceptedProps, DreamEditState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            
        }
    }

    updateDream (dream: DreamType) {
        fetch(`${APIURL}/api/dreams/update/${dream.id}`, {
            method: "put",
            headers: {
                'content-type': 'application/json',
                'authorization': this.props.sessionToken
            },
            body: JSON.stringify({
                dream: this.state.dreamToEdit
            })
        })
            .then(res=>res.json())
            .then(res=> {
                console.log(res);
                this.setState({dreamToEdit: {
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
                        content: "",
                        category: "joy",
                        isNSFW: false,
                        title: '',
                        comments: []
                    })}}>X</Button>
                <ModalBody>
                <Form>
                    <h3>Update Dream</h3>
                    <FormGroup>
                        <Label htmlFor="title">Title:</Label>
                        <Input name="title" value={this.state.dreamToEdit.title} onChange={e => {
                            let dream = this.state.dreamToEdit;
                            dream.title = e.target.value;
                            this.setState({dreamToEdit: dream});
                        }}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="category">Category:</Label>
                        <Input name="category" value={this.state.dreamToEdit.category} type="select" onChange={e => {
                            let dream = this.state.dreamToEdit;
                            dream.category = e.target.value;
                            this.setState({dreamToEdit: dream});
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
                        <Label htmlFor="content">Content: {this.state.dreamToEdit.content.length}/250</Label>
                        <Input name="content" value={this.state.dreamToEdit.content} onChange={(e) => {
                            let dream = this.state.dreamToEdit;
                            dream.content = e.target.value;
                            this.setState({dreamToEdit: dream});
                        }} type="textarea" draggable="false" maxLength={250}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Label htmlFor="isNSFW">NSFW?</Label>
                            </Col>
                            <Col>
                                <Input type="checkbox" checked={this.state.dreamToEdit.isNSFW} onChange={()=>{
                                    let dream = this.state.dreamToEdit;
                                    dream.isNSFW = !dream.isNSFW;
                                    this.setState({dreamToEdit: dream});
                                }}/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Button disabled={(!this.state.dreamToEdit.content && !this.state.dreamToEdit.title)} type="submit">UPDATE</Button>
                    </FormGroup>
                </Form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}