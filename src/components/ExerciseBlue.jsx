import React, { Component } from 'react';
import { FloatingActionButton } from "@progress/kendo-react-buttons";
import { Window } from '@progress/kendo-react-dialogs';
import "../styles/MainExercise.scss";

class Blue extends Component {
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
      <div id="exercise-blue" className="third-exercise">
        <FloatingActionButton 
        primary={true} onClick={this.toggleDialog}
        align={{
            horizontal: "center",
            vertical: "middle",
          }}
          alignOffset={{
            y: 195,
          }} shape={"square"}
          size={"large"}
          text="B"
          themeColor={'info'}
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

export default Blue;

