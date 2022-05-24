import React from 'react'
import './GameOver.css'

const GameOver = ({retry,score}) => {
  return (
    <div>
        
       <h1>Fim de Jogo</h1>
       <h2>Pontuação Final:<span>{score}</span> </h2>
       <button onClick={retry}>Reiniciar</button>   
    </div>
  )
}

export default GameOver