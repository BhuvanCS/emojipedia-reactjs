import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function mapData(entry) {
  return (
    <Card
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(mapData)}</dl>
    </div>
  );
}

export default App;
