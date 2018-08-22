import React, {Component} from 'react';
import authFirebase from '../config/Auth';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        authFirebase.auth().signOut();
    }
    render() {
        return (
            <div className="col-md-6">
                <h1>You are Home.</h1>
                <button onClick={this.logout} className="btn btn-warning">Logout</button>
            </div>
        )
    }
}