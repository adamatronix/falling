import { Bodies, Body } from "matter-js";
import detoxImage from './assets/detox.jpg';

class Bar {
  body:Body;

  constructor(x:number,y:number) {

    this.body = Bodies.rectangle(x, y, 600, 154 ,{
      render: {
          sprite: {
              xScale: 1,
              yScale: 1,
              texture: detoxImage
          }
      }
    });

  }
}

export default Bar;