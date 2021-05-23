import React, { Component } from 'react';
import { Button } from "@progress/kendo-react-buttons";
import { Window } from "@progress/kendo-react-dialogs";
import ExerciseCircle from "./ExerciseCircle";
import Green from './ExerciseGreen';
import Blue from './ExerciseBlue';

class WindowExercises extends Component {
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
  render() {
    return (
      <div className="list-exercises">
        <Button primary={true} id="btn_middle" 
         onClick={this.toggleDialog}>Exercises</Button>
        {this.state.visible &&
          <Window
            onClose={this.toggleDialog}
            stage={this.state.windowStage} 
            resizable={this.state.isResizable}>
          <ExerciseCircle />
          <Green/>
          <Blue/>
          </Window>
        }
      </div>
      
    );
  }
}

export default WindowExercises;