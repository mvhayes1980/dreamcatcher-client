import React from 'react'
import {DreamType, CommentType, UserType} from '../../types/CustomTypes';
import { Card, CardBody, CardHeader, CardTitle, Button } from 'reactstrap';
import APIURL from '../../helper/Environment';
import Dream from './Dream';

type AcceptedProps = {
    sessionToken: string,

    dreams: DreamType[],

    fetchUser: () => void

    user: UserType
}

type DreamTableState = {
    sessionToken: string,
    dreams: DreamType[],
    dreamToComment: DreamType
}

class DreamTable extends React.Component<AcceptedProps, DreamTableState> {
    constructor(props: AcceptedProps){
        super(props);
        this.state = {
            sessionToken: this.props.sessionToken,
            dreams: this.props.dreams,
            dreamToComment: {
                category: "",
                content: "",
                isNSFW: false,
                title: "",
                id: 0,
                userId: 0,
                comments: []
            }
        }
    }

    deleteDream(dream: DreamType) {
        fetch(`${APIURL}/api/dreams/delete/${dream.id}`, {
            method: "delete",
            headers: {
                'content-type': 'application/json',
                'authorization': this.props.sessionToken
            }
        })
            .then(res=> res.json())
            .then(res => {
                console.log(res)
                this.props.fetchUser()
            })
    }

    setDreamToComment(dream: DreamType) {
        this.setState({dreamToComment: dream});
        console.log("SET DREAM TO COMMENT:", dream)
    }

    displayDreams() {
        return this.state.dreams.reverse().map((dream,index) => {
            return (
                <Dream setDreamToComment={(dream: DreamType)=>{this.setDreamToComment(dream)}} deleteDream={()=> this.deleteDream(dream)} user={this.props.user} dream={dream}/>
            )
        })
    }

    render() {
        return(
            <div>
                <h3>My Dreams</h3>
                {this.displayDreams()}
            </div>
        )
    }
}

export default DreamTable;