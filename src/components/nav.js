import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../App.css';
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
import styles from '../styles.js'
  
const NavBrand = (props) => {
    return(<a className="navbar-brand" href={props.linkTo}>{props.text}</a> )
}
  
const NavMenu = (props) => {
    return(
            props.links.map((link, i) =>
                <NavLink key={i} linkTo={link.linkTo} text={link.text} active={link.active} />
    ))
}

const NavLink = (props) => {
    return(
        <li className="nav-item active">
        <a href={props.linkTo} className="nav-link">{props.text}</a>
        </li>
      );    
}
  
class NavBar extends React.Component {
    render() {
      return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <NavBrand linkTo={this.props.brand.linkTo} text={this.props.brand.text} />
            <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <NavMenu links={this.props.links} />
                </ul>
            </div>
        </nav>
      )}
 }

export default NavBar;