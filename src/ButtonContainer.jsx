import CountButton from './CountButton';

const ButtonContainer = ({ setCount, isLocked }) => {
  return (
    <div className="btn-container">
      <CountButton type="minus" setCount={setCount} isLocked={isLocked} />
      <CountButton type="plus" setCount={setCount} isLocked={isLocked} />
    </div>
  );
};

export default ButtonContainer;
