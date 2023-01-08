import React, {useState} from "react"
import Game from "./Game"
import StartPage from "./StartPage"
import blue from "./assets/blue.svg"
import yellow from "./assets/yellow.svg"

export default function App(){
    const [playGame, setPlayGame] = useState(false)

    function play(){
        setPlayGame(prevPlayGame => !prevPlayGame)
    }

    return (
        <main className="main">
            {!playGame && <StartPage play={play}/>}
            {playGame && <Game play={play}/>}
            <img className="bg--img bg--img--yellow" src={yellow} alt=""/>
            <img className="bg--img bg--img--blue" src={blue} alt=""/>
        </main>
    )
}