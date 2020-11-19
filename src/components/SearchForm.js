import React, { Component } from 'react'

const API_KEY = '6960bf70';

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    handleChange = (e) =>{
        this.setState({
            inputMovie: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {inputMovie} = this.state

        fetch(`http://www.omdbapi.com/?s=${inputMovie}&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(results => {
                console.log(results)
                const { Search = [], totalResults = "0" } = results
                console.log(Search, totalResults)
                this.props.onResults(Search)
            })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className = "field has-addons" >
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Movie to find..." 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}