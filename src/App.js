import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import { Carousel } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Carousel>
            <div><h1>1</h1></div>
            <div><h1>2</h1></div>
            <div><h1>3</h1></div>
            <div><h1>4</h1></div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default App;
