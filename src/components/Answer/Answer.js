import React from 'react';

const Answer = ({ questionAnswer }) => {
    const { question, answer, id, collapseItem, dataBsTarget, className } = questionAnswer;
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id={id}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={dataBsTarget} aria-expanded="true" aria-controls={collapseItem}>
                        {question}
                    </button>
                </h2>
                <div id={collapseItem} className={className} aria-labelledby={id} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Answer;