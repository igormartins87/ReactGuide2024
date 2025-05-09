import { useState } from "react";

import QUESTION  from "../questions";

import QuestionTimer from "./QuestionTimer";

import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz(){
    

    const[userAnswers, setUserAnswers]=useState([]);

    const activeQuestionIndex = userAnswers.length;

    

    const quizIsComplete = activeQuestionIndex === QUESTION.length; // Verifica se terminou o questionario 
   

    function handleSelectAnswer(selectAnswer){
        setUserAnswers((prevUserAnswer)=>{
            return[...prevUserAnswer, selectAnswer];
        });
    }

    if(quizIsComplete){
        return <div id="summary">
            <img src={quizCompleteImg} alt="" />
            <h2>Missão Cumprida!!</h2>
        </div>
    }

   
    const shuffledAnswers = [...QUESTION[activeQuestionIndex].answers];


    shuffledAnswers.sort(()=> Math.random() - 0.5);

    
    return(
    <div id="quiz">
         <div id="question">
         <QuestionTimer timeout={10000} onTimeout={()=>handleSelectAnswer(null)} />
        <h2>{QUESTION[activeQuestionIndex].text}</h2> 
        <ul id="answers">
            {shuffledAnswers.map((answer)=>(
                <li key={answer} className="answer">
                    <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>

                </li>
            ))}
        </ul>
    </div>
   
    </div>

    );
   
}