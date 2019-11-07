import React from "react";
import "./App.css";
import APODPanel from "./components/APODPanel"

function App() {
  return (
    <div className="App">
      <h1>NASA Picture of the Day</h1>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <APODPanel />
    </div>
  );
}

export default App;
