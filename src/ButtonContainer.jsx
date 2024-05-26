import CountButton from './CountButton';

const ButtonContainer = ({ setCount }) => {
  return (
    <div className="btn-container">
      <CountButton type="minus" setCount={setCount} />
      <CountButton type="plus" setCount={setCount} />
    </div>
  );
};

export default ButtonContainer;
