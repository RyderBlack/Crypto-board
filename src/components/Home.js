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

    componentWillMount() {
        const config = {
            headers: {
              accept: 'application/json',
            },
            data: {},
          };
        //axios.get('https://min-api.cryptocompare.com/data/all/coinlist',config)
        axios.get('https://min-api.cryptocompare.com/data/top/exchanges?fsym=BTC&tsym=USD')
          .then(res => {
            console.log(res.data.Data)
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
                        {/*<p className="App-intro">{this.state.currencies[0].title}</p>*/}
                        {this.state.currencies.map((currency) => {
                            return(
                                <p id={currency}>{currency.exchange}</p>
                            )
                        })}
                    </div>
                </div>      
        )
    }
}