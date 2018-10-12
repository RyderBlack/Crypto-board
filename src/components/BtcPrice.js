import React, {Component} from 'react';
import axios from 'axios';
//import { tsv } from "d3-request";
//import { TypeChooser } from "react-stockcharts/lib/helper";
//import Chart from './Charts';
import PropTypes from "prop-types";

import { scaleTime } from "d3-scale";
import { utcDay } from "d3-time";

import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";


import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
const parseDate = timeParse("%Y-%m-%d");

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

    parseData(parse) {
        return function(d) {
            d.date = parse(this.state.coins.date);
            d.open = +this.state.coins.open;
            d.high = +this.state.coins.high;
            d.low = +this.state.coins.low;
            d.close = +this.state.coins.close;
            d.volume = +this.state.coins.volume;
    
            return d;
        };
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
                           return ( <ChartCanvas height={400}
                        ratio={50}
                        width={600}
                        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
                        
                        seriesName="MSFT"
                        data={coin}
                        xAccessor={coin.time}
                        xScale={scaleTime()}
                        xExtents={[coin.high, coin.low]}>
    
                    <Chart id={1} yExtents={[coin.high, coin.low]}>
                        <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
                        <YAxis axisAt="left" orient="left" ticks={5} />
                        <CandlestickSeries width={timeIntervalBarWidth(utcDay)}/>
                    </Chart>
                </ChartCanvas>)
                            })}
                        
                        <h2 className="toplist-title">Bitcoin / USD <span>(daily)</span></h2>
                        <p>{/*this.state.currencies.FullName*/}</p>
                        
                        {/*
                            tsv(this.state.coins, (err, data) => {
                                data.forEach((d, i) => {
                                    d.date = +d.time;
                                    d.open = +d.open;
                                    d.high = +d.high;
                                    d.low = +d.low;
                                    d.close = +d.close;
                                    console.log(+d.time)
                                });
                            })};
                       
                        <ChartCanvas width={width} height={400}
                            margin={{left: 50, right: 50, top:10, bottom: 30}} type={type}
                            seriesName="MSFT"
                            data={data}
                            xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}
                            xExtents={[new Date(), new Date()]}>

                            <Chart id={1} yExtents={d => [d.high, d.low]}>
                                <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
                                <YAxis axisAt="left" orient="left" ticks={5} />
                                <CandlestickSeries />
                            </Chart>
                        </ChartCanvas>
                        */}
                    </div>   
        )
    }
}

/*
CandleStickChart.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

CandleStickChart.defaultProps = {
	type: "svg",
};
CandleStickChart = fitWidth(CandleStickChart);

*/