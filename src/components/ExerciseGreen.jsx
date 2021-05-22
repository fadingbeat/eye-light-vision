import React, { Component } from 'react';
import { FloatingActionButton } from "@progress/kendo-react-buttons";
import { Window } from '@progress/kendo-react-dialogs';
import "../styles/MainExercise.scss";
import {ZimFrame} from './zim/greenRender';

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
      <div className="second-exercise">
        <FloatingActionButton 
        primary={true} onClick={this.toggleDialog}
        align={{
            horizontal: "center",
            vertical: "middle",
          }}
          alignOffset={{
            x: 195,
          }} shape={"circle"}
          size={"large"}
          text="G"
          themeColor={'success'}
          >Exercise green</FloatingActionButton>
        {this.state.visible && 
        <Window id="exercise-green" ref={this.secondRef} title={"Rectangle"} 
          onClose={this.toggleDialog} 
          stage={this.state.windowStage} 
          resizable={this.state.isResizable} >
          {ZimFrame}
        </Window>}
      </div>
    );
  }
}

export default Green;

