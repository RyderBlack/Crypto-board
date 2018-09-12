import React, { Component } from 'react';
import './App.css';
import authFirebase from './config/Auth';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    authFirebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
         localStorage.setItem('user',user.uid);
      } else {
        this.setState({ user: null});
         localStorage.removeItem('user');
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            {this.state.user ? (<Home />) : (<Login />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
