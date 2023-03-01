import confetti from 'canvas-confetti'
import { useState } from 'react'
import './App.css'
import Square from "./components/Square.jsx";
import WinerModal from './components/WinnerModal.jsx';
import { TURNS } from "./constants.js";
import { checkWinnerFrom, checkEndGameFrom } from './logic/board.js';

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board")
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn")
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
  }

  const updateBoard = (index) => {
    if (board[index] || winner)return
    
    const newBoard = [...board]
    
    newBoard[index] = turn
    
    setBoard(newBoard)
    
    const newturn = turn === TURNS.X ? TURNS.O : TURNS.X
    
    setTurn(newturn)

    window.localStorage.setItem("board", JSON.stringify(newBoard))
    window.localStorage.setItem("turn", newturn)


    const newWinner = checkWinnerFrom(newBoard)
    
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGameFrom(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>tic tac toe</h1>
      
      <button onClick={resetGame}>Reset del juego</button>

      <section className='game'>
        {
          board.map((square, index) => {
            return(
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      
      <WinerModal resetGame={resetGame} winner={winner}/>
      
    </main>
  )
}

export default App
