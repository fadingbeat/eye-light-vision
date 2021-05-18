import  React, { createRef } from 'react';
import { Surface } from '@progress/kendo-drawing';

import {  Slide } from '@progress/kendo-react-animation';
import drawCircle from './draw-circle';

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
    }
  
    componentDidUpdate() {
      drawCircle(this.createSurface());
    }

    createSurface = () => {
      const element = document.querySelector("#surface");
      this.surface = Surface.create(element);
      return this.surface;
    }

    onTimeout = () => {
      let x;
      window.setInterval(() => {
        this.surfaceRef.current.style.border = "4px solid purple";
        let myDirection = ['left', 'right']
        for (x of myDirection) {
          console.log(x);
          let direction = x;
          this.setState({
            show: !this.state.show,
            direction: direction,
          });
          break;
        }
      }, 15000);
    }

    onClick = () => {
      this.setState({
        show: !this.state.show,
      });
    }

    render() {
        const { show, direction } = this.state;
        const children = show ? (<div id="surface" ref={this.surfaceRef}/>) : null;
        return (
          <div>
            <dt>
              Slide: {direction}
            </dt>
            <dt>
              <button 
                onClick={this.onClick}>Animate
              </button>
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