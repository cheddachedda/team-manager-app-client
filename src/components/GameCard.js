const GameCard = (props) => {
  const game = props.game;
  return (
    // TODO: Build this component nicer
    <div>
      This is a game card for { game.home } v { game.away }, Round: { game.round }, Venue: { game.venue }
    </div>
  )
};

export default GameCard;
