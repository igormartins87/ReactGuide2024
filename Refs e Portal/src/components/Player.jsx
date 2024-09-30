import { useState } from "react";
export default function Player() {
  const [enteredPlayer , SetEnteredPlayer] = useState(null);
  const [submitted, setSubimiteed] = useState(false);

  function handleChange(event){
    setSubimiteed(false)
    SetEnteredPlayer(event.target.value);
  }

function handleClick(){
  setSubimiteed(true);

}
  return (
    <section id="player">
      <h2>BemVindo { submitted ? enteredPlayer: 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayer} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
