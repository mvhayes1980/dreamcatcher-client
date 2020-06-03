import React, { FormEvent } from 'react'
import { DreamType, CommentType, UserType } from '../../types/CustomTypes'
import { Modal, Form, FormGroup, Input, Button } from 'reactstrap';
import APIURL from '../../helper/Environment';

type AcceptedProps = {
    dream: DreamType,
    user: UserType,
    sessionToken: string
    setDreamToComment: (dream: DreamType) => void
}

type DreamCommentState = {
    comment: CommentType
}

export default class DreamComment extends React.Component<AcceptedProps, DreamCommentState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            comment: {
                content: "",
                dreamId: this.props.dream.id,
                userId: this.props.user.id
            }
        }
    }

    handleSubmit(e:FormEvent) {
        fetch(`${APIURL}/api/comments/create`, {
            method: "post",
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
                console.log(res);
                this.props.setDreamToComment({
                    category: "",
                    content: "",
                    isNSFW: false,
                    title: "",
                    comments: []
                })
            })
    }

    render() {
        return(
            <Modal isOpen={true}>
                <Button onClick={()=> {
                    this.props.setDreamToComment({
                        category: "",
                        content: "",
                        isNSFW: false,
                        title: "",
                        comments: []
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