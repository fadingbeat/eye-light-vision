import React, { Component } from 'react';
import cover from "../images/cover.webp";
import "../styles/MainWindow.scss";
import { Button } from "@progress/kendo-react-buttons";
import { Window } from "@progress/kendo-react-dialogs";
import WindowExercises from './WindowExercises';


class MainWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: true,
        isReziable: false,
        windowStage: "FULLSCREEN"
    };
  }

  componentDidMount = () => {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad = () => {
    let fragment = document.createDocumentFragment();
    fragment.appendChild(document.getElementById('btn_middle'));
    document.getElementById('btn_list').prepend(fragment);
  }

  toggleDialog = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }
  
  render() {
    return (
      <div className="main-container">
        {this.state.visible && 
          <Window
            title="Eye treatment with color therapy" 
            stage={this.state.windowStage} 
            resizable={this.state.isResizable} >
            <img src={cover} alt="Illustration of an eye lifting weights"/>
            <div id="btn_list" className="btn-wrapper">
              <Button primary={true}>Settings</Button>
              <Button primary={true}>Help</Button>
            </div>
            <WindowExercises/>
          </Window>
        }
      </div>
    );
  }
}

export default MainWindow;