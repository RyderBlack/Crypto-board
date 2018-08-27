import React, {Component} from 'react';
import authFirebase from '../config/Auth';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencies : []
        }
        this.logout = this.logout.bind(this);
    }

    logout() {
        authFirebase.auth().signOut();
    }

    componentWillMount() {
        fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?sort=market_cap&start=0&limit=10&cryptocurrency_type=tokens&convert=USD,BTC')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.items);
                this.setState({
                    currencies: responseJson.items
                });

            })
            .catch((error) => {
                console.log(error);
            })
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