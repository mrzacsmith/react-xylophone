import React, { useState } from "react";
import notes from "./assets/notes.js";
import "./App.scss";

const NoteButton = props => {
  console.log("props", props);
  return (
    <button
      style={{ height: 200 - 15 * props.index + "px" }}
      className="note-button"
      onClick={() => {
        props.setPlayedNotes([...props.playedNotes, props.note]);
        new Audio(props.note.file).play();
      }}
    >
      {props.note.name}
    </button>
  );
};

const App = () => {
  const [playedNotes, setPlayedNotes] = useState([]);
  return (
    <div className="page">
      <h1>Create your react xylophone</h1>
      <div className="xylophone">
        {notes.map((note, index) => (
          <NoteButton
            index={index}
            playedNotes={playedNotes}
            setPlayedNotes={setPlayedNotes}
            key={note.name}
            note={note}
          />
        ))}
      </div>
      {JSON.stringify(playedNotes)}
      {/* <button>Replay</button> */}
      {/* <button>Clear</button> */}
    </div>
  );
};

export default App;
