import React, { useEffect, useState } from 'react';
import Answer from '../Answer/Answer';

const Question = () => {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        fetch('question-answers.json')
            .then(res => res.json())
            .then(data => setAnswers(data));
    }, [])
    return (
        <div className='container my-5'>
            {
                answers.map(answer => <Answer
                    key={answer.id}
                    questionAnswer={answer}
                ></Answer>)
            }
        </div>
    );
};

export default Question;