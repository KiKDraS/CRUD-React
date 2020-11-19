import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Movie extends Component {
    static PropTypes = {
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }

    render () {
        const {poster, title, year} = this.props

        return(
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img 
                            src="https://bulma.io/images/placeholders/1280x960.png" 
                            alt="Placeholder" 
                        />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <div class="media-content">
                                <p class="title is-4">John Smith</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        )
    }
}