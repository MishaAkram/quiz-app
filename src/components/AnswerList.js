import React from 'react'
import Answers from './Answer'

function AnswerList(props) {
    const options =[];
    for (let i=0; i<props.dataSet.options.length; i++){
        options.push(<Answers choice={i} handleClick={props.handleClick} answer={props.dataSet.options[i]} />);
    }

    return (
        <div>
            {options}
        </div>
    )
}

export default AnswerList
