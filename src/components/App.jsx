import React from "react";
import Emojipedia from "../emojipedia";
import Term from "./term";

function createTerm(term) {
  return <Term emoji={term.emoji} name={term.name} meaning={term.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojipedia.map(createTerm)}</dl>
    </div>
  );
}

export default App;
