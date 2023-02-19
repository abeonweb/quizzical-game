import React, {useState, useEffect, useContext} from "react"
import Question from "./components/Question"
import { nanoid } from "nanoid"
import { decode } from "he"
import { GameContext } from "./context/GameContext"


export default function Game(props){
    const state = useContext(GameContext);
    const [triviaData, setTriviaData] = useState([])
    const [gameData, setGameData] = useState({tally:0, checked:false})
        
    //get the trivia questions and update trivia data
    useEffect(()=>{
    fetch(`https://opentdb.com/api.php?amount=10&difficulty=${state.mode}`)
        .then(res => res.json())
        .then(data =>{
                const newTriviaObjs=[]
                const results = data.results
                //Insert incorrect options and correct option in random position in new array
                for(let i=0; i < results.length;i++){
                    let optionsArray = [...results[i].incorrect_answers, results[i].correct_answer].sort(() => (Math.random() > .5) ? 1 : -1)

                    //create an array of objects from each answer array
                    optionsArray= optionsArray.map(answer => ({ 
                            value: decode(answer), 
                            isHeld: false,
                            isCorrect: false,
                            isWrong: false,
                            id: nanoid()
                        })
                    )
                    //create new trivia question object
                    const triviaObj = {
                        question: decode(results[i].question),
                        correct: decode(results[i].correct_answer),
                        options: optionsArray,
                        id: nanoid()

                    }

                    newTriviaObjs.push(triviaObj)
                }
                setTriviaData(newTriviaObjs)
            })
    }, [])

    function toggleOption(oId, qId){
        setTriviaData(prevTriviaData => {
            return prevTriviaData.map(trivia=>{
                if(trivia.id === qId){
                    const tempOptions= trivia.options.map(
                        (option)=>{
                            if(option.id===oId){
                                //change clicked to true else false
                                return {...option, isHeld: !option.isHeld}
                            }
                            return {...option, isHeld: false}
                        }
                    )
                    return {...trivia, options: tempOptions}//update trivia options array
                } 
                return trivia
                    
            })
        })
    }
    
    function checkAnswers(){
        //copy triviaData manually and update with a new version
        //set the value of the correct selection
        const temp = new Array(...triviaData)
        let gameTally = 0
        temp.map(trivia => {
            trivia.options.map(option=>{

                if(option.value === trivia.correct){
                    option.isCorrect = true
                }
                if(option.isHeld && option.value === trivia.correct){
                    //increase tally
                    gameTally++
                }
                else if(option.isHeld && option.value != trivia.correct){
                    option.isWrong = true
                }
            })

        })
        setTriviaData(temp)
        setGameData({tally:gameTally, checked:true})
    }

    const questions = triviaData.map((trivia) => (
        <Question 
            key={trivia.id} 
            id={trivia.id} 
            correct={trivia.correct} 
            question={trivia.question} 
            options={trivia.options} 
            toggleOption={toggleOption}
            checked={gameData.checked}
        />
    ))

    return (
        <div>
            <div className="game-questions--container">
                {questions}
            </div>
            <div className="btn--container">
                {triviaData.length>0 && !gameData.checked && 
                    <button className="btn btn--check" onClick={checkAnswers}>Check answers</button>
                }
                {gameData.checked && 
                    <div className="play-again">
                        <span className="result">You scored {gameData.tally}/{triviaData.length} correct answers</span>
                        <button className="btn btn--game" onClick={props.play}>Play again</button>
                    </div>
                }
            </div>
        </div>
    )
}