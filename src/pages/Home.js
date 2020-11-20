import React, {Component} from 'react'
import {Title} from '../components/Title';
import {SearchForm} from '../components/SearchForm';
import {MoviesList} from '../components/MoviesList';


class Home extends Component {
    state ={
        results: [],
        usedSearch: false
      }
    
      handleResults = (results) =>{
        this.setState({results, usedSearch: true})
      }
    
      renderResults(){
        return this.state.results.length === 0
                ? <p>Sorry! Results not found!</p>
                : <MoviesList movies={this.state.results} />
      }

    render(){
        return(
            <div>
            <Title>Search Movies</Title>
            <div className='SearchForm-wrapper'> 
            <SearchForm onResults={this.handleResults}/>
            </div>
            {
            this.state.usedSearch === true
                ? this.renderResults()
                : <small>Use the form to seach a movie</small>
            }
        </div>
        )
    }
}

export default Home; 