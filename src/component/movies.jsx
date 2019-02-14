import React, { Component } from 'react';
import {getMovies} from '../services/fakeMoviesService';

class Movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete = movie => {

    };

    render() {
        
    }
 

export default Movies;