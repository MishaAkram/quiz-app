import React from 'react'
import TotalCorrect from "./TotalCorrect";
import TotalIncorrect from "./TotalIncorrect";
function ScoreArea() {
    return (
        <div>
            <h2>ScoreArea</h2>
            <TotalCorrect/>
            <TotalIncorrect/>
        </div>
    )
}

export default ScoreArea;
