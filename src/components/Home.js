import React, {Component} from 'react';
import authFirebase from '../config/Auth';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencies : [],
            response: ''
        }
        this.logout = this.logout.bind(this);
    }

    logout() {
        authFirebase.auth().signOut();
    }

   /* componentWillMount() {
        fetch('')
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
    */

   componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
    
    render() {
        return (
            <div className="col-md-6">
                <h1>You are Home.</h1>
                <p className="App-intro">{this.state.response}</p>
                <button onClick={this.logout} className="btn btn-warning">Logout</button>
            </div>
        )
    }
}