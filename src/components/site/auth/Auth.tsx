import React from 'react';

type AuthState = {
    username: string,
    password: string,
    profilePic: string,
    nsfwOk: boolean
}

type AcceptedProps = {
    updateToken: (newToken: string) => void
}

export default class Auth extends React.Component <AcceptedProps, AuthState> {
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            username: '',
            password: '',
            profilePic: '',
            nsfwOk: false
        }
        
    }

    render(){
        return(
            <div>
                    <button onClick={() => this.props.updateToken("gregarious chives")}>click to change sessiont toknen</button>
            </div>
        )
    }
}