import { Component } from 'react'

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

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${inputMovie}`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
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