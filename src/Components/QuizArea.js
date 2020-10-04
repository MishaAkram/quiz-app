import React from 'react'
import UserGreeting from "./UserGreeting";
import AnswerList from "./AnswerList";
import Question from "./Question";
function QuizArea() {
    return (
        <div>
           <h2>QuizArea</h2> 
           <Question/>
           <AnswerList/>
           <UserGreeting/>
        </div>
    )
}

export default QuizArea;
