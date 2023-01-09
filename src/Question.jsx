import React from "react"
import Option from "./Option"


export default function Question(props){
    const options = props.options.map((option) => {

        return <Option 
            key={option.id}
            qId={props.id}
            checked={props.checked}
            toggleOption={props.toggleOption}
            option={option}
        />
    })

    return (
        <div className="question-options--container">
            <h2 className="question">{props.question}</h2>
            <div className="options">
                {options}
            </div>
        </div>
    )
}
