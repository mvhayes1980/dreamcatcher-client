import React from 'react'
import { DreamType, UserType } from '../../types/CustomTypes'
import { Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap';

type AcceptedProps = {
    dream: DreamType,
    user: UserType,
    deleteDream: () => void
}

type DreamState = {
    dream: DreamType,
    user:UserType,
    hideNSFW: boolean
}

export default class Dream extends React.Component <AcceptedProps, DreamState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            dream: this.props.dream,
            user: this.props.user,
            hideNSFW: !this.props.user.nsfwOk && this.props.dream.isNSFW ? true : false
        }

    }

    render() {
        return(
            <Card style={{marginBottom: "15px"}}>
                <CardHeader>
                <CardTitle>{this.props.dream.title}</CardTitle>
                <p>{this.props.dream.category}</p>
                </CardHeader>
                <CardBody>
                <p>{this.state.hideNSFW ? "(This content contains NSFW material)..." : this.props.dream.content}</p>
                {this.state.hideNSFW ? <Button onClick={()=>this.setState({hideNSFW:false})}>view</Button> : null}
                <Button color="danger" onClick={()=>{this.props.deleteDream()}}>DELETE</Button>
                </CardBody>
            </Card>
        )
    }
}