import React from 'react'
import { CommentType, UserType } from '../../types/CustomTypes'
import { Card } from 'reactstrap'

type AcceptedProps = {
    comments: CommentType[],
    user: UserType
}

export default class CommentTable extends React.Component<AcceptedProps> {
    displayComments() {
        return this.props.comments.map((comment, index) => {
            return (
                <Card id="commentCard">
                    <div>
                        <img id="commentPic" src={this.props.user.profilePic} height="50" alt=""/>
                        <p id="commentName">{this.props.user.username}: </p>
                    </div>
                    <p >on "{<span id="whereComment">{comment.dream?.title}</span>}"</p>
                    <hr id="commentHR"/>
                    <p id="whatComment">{comment.content}</p>
                </Card>
            )
        })
    }
    render() {
        return (
            <div>
                {this.displayComments()}
            </div>
        )
    }
}