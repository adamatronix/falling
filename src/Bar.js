import { Bodies } from "matter-js";
var Bar = /** @class */ (function () {
    function Bar(type, width, height, image) {
        this.type = type;
        this.body = Bodies.rectangle(0, 0, width, height, {
            render: {
                sprite: {
                    xScale: 1,
                    yScale: 1,
                    texture: image
                }
            }
        });
    }
    return Bar;
}());
export default Bar;
