import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './styles.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <p>
                        Article about how to manage side effects for your Redux application
                    </p>
                    <Link to="/movies" className="App-link">
                        movies
                    </Link>
                </header>
            </div>
        );
    }
}

export default App;
