import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
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
import styles from './styles.js'

const Card = (props) => {
    return (
        <div className="col-sm-12 col-md-4">
            <div className="card mb-4">
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="card-link">Go...</a>
                </div>
            </div>
        </div>
    )
}

class Sections extends React.Component {
    render() {
        return (
            <div className="row">
                <Card title="Learn" description="Pick which times tables you want to learn"/>
                <Card title="Practice" description="Choose one or more times tables and practice by playing different games"/>
                <Card title="Test" description="Test yourself by taking a timed test"/>
            </div>
        )
    }
}

export default Sections;