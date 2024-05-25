import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

const CountButtons = () => {
  return (
    <div className="btn-container">
      <button className="btn minus-btn">
        <MinusIcon className="minus-btn-icon" />
      </button>
      <button className="btn plus-btn">
        <PlusIcon className="plus-btn-icon" />
      </button>
    </div>
  );
};

export default CountButtons;
