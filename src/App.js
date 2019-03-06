import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalRoute from './routes/GlobalRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <GlobalRoute />
      </div>
    );
  }
}

export default App;
