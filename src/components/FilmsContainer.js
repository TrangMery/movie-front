import React, { Component } from 'react'
import { Films } from '../shared/ListOfFilms'
import FilmsPresentation from './FilmsPresentation';
/* The constructor method is called when the class is instantiated. It sets the initial state of the
component to the films array. The render method returns the FilmsPresentation component, passing the
films array as a prop. */
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: Films
        };
    }
    render() {
        return <FilmsPresentation films={this.state.films} />
    }
}
export default Main
