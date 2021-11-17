const GameCard = (props) => {
  const game = props.game;
  return (
    // TODO: Build this component nicer
    <div>
      <div className="game-card">
        <div><b>{ game.home }</b></div><div> {/* game.home_score */}01 v 23{ /*game.away_score*/ } </div><div><b>{ game.away }</b></div><div/>
        <div>Round: { game.round }</div><div> | </div><div>Venue: { game.venue }</div>
      </div>
    </div>
  )
};

export default GameCard;
