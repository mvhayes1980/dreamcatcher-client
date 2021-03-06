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
                    
                    <p id="commentUser">{this.props.comment.user?.username} says:</p>
                    <p id="commentCont">{this.props.comment.content}</p>
                    <img id="publicCommentPic" src={this.props.comment.user?.profilePic}/>
                    <Button color="danger" id="deleteButt" onClick={()=> this.props.deleteComment(this.props.comment)}>DELETE COMMENT</Button>
                    <Button color="warning" id="editButt" onClick={()=> this.props.setCommentToEdit(this.props.comment)}>EDIT COMMENT</Button>
                    
                </div>
        )
    }
}