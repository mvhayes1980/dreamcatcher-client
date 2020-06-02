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
                <Card>
                    <p>{this.props.user.username}: </p>
                    <p>on "{comment.dream?.title}"</p>
                    <h4>{comment.content}</h4>
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