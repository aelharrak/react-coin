import React, { Component } from 'react'
import './Search.css';


export default class Search extends Component {

    constructor(){
        super();
        this.state = {
            searchQuery: '',
            firstName: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }
    handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        this.setState({[inputName]: inputValue}); // or old code below...
       /* if(inputName === 'searchQuery') {
            this.setState ({
                searchQuery: inputValue
            })
        } else {
            this.setState({
                firstName: inputValue
            })
        } or */

        


    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        
        {/*<input ref={(input)=> this.searchQuery = input }/>
        <input ref={(input)=> this.firstName = input }/>*/}

        <input name="searchQuery" onChange={this.handleChange}/>
        <input name="firstName" onChange={this.handleChange}/>


        <button>Submit</button>
    </form>
    )
  }
}