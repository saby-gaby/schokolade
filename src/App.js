import "./App.css";
import { useState } from 'react';

function App() {

  const [bite, setBite] = useState(false)
  
  function startAgain() {
    setBite(false)
  }

  function biteMe() {
    setBite(true)
    setTimeout(startAgain, 2000)
  }

  console.log(bite);

  return (
    <div className="App">
      <div className="schokolade">
        <div className="shoko">
          <div className="teil"></div>
          <div className="teil"></div>
          <div className="teil"></div>
          <div className="teil"></div>
        </div>
        <div className="box">
          <div className={bite ? "play biss" : "biss"}>
            <div className={bite ? "play bissteil" : "bissteil"}></div>
            <div className={bite ? "play bissteil" : "bissteil"}></div>
          </div>
        </div>
      </div>
      <button onClick={biteMe}>Biss!</button>
    </div>
  );
}

export default App;
