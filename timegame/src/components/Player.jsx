import { useRef, useState } from "react";
import "../index.css"

export default function Player() {
    const [name , setName] = useState("");
    const playerName = useRef();

    const onButtonClick = () => {
        setName(playerName.current.value);
        playerName.current.value = ""; // this is against dom react rules...
    }

    return (
      <section id="player">
        <h2>Welcome {name ? name : "Unknown stranger"}</h2>
        <p>
          <input ref={playerName} type="text" />
          <button onClick={onButtonClick} >Set Name</button>
        </p>
      </section>
    );
  }
  