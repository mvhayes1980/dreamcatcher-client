import React from 'react';

type AcceptedProps = {
    updateToken: (newToken: string) => void
}

export default class Auth extends React.Component <AcceptedProps, {}> {
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
        }
        
    }

    render(){
        return(
            <div>
                    <button onClick={() => this.props.updateToken("gregarious chives")}>click to change session toknen</button>
            </div>
        )
    }
}