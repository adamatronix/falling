import { Bodies, Body } from "matter-js";

class Bar {
  body:Body;
  type:String;

  constructor(type:string, width:number, height:number, image:string) {
    this.type = type;
    this.body = Bodies.rectangle(0, 0, width, height ,{
      render: {
          sprite: {
              xScale: 1,
              yScale: 1,
              texture: image
          }
      }
    });

  }
}

export default Bar;