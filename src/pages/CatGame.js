import React, { useState, useEffect } from 'react';
import SingleCard from '../components/SingleCard';
import '../App.css'

const cardsArray = [
  { src: '/images/cool-cat.gif', matched: false},
  { src: '/images/falling-cat.gif', matched: false},
  { src: '/images/jumping-cat.gif', matched: false},
  { src: '/images/pirate-cat.gif', matched: false},
  { src: '/images/sleeping-cat.gif', matched: false},
  { src: '/images/tail-cat.gif', matched: false}
];

function CatGame() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardsArray, ...cardsArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random() }))
    setCards(shuffledCards)
    setTurns(0);
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card;
            }
          })
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  }

  return(
    <div className='Board'>
      <h1>Meow-Meow-Meow</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}/>
        ))}
      </div>
    </div>
  );

}

export default CatGame;
