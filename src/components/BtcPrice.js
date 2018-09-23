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

    componentWillMount() {
        const config = {
            headers: {
              accept: 'application/json',
            },
            data: {},
          };
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist',config)
             .then(res => {
        //console.log(res.data.Data)
            let coinz = res.data.Data;
            /*currenciez = currenciez.map((currency) => {
                return this.setState({ currenciez: currency });
            })*/
            //console.log(currenciez)
            this.setState({ coins: coinz });
          })
          for( let i = 0; i < this.state.coins.length;i++) {
            console.log(this.state.coins[i].FullName)

          }
        //console.log(this.state.currencies)
    }



    render() {
        return (
                    <div className="col-md-3 toplist">
                       
                        {/*this.state.coins.map((currency) => { 
                            return (
                                <p className="App-intro">{ currency.FullName }</p>
                            )}
                            )*/}
                        
                        <h2 className="toplist-title">Bitcoin / USD <span>(daily)</span></h2>
                        <p>{/*this.state.currencies.FullName*/}</p>
                    </div>   
        )
    }
}