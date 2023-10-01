import './App.css'
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';

function App() {
  const {fact, refreshFact} = useCatFact();
  const {imageUrl} = useCatImage({fact})

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`imagen aleatoria conseguida utilizando la primera palabra de ${fact}`}/>}
    </main>
  )
}

export default App
