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
            //console.log(res.data.Data)
            const currencies = res.data.Data;
        
            this.setState({ currencies: currencies });
          })
          console.log(this.state.currencies)
    }



    render() {
        return (
                    <div className="col-md-3 toplist">
                       
                        {/*<p className="App-intro">{this.state.currencies[0].title}</p>*/}
                        
                        <h3 className="toplist-title">Top of the day</h3>
                        {this.state.currencies.map((currency) => {
                            const vol24Rounded = Math.round(currency.volume24h*100)/100;
                            return(
                                <p id={currency}>{currency.exchange}: {vol24Rounded}</p>
                            )
                        })}
                    </div>   
        )
    }
}