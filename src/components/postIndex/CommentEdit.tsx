import React, { FormEvent } from 'react'
import { CommentType } from '../../types/CustomTypes'
import { Modal, Button, Form, FormGroup, Input } from 'reactstrap';
import APIURL from '../../helper/Environment';

type AcceptedProps = {
    sessionToken: string,
    comment: CommentType,
    setCommentToEdit: (comment: CommentType) => void,
    fetchUser: () => void
}

type CommentState = {
    comment: CommentType
}

export default class CommentEdit extends React.Component<AcceptedProps, CommentState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            comment: this.props.comment
        }
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault();
        fetch(`${APIURL}/api/comments/update/${this.state.comment.id}`, {
            method: "put",
            headers: {
                'content-type': 'application/json',
                'authorization': this.props.sessionToken
            },
            body: JSON.stringify({
                comment: this.state.comment
            })
        })
            .then(res=>res.json())
            .then(res => {
                console.log("COMMENT UPDATED:", res);
                this.props.setCommentToEdit({
                    content: "",
                    id: 0
                })
                this.props.fetchUser();
            })
    }

    render() {
        return(
            <Modal isOpen={true}>
                <Button onClick={()=> {
                    this.props.setCommentToEdit({
                        content: "",
                        id: 0
                    })
                }}>CANCEL</Button>
                <hr/>
                <Form onSubmit={(e: FormEvent)=>{this.handleSubmit(e)}}>
                    <FormGroup>
                        <h3 id="comment">Comment: </h3>
                        <Input style={{width:"80%", margin: "auto"}} type="textarea" value={this.state.comment.content} onChange={(e) => {
                            let comment = this.state.comment;
                            comment.content = e.target.value;
                            this.setState({comment: comment});
                        }}/>
                    </FormGroup>
                    <FormGroup>
                        <Button id="submitCommentButton" type="submit">SUBMIT COMMENT</Button>
                    </FormGroup>
                </Form>
            </Modal>
        )
    }
}