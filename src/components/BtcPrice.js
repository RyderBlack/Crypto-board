import React, {Component} from 'react';
import axios from 'axios';
import { timeParse } from "d3-time-format";
import { tsv } from "d3-request";

var parseDate = timeParse("%Y-%m-%d");

tsv("path/to/data.tsv", function(err, data) {
    data.forEach((d, i) => {
        d.date = new Date(parseDate(d.date).getTime());
        d.open = +d.open;
        d.high = +d.high;
        d.low = +d.low;
        d.close = +d.close;
    });

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
            console.log(prices)
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