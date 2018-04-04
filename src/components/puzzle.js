import React from 'react';
import ReactDOM from 'react-dom';
// import logo from '../logo.svg';
// import _ from 'lodash';
// import {
//   Container,
//   Row,
//   Col,
//   Button
// } from 'reactstrap';
// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.css';

const AnswerButton = (props) => {
  let btn;
  switch (props.isAnswerCorrect){
    case true:
      btn =  <button onClick={props.nextQuestion} className="btn btn-success"></button>
      break;
    case false:
      btn =  <button onClick={props.incorrectAnswer} className="btn btn-danger"></button>
      break;
    default:
      btn =  <button onClick={props.calculateAnswer}>Go</button>
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
      this.resetInputs();
      this.props.startGame;
    }
    incorrectAnswer = () => {
      this.resetInputs();
    }
    
    render() {
    return (
      <div className={this.props.gameStarted ? 'show' : 'hide'}>
        <p>{this.props.firstNumber} X {this.props.secondNumber} = </p> 
            <input className='puzzleInput' type='number' value={this.state.givenAnswer} 
              onChange={(event) => this.setState({ givenAnswer: event.target.value})}/>
              <AnswerButton isAnswerCorrect={this.state.isAnswerCorrect}
                            calculateAnswer={this.calculateAnswer}
                            nextQuestion={this.nextQuestion}
                            incorrectAnswer={this.incorrectAnswer}/>
      </div>
    )}
  }

  export default Puzzle;