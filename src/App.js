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

const AllTables = (props) => {
  return (
    <div>
      {AllTables.List.map((num,i) => 
        <button key={i} disabled={props.gameStarted} onClick={() => props.addToChosenTables(num)}>{num}</button>)}
      </div>
  )
}
AllTables.List = _.range(1,13);

const showOrHideClassName = (props) => {
  if (props.gameStarted === true) return "hide";
  return "show"    
}

const ActiveTables = (props) => {
  
  return (
    <div className='activeTablesDiv'>
      <div>
       {props.chosenTables.map((num, i)=>
          <h4 key={i}>{num}</h4>)}
      </div>      
          <button className={showOrHideClassName(props)} onClick={() => props.startGame()}>Go...</button>       
      </div>
  )
}

const AnswerButton = (props) => {
  let btn;
switch (props.isAnswerCorrect){
  case true:
  btn =  
    <button onClick={props.nextQuestion} className="btn btn-success"></button>
    break;
  case false:
  btn =  
    <button onClick={props.incorrectAnswer} className="btn btn-danger"></button>
    break;
  default:
  btn =  
    <button onClick={props.calculateAnswer}>Go</button>
    break;
  }
  return btn;
}  

class Puzzle extends React.Component  {
  state = {
    givenAnswer: '',
      actualAnswer: null,
      isAnswerCorrect: null,
      button : this.answerButton,
      totalCorrectFirstTime: 0,
      failedAttemps: 0
  }

  resetInputs = () => {
    this.setState({
      givenAnswer: '',
      actualAnswer: null,
      isAnswerCorrect: null,
      button: this.answerButton
    })
  }
   
  className = () => {
    if (this.props.gameStarted === true) return "show";
    return "hide"    
  }
  calculateAnswer = () => { 
    this.setState({
      actualAnswer: this.props.firstNumber * this.props.secondNumber
    }, this.checkAnswer)
  }
  checkAnswer = () => { 
    this.setState(prevState => {
      if (prevState.actualAnswer == prevState.givenAnswer) {
         if (prevState.failedAttemps === 0) {
          return {
            totalCorrectFirstTime: prevState.totalCorrectFirstTime + 1,
            isAnswerCorrect: true
          }          
        } else {
        return { 
          isAnswerCorrect: true,
          failedAttemps: 0                       
         }}} else {
          if (prevState.failedAttemps > 2){
            this.ShowHintOrPass()
          }
          return {           
          isAnswerCorrect: false,
          failedAttemps: prevState.failedAttemps + 1        
        }
    }})
  }
  ShowHintOrPass = () => {
    // pop up modal asking if you want to reveal answer of try 3 more times
    // if more tries then hide modal, keep count of failed attemps as is 
    // when 6 failed attempts then reveal the answer and reset everythings
  }
  nextQuestion = () => {
    this.setState({
      givenAnswer: '',
      actualAnswer: null,
      isAnswerCorrect: null,
      button : this.answerButton
    }, this.props.startGame)
  }
  incorrectAnswer = () => {
    this.setState(prevState => ({
      givenAnswer: '',
      actualAnswer: null,
      isAnswerCorrect: null,
      button : this.answerButton
  }))
}
  
  render() {
  return (
    <div className={this.className()}>
      <h2 >{this.props.firstNumber} X {this.props.secondNumber} = 
          <input className='puzzleInput' type='number' value={this.state.givenAnswer} 
           // onClick={}
            onChange={(event) => this.setState({ givenAnswer: event.target.value})}/>
            <AnswerButton isAnswerCorrect={this.state.isAnswerCorrect}
                          calculateAnswer={this.calculateAnswer}
                          nextQuestion={this.nextQuestion}
                          incorrectAnswer={this.incorrectAnswer}/>
            </h2>            
    </div>
  )}
}
 
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
      <div>
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
