import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../App.css';
import _ from 'lodash';

import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Puzzle from './puzzle.js'

const showOrHideClassName = (props) => {
  return props.gameStarted ? "hide" : "show"   
}

const ActiveTables = (props) => {
  return (
    <div className='activeTablesDiv'>
      <div>
       {props.chosenTables.map((num, i) => <h4 key={i}>{num}</h4>)}
      </div>      
          <button className={showOrHideClassName(props)} onClick={() => props.startGame()}>Go...</button>       
      </div>
  )
}

const AllTables = (props) => {
  return (
    <div>
      {AllTables.List.map((num,i) => 
        <button key={i} disabled={props.gameStarted} onClick={() => props.addToChosenTables(num)}>{num}</button>)}
      </div>
  )
}
AllTables.List = _.range(1,13);

class Game extends React.Component {
    static initialState = () => ({  
      chosenTables: [],
      firstNumber: null,
      gameStarted: false,
      secondNumber: null 
    })  
    state = Game.initialState()
  
    addToChosenTables = (numberChosen) => {
      if (this.state.chosenTables.indexOf(numberChosen) >= 0) { return; }
      this.setState(prevState => ({
        chosenTables: prevState.chosenTables.concat(numberChosen)
        // order chosen tables by value not order chosen
    }))
  }
  startGame = () => {
    if (this.state.chosenTables.length === 0) { return ;}
    this.setState(prevState => ({
        gameStarted: true,
        firstNumber: this.getFirstNumber(),
        secondNumber: Math.floor((Math.random()*12) + 1)
    }));  
  }
  getFirstNumber = () => {
    if (this.state.chosenTables.length > 0) {
      let length = this.state.chosenTables.length;
      let index = Math.floor((Math.random()*length));
      return this.state.chosenTables[index]      
  }} 
  endGame = () => {
    // pop up modal with results - how many correct first time
    // total playing time
  } 
    render() {
      const { chosenTables, firstNumber, secondNumber, gameStarted } = this.state;
      return (
        <div className="container">
          <AllTables addToChosenTables={this.addToChosenTables} 
                      gameStarted={gameStarted}/>
          <br />
          <ActiveTables chosenTables={chosenTables}
                        startGame={this.startGame}
                        gameStarted={gameStarted}/>
          <Puzzle firstNumber={firstNumber}
                  gameStarted={gameStarted}
                  secondNumber={secondNumber}
                  startGame={this.startGame}/>
          <br />
          {/* <button onClick={() => this.endGame}>End Game</button> */}
          </div>
      )}
  }

  export default Game;