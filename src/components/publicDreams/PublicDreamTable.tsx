import React from 'react';
import { UserType, DreamType } from '../../types/CustomTypes';
import Dream from '../postIndex/Dream';
import APIURL from '../../helper/Environment';
import { Modal } from 'reactstrap';
import DreamComment from './DreamComment';

type AcceptedProps = {
    sessionToken: string,
    user: UserType,
    dreams: DreamType[],
    fetchUser: () => void
}

type PublicDreamTableState = {
    dreamToComment: DreamType,
    dreamToEdit: DreamType
}


export default class PublicDreamTable extends React.Component<AcceptedProps, PublicDreamTableState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            dreamToComment: {
                category: "",
                content: "",
                isNSFW: false,
                title: "",
                id: 0,
                userId: 0,
                comments: []
            },
            dreamToEdit: {
                content: "",
                    category: "joy",
                    isNSFW: false,
                    title: '',
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

    updateDream (dream: DreamType) {
        fetch(`${APIURL}/api/dreams/update/${dream.id}`, {
            method: "put",
            headers: {
                'content-type': 'application/json',
                'authorization': this.props.sessionToken
            },
            body: JSON.stringify({
                dream: this.state.dreamToEdit
            })
        })
            .then(res=>res.json())
            .then(res=> {
                console.log(res);
                this.setState({dreamToEdit: {
                    content: "",
                    category: "joy",
                    isNSFW: false,
                    title: '',
                    comments: []
                }})
                this.props.fetchUser();
            })
    }

    setDreamToComment(dream: DreamType) {
        this.setState({dreamToComment: dream});
        console.log("SET DREAM TO COMMENT:", dream)
    }

    setDreamToEdit(dream: DreamType) {
        this.setState({dreamToEdit: dream});
    }

    displayDreams() {
        return this.props.dreams.reverse().map((dream,index) => {
            return (
                <Dream setDreamToComment={(dream: DreamType)=> {this.setDreamToComment(dream)}} key={index} deleteDream={()=> this.deleteDream(dream)} setDreamToEdit={(dream: DreamType)=>{this.setDreamToEdit(dream)}} user={this.props.user} dream={dream}/>
            )
        })
    }

    render() {
        return(
            <div>
                {this.displayDreams()}
                {this.state.dreamToComment.category ?
                    <DreamComment setDreamToComment={(dream: DreamType) => this.setDreamToComment(dream)} sessionToken={this.props.sessionToken} user={this.props.user} dream={this.state.dreamToComment}/>
                : null}
            </div>
        )
    }
}