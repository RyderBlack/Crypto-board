import React, { Component } from 'react';
import authFirebase from '../config/Auth';

export default class SideBar extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        authFirebase.auth().signOut();
    }

    render() {
        return ( 
            
        <div className="col-md-2 sidenav">
        <button onClick={this.logout} className="btn btn-logout">Logout</button>
        </div>
           
        )
    }
}