import React from 'react';
import ReactDOM from 'react-dom';
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

class Jumbotron extends React.Component {
    render () {
        return (
            <div className="jumbotron">
               <h1 className="display-4">Learn your times tables here</h1>
               <p className="lead">Click on an activity below to start</p>
                </div>
        )
    }
}

export default Jumbotron;