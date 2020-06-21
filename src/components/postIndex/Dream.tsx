import React from 'react'
import { DreamType, UserType, CommentType } from '../../types/CustomTypes'
import { Card, CardHeader, CardTitle, CardBody, Button, Modal, Row, Col } from 'reactstrap';
import Comment from './Comment';
import APIURL from '../../helper/Environment';
import CommentEdit from './CommentEdit';

type AcceptedProps = {
    sessionToken: string,
    dream: DreamType,
    user: UserType,
    deleteDream: (dream: DreamType) => void,
    setDreamToEdit: (dream: DreamType) => void,
    setDreamToComment: (dream: DreamType) => void,
    fetchUser: () => void
}

type DreamState = {
    dream: DreamType,
    user: UserType,
    hideNSFW: boolean,
    isReplying: boolean,
    commentToEdit: CommentType,
}

export default class Dream extends React.Component<AcceptedProps, DreamState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            dream: this.props.dream,
            user: this.props.user,
            hideNSFW: !this.props.user.nsfwOk && this.props.dream.isNSFW ? true : false,
            isReplying: false,
            commentToEdit: {
                content: "",
                id: 0
            }
        }

    }

    setCommentToEdit(comment: CommentType) {
        this.setState({ commentToEdit: comment });
    }

    deleteComment(comment: CommentType) {
        fetch(`${APIURL}/api/comments/delete/${comment.id}`, {
            method: "delete",
            headers: {
                'content-type': 'application/json',
                'authorization': this.props.sessionToken
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log("DELETE STATUS:", res);
                this.props.fetchUser();
            })
    }

    commentMapp() {
        return this.state.dream.comments.reverse().map((comment, index) => {
            return (
                <Comment deleteComment={(comment: CommentType) => { this.deleteComment(comment) }} key={index} setCommentToEdit={(comment: CommentType) => this.setCommentToEdit(comment)} comment={comment} />
            )
        })
    }

    render() {
        return (
            <div>
                <Card style={{ marginBottom: "15px" }}>
                    <CardHeader>

                        <CardTitle id="md">{this.props.dream.title}</CardTitle>
                        <img id="dreamerPic" src={this.state.dream.user?.profilePic} height="50" alt=""/>
                        <p id="cardUser">by {this.state.dream.user?.username}</p>
                        <p id="dreamCat">{this.props.dream.category}</p>
                    </CardHeader>
                    <CardBody>
                        <p id="cardContent">{this.state.hideNSFW ? "(This content contains NSFW material)..." : this.props.dream.content}</p>
                        {this.state.hideNSFW ? <Button id="viewButton" onClick={() => this.setState({ hideNSFW: false })}>view</Button> : null}


                        <hr />

                        {this.props.user.id === this.props.dream.userId || this.props.user.isAdmin ?
                        <div>
                                <Button color="danger" id="deleteButt" onClick={() => { this.props.deleteDream(this.props.dream) }}>DELETE DREAM</Button>
                                <Button color="warning" id="updateButt" onClick={() => { this.props.setDreamToEdit(this.props.dream) }}>UPDATE DREAM</Button>
                            </div>
                            : null}


                        <hr />

                        <div>
                            <Button id="replyButt" onClick={() => { this.props.setDreamToComment(this.props.dream) }}>REPLY TO DREAM</Button>
                        </div>
                        
                        {this.props.dream.comments.length > 0 ?
                            <div>
                                {this.commentMapp()}
                            </div>
                            : null}

                        {this.state.commentToEdit.id !== 0 ?
                            <CommentEdit sessionToken={this.props.sessionToken} comment={this.state.commentToEdit} setCommentToEdit={(comment: CommentType) => this.setCommentToEdit(comment)} fetchUser={() => this.props.fetchUser()} />
                            : null}


                    </CardBody>
                </Card>
            </div>
        )
    }
}