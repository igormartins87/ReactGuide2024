import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditing((editing)=>!editing)
    
  };

  return (
    <li>
      {!isEditing && <span className="player-name">{name}</span>}
      <span className="player-symbol">{symbol}</span>
      {isEditing && <input type="text" required value ={name} />}
      <button onClick={handleEditButtonClick}>{isEditing ?'Save':'Edit'}</button>
    </li>
  );
}
