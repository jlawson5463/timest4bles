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
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

import Game from './game.js'
import NavBar from './nav.js'
import Jumbotron from './jumbotron.js'
import Sections from './section.js';
import Navbardata from './navbarData';

class App extends React.Component {
    render() {
    return (
      <div className='App'>
        <NavBar {...Navbardata}/>
        <Jumbotron />
        <Sections />
        <Game />
      </div>
    );
  }
}

export default App;
