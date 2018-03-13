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


const navbar = () => {}
  
    navbar.brand = {linkTo: "#", text: "TimesT4bles"};
    navbar.links = [
      {linkTo: "#", text: "Home"},
      {linkTo: "#", text: "About"},
      {linkTo: "#", text: "Learn"},
      {linkTo: "#", text: "Play", active: true},
      {linkTo: "#", text: "Test"},
    ]

class App extends React.Component {
    render() {
    return (
      <div className='App'>
        <NavBar {...navbar}/>
        <Game />
      </div>
    );
  }
}

export default App;
