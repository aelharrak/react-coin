import React, { Component } from 'react'
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';

import Loading from '../commun/Loading';
import Table from './Table';
import Pagination from './Pagination';

export default class List extends Component {

    constructor() {
        super();

        this.state = {
            loading: false,
            error: null,
            currencies: [],
            totalPages:0,
            page:1
        };

        this.handlePaginationClick = this.handlePaginationClick.bind(this);
    }

    componentDidMount = () => {
        this.fetchCurrencies();        
    }
    
    fetchCurrencies() {
        this.setState({loading: true});
        const {page} = this.state;

        fetch(API_URL +'/cryptocurrencies?page=' + page + '&perPage=20')
        .then(handleResponse)
        .then((data) => {
          //console.log('Success', data);
          const {currencies, totalPages} = data;
          this.setState({currencies, loading: false, totalPages})          
        })
        .catch((error) => {
          //console.log('Error', error);
          this.setState({error: error.errorMessage, loading: false})
        });
    }



    handlePaginationClick = (direction) => {
       console.log(direction);
        let nextPage = this.state.page;

        nextPage = direction ==='next' ? nextPage + 1 :  nextPage - 1;
        
        //Change next page
        this.setState ({page: nextPage},() => {
           // call fetchCurrencies function inside setSate's call
            this.fetchCurrencies(); 
        });
    }

    render() {
        
        const {loading, error, currencies, page, totalPages} = this.state;

        //Render only loading component, if loading sate is set to true
        if(loading) {
            return <div className="loading-container"><Loading/></div>
        }

        //Render only loading error message, if error occured while fetching data
        if(error) {
            return <div className="error">{error}</div>
        }

        return (
            <div>
                <Table 
                    currencies = {currencies} />
                <Pagination 
                    page={page}
                    totalPages={totalPages}
                    handlePaginationClick={this.handlePaginationClick}
                    />
            </div>

        )
    }
}

