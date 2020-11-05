import React, { Component } from 'react'
import './App.css';
import Star from './Star'

export default class Rating extends Component {
    state = {
        rating: 0,
        hoverState: 0,
        message:''
    }

    render() {
        // using 5 stars rating
        const stars = [1, 2, 3, 4, 5]
        return (
            <div className="flex-container">
                {
                    stars.map((star, i) => (
                        <Star
                            key={i}
                            starId={i}
                            rating={this.state.hoverState || this.state.rating}
                            onMouseEnter={() => this.setState({hoverState: i+1})}
                            onMouseLeave={() => this.setState({hoverState: 0})}
                            onClick={() => this.setState({rating: i+1})}
                        />
                    ))
                }
            </div>
        )
    }
}
