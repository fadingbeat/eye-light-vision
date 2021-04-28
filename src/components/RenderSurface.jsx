import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Surface } from '@progress/kendo-drawing';

import drawCircle from './DrawCircle';

class RenderSurface extends React.Component {
  surface;
  componentDidMount() {
    drawCircle(this.createSurface());
  }
  createSurface = () => {
    const element = ReactDOM.findDOMNode(this);
    this.surface = Surface.create(element);
    return this.surface;
  }
  render() {
    return (<div id="surface" />);
  }
}
export default RenderSurface;