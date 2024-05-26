import { ReloadIcon } from '@radix-ui/react-icons';

const ResetButton = ({ setCount }) => {
  const handleClick = (event) => {
    setCount(0);

    event.currentTarget.blur();
  };

  return (
    <button onClick={handleClick} className="reset-btn">
      <ReloadIcon className="reset-btn-icon" />
    </button>
  );
};

export default ResetButton;
