import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencies : [],
            priceBTC: [],
            coins: [],
            response: ''
        }
       
    }

    componentDidMount() {
        const config = {
            headers: {
              accept: 'application/json',
            },
            data: {}
          };
        axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10',config)
             .then(res => {
        //console.log(res.data.Data)
            let prices = res.data.Data;
            //console.log(currenciez)
            this.setState({ priceBTC: prices });
          })
        console.log(this.state.priceBTC)
    }



    render() {
        return (
                    <div className="col-md-3 toplist">
                       
                        {this.state.coins.map((coin) => { 
                            console.log(coin.FullName)
                            })}
                        
                        <h2 className="toplist-title">Bitcoin / USD <span>(daily)</span></h2>
                        <p>{/*this.state.currencies.FullName*/}</p>
                    </div>   
        )
    }
}