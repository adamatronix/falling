import Matter from "matter-js";
var FallingStage = /** @class */ (function () {
    function FallingStage(el) {
        var _this = this;
        this.random = function (min, max) {
            return Math.random() * (max - min) + min;
        };
        this.add = function (bar) {
            var barObject = bar;
            _this.bars.push(barObject);
            var body = barObject.body;
            Matter.Body.set(body, 'position', { x: _this.width / 2, y: -200 });
            body.restitution = 0.5;
            Matter.Body.applyForce(body, { x: body.position.x, y: body.position.y }, { x: _this.random(-3, 3), y: _this.random(-0.1, 0.05) });
            Matter.Body.rotate(body, _this.random(-60, 60));
            Matter.World.add(_this.world, body);
        };
        this.remove = function (type) {
            if (_this.bars.length > 0) {
                var typeIndexes = _this.bars.reduce(function (acc, obj, index) {
                    if (obj.type === type) {
                        acc.push(index);
                    }
                    return acc;
                }, []);
                if (typeIndexes.length > 0) {
                    Matter.World.remove(_this.world, _this.bars[typeIndexes[0]].body);
                    _this.bars.splice(typeIndexes[0], 1);
                }
            }
        };
        this.container = el;
        this.bars = [];
        var Engine = Matter.Engine;
        var Render = Matter.Render;
        var Runner = Matter.Runner;
        var Bodies = Matter.Bodies;
        var Composite = Matter.Composite;
        var MouseConstraint = Matter.MouseConstraint;
        var Mouse = Matter.Mouse;
        var width = this.container.clientWidth;
        var height = this.container.clientHeight;
        this.width = width;
        this.height = height;
        var engine = Engine.create();
        var world = engine.world;
        this.world = world;
        var render = Render.create({
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
        });
        Render.run(render);
        var runner = Runner.create();
        Runner.run(runner, engine);
        Composite.add(world, [
            // walls
            Bodies.rectangle(width / 2, height + 26, width, 50, { isStatic: true }),
            Bodies.rectangle(width + 200, height / 2, 50, height + 1000, { isStatic: true }),
            Bodies.rectangle(-200, height / 2, 50, height + 1000, { isStatic: true })
        ]);
        // add mouse control
        var mouse = Mouse.create(render.canvas), mouseConstraint = MouseConstraint.create(engine, {
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
    return FallingStage;
}());
export default FallingStage;
