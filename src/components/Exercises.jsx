import React, { Component } from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import RenderCircle from './RenderCircle';

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
      <div>
        <button className="k-button" onClick={this.toggleDialog}>Follow the Light</button>
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

