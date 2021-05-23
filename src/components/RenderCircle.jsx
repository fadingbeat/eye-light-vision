import  React, { createRef } from 'react';
import { Surface } from '@progress/kendo-drawing';

import {  Slide } from '@progress/kendo-react-animation';
import drawCircle from './draw-circle';
import { Button } from '@progress/kendo-react-buttons';

class RenderCircle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { show: true, direction: "left"};
      this.surfaceRef = createRef()
    }

    surface;
    componentDidMount() {
      drawCircle(this.createSurface());
      this.setState({
        show: !this.state.show,
      });
      this.onTimeout();
      window.addEventListener('load', this.handleIcon());
    }
  
    componentDidUpdate() {
      drawCircle(this.createSurface());
    }

    handleIcon = () => {
      let icon = document.getElementsByClassName("k-icon k-i-close");
      icon[2].className = "k-icon k-i-undo";
    }

    createSurface = () => {
      const element = document.querySelector("#surface");
      this.surface = Surface.create(element);
      return this.surface;
    }

    onTimeout = () => {
      let x;
      let timesRun = 0;
      let interval = setInterval(() => {
        let myDirection = ['left', 'right']
        timesRun += 1;
        for (x of myDirection) {
          if(timesRun === 60){
            clearInterval(interval);
        }
          let direction = x;
          this.setState({
            show: !this.state.show,
            direction: direction,
          });
          break;
        }
      }, 15000);
    }

    onClickRed = () => {
      document.querySelector("#surface circle").setAttribute("stroke", "red");
      document.querySelector("#surface circle").setAttribute("fill", "red");
    }
    onClickBlue = () => {
      document.querySelector("#surface circle").setAttribute("stroke", "blue");
      document.querySelector("#surface circle").setAttribute("fill", "blue");
    }
    onClickGreen = () => {
      document.querySelector("#surface circle").setAttribute("stroke", "green");
      document.querySelector("#surface circle").setAttribute("fill", "green");
    }

    render() {
        const { show, direction } = this.state;
        const children = show ? (<div id="surface" ref={this.surfaceRef}/>) : null;
        return (
          <div>
            {/* <dt>
              Slide: {direction}
            </dt> */}
            <dt>
              <Button id="btn_r" onClick={this.onClickRed}>R</Button>
              <Button id="btn_g" onClick={this.onClickGreen}>G</Button>
              <Button id="btn_b" onClick={this.onClickBlue}>B</Button>
            </dt>
            <Slide  direction={direction} transitionEnterDuration={17000}
              transitionExitDuration={20000}>
              {children}
            </Slide>
          </div>
        );
    }
}

export default RenderCircle;