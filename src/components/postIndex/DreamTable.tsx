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
    dreams: DreamType[]
}

class DreamTable extends React.Component<AcceptedProps, DreamTableState> {
    constructor(props: AcceptedProps){
        super(props);
        this.state = {
            sessionToken: this.props.sessionToken,
            dreams: this.props.dreams
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

    displayDreams() {
        return this.state.dreams.map((dream,index) => {
            return (
                <Dream deleteDream={()=> this.deleteDream(dream)} user={this.props.user} dream={dream}/>
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