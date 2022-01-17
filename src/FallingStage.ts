import Matter from "matter-js";
import Bar from "./Bar";


class FallingStage {
  container: HTMLDivElement;

  constructor(el: HTMLDivElement) {
    this.container = el;

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;
    const MouseConstraint = Matter.MouseConstraint;
    const Mouse = Matter.Mouse;

    let width = this.container.clientWidth;
    let height = this.container.clientHeight;

    let engine = Engine.create();
    let world = engine.world;
    let render = Render.create({
      element: this.container,
      engine: engine,
      options: {
        width: width,
        height: height,
        showAngleIndicator: false,
        wireframes: false,
        showBounds: false,
        background: 'transparent'
      }
    })

    Render.run(render);

    let runner = Runner.create();
    Runner.run(runner,engine);


    const detoxbar = new Bar(400,0);

    World.add(world,detoxbar.body);

    Composite.add(world, [
      // walls

      Bodies.rectangle(width/2, height + 26, width, 50, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
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
}

export default FallingStage;