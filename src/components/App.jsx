import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions:[
                {
                    id: 1,
                    text:'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text:'Hasan'
                        },
                        {
                            id: 'b',
                            text:'Brandon'
                        },
                        {
                            id: 'c',
                            text:'Robert'
                        }
                    ],
                    correct: 'a'
                },
                {
                    id: 2,
                    text:'What was your first pet?',
                    choices: [
                        {
                            id: 'a',
                            text:'Dog'
                        },
                        {
                            id: 'b',
                            text:'Cat'
                        },
                        {
                            id: 'c',
                            text:'Donkey'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 3,
                    text:'What do you like to eat?',
                    choices: [
                        {
                            id: 'a',
                            text:'Beef'
                        },
                        {
                            id: 'b',
                            text:'Chicken'
                        },
                        {
                            id: 'c',
                            text:'Goat'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 4,
                    text:'Which country is the best in the world?',
                    choices: [
                        {
                            id: 'a',
                            text:'Canada'
                        },
                        {
                            id: 'b',
                            text:'England'
                        },
                        {
                            id: 'c',
                            text:'Australia'
                        }
                    ],
                    correct: 'a'
                }
            ],
            score: 0,
            current: 1
        }
    }
    setCurrent(current){
        this.setState({current});
    }

    setScore(score){
        this.setState({score});
    }
    render(){
        if(this.state.current > this.state.questions.length){
            var scorebox = '';
            var results = <Results {...this.state}/>
        }else{
            var scorebox = <Scorebox {...this.state}/>
            var results = '';
        }
        return(
            <div>
                {scorebox}
                <QuestionList {...this.state} setCurrent ={this.setCurrent.bind(this)} setScore = {this.setScore.bind(this)} />  
                {results}
            </div>
        )
    }
}
export default App

//5:30