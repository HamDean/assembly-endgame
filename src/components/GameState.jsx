const GameState = ({ stateMessage, stateTag, bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className="game-state">
      <h2>{stateMessage}</h2>
      <p>{stateTag}</p>
    </div>
  );
};
export default GameState;
