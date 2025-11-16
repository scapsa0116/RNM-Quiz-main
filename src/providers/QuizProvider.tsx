import { PropsWithChildren } from "react"
import { createContext } from 'react';
import { useState } from "react";

export const QuizContext = createContext({});

export default function QuizContextProvider ({children}: PropsWithChildren){
    const [questionIndex, setQuestionIndex] = useState(0)

    const question = questions[questionIndex];


    return(
        <QuizContext.Provider value = {{question}}>
        <>{children}</>
        </QuizContext.Provider>


        
    )
}