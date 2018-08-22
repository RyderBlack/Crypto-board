import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import authFirebase from '../config/Auth';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: ''
        }
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    login(e) {
        e.preventDefault();
        authFirebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(u => {})
        .catch((error) => {
            console.log('error' + error);
        }) 
    }

    signup(e) {
        e.preventDefault();
        authFirebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log('error' + error);
        }) 
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return(
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">

              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>

                <form className="form-signin">

                  <div className="form-label-group">
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" 
                    className="form-control" id="inputEmail" placeholder="Enter email" required autofocus/>
                    <label for="inputEmail">Email address</label>
                  </div>
    
                  <div className="form-label-group">
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                    className="form-control" id="inputPassword" placeholder="Password" required/>
                    <label for="inputPassword">Password</label>
                  </div>
    
                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" for="customCheck1">Remember password</label>
                  </div>

                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.login}>Log in</button>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.signup}>Sign up</button>
                  <hr className="my-4" />
                  <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                </form>

              </div>
            </div>
        </div>


        )
    }

}

   



