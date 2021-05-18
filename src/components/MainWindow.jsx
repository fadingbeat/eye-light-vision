import React, { Component } from 'react';
import cover from "../images/cover.webp";
import "../styles/MainWindow.scss";
import { Button } from "@progress/kendo-react-buttons";
import { Window } from "@progress/kendo-react-dialogs";
// import Exercises from "./Exercises";

class MainWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: true,
        isReziable: false,
    };
  }
  render() {
    return (
      <div className="main-container">
        {this.state.visible && 
        <Window title="Eye treatment with color therapy" isResizable={true} initialWidth={1024} initialHeight={768}></Window>
        }
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