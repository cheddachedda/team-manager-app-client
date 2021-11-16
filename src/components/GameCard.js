const GameCard = (props) => {
  return (
    <div>
      This is a game card for { props.game.home } v { props.game.away }
    </div>
  )
};

export default GameCard;
