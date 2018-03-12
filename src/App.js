import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import Game from './game.js'





class App extends React.Component {
    render() {
    return (
      <div className='App'>
        <Game />
      </div>
    );
  }
}

export default App;
