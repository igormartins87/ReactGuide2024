import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <li>
      {!isEditing && <span className="player-name">{name}</span>}
      <span className="player-symbol">{symbol}</span>
      {isEditing && <input type="text" />}
      <button onClick={handleEditButtonClick}>Editar</button>
    </li>
  );
}
