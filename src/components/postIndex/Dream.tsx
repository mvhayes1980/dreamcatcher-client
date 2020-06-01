import React from 'react'
<<<<<<< HEAD
import { DreamType, UserType } from '../../types/CustomTypes';
import { Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap';
=======
import { DreamType, UserType } from '../../types/CustomTypes'
import { Card, CardHeader, CardTitle, CardBody, Button, Modal } from 'reactstrap';
>>>>>>> 9220e87ab8a534216377b855bf9c377aa25b6a75

type AcceptedProps = {
    dream: DreamType,
    user: UserType,
    deleteDream: () => void
    setDreamToComment: (dream: DreamType) => void
}

type DreamState = {
    dream: DreamType,
    user:UserType,
    hideNSFW: boolean,
    isReplying: boolean
}

export default class Dream extends React.Component <AcceptedProps, DreamState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            dream: this.props.dream,
            user: this.props.user,
            hideNSFW: !this.props.user.nsfwOk && this.props.dream.isNSFW ? true : false,
            isReplying: false
        }

    }

    commentMapp() {
        return this.state.dream.comments.reverse().map((comment, index) => {
            return (
                <div key={index}>
                    <hr/>
                    <p>User #{comment.userId} says:</p>
                    <p>{comment.content}</p>
                </div>
            )
        })
    }

    render() {
        return(
            <div>
                <Card style={{marginBottom: "15px"}}>
                    <CardHeader>
                    <CardTitle>{this.props.dream.title}</CardTitle>
                    <p>{this.props.dream.category}</p>
                    </CardHeader>
                    <CardBody>
                    <p>{this.state.hideNSFW ? "(This content contains NSFW material)..." : this.props.dream.content}</p>
                    {this.state.hideNSFW ? <Button onClick={()=>this.setState({hideNSFW:false})}>view</Button> : null}

                    {this.props.user.id === this.props.dream.userId || this.props.user.isAdmin ? 
                    <Button color="danger" onClick={()=>{this.props.deleteDream()}}>DELETE</Button>
                    : null}

                    <Button onClick={()=>{this.props.setDreamToComment(this.props.dream)}}>Reply</Button>

                    {this.props.dream.comments.length > 0 ? 
                    
                    <div>
                        <h3>Replies</h3>
                        {this.commentMapp()}
                    </div>
                    
                    :null}


                    </CardBody>
                </Card>
            </div>
        )
    }
}