import React from 'react'
import Questions from './Questions'
import AnswersList from './AnswerList'
import UserGreeting from './UserGreeting'
import Failed from './Failed'

function QuizArea(props) {
    if (props.isFinished && props.incorrect===2){
        return <Failed />
    }
    else if (props.isFinished && props.correct===2){
        return <UserGreeting />
    }
    return (
        <div>
            <Questions dataSet={props.dataSet} />
            <AnswersList handleClick={props.handleClick} dataSet={props.dataSet}/>
            
        </div>
    )
}

export default QuizArea;
