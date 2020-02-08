import React from "react";
import notes from "./assets/notes.js";
import "./App.scss";

const NoteButton = props => {
  console.log("props", props);
  return (
    <button onClick={event => new Audio(props.note.file).play()}>
      {props.note.name}
    </button>
  );
};

const App = () => {
  return (
    <div className="page">
      <h1>Create your react xylophone</h1>
      <div className="xylophone">
        {notes.map(note => (
          <NoteButton note={note} />
        ))}
      </div>
      {/* <button>Replay</button> */}
      {/* <button>Clear</button> */}
    </div>
  );
};

export default App;
