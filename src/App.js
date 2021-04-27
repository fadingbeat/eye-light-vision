import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import lights from './components/lights';
// import green from './components/green';
function App() {
  return (
    <div className="App">
      <h1>Hello KendoReact!</h1>
      <Button primary={true} onClick="">
        Start animation
      </Button>
    </div>
  );
}

export default App;
