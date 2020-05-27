import * as React from 'react';
import Navbar from './components/navbar/navbar';
import Home from './components/site/home';
import './App.css';

class App extends React.Component {
  public render () {
    return (
      <div className="App">
          <Navbar/>
          <Home/>
      </div>
    );
  }
  
}

export default App;
