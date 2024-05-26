const Title = ({ isLocked }) => {
  return (
    <h1 className="title">
      {isLocked ? (
        <span>
          Limit! Buy <b>Pro</b> for &gt;5
        </span>
      ) : (
        'Counter'
      )}
    </h1>
  );
};

export default Title;
