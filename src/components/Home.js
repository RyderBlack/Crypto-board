import React, {Component} from 'react';
import axios from 'axios';
import SideBar from './SideBar';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencies : [],
            response: ''
        }
       
    }

    

    componentDidMount() {
        const config = {
            headers: {
              accept: 'application/json',
            },
            data: {},
          };
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist',config)
          .then(res => {
            //console.log(res.data.Data)
            const currencies = res.data.Data;
        
            this.setState({ currencies: currencies });
          })
          console.log(this.state.currencies)
      }



    render() {
        return (
                <div className="row home">
                    <SideBar />
                    <div className="col-md-10">
                        <h1>You are Home.</h1>
                        <p className="App-intro">{this.state.response}</p>
                        
                    </div>
                </div>      
        )
    }
}