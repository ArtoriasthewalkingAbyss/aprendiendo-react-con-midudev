import './App.css'
import { useState } from 'react'
import { TicTacToe } from './components/tic-tac-toe/TicTacToe.jsx'
import GameItem from './components/GameItem.jsx'

function App () {
  const games = [{
    name: 'Tic Tac Toe',
    image: 'https://images.unsplash.com/photo-1608111283390-2e333b9b279c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    content: <TicTacToe />
  }]

  const [selectedGame, setSelectedGame] = useState(null)
  const [menuVisible, setMenuVisible] = useState(true)

  const handleGameClick = (game) => {
    setSelectedGame(game)
    setMenuVisible(false)
  }

  return (
    <div>
      {selectedGame
        ? (
            selectedGame.content
          )
        : (
          <div className='GameMenu'>
            {menuVisible &&
              games.map((game) => (
                <GameItem
                  key={game.name}
                  name={game.name}
                  image={game.image}
                  handleGameClick={handleGameClick}
                  game={game}
                />
              ))}
          </div>
          )}
    </div>
  )
}

export default App
