const GameCard = (props) => {
  const game = props.game;
  return (
    <div className="game-card">
      <div><b>{ game.home }</b></div>
      <div> { game.home_score } v { game.away_score } </div>
      <div><b>{ game.away }</b>
      </div><div/>
      <div>Round: { game.round_no }</div><div> | </div><div>Venue: { game.venue }</div>
    </div>
  )
};

export default GameCard;
