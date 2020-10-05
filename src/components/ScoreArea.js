import React from 'react'
import TotalCorrect from './TotalCorrect'
import TotalIncorrect from './TotalIncorrect'

function ScoreArea(props) {
    return (
        <div className="ScoreWrapper">
            <TotalCorrect correct={props.correct}/>
            <TotalIncorrect incorrect={props.incorrect}/>
            
        </div>
    )
}

export default ScoreArea;
