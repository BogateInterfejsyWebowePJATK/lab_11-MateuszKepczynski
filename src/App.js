import './App.css';
import React from "react";
import RandomNumber from "./components/randomNumber";

function App() {
  return (
      <React.Fragment>
        <ul>
          <RandomNumber amount={10}/>
        </ul>
      </React.Fragment>
  );
}

export default App;
