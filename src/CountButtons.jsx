import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

const CountButtons = ({ setCount }) => {
  return (
    <div className="btn-container">
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="btn minus-btn"
      >
        <MinusIcon className="minus-btn-icon" />
      </button>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="btn plus-btn"
      >
        <PlusIcon className="plus-btn-icon" />
      </button>
    </div>
  );
};

export default CountButtons;
