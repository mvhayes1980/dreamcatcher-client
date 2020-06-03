import React from 'react';
import { UserType, DreamType } from '../../types/CustomTypes';
import { Input, Row, Col } from 'reactstrap';
import PublicDreamTable from './PublicDreamTable';
import DreamCreate from '../postIndex/DreamCreate';
import APIURL from '../../helper/Environment';

type AcceptedProps = {
    sessionToken: string,
    user: UserType,
    fetchUser: () => void
}

type PublicIndexState = {
    category: string,
    categoryChanged: boolean,
    dreams: DreamType[]
}

export default class PublicIndex extends React.Component<AcceptedProps, PublicIndexState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            category: 'joy',
            categoryChanged: false,
            dreams: []
        }
    }

    fetchDreams() {
        this.setState({ dreams: [], categoryChanged: false });

        fetch(`${APIURL}/api/dreams/${this.state.category}`, {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'authorization': this.props.sessionToken
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log("FETCHED DREAMS", res);
                this.setState({ dreams: res.response });
            })
    }

    componentWillMount() {
        this.fetchDreams();
    }

    componentDidUpdate() {
        if (this.state.categoryChanged) {
            this.fetchDreams();
        }
    }


    render() {
        return (
            <div>
                <h1 id="publicDreams">Public Dreams</h1>
                <Row>
                    <Col>

                        <Input id="dreamType" name="category" value={this.state.category} type="select" onChange={e => { this.setState({ category: e.target.value, categoryChanged: true }) }}>
                            <option value={"joy"}>Joy</option>
                            <option value={"despair"}>Despair</option>
                            <option value={"fear"}>Fear</option>
                            <option value={"desire"}>Desire</option>
                            <option value={"love"}>Love</option>
                            <option value={"confusion"}>Confusion</option>
                            <option value={"humiliation"}>Humiliation</option>
                            <option value={"envy"}>Envy</option>
                            <option value={"mundanity"}>Mundanity</option>
                            <option value={"fortune"}>Fortune</option>
                            <option value={"rage"}>Rage</option>
                            <option value={"memory"}>Memory</option>
                        </Input>


                        {this.state.dreams !== [] ?
                            <PublicDreamTable fetchUser={() => { this.props.fetchUser() }} user={this.props.user} sessionToken={this.props.sessionToken} dreams={this.state.dreams} />
                            : null}


                    </Col>
                    <Col className="newDream">

                        <DreamCreate sessionToken={this.props.sessionToken} fetchUser={() => { this.props.fetchUser() }} />

                    </Col>
                </Row>
            </div>
        )
    }
}