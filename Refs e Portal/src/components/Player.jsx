import { useState, useRef } from "react";
export default function Player() {
  const PlayName = useRef();
  const [enteredPlayer , SetEnteredPlayer] = useState(null);


function handleClick(){
  SetEnteredPlayer(PlayName.current.value);
  PlayName.current.value ='';

}
  return (
    <section id="player">
      <h2>BemVindo { enteredPlayer ?? 'unknown entity'}</h2>
      <p>
        <input ref={PlayName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
