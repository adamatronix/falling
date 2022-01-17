var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useRef, useEffect } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import detoxImage from './assets/detox.jpg';
import FallingStage from './FallingStage';
import Bar from './Bar';
var Viewport = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 1200px;\n  height: 900px;\n  position: relative;\n  background: white;\n  border: 1px solid #383B23;\n  border-radius: 20px;\n  overflow: hidden;\n"], ["\n  width: 1200px;\n  height: 900px;\n  position: relative;\n  background: white;\n  border: 1px solid #383B23;\n  border-radius: 20px;\n  overflow: hidden;\n"])));
var Button = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  \n"], ["\n  \n"])));
var Example = function () {
    var container = useRef();
    var stage = useRef();
    useEffect(function () {
        stage.current = new FallingStage(container.current);
    }, []);
    var onAdd = function () {
        stage.current.add(new Bar('detox', 600, 154, detoxImage));
    };
    var onRemove = function () {
        stage.current.remove('detox');
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Viewport, { ref: container }),
        React.createElement(Button, { onClick: onAdd }, "Add"),
        React.createElement(Button, { onClick: onRemove }, "Remove")));
};
render(React.createElement(Example, null), document.getElementById('root'));
var templateObject_1, templateObject_2;
