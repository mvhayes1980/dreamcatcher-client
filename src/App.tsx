import * as React from 'react';
import Home from './components/site/DreamHome';
import Auth from './components/auth/Auth';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

type AppState = {
  sessionToken: string,
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
      let token: string | null = localStorage.getItem('dreamSessionToken')
      this.setState({sessionToken: token != null ? token : ""});
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
            {this.state.sessionToken != "" ? <Home sessionToken={this.state.sessionToken} clearToken={() => this.clearToken()}/> : <Auth updateToken={(newToken)=>{this.updateToken(newToken)}}/>}
          </div>
      </div>
    );
  }
}

export default App;
