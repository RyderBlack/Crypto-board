import React, {Component} from 'react';
//import axios from 'axios';
import SideBar from './SideBar';
import TopList from './TopList';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencies : [],
            response: ''
        }
       
    }


    render() {
        return (
                <div className="row home">
                    <SideBar />
                    <div className="col-md-10">
                        <div className="row">
                            <input type="text" placeholder="Enter a currency name" onClick={this.searchCurrency} className="search-input" ref={input => this.search = input}/> 
                        </div>
                        <h1>You are Home.</h1>
                        <TopList/>
                    </div>
                </div>      
        )
    }
}