function GameItem (props) {
  return (
    <div onClick={() => props.handleGameClick(props.game)}>
      <h3>{props.name}</h3>
    </div>
  )
}

export default GameItem
