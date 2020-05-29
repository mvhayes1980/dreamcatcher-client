import React from 'react';
import DreamCreate from './DreamCreate';
import { Row, Col } from 'reactstrap';
import DreamTable from './DreamTable';
import { DreamType, UserType } from '../../types/CustomTypes';


type AcceptedProps = {
    sessionToken: string,
    dreams: DreamType[],
    user: UserType,

    fetchUser: () => void
}

export default class PostIndex extends React.Component <AcceptedProps,{}> {
    render() {
        return(
            <div>
                <Row>
                    <Col md="4">
                        <img className="profilePic" src={this.props.user.profilePic} height="200" alt=""/>
                    </Col>
                    <Col md="8">
                        <h1>{this.props.user.username}</h1>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md="4">
                        <DreamCreate fetchUser={()=>this.props.fetchUser()} sessionToken={this.props.sessionToken}/>
                    </Col>
                    <Col md="8">
                        <DreamTable user={this.props.user} fetchUser={()=> this.props.fetchUser()} dreams={this.props.dreams} sessionToken={this.props.sessionToken}/>
                    </Col>
                    
                </Row>
            </div>
        )
    }
}