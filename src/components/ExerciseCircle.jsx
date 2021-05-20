import React, { Component } from 'react';
import { Button } from "@progress/kendo-react-buttons";
import { Window } from '@progress/kendo-react-dialogs';
import RenderCircle from './RenderCircle';
import "../styles/MainExercise.scss";

class Exercises extends Component {
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
      <div className="main-exercise">
        <Button primary={true} onClick={this.toggleDialog}>Follow the Light</Button>
        {this.state.visible && 
        <Window title={"Lights - Trace the red circle with your eyes."} 
          onClose={this.toggleDialog} 
          stage={this.state.windowStage} 
          resizable={this.state.isResizable} 
          minWidth={1024} 
          minHeight={768} 
          initialWidth={1024} 
          initialHeight={768}>
          <RenderCircle/>
        </Window>}
      </div>
    );
  }
}

export default Exercises;

