import Card from "./components/card";
import Score from "./components/score";
import { useState } from "react";
import "./index.css";

function App() {
      const [points, setPoints] = useState(0);

  return (
    <div >
      <h1>Memory Card Game</h1>

      <Score points={points} />
      <Card points={points} setPoints={setPoints} /> 
    </div>
  )
}

export default App
