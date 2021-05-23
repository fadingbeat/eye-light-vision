import React, { Component } from 'react';
import { FloatingActionButton } from "@progress/kendo-react-buttons";
import { Window } from '@progress/kendo-react-dialogs';
import "../styles/MainExercise.scss";

class Green extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false,
        isResizable: false,
        windowStage: "FULLSCREEN"
    };
  }

  toggleDialog = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }

  setFullscreen = () => {
    this.setState({
        windowStage: "FULLSCREEN"
    });
  }

  render() {
    return (
      <div id="exercise-green" className="second-exercise">
        <FloatingActionButton 
        primary={true} 
        onClick={this.toggleDialog}
        align={{
            horizontal: "center",
            vertical: "middle",
          }}
        alignOffset={{
          y: -195,
          x: 195,
        }} shape={"circle"}
        size={"large"}
        text="G"
        themeColor={'success'}
          ></FloatingActionButton>
        {this.state.visible && 
        <Window
          onClose={this.toggleDialog} 
          stage={this.state.windowStage} 
          resizable={this.state.isResizable} >
          <h1>Yet To Be Done</h1>
        </Window>}
      </div>
    );
  }
}

export default Green;

