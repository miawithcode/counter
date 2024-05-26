import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

const CountButton = ({ type, setCount, isLocked }) => {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === 'minus') {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button disabled={isLocked} onClick={handleClick} className="btn">
      {type === 'minus' ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
};
export default CountButton;
