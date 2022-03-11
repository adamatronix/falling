import Matter from "matter-js";
import Bar from "./Bar";


class FallingStage {
  container: HTMLDivElement;
  world: Matter.World;
  bars: Array<Bar>;
  width: number;
  height: number;

  constructor(el: HTMLDivElement) {
    this.container = el;
    this.bars = [];

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;
    const MouseConstraint = Matter.MouseConstraint;
    const Mouse = Matter.Mouse;

    let width = this.container.clientWidth;
    let height = this.container.clientHeight;
    this.width = width;
    this.height = height;

    let engine = Engine.create();
    let world = engine.world;
    this.world = world;
    let render = Render.create({
      element: this.container,
      engine: engine,
      options: {
        width: width,
        height: height,
        showAngleIndicator: false,
        wireframes: false,
        showBounds: false,
        background: 'transparent',
        pixelRatio: 2
      }
    })

    Render.run(render);

    let runner = Runner.create();
    Runner.run(runner,engine);
   

    Composite.add(world, [
      // walls

      Bodies.rectangle(width/2, height + 26, width, 50, { isStatic: true }),
      Bodies.rectangle(width + 30, height - 1000, 50, height + 2000, { isStatic: true }),
      Bodies.rectangle(-30, height - 1000, 50, height + 2000, { isStatic: true })
  ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;
  }

  random = (min:number,max:number) => {
    return Math.random() * (max - min) + min;
  }

  add = (bar: Bar) => {
    const barObject = bar;
    this.bars.push(barObject);
    let body = barObject.body;
    Matter.Body.set(body,'position', {x: this.width/2, y: -200});
    body.restitution = 0.5;
    Matter.Body.applyForce(body, {x: body.position.x, y: body.position.y}, {x: this.random(-3, 3), y: this.random(-0.1, 0.05)})
    Matter.Body.rotate(body, this.random(-60,60));
    Matter.World.add(this.world,body);
  }

  remove = (type:string) => {
    if(this.bars.length > 0 ){
      const typeIndexes = this.bars.reduce((acc,obj:Bar,index) => {
        if(obj.type === type) {
          acc.push(index);
        }
        return acc;
      },[])

      
      if(typeIndexes.length > 0) {
        Matter.World.remove(this.world, this.bars[typeIndexes[0]].body);
        this.bars.splice(typeIndexes[0],1);
      }
      
    }
  }
}

export default FallingStage;