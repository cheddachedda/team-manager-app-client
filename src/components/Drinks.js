import { useRef, useState } from 'react';

function Drinks(props){
  const [player1,setPlayer1] = useState("");
  const [rolling,setRolling] = useState(false);
  let drinkRef = [useRef(null)];
  const players = props.players

  const roll = () => {
    setRolling(true);
    setTimeout(() => {
      setRolling(false);
    }, 700);

    drinkRef.forEach((drink, i) => {
      const selected = triggerDrinkRotation(drink.current);
      setPlayer1(selected);
     });
  };

  const triggerDrinkRotation = ref => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = Math.floor(
      Math.random() * players.length
    );
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return players[randomOption];
  };

  return (
      <div className='drinks-slot-machine'>
      <h3> Who's buying drinks?</h3>
        <div className="slot">
          <section>
            <div className="drink-container" ref={drinkRef[0]}>
              { players &&
                players.map((player, i) => (
                <div key={i}>
                  <span>{player}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div
          className={!rolling ? "roll rolling" : "roll"}
          onClick={!rolling && roll}
          disabled={rolling}>
          {rolling ? "Rolling..." : "ROLL"}
        </div>
      </div>
    );
};

export default Drinks;
