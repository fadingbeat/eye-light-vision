import * as React from 'react';
import { Surface } from '@progress/kendo-drawing';

import { Slide } from '@progress/kendo-react-animation';
import drawCircle from './draw-circle';

class RenderCircle extends React.Component {
      constructor(props) {
        super(props);
        this.state = { show: true };
    }

    surface;
    componentDidMount() {
      drawCircle(this.createSurface());
    }
    componentDidUpdate(){
      drawCircle(this.createSurface());
    }
    createSurface = () => {
        const element = document.querySelector("#surface");
        this.surface = Surface.create(element);
        return this.surface;
    }

    onClick = () => {
      this.setState({
          show: !this.state.show
      });
    }
    render() {
        const { show } = this.state;
        const children = show ? (<div id="surface" />) : null;
        return (
          <div>
            <dl>
              <dt>
                Animate:
              </dt>
              <dd>
                <button className="k-button" onClick={this.onClick}>Animate</button>
              </dd>
            </dl>

            <Slide>
              {children}
            </Slide>
          </div>
        );
    }
}

export default RenderCircle;