import { Circle, geometry } from '@progress/kendo-drawing';
const { Circle: GeomCircle } = geometry;

export default function drawCircle(surface) {
  const geometry = new GeomCircle([ 150, 150  ], 80);
    const circle = new Circle(geometry, {
        stroke: { color: "red", width: 1 },
        fill: {color: "red"},
    });

  surface.draw(circle);
}




