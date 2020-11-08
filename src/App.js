import React from "react";

function App() {
  const date = new Date();
  return <div>{date.toDateString()}</div>;
}

export default App;
