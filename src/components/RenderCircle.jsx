import * as React from 'react';
import { Surface } from '@progress/kendo-drawing';

import {  Slide } from '@progress/kendo-react-animation';
import drawCircle from './draw-circle';

class RenderCircle extends React.Component {
      constructor(props) {
        super(props);
        this.state = { show: true, direction: "left" };
    }

    surface;
    componentDidMount() {
      drawCircle(this.createSurface());
      this.setState({
        show: !this.state.show,
      });
    }

    createSurface = () => {
        const element = document.querySelector("#surface");
        this.surface = Surface.create(element);
        return this.surface;
    }

    reachedEnd = () => {
      let dialogW = document.querySelector(".k-content.k-window-content").clientWidth-400;
      let circleX = document.querySelector("#surface circle").getBoundingClientRect().x;
      if (circleX === dialogW) {
        this.setState({direction: "down"})
      }
    }
    onClick = () => {
      this.setState({
          show: !this.state.show,
      });
    }

    onChange = (e) => {
      this.setState({
        show: true,
        direction: e.target.value
      })
  }

    render() {
        const { show, direction } = this.state;
        const children = show ? (<div id="surface" />) : null;
        return (
          <div>
            <dt>
              Slide: {direction}
            </dt>
            <dt>
              <button onClick={this.onClick}>Animate</button>
              <button name="direction" value="up" defaultValue={direction === "up"}
                onClick={this.onChange}>Top
              </button>
              <button name="direction" value="down" defaultValue={direction === "down"}
                onClick={this.onChange}>Down
              </button>
              <button name="direction" value="right" defaultValue={direction === "right"}
                onClick={this.onChange}>Right
              </button>

            </dt>
            <Slide direction={direction} transitionEnterDuration={500}
              transitionExitDuration={10000}>
              {children}
            </Slide>
          </div>
        );
    }
}

export default RenderCircle;