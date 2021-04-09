import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigDisplay from "./PigDisplay";

console.log(hogs)

function App() {
  return (
    <div className="App">
      <Nav />
      <PigDisplay hogs={hogs}/>
    </div>
  );
}

export default App;
