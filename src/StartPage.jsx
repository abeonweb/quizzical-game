import React from "react"


export default function StartPage(props){
   

    return (
        <div className="start-page">
            <h1 className="start-page--title">quizzical</h1>
            <p className="start-page--tagline">Fun trivia game you can enjoy with friends!</p>
            <button className="btn btn--start" onClick={props.play}>Start quiz</button>
        </div>
    )
}