import React from 'react';

import './App.css';

function App() {
  return (
      <div className="App">
    <div className="navBar">

        <label className="d-flex column">
            Row:
            <input type="text" name="row" />
        </label>
        <p className="margin">x</p>
        <label className="d-flex column">
            Column:
            <input type="text" name="column" />
        </label>
        <input className="inputBtn " type="submit" value="Generate" />

   </div>
   </div>

  );
}

export default App;
