import React, { Component } from 'react';
import { handleResponse, renderChangePercent } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../commun/Loading';

import './Detail.css'

export default class Detail extends Component {

    constructor() {
        super();
        this.state = {
            currency: {},
            loading: false,
            error: null
        }
    }

    componentDidMount = () => {
        this.fetchCurrency();        
    }

    fetchCurrency() {
        this.setState({loading: true});
        const currencyId = this.props.match.params.id;

        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
        .then(handleResponse)
        .then((currency) => {
          this.setState({currency, loading: false})          
        })
        .catch((error) => {
          this.setState({error: error.errorMessage, loading: false})
        });
    }

  render() {
    const {loading, error, currency} = this.state;


    //Render only loading component, if loading sate is set to true
    if(loading) {
        return <div className="loading-container"><Loading /></div>
    }

    //Render only loading error message, if error occured while fetching data
    if(error) {
        return <div className="error">{error}</div>
    }

    return (
      <div className="Detail">
        <h1 className="Detail-heading">
          {currency.id} ({currency.name})
        </h1>
        <div className="Detail-container">
            <div className="Detail-item">
                Price <span className="Detail-value">${currency.price}</span> 
            </div>
            <div className="Detail-item">
                Rank <span className="Detail-value">{currency.rank}</span> 
            </div>
            <div className="Detail-item">
                24H Change <span className="Detail-value">{renderChangePercent(currency.percentChange24h)}</span> 
            </div>
            <div className="Detail-item">
                 <span className="Detail-title">Market Cap</span> 
                 <span className="Detail-dollar">{currency.marketCap}</span> 
            </div>
            <div className="Detail-item">
                 <span className="Detail-title">24H Volume</span> 
                 <span className="Detail-dollar">$</span> {currency.volume24h}
            </div>
            <div className="Detail-item">
                <span className="Detail-title">Total Supply</span> 
                <span className="Detail-dollar">{currency.totalSupply}</span> 
            </div>   	
        </div>
      </div>
    )
  }
}
