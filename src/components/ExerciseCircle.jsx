import React, { Component } from 'react';
import { FloatingActionButton} from "@progress/kendo-react-buttons";
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
        <FloatingActionButton 
          onClick={this.toggleDialog}
          align={{
            horizontal: "center",
            vertical: "middle",
          }}
          alignOffset={{
            y: -195,
            x: -195,
          }}
          shape={"circle"}
          size={"large"}
          text="R"
          >
            Follow the Light
          </FloatingActionButton>
        {this.state.visible && 
        <Window title={"Trace the red circle with your eyes."} 
          onClose={this.toggleDialog} 
          stage={this.state.windowStage} 
          resizable={this.state.isResizable} 
        >
          <RenderCircle/>
        </Window>}
      </div>
    );
  }
}

export default Exercises;

