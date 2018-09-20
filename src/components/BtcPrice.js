import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {

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
            data: {},
          };
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist',config)
       // axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10')
          .then(res => {
            console.log(res.data.Data)
            const priceBTC = res.data.Data;
        priceBTC.map((coins) => {
            return this.setState({ currencies: coins })
            
        })
            //this.setState({ priceBTC: priceBTC });
          })
          console.log(this.state.currencies)
    }



    render() {
        return (
                    <div className="col-md-3 toplist">
                       
                        {/*<p className="App-intro">{this.state.currencies[0].title}</p>*/}
                        
                        <h2 className="toplist-title">Bitcoin / USD <span>(daily)</span></h2>
                        {this.state.priceBTC.map((price) => {
                           
                            return(
                                <p>priceBTC </p>
                            )
                        })}
                    </div>   
        )
    }
}