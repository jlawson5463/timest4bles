 import React from 'react';
 import ReactDOM from 'react-dom';
// import logo from '../logo.svg';
 import '../styles/App.css';

// import _ from 'lodash';
// import {
//   Container,
//   Row,
//   Col,
//   Button
// } from 'reactstrap';
// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery';
// import 'bootstrap/dist/js/bootstrap';

import Game from './game'
import NavBar from './nav'
import Jumbotron from './jumbotron'
import Sections from './section';
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

// go through all imports and see whats actually needed in each file.
// it may only be nesseccarty to include them at index.js level unless actually referenced in each component