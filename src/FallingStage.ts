import Matter from "matter-js";


class FallingStage {
  container: HTMLDivElement;

  constructor(el: HTMLDivElement) {
    this.container = el;

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;

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
  }
}

export default FallingStage;