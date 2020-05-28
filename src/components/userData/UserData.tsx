import React from 'react';

type AcceptedProps = {
    sessionToken: string
}

type UserDataState = {
    username: string,
    password: string,
    profilePic: string,
    nsfwOk: boolean
}


export default class UserData extends React.Component <AcceptedProps> {
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
                <h1>My Dreamcatcher Profile</h1>
            </div>
        )
    }
}