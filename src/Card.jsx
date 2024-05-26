import { useState } from 'react';
import Count from './Count';
import ButtonContainer from './ButtonContainer';
import ResetButton from './ResetButton';
import Title from './Title';

const Card = () => {
  const [count, setCount] = useState(0);
  const isLocked = count === 5 ? true : false;

  return (
    <div className={`card ${isLocked ? 'card-locked' : ''}`}>
      <Title isLocked={isLocked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} isLocked={isLocked} />
    </div>
  );
};

export default Card;
