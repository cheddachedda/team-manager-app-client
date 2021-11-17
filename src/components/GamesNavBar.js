import '../css/GamesNavBar.css'

const GamesNavBar = (props) => {
  // Renders a single nav button
  const navButton = (round) => {
    // TODO: Create CSS classes for .selected and .current
    let className;
    if (props.selected === round && props.current === round) {
      className = 'current-selected';
    } else if (props.selected === round) {
      className = 'selected';
    }else if (props.current === round) {
      className = 'current';
    }


    return (
      <button
        key={ round }
        className={ className }
        name={ round }
        onClick={ selectRound }
      >
        { round }
      </button>
    );
  }

  const selectRound = (event) => {
    event.preventDefault();
    props.selectRound(event.target.name);
  }

  // TODO: Get an array of rounds from the backend.
  // And get it from props from Games.js
  const rounds = [ '1', '2', '3', '4', '5', '6', 'SF', 'GF' ];

  return (
    <div>
      {  rounds.map(navButton) }
    </div>
  );
}

export default GamesNavBar;
