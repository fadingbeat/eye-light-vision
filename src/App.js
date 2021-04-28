import '@progress/kendo-theme-default/dist/all.css';
import './App.scss';
import React from 'react';
import MainWindow from "./components/MainWindow";
import Exercises from './components/Exercises';
import RenderSurface from './components/RenderSurface';

function App() {
  return (
    <div className="App">
      <h1>Improve your eyesight and your vision!</h1>
      <MainWindow />
      <Exercises />
      <RenderSurface/>
    </div>
  );
}

export default App;
