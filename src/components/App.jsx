import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map((entry) => {
            <Card
              key={entry.id}
              emoji={entry.emoji}
              name={entry.name}
              meaning={entry.meaning}
            />
      })}</dl>
    </div>
  );
}

export default App;
