import { createElement } from 'react';

var getShapeProps = function getShapeProps(shapeInfo) {
  var width = shapeInfo.width,
      height = shapeInfo.height;
  return function (type) {
    var shapeOptions = {
      rect: {
        width: width,
        height: height
      },
      circle: {
        cx: Number(width) / 2,
        cy: Number(height) / 2,
        r: (Number(height) + Number(width)) / 4
      }
    };
    return shapeOptions[type];
  };
};
var getSvgProps = function getSvgProps(shapeInfo) {
  var width = shapeInfo.width,
      height = shapeInfo.height;
  return function (type) {
    var svgProps = {
      rect: {
        width: width,
        height: height
      },
      circle: {
        width: width,
        height: height
      }
    };
    return svgProps[type];
  };
};

var PlaceholderLoading = function PlaceholderLoading(_ref) {
  var width = _ref.width,
      height = _ref.height,
      _ref$colorStart = _ref.colorStart,
      colorStart = _ref$colorStart === void 0 ? '#f0f0f0' : _ref$colorStart,
      _ref$colorEnd = _ref.colorEnd,
      colorEnd = _ref$colorEnd === void 0 ? '#e0e0e0' : _ref$colorEnd,
      shape = _ref.shape;
  var ShapeElement = shape;
  var shapeProps = getShapeProps({
    width: width,
    height: height
  })(shape);
  var svgProps = getSvgProps({
    width: width,
    height: height
  })(shape);
  return createElement("svg", Object.assign({}, svgProps), createElement(ShapeElement, Object.assign({}, shapeProps, {
    role: 'img',
    "data-testid": "shapeElement",
    fill: "url(#linear-gradient)"
  })), createElement("defs", null, createElement("linearGradient", {
    id: "linear-gradient",
    x1: '0%',
    y1: '0%',
    x2: '100%',
    y2: '0%'
  }, createElement("stop", {
    offset: '0%',
    stopColor: colorStart
  }, createElement("animate", {
    attributeName: "offset",
    values: "-2; -2; 1",
    dur: "2s",
    keyTimes: '0; 0.70; 1',
    repeatCount: "indefinite"
  })), createElement("stop", {
    offset: '50%',
    stopColor: colorEnd
  }, createElement("animate", {
    attributeName: "offset",
    values: "0; 0; 2",
    dur: "2s",
    keyTimes: '0; 0.70; 1',
    repeatCount: "indefinite"
  })), createElement("stop", {
    offset: '100%',
    stopColor: colorStart
  }, createElement("animate", {
    attributeName: "offset",
    values: "0; 0; 3",
    dur: "2s",
    keyTimes: '0; 0.90; 1',
    repeatCount: "indefinite"
  })))));
};

export default PlaceholderLoading;
//# sourceMappingURL=react-placeholder-loading.esm.js.map
