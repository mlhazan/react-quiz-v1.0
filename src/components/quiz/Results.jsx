import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';
 
class Results extends Component{
    tryAgain(e) {
        e.preventDefault();
       
      }
    render(){
        var percent = (this.props.score / this.props.questions.length * 100);
        if(percent > 80){
            var message = 'Excellent Work';
        }else if(percent < 80 && percent > 60){
            var message = 'You Passed';
        }else{
            var message = 'Good luck for the next time';
        }
        return(
            <div class="well">
                <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
                <h1>{percent}% - {message}</h1>
                <hr/> 
                <button class="btn btn-success" onclick={this.tryAgain}><a href="/app">Take Again</a></button>
            </div>
        )
    }
}
export default Results

