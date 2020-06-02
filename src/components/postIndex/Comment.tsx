import React from 'react'
import { CommentType } from '../../types/CustomTypes'
import { Button } from 'reactstrap';

type AcceptedProps = {
    comment: CommentType,
    setCommentToEdit: (comment: CommentType) => void
    deleteComment: (comment: CommentType) => void
}

export default class Comment extends React.Component <AcceptedProps, {}> {
    constructor(props: AcceptedProps) {
        super(props);
    }
    render() {
        return(
                <div>
                    <hr/>
                    <p>{this.props.comment.user?.username} says:</p>
                    <p>{this.props.comment.content}</p>
                    <Button color="danger" onClick={()=> this.props.deleteComment(this.props.comment)}>Delete</Button>
                    <Button color="warning" onClick={()=> this.props.setCommentToEdit(this.props.comment)}>Edit</Button>
                </div>
        )
    }
}