import * as React from 'react';
import Home from './components/site/Home';
import Auth from './components/auth/Auth';
import 'bootstrap/dist/css/bootstrap.css'

import './App.css';

type AppState = {
  sessionToken: string | null,
  isAdmin: boolean,
  nsfwOk: boolean
}

class App extends React.Component<{}, AppState> {
  constructor(props: string) {
    super(props)
    this.state = {
      sessionToken: "",
      isAdmin: false,
      nsfwOk: false
    }

  }

  componentWillMount() {
    if(localStorage.getItem('dreamSessionToken')) {
      this.setState({sessionToken: localStorage.getItem('dreamSessionToken')});
      console.log("sessionToken:", localStorage.getItem('dreamSessionToken'));



    }


  }

  updateToken(newToken: string) {
    localStorage.setItem('dreamSessionToken', newToken);
    this.setState({sessionToken: newToken});
    console.log("sessionToken changed to:", newToken)
  }

  clearToken() {
    localStorage.removeItem('dreamSessionToken');
    this.setState({sessionToken: ""});
  }


  render () {
    return (
      <div className="App">
          <div className='main'>
            {this.state.sessionToken != "" ? <Home/> : <Auth updateToken={(newToken)=>{this.updateToken(newToken)}}/>}
            <button onClick={()=>{this.clearToken()}}>clear</button>
          </div>
      </div>
    );
  }
}

export default App;
