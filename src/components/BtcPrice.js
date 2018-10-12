import React, {Component} from 'react';
import axios from 'axios';

import PropTypes from "prop-types";

import { scaleTime } from "d3-scale";
import { utcDay } from "d3-time";

import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";

export default class BtcPrice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencies : [],
            priceBTC: [],
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
            //console.log(prices)
            this.setState({ data: prices });
          })
         
          
        //console.log(this.state.data)
        
    }



    render() {
        const { type, width, data, ratio } = this.props;
        
           
         
		
        
        return (
                    <div className="col-md-8 toplist">
                    
                        
                        
                        <h2 className="toplist-title">Bitcoin / USD <span>(daily)</span></h2>
                        <p>{/*console.log(this.state.data)*/}</p>
                        {/*this.state.data.map( datas => {
                            return (
                            <ChartCanvas height={400}
                        ratio={ratio}
                        width={width}
                        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
                        type={type}
                        seriesName="MSFT"
                        data={datas}
                        xAccessor={datas.time}
                        xScale={scaleTime()}
                        >
    
                    <Chart id={1} yExtents={d => [d.high, d.low]}>
                        <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
                        <YAxis axisAt="left" orient="left" ticks={5} />
                        <CandlestickSeries width={timeIntervalBarWidth(utcDay)}/>
                    </Chart>
                </ChartCanvas> )
                        })
                        
                    */}
                    </div>   
        )
    }
}


BtcPrice.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

BtcPrice.defaultProps = {
	type: "svg",
};
BtcPrice = fitWidth(BtcPrice);

