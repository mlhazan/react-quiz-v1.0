import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';
 
class Scorebox extends Component{
   
    render(){
        return(
            <div class="well">
                Question {this.props.current} out of {this.props.questions.length}
                <span class = "pull-right"><strong>Score : {this.props.score}</strong></span>
            </div>
        )
    }
}
export default Scorebox

