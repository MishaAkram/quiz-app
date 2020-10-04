import React, { Component } from 'react'
import DataSet from '../Api/DataSet'
import QuizArea from "./QuizArea";
import ScoreArea from "./ScoreArea";
class Questionaire extends Component {
    constructor(){
        super();
        this.state={
            current:0,
            dataSet:DataSet,
            correct:0,
            incorrect:0,
            isFinished:false
        }
    }
    render() {
        return (
            <div>
                <h1>JavaScript Quiz</h1>
           <QuizArea/>
           <ScoreArea/>     
            </div>
        )
    }
}

export default Questionaire;
