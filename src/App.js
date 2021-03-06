import '@progress/kendo-theme-default/dist/all.css';
import './App.scss';
import React from 'react';
import MainWindow from "./components/MainWindow";

function App() {
  return (
    <div className="App">
      <h1>Improve your eyesight and your vision!</h1>
      <MainWindow />
    </div>
  );
}

export default App;
