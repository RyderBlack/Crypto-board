import React, {Component} from 'react';
import axios from 'axios';
import { timeParse } from "d3-time-format";
//import { tsv } from "d3-request";


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
                        {/*<ChartCanvas width={width} height={400}
                            margin={{left: 50, right: 50, top:10, bottom: 30}} type={type}
                            seriesName="MSFT"
                            data={data}
                            xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}
                            xExtents={[new Date(2012, 0, 1), new Date(2012, 6, 2)]}>

                            <Chart id={1} yExtents={d => [d.high, d.low]}>
                                <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
                                <YAxis axisAt="left" orient="left" ticks={5} />
                                <CandlestickSeries />
                            </Chart>
                        </ChartCanvas>*/}
                    </div>   
        )
    }
}

/*
const parseDate = timeParse("%Y-%m-%d");

tsv("path/to/data.tsv", function(err, data) {
    data.forEach((d, i) => {
        d.date = new Date(parseDate(d.date).getTime());
        d.open = +d.open;
        d.high = +d.high;
        d.low = +d.low;
        d.close = +d.close;
    });
})*/