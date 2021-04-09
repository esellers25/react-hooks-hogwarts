import React, {useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigDisplay from "./PigDisplay";
import NewPigForm from "./NewPigForm";

// console.log(hogs)

function App() {
  
  const [pigArray, setPigArray] = useState(hogs)

  function handleAddPig(pig){
    const newPigArray = [...pigArray, pig]
    setPigArray(newPigArray)
    console.log(newPigArray)
  }
    

  return (
    <div className="App">
      <Nav />
      <NewPigForm onAddPig={handleAddPig}/>
      <PigDisplay hogs={pigArray}/>
    </div>
  );
}

export default App;
