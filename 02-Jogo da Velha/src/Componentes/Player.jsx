import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName,setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditing((editing)=>!editing)
    
  };

  function  handleChange (event){
    setPlayerName(event.target.value);
  }

  return (
    <li>
      {!isEditing && <span className="player-name">{playerName}</span>}
      <span className="player-symbol">{symbol}</span>
      {isEditing && <input type="text" required value={playerName} onChange={handleChange} />}
      <button onClick={handleEditButtonClick}>{isEditing ?'Save':'Edit'}</button>
    </li>
  );
}
