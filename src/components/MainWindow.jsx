import React, { Component } from 'react';
import cover from "../images/cover.webp";
import "../styles/MainWindow.scss";
import { Button } from "@progress/kendo-react-buttons";
// import Exercises from "./Exercises";

class MainWindow extends Component {
  render() {
    return (
      <div className="main-container">
        <img src={cover} alt="Illustration of an eye lifting weights"/>
        <div className="btn-wrapper">
          <Button primary={true}>Exercises</Button>
          <Button primary={true}>Facts</Button>
          <Button primary={true}>Settings</Button>
          <Button primary={true}>Help</Button>
        </div>
      </div>
    );
  }
}

export default MainWindow;