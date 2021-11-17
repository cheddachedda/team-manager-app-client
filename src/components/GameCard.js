const GameCard = (props) => {
  const game = props.game;
  return (
    // TODO: Build this component nicer
    <div>
      <div className="game-card">
        <div>{ game.home }</div><div> v </div><div>{ game.away }</div><div/>
        <div>Round: { game.round }</div><div> | </div><div>Venue: { game.venue }</div>
      </div>
    </div>
  )
};

export default GameCard;
