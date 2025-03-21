import { useState } from "react";

import QUESTION  from "../questions";

export default function Quiz(){
    

    const[userAnswers, setUserAnswers]=useState([]);

    const activeQuestionIndex = userAnswers.length;

    function handleSelectAnswer(selectAnswer){
        setUserAnswers((prevUserAnswer)=>{
            return[...prevUserAnswer, selectAnswer];
        });
    }

    
    return(
    <div id="question">
        <h2>{QUESTION[activeQuestionIndex].text}</h2> 
        <ul id="answers">
            {QUESTION[activeQuestionIndex].answers.map((answer)=>(
                <li key={answer} className="answer">

                    <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>

                </li>
            ))}
        </ul>
    </div>
    );
}