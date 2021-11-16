const GamesNavBar = (props) => {
  // Renders a single nav button
  const navButton = (round) => {
    // TODO: Create CSS classes for .selected and .current
    let className;
    if (props.selected === round) {
      className = 'selected';
    } else if (props.current === round) {
      className = 'current';
    }

    return (
      <button className={ className } onClick={ props.setSelected }>
        { round }
      </button>
    );
  }

  // TODO: Get an array of rounds from the backend.
  // And get it from props from Games.js
  const rounds = [ '1', '2', '3', '4', '5', '6', 'SF', 'GF' ];

  return (
    <div>
      { rounds.map(navButton) }
    </div>
  );
}

export default GamesNavBar;
