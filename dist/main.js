/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/MachineStd-Bold.otf */ "./src/fonts/MachineStd-Bold.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"MyFont\";\n    font-weight: bold;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\");\n}\n\nbody {\n    background-color: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n\nh1 {\n    font-family: \"MyFont\";\n}\n\n#container {\n    width: 70%;\n    height: 40vw;\n    position: relative;\n    top: 0; bottom: 0; right: 0; left: 0;\n    margin: auto;\n    margin-top: 30vh;\n    font-size: 0;\n    position: relative;\n    top: 25%;\n}\n\n#welcomePage {\n    color: white;\n    background-color: black;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    text-align: center;\n    transition: all 0.5s linear;\n}\n\n#msgBoard {\n    text-align: center;\n    position: relative; \n    top: 13vh;\n    font-family: \"MyFont\";\n}\n\n#startBtn {\n    position: absolute;\n    top: 60%;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 40px;\n    width: 200px;\n    font-family: \"MyFont\";\n    font-size: 35px;\n    cursor: pointer;\n}\n\n#axis {\n    text-align: center;\n    position: relative; \n    top: 15vh;\n    cursor: pointer;\n    height: 3vh;\n    width: 3vw;\n    font-size: 20px;\n}\n\n#axisLabel {\n    text-align: center;\n    position: relative; \n    top: 15vh;\n    font-family: \"MyFont\";\n}\n\n#header {\n    text-align: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n#blackScreen {\n    background-color: black;\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    z-index: 10;\n    position: fixed;\n    top: 0;\n    transition: all 1s linear;\n}\n\n.titleFont {\n    height: 100px;\n    width: 400px;\n    font-size: 100px;\n    text-decoration: underline;\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    margin: auto;\n    margin-top: 25px;\n    text-align: center;\n}\n\n.playerBoard {\n    width: 25vw;\n    min-width: 300px;\n    height: 25vw;\n    min-height: 300px;\n    position: absolute;\n    left: 0;\n    margin: auto;\n    border: 1px solid black;\n    display: inline-block;\n    transition: all 0.2s linear;\n}\n\n.enemyBoard {\n    width: 25vw;\n    min-width: 300px;\n    height: 25vw;\n    min-height: 300px;\n    position: absolute;\n    right: 0;\n    margin: auto;\n    border: 1px solid black;\n    display: inline-block;\n    transition: all 0.2s linear;\n}\n\n.transparent {\n    opacity: 0;\n    visibility: hidden;\n}\n\n.highlighted {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.centerView {\n    width: 30vw;\n    height: 30vw;\n    right: 0;\n}\n\n.square {\n    width: 10%;\n    height: 10%;\n    margin: 0px;\n    outline: 1px solid black;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    transition: all 0.2s linear;\n}\n\n.square:hover {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.restart {\n    position: fixed; \n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 40px;\n    width: 250px;\n    font-family: \"MyFont\";\n    font-size: 35px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,+DAAwD;AAC5D;;AAEA;IACI,oCAAoC;IACpC,WAAW;IACX,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,MAAM,EAAE,SAAS,EAAE,QAAQ,EAAE,OAAO;IACpC,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,UAAU;IACV,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,eAAe;IACf,WAAW;IACX,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;AACZ;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,SAAS;IACT,WAAW;IACX,eAAe;IACf,MAAM;IACN,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,0BAA0B;IAC1B,kBAAkB;IAClB,MAAM,EAAE,QAAQ,EAAE,SAAS,EAAE,OAAO;IACpC,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,OAAO;IACP,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,UAAU;IACV,WAAW;IACX,WAAW;IACX,wBAAwB;IACxB,qBAAqB;IACrB,oCAAoC;IACpC,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,qBAAqB;IACrB,eAAe;AACnB","sourcesContent":["@font-face {\n    font-family: \"MyFont\";\n    font-weight: bold;\n    src: url(\"fonts/MachineStd-Bold.otf\") format(\"opentype\");\n}\n\nbody {\n    background-color: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n\nh1 {\n    font-family: \"MyFont\";\n}\n\n#container {\n    width: 70%;\n    height: 40vw;\n    position: relative;\n    top: 0; bottom: 0; right: 0; left: 0;\n    margin: auto;\n    margin-top: 30vh;\n    font-size: 0;\n    position: relative;\n    top: 25%;\n}\n\n#welcomePage {\n    color: white;\n    background-color: black;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    text-align: center;\n    transition: all 0.5s linear;\n}\n\n#msgBoard {\n    text-align: center;\n    position: relative; \n    top: 13vh;\n    font-family: \"MyFont\";\n}\n\n#startBtn {\n    position: absolute;\n    top: 60%;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 40px;\n    width: 200px;\n    font-family: \"MyFont\";\n    font-size: 35px;\n    cursor: pointer;\n}\n\n#axis {\n    text-align: center;\n    position: relative; \n    top: 15vh;\n    cursor: pointer;\n    height: 3vh;\n    width: 3vw;\n    font-size: 20px;\n}\n\n#axisLabel {\n    text-align: center;\n    position: relative; \n    top: 15vh;\n    font-family: \"MyFont\";\n}\n\n#header {\n    text-align: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n#blackScreen {\n    background-color: black;\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    z-index: 10;\n    position: fixed;\n    top: 0;\n    transition: all 1s linear;\n}\n\n.titleFont {\n    height: 100px;\n    width: 400px;\n    font-size: 100px;\n    text-decoration: underline;\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    margin: auto;\n    margin-top: 25px;\n    text-align: center;\n}\n\n.playerBoard {\n    width: 25vw;\n    min-width: 300px;\n    height: 25vw;\n    min-height: 300px;\n    position: absolute;\n    left: 0;\n    margin: auto;\n    border: 1px solid black;\n    display: inline-block;\n    transition: all 0.2s linear;\n}\n\n.enemyBoard {\n    width: 25vw;\n    min-width: 300px;\n    height: 25vw;\n    min-height: 300px;\n    position: absolute;\n    right: 0;\n    margin: auto;\n    border: 1px solid black;\n    display: inline-block;\n    transition: all 0.2s linear;\n}\n\n.transparent {\n    opacity: 0;\n    visibility: hidden;\n}\n\n.highlighted {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.centerView {\n    width: 30vw;\n    height: 30vw;\n    right: 0;\n}\n\n.square {\n    width: 10%;\n    height: 10%;\n    margin: 0px;\n    outline: 1px solid black;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    transition: all 0.2s linear;\n}\n\n.square:hover {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.restart {\n    position: fixed; \n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 40px;\n    width: 250px;\n    font-family: \"MyFont\";\n    font-size: 35px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/gameboardFactory.js":
/*!*****************************************!*\
  !*** ./src/modules/gameboardFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    let _boardState = null; //10x10 array that holds bool value that specifies if that spot has been hit or not; hit and miss will be different color on ui
    let _shipArray = []; //holds the ships on the board; if coords of all ships are empty then board is empty
    let _status = false;

    return {
        //Accessor functions
        getShipArray: function() {return _shipArray},
        getWidth: function() {return _boardState.length},
        getLength: function() {return _boardState[0].length},
        getStatus: function() {return _status},
        getBoard: function() {return _boardState},

        //Mutator functions
        updateStatus: function() {
            for (let i = 0; i < _shipArray.length; i++) {
                if (!_shipArray[i].getIsSunk()) {
                    return;
                }
            }
            _status = true;
        },
        initGameboard: function() {
            const rows = 10, cols = 10;
            const val = false;
            
            _boardState = new Array(rows);
            for (let i = 0; i < rows; i++) {
                _boardState[i] = new Array(cols).fill(val);
            }
        },
        placeShip: function(ship) {
            _shipArray.push(ship);
        },
        placeShipRand: function(ship) {
            let valid = false;
            while (!valid) {
                ship.setPositionRand();
                ship.setCoordinates();
                valid = this.checkValidShipCoords(ship);
            }
            _shipArray.push(ship);
        },
        checkValidShipCoords: function(ship) {
            let valid = true;
            //Checks to see if there are overlaps between pre-existing ships
            for (let i = 0; i < _shipArray.length; i++) {
                for (let j = 0; j < _shipArray[i].getCoordinates().length; j++) {
                    let coordsLength = ship.getCoordinates().length;
                    for (let k = 0; k < coordsLength; k++) {
                        let currentCompare = _shipArray[i].getCoordinates()[j];
                        let currentCoord = ship.getCoordinates()[k];
                        if (currentCompare[0] === currentCoord[0]) {
                            if (currentCompare[1] === currentCoord[1]) {
                                valid = false;
                            }
                        }
                    }
                }
            }
            //Checks to see if the new ship goes out of the grib bounds
            let x = ship.getPosition()[0];
            let y = ship.getPosition()[1];
            if (ship.getAxis() === "Y" || ship.getAxis() ==="y") {
                if (y + ship.getLength() > 10) {
                    valid = false;
                }
            }
            else {
                if (x + ship.getLength() > 10) {
                    valid = false;
                }
            }
            return valid;
        },
        receiveAttack: function(coordinate) {
            let message = "The attack has missed all ships.";
            _boardState[coordinate[0]][coordinate[1]] = true;
            for (let i = 0; i < _shipArray.length; i++) {
                let currentShip = _shipArray[i];
                currentShip.getCoordinates().forEach(coord => {
                    if (coordinate[0] === coord[0]) {
                        if (coordinate[1] === coord[1]) {
                            message = currentShip.hit(coordinate);
                            this.updateStatus();
                        }
                    }
                })
            }
            return message;
        },
        checkIfLost: function() {
            let lost = true;
            let numOfShips = _shipArray.length;
            for (let i = 0; i < numOfShips; i++) {
                if (_shipArray[i].getCoordinates().length > 0) {
                    lost = false;
                }
            }
            return lost;
        }
    }
}

/***/ }),

/***/ "./src/modules/manipulateDOM.js":
/*!**************************************!*\
  !*** ./src/modules/manipulateDOM.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initBtns": () => (/* binding */ initBtns),
/* harmony export */   "renderInitBoards": () => (/* binding */ renderInitBoards),
/* harmony export */   "updateMsgBoard": () => (/* binding */ updateMsgBoard),
/* harmony export */   "toggleBlackScreen": () => (/* binding */ toggleBlackScreen)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


//Cache DOM
let container = document.querySelector("#container");

//Add event listener to the start game button
function initBtns() {
    let startBtn = document.querySelector("#startBtn");
    startBtn.addEventListener("click", function() {
        let welcomePage = document.querySelector("#welcomePage");
        let welcomeText = document.querySelector("#welcomeText");
        welcomeText.style.visibility = "hidden";
        welcomePage.style.width = "0%";
        startBtn.style.visibility = "hidden";
    });
    let axis = document.querySelector("#axis");
    axis.addEventListener("click", function(e) {
        if (e.target.innerHTML === "X"){
            e.target.innerHTML = "Y";
        }
        else {
            e.target.innerHTML = "X";
        }
    })
}
    

//Display the primitive boards on screen
function renderInitBoards() {
    let playerBoard = document.createElement("div");
    playerBoard.classList.add("playerBoard");
    playerBoard.classList.add("centerView");
    playerBoard.id = "playerBoard";
    for (let i = 0; i < 100; i ++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.id = "player" + i; //The naming of the id is so that the grid position can be extracted from it via idString.charAt(0 or 1);
        playerBoard.appendChild(newSquare); //If the id is in the first row, a check will be done to see if the length of the string is 5 ("enemy"; 6 for "player") plus 1 or 2
    }
    container.appendChild(playerBoard);

    let enemyBoard = document.createElement("div");
    enemyBoard.classList.add("enemyBoard");
    enemyBoard.classList.add("transparent");
    enemyBoard.id = "enemyBoard";
    for (let i = 0; i < 100; i ++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.id = "enemy" + i;
        enemyBoard.appendChild(newSquare);
    }
    container.appendChild(enemyBoard);
}

//Function to update the messageBoard with the console messages that report what has happened
function updateMsgBoard(msg) {
    console.log("Hello");
    let msgBoard = document.querySelector("#msgBoard");
    msgBoard.textContent = msg;
}

//Function for displaying a black screen
function toggleBlackScreen() {
    if (blackScreen.classList.length === 0) {
        blackScreen.classList.add("transparent");
    }
    else {
        blackScreen.classList.remove("transparent");
    }
}

/***/ }),

/***/ "./src/modules/playerFactory.js":
/*!**************************************!*\
  !*** ./src/modules/playerFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(gameboard) {
    let _gameboard = gameboard;

    return {
        getGameboard: function() {return _gameboard},
        attack: function(player, coordinate) {
            let response = player.getGameboard().receiveAttack(coordinate);
            return response;
        },
        attackRandom: function(player) {
            let isNewCoord = false;
            let randRow = null;
            let randCol = null;
            while (!isNewCoord) {
                randRow = Math.floor(Math.random() * 10);
                randCol = Math.floor(Math.random() * 10);
                if (!player.getGameboard().getBoard()[randCol][randRow]) {
                    isNewCoord = true;
                }
            }
            let response = player.getGameboard().receiveAttack([randCol, randRow]);
            return randCol + "" + randRow + response;
        }
    }
}

/***/ }),

/***/ "./src/modules/runGame.js":
/*!********************************!*\
  !*** ./src/modules/runGame.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAttackListener": () => (/* binding */ addAttackListener),
/* harmony export */   "addPlaceListener": () => (/* binding */ addPlaceListener),
/* harmony export */   "addHighlightListener": () => (/* binding */ addHighlightListener)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _startGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startGame.js */ "./src/modules/startGame.js");
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipFactory.js */ "./src/modules/shipFactory.js");
/* harmony import */ var _manipulateDOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manipulateDOM.js */ "./src/modules/manipulateDOM.js");





//Array and index are for changing the placeCurrentShip function to place all ships
let placeShipArray = [_startGame_js__WEBPACK_IMPORTED_MODULE_1__.placeCarrier, _startGame_js__WEBPACK_IMPORTED_MODULE_1__.placeBattleship, _startGame_js__WEBPACK_IMPORTED_MODULE_1__.placeDestroyer, _startGame_js__WEBPACK_IMPORTED_MODULE_1__.placeSubmarine, _startGame_js__WEBPACK_IMPORTED_MODULE_1__.placePatrol];
let shipStringArray = ["Carrier", "Battleship", "Destroyer", "Submarine", "Patrol"];
let index = 0;
//Array of numbers to represent the length of the current ship beign placed to support highlighting
let currentHighlight = [5, 4, 3, 3, 2]; //Carrier, battleship, destroyer, submarine, patrol





//Needed to add event listeners to the enemy squares for initiating attacks; this function is a little long because it includes game functionality along with DOM manipulation
function addAttackListener(enemy, player) {
    for (let i = 0; i < 100; i++) {
        let currentId = "enemy" + i;
        let currentSquare = document.querySelector("#" + currentId);
        currentSquare.addEventListener("click", function(e) {
            let x = null;
            let y = null;
            if (currentId.length === 6) {
                x = parseInt(currentId.charAt(5));
                y = 0;
            }
            else {
                x = parseInt(currentId.charAt(6));
                y = parseInt(currentId.charAt(5));
                
            }
            let msg = player.attack(enemy, [x, y]);
            
            let clone = e.target.cloneNode(true);
            if (msg.includes("missed")) {
                clone.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            }
            else {
                clone.style.backgroundColor = "red";
            }
            e.target.replaceWith(clone);
            (0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_3__.updateMsgBoard)("Player Attack: " + msg);
            if (enemy.getGameboard().getStatus())
            {
                console.log(true);
                restartGame("Player ");
            }
            else {
                console.log(false);
                setTimeout(function() {
                let newMsg = enemy.attackRandom(player);
                let coords = newMsg.slice(0, 2);
                let square = null;
                if (coords.charAt(1) === "0") {
                    square = document.querySelector("#player"+coords.charAt(0))
                }
                else {
                    square = document.querySelector("#player"+coords.charAt(1)+coords.charAt(0));
                }
                if (newMsg.includes("missed")) {
                    square.classList.remove("highlighted");
                    square.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                }
                else {
                    square.classList.remove("highlighted");
                    square.style.backgroundColor = "red";
                }
                newMsg = newMsg.substring(2);
                (0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_3__.updateMsgBoard)("Enemy Attack: " + newMsg);
                if (player.getGameboard().getStatus()) {
                    restartGame("Enemy ");
                }
                }, 1500);
            }
        })
    }
}

//Function for adding event Listeners for placing ships on playerBoard
function addPlaceListener(player) {
    for (let i = 0; i < 100; i++) {
        let currentId = "player" + i;
        let currentSquare = document.querySelector("#" + currentId);
        currentSquare.addEventListener("click", function() {

            
            //Section deals with actually placing the ship into the shipArray
            let x = null;
            let y = null;
            if (currentId.length === 7) {
                x = parseInt(currentId.charAt(6));
                y = 0;
            }
            else {
                x = parseInt(currentId.charAt(7));
                y = parseInt(currentId.charAt(6));
                
            }
            let position = [x, y];
            let dummyShip = createDummyShip(position);
            if (player.getGameboard().checkValidShipCoords(dummyShip)) {


                //Section deals with marking the squares that the ship IS placed in
                let currentShipLength = currentHighlight[index];
                let axis = document.querySelector("#axis").innerHTML;
                if (axis === "Y" || axis === "y") {
                    for (let j = i; j < (i + (10*currentShipLength)); j+=10) {
                        if (j > 99) {//Checks for if j is leaving the grid bounds
                            break;
                        }
                        let id = "#player" + j;
                        let square = document.querySelector(id);
                        square.classList.add("highlighted");
                    }
                }
                else {
                    for (let j = i; j < (i + currentShipLength); j++) {
                        if (j > (Math.floor((i+10)/10))*10-1){//Checks for if j is leaving the grid bounds
                            break;
                        }
                        let id = "#player" + j;
                        let square = document.querySelector(id);
                        square.classList.add("highlighted");
                    }
                }

                let placeCurrentShip = placeShipArray[index];
                placeCurrentShip(player, position);
                index++;
                recreateSquares(player);
                if (index === 5) {
                    index = 0;
                    placeCurrentShip = null;
                    document.querySelector("#playerBoard").classList.remove("centerView");
                    document.querySelector("#enemyBoard").classList.remove("transparent");
                }
            }
            else {
                return "This is not a valid position";
            } 
        })
    }
    (0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_3__.updateMsgBoard)("Please choose a location to place your " + shipStringArray[index] + ".");
    if (index === 5) {
        (0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_3__.updateMsgBoard)("Choose a location to attack.");
    }
}

//Listener to highlight the squares where the ship WILL BE placed; only active in the placing ship phase
function addHighlightListener() {
    for (let i = 0; i < 100; i++) {
        let currentId = "player" + i;
        let currentShipLength = currentHighlight[index];
        let currentSquare = document.querySelector("#" + currentId);
        //The listener used to highlight
        currentSquare.addEventListener("mouseenter", function() {
            let axis = document.querySelector("#axis").innerHTML;
            if (axis === "Y" || axis === "y") {
                for (let j = i; j < (i + (10*currentShipLength)); j+=10) {
                    if (j > 99) {//Checks for if j is leaving the grid bounds
                        break;
                    }
                    let id = "#player" + j;
                    let square = document.querySelector(id);
                    square.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                }
            }
            else {
                for (let j = i; j < (i + currentShipLength); j++) {
                    if (j > (Math.floor((i+10)/10))*10-1){//Checks for if j is leaving the grid bounds
                        break;
                    }
                    let id = "#player" + j;
                    let square = document.querySelector(id);
                    square.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                }
            }
        })
        //The listener used to unhighlight
        currentSquare.addEventListener("mouseleave", function() {
            let axis = document.querySelector("#axis").innerHTML;
            if (axis === "Y" || axis === "y") {
                for (let j = i; j < (i + (10*currentShipLength)); j+=10) {
                    if (j > 99) {//Checks for if j is leaving the grid bounds
                        break;
                    }
                    let id = "#player" + j;
                    let square = document.querySelector(id);
                    square.style.backgroundColor = "";
                }
            }
            else {
                for (let j = i; j < (i + currentShipLength); j++) {
                    if (j > (Math.floor((i+10)/10))*10-1){//Checks for if j is leaving the grid bounds
                        break;
                    }
                    let id = "#player" + j;
                    let square = document.querySelector(id);
                    square.style.backgroundColor = "";
                }
            }
        })
    }
}


//The sectino below holds a couple of helper functions


//Function for removing all Listeners (on playerBoard)
function removePlayerListeners() {
    for (let i = 0; i < 100; i++) {
        let currentId = "player" + i;
        let currentSquare = document.querySelector("#" + currentId);
        currentSquare.replaceWith(currentSquare.cloneNode(true));
    }
}

//Function for removing all listeners (on enemyBoard)
function removeEnemyListeners() {
    for (let i = 0; i < 100; i++) {
        let currentId = "enemy" + i;
        let currentSquare = document.querySelector("#" + currentId);
        currentSquare.replaceWith(currentSquare.cloneNode(true));
    }
}

//Function that will remove all listeners and display a restart game button
function restartGame(winner) {
    (0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_3__.updateMsgBoard)(winner + "has won the game.");
    removePlayerListeners();
    removeEnemyListeners();
    let restart = document.createElement("button");
    restart.classList.add("restart");
    restart.textContent = "Restart Game?";
    document.querySelector("#container").appendChild(restart);
    restart.addEventListener("click", function() {
        (0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_3__.toggleBlackScreen)();
        restart.remove();
        setTimeout(_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_3__.toggleBlackScreen, 2000);
        setTimeout(function() {
            let playerArray = (0,_startGame_js__WEBPACK_IMPORTED_MODULE_1__.initGame)();
            let player = playerArray[0];
            let enemy = playerArray[1];
            let container = document.querySelector("#container");
            while (container.firstChild) {
                container.firstChild.remove();
            }
            (0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_3__.renderInitBoards)();
            addPlaceListener(player);
            addHighlightListener();
            addAttackListener(enemy, player);
        }, 1000);
    });
}

//Function to recreate all the squares and reattach all the listeners (needed to change highlight length)
function recreateSquares(player) {
    for (let i = 0; i < 100; i++) {
        let currentId = "player" + i;
        let currentSquare = document.querySelector("#" + currentId);
        currentSquare.replaceWith(currentSquare.cloneNode(true));
    }
    addPlaceListener(player);
    addHighlightListener();
}

//Function to create a dummy ship to check for valid placement
function createDummyShip(position) {
    let dummyShip = null;
    switch (index) {
        case 0:
            dummyShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_2__.default)("Carrier", 5, position, document.querySelector("#axis").innerHTML);
            break;
        case 1: 
            dummyShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_2__.default)("Battleship", 4, position, document.querySelector("#axis").innerHTML);
            break;
        case 2:
            dummyShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_2__.default)("Destroyer", 3, position, document.querySelector("#axis").innerHTML);
            break;
        case 3:
            dummyShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_2__.default)("Submarine", 3, position, document.querySelector("#axis").innerHTML);
            break;
        case 4: 
            dummyShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_2__.default)("Patrol", 2, position, document.querySelector("#axis").innerHTML);
    }
    dummyShip.setCoordinates();
    return dummyShip;
}



/***/ }),

/***/ "./src/modules/shipFactory.js":
/*!************************************!*\
  !*** ./src/modules/shipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, length, position, axis) {
    let _name = name;
    let _length = length;
    let _position = position;
    let _axis = axis;
    let _coordinates = null;
    let _isSunk = false;

    return {
        //Accessor functions
        getName: function(){return _name},
        getLength: function() {return _length},
        getPosition: function() {return _position},
        getCoordinates: function() {return _coordinates},
        getAxis: function() {return _axis},
        getIsSunk: function() {return _isSunk},
        //Mutator functions
        setPosition: function(coordinates) {
            _coordinates = coordinates;
        },
        setPositionRand: function() {
            let valid = false;
            let position = null;
            let axis = "";
            while(!valid) {
                position = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
                if (Math.random() >= 0.5) {
                    axis = "x";
                    if (position[0] + _length > 10) {
                        continue;
                    }
                    else {
                        valid = true;
                    }
                }
                else {
                    axis = "y";
                    if (position[1] + _length > 10) {
                        continue;
                    }
                    else {
                        valid = true;
                    }
                }
            }
            _position = position;
            _axis = axis;
        },
        setCoordinates: function() {
            let coordinates = new Array(_length);
            if (_axis === "X" || _axis ==="x") {
                let y = _position[1];
                let x = _position[0];
                for (let i = 0; i < _length; i++) {
                    coordinates[i] = [x + i, y];
                }
            }
            else{
                let y = _position[1];
                let x = _position[0];
                for (let i = 0; i < _length; i++) {
                    coordinates[i] = [x, y + i];
                }
            }
            _coordinates = coordinates;
        },
        hit: function(coordinate) {
            for (let i = 0; i < _coordinates.length; i++) {
                if (coordinate[0] === _coordinates[i][0]) {
                    if (coordinate[1] === _coordinates[i][1]) {
                        _coordinates.splice(i, 1);
                    }
                }
            }
            if (_coordinates.length === 0) {
                _isSunk = true;
            }
            if (_isSunk) {
                return _name + " has been destroyed!!!";
            }
            else {
                return _name + " has been hit!!!";
            }
        }
    }
}

/***/ }),

/***/ "./src/modules/startGame.js":
/*!**********************************!*\
  !*** ./src/modules/startGame.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testGame": () => (/* binding */ testGame),
/* harmony export */   "initGame": () => (/* binding */ initGame),
/* harmony export */   "placeCarrier": () => (/* binding */ placeCarrier),
/* harmony export */   "placeBattleship": () => (/* binding */ placeBattleship),
/* harmony export */   "placeDestroyer": () => (/* binding */ placeDestroyer),
/* harmony export */   "placeSubmarine": () => (/* binding */ placeSubmarine),
/* harmony export */   "placePatrol": () => (/* binding */ placePatrol)
/* harmony export */ });
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/modules/shipFactory.js");
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/modules/gameboardFactory.js");
/* harmony import */ var _playerFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerFactory.js */ "./src/modules/playerFactory.js");




//Function to init all game values with test variables
function testGame() {
    let playerCarrier = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Carrier", 5, [1, 1], "y");
    playerCarrier.setCoordinates();
    let playerBattleship = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Battleship", 4, [3, 1], "x");
    playerBattleship.setCoordinates();
    let playerDestroyer = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Destroyer", 3, [6, 9], "x");
    playerDestroyer.setCoordinates();
    let playerSubmarine = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Submarine", 3, [5, 5], "y");
    playerSubmarine.setCoordinates();
    let playerPatrol = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Patrol", 2, [8, 2], "y");
    playerPatrol.setCoordinates();
    let playerBoard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__.default)();
    let enemyCarrier = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Carrier", 5, [1, 1], "y");
    enemyCarrier.setCoordinates();
    let enemyBattleship = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Battleship", 4, [3, 1], "x");
    enemyBattleship.setCoordinates();
    let enemyDestroyer = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Destroyer", 3, [6, 9], "x");
    enemyDestroyer.setCoordinates();
    let enemySubmarine = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Submarine", 3, [5, 5], "y");
    enemySubmarine.setCoordinates();
    let enemyPatrol = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Patrol", 2, [8, 2], "y");
    enemyPatrol.setCoordinates();
    let enemyBoard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__.default)();
    playerBoard.initGameboard();
    enemyBoard.initGameboard();
    playerBoard.placeShip(playerCarrier);
    playerBoard.placeShip(playerBattleship);
    playerBoard.placeShip(playerDestroyer);
    playerBoard.placeShip(playerSubmarine);
    playerBoard.placeShip(playerPatrol);
    enemyBoard.placeShipRand(enemyCarrier);
    enemyBoard.placeShipRand(enemyBattleship);
    enemyBoard.placeShipRand(enemyDestroyer);
    enemyBoard.placeShipRand(enemySubmarine);
    enemyBoard.placeShipRand(enemyPatrol);
    let player = (0,_playerFactory_js__WEBPACK_IMPORTED_MODULE_2__.default)(playerBoard);
    let enemy = (0,_playerFactory_js__WEBPACK_IMPORTED_MODULE_2__.default)(enemyBoard);
    return [player, enemy];
}

//Function to init empty board and player objects
function initGame() {
    let playerBoard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__.default)();
    playerBoard.initGameboard();
    let enemyBoard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__.default)();
    enemyBoard.initGameboard();
    let enemyCarrier = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Carrier", 5, [1, 1], "y");
    enemyCarrier.setCoordinates();
    let enemyBattleship = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Battleship", 4, [3, 1], "x");
    enemyBattleship.setCoordinates();
    let enemyDestroyer = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Destroyer", 3, [6, 9], "x");
    enemyDestroyer.setCoordinates();
    let enemySubmarine = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Submarine", 3, [5, 5], "y");
    enemySubmarine.setCoordinates();
    let enemyPatrol = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Patrol", 2, [8, 2], "y");
    enemyPatrol.setCoordinates();
    enemyBoard.placeShipRand(enemyCarrier);
    enemyBoard.placeShipRand(enemyBattleship);
    enemyBoard.placeShipRand(enemyDestroyer);
    enemyBoard.placeShipRand(enemySubmarine);
    enemyBoard.placeShipRand(enemyPatrol);
    let player = (0,_playerFactory_js__WEBPACK_IMPORTED_MODULE_2__.default)(playerBoard);
    let enemy = (0,_playerFactory_js__WEBPACK_IMPORTED_MODULE_2__.default)(enemyBoard);
    return [player, enemy];
}

//Function for placing carrier on playerBoard
function placeCarrier(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newCarrier = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Carrier", 5, position, axis);
    newCarrier.setCoordinates();
    console.log(newCarrier.getCoordinates())
    player.getGameboard().placeShip(newCarrier);
}

//Function for placing carrier on playerBoard
function placeBattleship(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newBattleship = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Battleship", 4, position, axis);
    newBattleship.setCoordinates();
    player.getGameboard().placeShip(newBattleship);
}


//Function for placing carrier on playerBoard
function placeDestroyer(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newDestroyer = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Destroyer", 3, position, axis);
    newDestroyer.setCoordinates();
    player.getGameboard().placeShip(newDestroyer);
}


//Function for placing carrier on playerBoard
function placeSubmarine(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newSubmarine = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Submarine", 3, position, axis);
    newSubmarine.setCoordinates();
    player.getGameboard().placeShip(newSubmarine);
}


//Function for placing carrier on playerBoard
function placePatrol(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newPatrol = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Patrol", 2, position, axis);
    newPatrol.setCoordinates(); 
    player.getGameboard().placeShip(newPatrol);
}



/***/ }),

/***/ "./src/fonts/MachineStd-Bold.otf":
/*!***************************************!*\
  !*** ./src/fonts/MachineStd-Bold.otf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5694a6c2379b3c20475a.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _startGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startGame.js */ "./src/modules/startGame.js");
/* harmony import */ var _manipulateDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manipulateDOM.js */ "./src/modules/manipulateDOM.js");
/* harmony import */ var _runGame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runGame.js */ "./src/modules/runGame.js");





(0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_2__.initBtns)();
let playerArray = (0,_startGame_js__WEBPACK_IMPORTED_MODULE_1__.initGame)();
let player = playerArray[0];
let enemy = playerArray[1];
(0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_2__.renderInitBoards)();
(0,_runGame_js__WEBPACK_IMPORTED_MODULE_3__.addPlaceListener)(player);
(0,_runGame_js__WEBPACK_IMPORTED_MODULE_3__.addHighlightListener)();
(0,_runGame_js__WEBPACK_IMPORTED_MODULE_3__.addAttackListener)(enemy, player);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsOEJBQThCLHdCQUF3QixnRkFBZ0YsR0FBRyxVQUFVLDJDQUEyQyxrQkFBa0IsbUJBQW1CLGdCQUFnQixHQUFHLFFBQVEsOEJBQThCLEdBQUcsZ0JBQWdCLGlCQUFpQixtQkFBbUIseUJBQXlCLGNBQWMsV0FBVyxVQUFVLFFBQVEsbUJBQW1CLHVCQUF1QixtQkFBbUIseUJBQXlCLGVBQWUsR0FBRyxrQkFBa0IsbUJBQW1CLDhCQUE4QixrQkFBa0IsbUJBQW1CLHlCQUF5QixjQUFjLGFBQWEsaUJBQWlCLHlCQUF5QixrQ0FBa0MsR0FBRyxlQUFlLHlCQUF5QiwwQkFBMEIsZ0JBQWdCLDhCQUE4QixHQUFHLGVBQWUseUJBQXlCLGVBQWUsY0FBYyxlQUFlLG1CQUFtQixtQkFBbUIsbUJBQW1CLDhCQUE4QixzQkFBc0Isc0JBQXNCLEdBQUcsV0FBVyx5QkFBeUIsMEJBQTBCLGdCQUFnQixzQkFBc0Isa0JBQWtCLGlCQUFpQixzQkFBc0IsR0FBRyxnQkFBZ0IseUJBQXlCLDBCQUEwQixnQkFBZ0IsOEJBQThCLEdBQUcsYUFBYSx5QkFBeUIseUJBQXlCLGFBQWEsY0FBYyxlQUFlLEdBQUcsa0JBQWtCLDhCQUE4QixtQkFBbUIsb0JBQW9CLGdCQUFnQixrQkFBa0Isc0JBQXNCLGFBQWEsZ0NBQWdDLEdBQUcsZ0JBQWdCLG9CQUFvQixtQkFBbUIsdUJBQXVCLGlDQUFpQyx5QkFBeUIsY0FBYyxVQUFVLFdBQVcsUUFBUSxtQkFBbUIsdUJBQXVCLHlCQUF5QixHQUFHLGtCQUFrQixrQkFBa0IsdUJBQXVCLG1CQUFtQix3QkFBd0IseUJBQXlCLGNBQWMsbUJBQW1CLDhCQUE4Qiw0QkFBNEIsa0NBQWtDLEdBQUcsaUJBQWlCLGtCQUFrQix1QkFBdUIsbUJBQW1CLHdCQUF3Qix5QkFBeUIsZUFBZSxtQkFBbUIsOEJBQThCLDRCQUE0QixrQ0FBa0MsR0FBRyxrQkFBa0IsaUJBQWlCLHlCQUF5QixHQUFHLGtCQUFrQixzREFBc0QsR0FBRyxpQkFBaUIsa0JBQWtCLG1CQUFtQixlQUFlLEdBQUcsYUFBYSxpQkFBaUIsa0JBQWtCLGtCQUFrQiwrQkFBK0IsNEJBQTRCLDJDQUEyQyxzQkFBc0Isa0NBQWtDLEdBQUcsbUJBQW1CLDJDQUEyQyxHQUFHLGNBQWMsdUJBQXVCLGFBQWEsZ0JBQWdCLGNBQWMsZUFBZSxtQkFBbUIsbUJBQW1CLG1CQUFtQiw4QkFBOEIsc0JBQXNCLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLHlDQUF5QyxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEseUNBQXlDLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsc0NBQXNDLDhCQUE4Qix3QkFBd0IsbUVBQW1FLEdBQUcsVUFBVSwyQ0FBMkMsa0JBQWtCLG1CQUFtQixnQkFBZ0IsR0FBRyxRQUFRLDhCQUE4QixHQUFHLGdCQUFnQixpQkFBaUIsbUJBQW1CLHlCQUF5QixjQUFjLFdBQVcsVUFBVSxRQUFRLG1CQUFtQix1QkFBdUIsbUJBQW1CLHlCQUF5QixlQUFlLEdBQUcsa0JBQWtCLG1CQUFtQiw4QkFBOEIsa0JBQWtCLG1CQUFtQix5QkFBeUIsY0FBYyxhQUFhLGlCQUFpQix5QkFBeUIsa0NBQWtDLEdBQUcsZUFBZSx5QkFBeUIsMEJBQTBCLGdCQUFnQiw4QkFBOEIsR0FBRyxlQUFlLHlCQUF5QixlQUFlLGNBQWMsZUFBZSxtQkFBbUIsbUJBQW1CLG1CQUFtQiw4QkFBOEIsc0JBQXNCLHNCQUFzQixHQUFHLFdBQVcseUJBQXlCLDBCQUEwQixnQkFBZ0Isc0JBQXNCLGtCQUFrQixpQkFBaUIsc0JBQXNCLEdBQUcsZ0JBQWdCLHlCQUF5QiwwQkFBMEIsZ0JBQWdCLDhCQUE4QixHQUFHLGFBQWEseUJBQXlCLHlCQUF5QixhQUFhLGNBQWMsZUFBZSxHQUFHLGtCQUFrQiw4QkFBOEIsbUJBQW1CLG9CQUFvQixnQkFBZ0Isa0JBQWtCLHNCQUFzQixhQUFhLGdDQUFnQyxHQUFHLGdCQUFnQixvQkFBb0IsbUJBQW1CLHVCQUF1QixpQ0FBaUMseUJBQXlCLGNBQWMsVUFBVSxXQUFXLFFBQVEsbUJBQW1CLHVCQUF1Qix5QkFBeUIsR0FBRyxrQkFBa0Isa0JBQWtCLHVCQUF1QixtQkFBbUIsd0JBQXdCLHlCQUF5QixjQUFjLG1CQUFtQiw4QkFBOEIsNEJBQTRCLGtDQUFrQyxHQUFHLGlCQUFpQixrQkFBa0IsdUJBQXVCLG1CQUFtQix3QkFBd0IseUJBQXlCLGVBQWUsbUJBQW1CLDhCQUE4Qiw0QkFBNEIsa0NBQWtDLEdBQUcsa0JBQWtCLGlCQUFpQix5QkFBeUIsR0FBRyxrQkFBa0Isc0RBQXNELEdBQUcsaUJBQWlCLGtCQUFrQixtQkFBbUIsZUFBZSxHQUFHLGFBQWEsaUJBQWlCLGtCQUFrQixrQkFBa0IsK0JBQStCLDRCQUE0QiwyQ0FBMkMsc0JBQXNCLGtDQUFrQyxHQUFHLG1CQUFtQiwyQ0FBMkMsR0FBRyxjQUFjLHVCQUF1QixhQUFhLGdCQUFnQixjQUFjLGVBQWUsbUJBQW1CLG1CQUFtQixtQkFBbUIsOEJBQThCLHNCQUFzQixHQUFHLG1CQUFtQjtBQUM3MlA7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDakVhOztBQUViLGtDQUFrQzs7QUFFbEMsOEJBQThCOztBQUU5QixrREFBa0QsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRDs7QUFFN1MsdUNBQXVDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLG9CQUFvQjs7QUFFeksseUNBQXlDLDBHQUEwRyx3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQix1Q0FBdUMsY0FBYyxXQUFXLFlBQVksVUFBVSxNQUFNLG1EQUFtRCxVQUFVLHNCQUFzQjs7QUFFbmYsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ25DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSixvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLG1GQUFPLElBQUksMEZBQWMsR0FBRywwRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQSw2QkFBZSxzQ0FBVztBQUMxQiw0QkFBNEIscUZBQXFGO0FBQ2pILHlCQUF5QixnQ0FBZ0M7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxrQkFBa0I7QUFDcEQsOEJBQThCLDBCQUEwQjtBQUN4RCwrQkFBK0IsNkJBQTZCO0FBQzVELCtCQUErQixlQUFlO0FBQzlDLDhCQUE4QixtQkFBbUI7O0FBRWpEO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQsZ0NBQWdDLDJDQUEyQztBQUMzRTtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdrQzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsNENBQTRDLHdHQUF3RztBQUNwSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyRUEsNkJBQWUsb0NBQVM7QUFDeEI7O0FBRUE7QUFDQSxrQ0FBa0Msa0JBQWtCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmtDO0FBQ21GO0FBQzVFO0FBQ2dEOztBQUV6RjtBQUNBLHNCQUFzQix1REFBWSxFQUFFLDBEQUFlLEVBQUUseURBQWMsRUFBRSx5REFBYyxFQUFFLHNEQUFXO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qzs7Ozs7O0FBTXhDLDZFQUE2RTtBQUN0RTtBQUNQLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpRUFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNPO0FBQ1Asb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQ0FBa0M7QUFDdEUscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNkJBQTZCO0FBQ2pFLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsSUFBSSxpRUFBYztBQUNsQjtBQUNBLFFBQVEsaUVBQWM7QUFDdEI7QUFDQTs7QUFFQSxtRUFBbUU7QUFDNUQ7QUFDUCxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEUsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkJBQTZCO0FBQzdELDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEUsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkJBQTZCO0FBQzdELDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksaUVBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9FQUFpQjtBQUN6QjtBQUNBLG1CQUFtQixnRUFBaUI7QUFDcEM7QUFDQSw4QkFBOEIsdURBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtRUFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBVTtBQUNsQztBQUNBO0FBQ0Esd0JBQXdCLHdEQUFVO0FBQ2xDO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQVU7QUFDbEM7QUFDQTtBQUNBLHdCQUF3Qix3REFBVTtBQUNsQztBQUNBO0FBQ0Esd0JBQXdCLHdEQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDblNBLDZCQUFlLG9DQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekMsK0JBQStCLGVBQWU7QUFDOUMsaUNBQWlDLGlCQUFpQjtBQUNsRCxvQ0FBb0Msb0JBQW9CO0FBQ3hELDZCQUE2QixhQUFhO0FBQzFDLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckYwQztBQUNVO0FBQ047O0FBRTlDO0FBQ087QUFDUCx3QkFBd0Isd0RBQVU7QUFDbEM7QUFDQSwyQkFBMkIsd0RBQVU7QUFDckM7QUFDQSwwQkFBMEIsd0RBQVU7QUFDcEM7QUFDQSwwQkFBMEIsd0RBQVU7QUFDcEM7QUFDQSx1QkFBdUIsd0RBQVU7QUFDakM7QUFDQSxzQkFBc0IsNkRBQWU7QUFDckMsdUJBQXVCLHdEQUFVO0FBQ2pDO0FBQ0EsMEJBQTBCLHdEQUFVO0FBQ3BDO0FBQ0EseUJBQXlCLHdEQUFVO0FBQ25DO0FBQ0EseUJBQXlCLHdEQUFVO0FBQ25DO0FBQ0Esc0JBQXNCLHdEQUFVO0FBQ2hDO0FBQ0EscUJBQXFCLDZEQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwREFBWTtBQUM3QixnQkFBZ0IsMERBQVk7QUFDNUI7QUFDQTs7QUFFQTtBQUNPO0FBQ1Asc0JBQXNCLDZEQUFlO0FBQ3JDO0FBQ0EscUJBQXFCLDZEQUFlO0FBQ3BDO0FBQ0EsdUJBQXVCLHdEQUFVO0FBQ2pDO0FBQ0EsMEJBQTBCLHdEQUFVO0FBQ3BDO0FBQ0EseUJBQXlCLHdEQUFVO0FBQ25DO0FBQ0EseUJBQXlCLHdEQUFVO0FBQ25DO0FBQ0Esc0JBQXNCLHdEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwREFBWTtBQUM3QixnQkFBZ0IsMERBQVk7QUFDNUI7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQSxxQkFBcUIsd0RBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0Esd0JBQXdCLHdEQUFVO0FBQ2xDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDTztBQUNQO0FBQ0EsdUJBQXVCLHdEQUFVO0FBQ2pDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDTztBQUNQO0FBQ0EsdUJBQXVCLHdEQUFVO0FBQ2pDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CLHdEQUFVO0FBQzlCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQmlDO0FBQ21CO0FBQ1c7QUFDMEI7O0FBRXpGLDJEQUFRO0FBQ1Isa0JBQWtCLHVEQUFRO0FBQzFCO0FBQ0E7QUFDQSxtRUFBZ0I7QUFDaEIsNkRBQWdCO0FBQ2hCLGlFQUFvQjtBQUNwQiw4REFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9tYW5pcHVsYXRlRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ydW5HYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3RhcnRHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9NYWNoaW5lU3RkLUJvbGQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IDQwdnc7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwOyBib3R0b206IDA7IHJpZ2h0OiAwOyBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDMwdmg7XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1JTtcXG59XFxuXFxuI3dlbGNvbWVQYWdlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbn1cXG5cXG4jbXNnQm9hcmQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIHRvcDogMTN2aDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbn1cXG5cXG4jc3RhcnRCdG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2F4aXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIHRvcDogMTV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IDN2dztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jYXhpc0xhYmVsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB0b3A6IDE1dmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4jYmxhY2tTY3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcXG59XFxuXFxuLnRpdGxlRm9udCB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwOyByaWdodDogMDsgYm90dG9tOiAwOyBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllckJvYXJkIHtcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjV2dztcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxufVxcblxcbi5lbmVteUJvYXJkIHtcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjV2dztcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4udHJhbnNwYXJlbnQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5oaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY2VudGVyVmlldyB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBoZWlnaHQ6IDMwdnc7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiwrREFBd0Q7QUFDNUQ7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPO0lBQ3BDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixNQUFNO0lBQ04seUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPO0lBQ3BDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtBQUNaOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHNyYzogdXJsKFxcXCJmb250cy9NYWNoaW5lU3RkLUJvbGQub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiA0MHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDsgYm90dG9tOiAwOyByaWdodDogMDsgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNSU7XFxufVxcblxcbiN3ZWxjb21lUGFnZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG59XFxuXFxuI21zZ0JvYXJkIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB0b3A6IDEzdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG59XFxuXFxuI3N0YXJ0QnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNheGlzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB0b3A6IDE1dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIHdpZHRoOiAzdnc7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2F4aXNMYWJlbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gICAgdG9wOiAxNXZoO1xcbiAgICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuI2JsYWNrU2NyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBsaW5lYXI7XFxufVxcblxcbi50aXRsZUZvbnQge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXJCb2FyZCB7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDI1dnc7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4uZW5lbXlCb2FyZCB7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDI1dnc7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLnRyYW5zcGFyZW50IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uaGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmNlbnRlclZpZXcge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgaGVpZ2h0OiAzMHZ3O1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxufVxcblxcbi5zcXVhcmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5yZXN0YXJ0IHtcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGxldCBfYm9hcmRTdGF0ZSA9IG51bGw7IC8vMTB4MTAgYXJyYXkgdGhhdCBob2xkcyBib29sIHZhbHVlIHRoYXQgc3BlY2lmaWVzIGlmIHRoYXQgc3BvdCBoYXMgYmVlbiBoaXQgb3Igbm90OyBoaXQgYW5kIG1pc3Mgd2lsbCBiZSBkaWZmZXJlbnQgY29sb3Igb24gdWlcbiAgICBsZXQgX3NoaXBBcnJheSA9IFtdOyAvL2hvbGRzIHRoZSBzaGlwcyBvbiB0aGUgYm9hcmQ7IGlmIGNvb3JkcyBvZiBhbGwgc2hpcHMgYXJlIGVtcHR5IHRoZW4gYm9hcmQgaXMgZW1wdHlcbiAgICBsZXQgX3N0YXR1cyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy9BY2Nlc3NvciBmdW5jdGlvbnNcbiAgICAgICAgZ2V0U2hpcEFycmF5OiBmdW5jdGlvbigpIHtyZXR1cm4gX3NoaXBBcnJheX0sXG4gICAgICAgIGdldFdpZHRoOiBmdW5jdGlvbigpIHtyZXR1cm4gX2JvYXJkU3RhdGUubGVuZ3RofSxcbiAgICAgICAgZ2V0TGVuZ3RoOiBmdW5jdGlvbigpIHtyZXR1cm4gX2JvYXJkU3RhdGVbMF0ubGVuZ3RofSxcbiAgICAgICAgZ2V0U3RhdHVzOiBmdW5jdGlvbigpIHtyZXR1cm4gX3N0YXR1c30sXG4gICAgICAgIGdldEJvYXJkOiBmdW5jdGlvbigpIHtyZXR1cm4gX2JvYXJkU3RhdGV9LFxuXG4gICAgICAgIC8vTXV0YXRvciBmdW5jdGlvbnNcbiAgICAgICAgdXBkYXRlU3RhdHVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3NoaXBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghX3NoaXBBcnJheVtpXS5nZXRJc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3N0YXR1cyA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXRHYW1lYm9hcmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgcm93cyA9IDEwLCBjb2xzID0gMTA7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX2JvYXJkU3RhdGUgPSBuZXcgQXJyYXkocm93cyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIF9ib2FyZFN0YXRlW2ldID0gbmV3IEFycmF5KGNvbHMpLmZpbGwodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2VTaGlwOiBmdW5jdGlvbihzaGlwKSB7XG4gICAgICAgICAgICBfc2hpcEFycmF5LnB1c2goc2hpcCk7XG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlU2hpcFJhbmQ6IGZ1bmN0aW9uKHNoaXApIHtcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKCF2YWxpZCkge1xuICAgICAgICAgICAgICAgIHNoaXAuc2V0UG9zaXRpb25SYW5kKCk7XG4gICAgICAgICAgICAgICAgc2hpcC5zZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5jaGVja1ZhbGlkU2hpcENvb3JkcyhzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9zaGlwQXJyYXkucHVzaChzaGlwKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tWYWxpZFNoaXBDb29yZHM6IGZ1bmN0aW9uKHNoaXApIHtcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAvL0NoZWNrcyB0byBzZWUgaWYgdGhlcmUgYXJlIG92ZXJsYXBzIGJldHdlZW4gcHJlLWV4aXN0aW5nIHNoaXBzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9zaGlwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IF9zaGlwQXJyYXlbaV0uZ2V0Q29vcmRpbmF0ZXMoKS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRzTGVuZ3RoID0gc2hpcC5nZXRDb29yZGluYXRlcygpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb29yZHNMZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDb21wYXJlID0gX3NoaXBBcnJheVtpXS5nZXRDb29yZGluYXRlcygpW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDb29yZCA9IHNoaXAuZ2V0Q29vcmRpbmF0ZXMoKVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29tcGFyZVswXSA9PT0gY3VycmVudENvb3JkWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDb21wYXJlWzFdID09PSBjdXJyZW50Q29vcmRbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0NoZWNrcyB0byBzZWUgaWYgdGhlIG5ldyBzaGlwIGdvZXMgb3V0IG9mIHRoZSBncmliIGJvdW5kc1xuICAgICAgICAgICAgbGV0IHggPSBzaGlwLmdldFBvc2l0aW9uKClbMF07XG4gICAgICAgICAgICBsZXQgeSA9IHNoaXAuZ2V0UG9zaXRpb24oKVsxXTtcbiAgICAgICAgICAgIGlmIChzaGlwLmdldEF4aXMoKSA9PT0gXCJZXCIgfHwgc2hpcC5nZXRBeGlzKCkgPT09XCJ5XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoeSArIHNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh4ICsgc2hpcC5nZXRMZW5ndGgoKSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlQXR0YWNrOiBmdW5jdGlvbihjb29yZGluYXRlKSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IFwiVGhlIGF0dGFjayBoYXMgbWlzc2VkIGFsbCBzaGlwcy5cIjtcbiAgICAgICAgICAgIF9ib2FyZFN0YXRlW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3NoaXBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2hpcCA9IF9zaGlwQXJyYXlbaV07XG4gICAgICAgICAgICAgICAgY3VycmVudFNoaXAuZ2V0Q29vcmRpbmF0ZXMoKS5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVbMF0gPT09IGNvb3JkWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZVsxXSA9PT0gY29vcmRbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gY3VycmVudFNoaXAuaGl0KGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrSWZMb3N0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBsb3N0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBudW1PZlNoaXBzID0gX3NoaXBBcnJheS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mU2hpcHM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChfc2hpcEFycmF5W2ldLmdldENvb3JkaW5hdGVzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsb3N0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxvc3Q7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGUuY3NzXCI7XG5cbi8vQ2FjaGUgRE9NXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5cbi8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdGFydCBnYW1lIGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCdG5zKCkge1xuICAgIGxldCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnRCdG5cIik7XG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgd2VsY29tZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlbGNvbWVQYWdlXCIpO1xuICAgICAgICBsZXQgd2VsY29tZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlbGNvbWVUZXh0XCIpO1xuICAgICAgICB3ZWxjb21lVGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgd2VsY29tZVBhZ2Uuc3R5bGUud2lkdGggPSBcIjAlXCI7XG4gICAgICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH0pO1xuICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpO1xuICAgIGF4aXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTCA9PT0gXCJYXCIpe1xuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gXCJZXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICAgICAgfVxuICAgIH0pXG59XG4gICAgXG5cbi8vRGlzcGxheSB0aGUgcHJpbWl0aXZlIGJvYXJkcyBvbiBzY3JlZW5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJbml0Qm9hcmRzKCkge1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllckJvYXJkXCIpO1xuICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJWaWV3XCIpO1xuICAgIHBsYXllckJvYXJkLmlkID0gXCJwbGF5ZXJCb2FyZFwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICsrKSB7XG4gICAgICAgIGxldCBuZXdTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgICAgbmV3U3F1YXJlLmlkID0gXCJwbGF5ZXJcIiArIGk7IC8vVGhlIG5hbWluZyBvZiB0aGUgaWQgaXMgc28gdGhhdCB0aGUgZ3JpZCBwb3NpdGlvbiBjYW4gYmUgZXh0cmFjdGVkIGZyb20gaXQgdmlhIGlkU3RyaW5nLmNoYXJBdCgwIG9yIDEpO1xuICAgICAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChuZXdTcXVhcmUpOyAvL0lmIHRoZSBpZCBpcyBpbiB0aGUgZmlyc3Qgcm93LCBhIGNoZWNrIHdpbGwgYmUgZG9uZSB0byBzZWUgaWYgdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nIGlzIDUgKFwiZW5lbXlcIjsgNiBmb3IgXCJwbGF5ZXJcIikgcGx1cyAxIG9yIDJcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcblxuICAgIGxldCBlbmVteUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbmVteUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJlbmVteUJvYXJkXCIpO1xuICAgIGVuZW15Qm9hcmQuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgIGVuZW15Qm9hcmQuaWQgPSBcImVuZW15Qm9hcmRcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArKykge1xuICAgICAgICBsZXQgbmV3U3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3U3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICAgIG5ld1NxdWFyZS5pZCA9IFwiZW5lbXlcIiArIGk7XG4gICAgICAgIGVuZW15Qm9hcmQuYXBwZW5kQ2hpbGQobmV3U3F1YXJlKTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Qm9hcmQpO1xufVxuXG4vL0Z1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgbWVzc2FnZUJvYXJkIHdpdGggdGhlIGNvbnNvbGUgbWVzc2FnZXMgdGhhdCByZXBvcnQgd2hhdCBoYXMgaGFwcGVuZWRcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVNc2dCb2FyZChtc2cpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpO1xuICAgIGxldCBtc2dCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXNnQm9hcmRcIik7XG4gICAgbXNnQm9hcmQudGV4dENvbnRlbnQgPSBtc2c7XG59XG5cbi8vRnVuY3Rpb24gZm9yIGRpc3BsYXlpbmcgYSBibGFjayBzY3JlZW5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVCbGFja1NjcmVlbigpIHtcbiAgICBpZiAoYmxhY2tTY3JlZW4uY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBibGFja1NjcmVlbi5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBibGFja1NjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGdhbWVib2FyZCkge1xuICAgIGxldCBfZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0R2FtZWJvYXJkOiBmdW5jdGlvbigpIHtyZXR1cm4gX2dhbWVib2FyZH0sXG4gICAgICAgIGF0dGFjazogZnVuY3Rpb24ocGxheWVyLCBjb29yZGluYXRlKSB7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSxcbiAgICAgICAgYXR0YWNrUmFuZG9tOiBmdW5jdGlvbihwbGF5ZXIpIHtcbiAgICAgICAgICAgIGxldCBpc05ld0Nvb3JkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgcmFuZFJvdyA9IG51bGw7XG4gICAgICAgICAgICBsZXQgcmFuZENvbCA9IG51bGw7XG4gICAgICAgICAgICB3aGlsZSAoIWlzTmV3Q29vcmQpIHtcbiAgICAgICAgICAgICAgICByYW5kUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIHJhbmRDb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKCFwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0Qm9hcmQoKVtyYW5kQ29sXVtyYW5kUm93XSkge1xuICAgICAgICAgICAgICAgICAgICBpc05ld0Nvb3JkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucmVjZWl2ZUF0dGFjayhbcmFuZENvbCwgcmFuZFJvd10pO1xuICAgICAgICAgICAgcmV0dXJuIHJhbmRDb2wgKyBcIlwiICsgcmFuZFJvdyArIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcGxhY2VDYXJyaWVyLCBwbGFjZUJhdHRsZXNoaXAsIHBsYWNlRGVzdHJveWVyLCBwbGFjZVN1Ym1hcmluZSwgcGxhY2VQYXRyb2wsIGluaXRHYW1lfSBmcm9tIFwiLi9zdGFydEdhbWUuanNcIjtcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gXCIuL3NoaXBGYWN0b3J5LmpzXCJcbmltcG9ydCB7IHJlbmRlckluaXRCb2FyZHMsIHVwZGF0ZU1zZ0JvYXJkLCB0b2dnbGVCbGFja1NjcmVlbiB9IGZyb20gXCIuL21hbmlwdWxhdGVET00uanNcIjtcblxuLy9BcnJheSBhbmQgaW5kZXggYXJlIGZvciBjaGFuZ2luZyB0aGUgcGxhY2VDdXJyZW50U2hpcCBmdW5jdGlvbiB0byBwbGFjZSBhbGwgc2hpcHNcbmxldCBwbGFjZVNoaXBBcnJheSA9IFtwbGFjZUNhcnJpZXIsIHBsYWNlQmF0dGxlc2hpcCwgcGxhY2VEZXN0cm95ZXIsIHBsYWNlU3VibWFyaW5lLCBwbGFjZVBhdHJvbF07XG5sZXQgc2hpcFN0cmluZ0FycmF5ID0gW1wiQ2FycmllclwiLCBcIkJhdHRsZXNoaXBcIiwgXCJEZXN0cm95ZXJcIiwgXCJTdWJtYXJpbmVcIiwgXCJQYXRyb2xcIl07XG5sZXQgaW5kZXggPSAwO1xuLy9BcnJheSBvZiBudW1iZXJzIHRvIHJlcHJlc2VudCB0aGUgbGVuZ3RoIG9mIHRoZSBjdXJyZW50IHNoaXAgYmVpZ24gcGxhY2VkIHRvIHN1cHBvcnQgaGlnaGxpZ2h0aW5nXG5sZXQgY3VycmVudEhpZ2hsaWdodCA9IFs1LCA0LCAzLCAzLCAyXTsgLy9DYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sXG5cblxuXG5cblxuLy9OZWVkZWQgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgZW5lbXkgc3F1YXJlcyBmb3IgaW5pdGlhdGluZyBhdHRhY2tzOyB0aGlzIGZ1bmN0aW9uIGlzIGEgbGl0dGxlIGxvbmcgYmVjYXVzZSBpdCBpbmNsdWRlcyBnYW1lIGZ1bmN0aW9uYWxpdHkgYWxvbmcgd2l0aCBET00gbWFuaXB1bGF0aW9uXG5leHBvcnQgZnVuY3Rpb24gYWRkQXR0YWNrTGlzdGVuZXIoZW5lbXksIHBsYXllcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IFwiZW5lbXlcIiArIGk7XG4gICAgICAgIGxldCBjdXJyZW50U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGN1cnJlbnRJZCk7XG4gICAgICAgIGN1cnJlbnRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGxldCB4ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCB5ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SWQubGVuZ3RoID09PSA2KSB7XG4gICAgICAgICAgICAgICAgeCA9IHBhcnNlSW50KGN1cnJlbnRJZC5jaGFyQXQoNSkpO1xuICAgICAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeCA9IHBhcnNlSW50KGN1cnJlbnRJZC5jaGFyQXQoNikpO1xuICAgICAgICAgICAgICAgIHkgPSBwYXJzZUludChjdXJyZW50SWQuY2hhckF0KDUpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBtc2cgPSBwbGF5ZXIuYXR0YWNrKGVuZW15LCBbeCwgeV0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBlLnRhcmdldC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBpZiAobXNnLmluY2x1ZGVzKFwibWlzc2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgY2xvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNylcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsb25lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnRhcmdldC5yZXBsYWNlV2l0aChjbG9uZSk7XG4gICAgICAgICAgICB1cGRhdGVNc2dCb2FyZChcIlBsYXllciBBdHRhY2s6IFwiICsgbXNnKTtcbiAgICAgICAgICAgIGlmIChlbmVteS5nZXRHYW1lYm9hcmQoKS5nZXRTdGF0dXMoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0cnVlKTtcbiAgICAgICAgICAgICAgICByZXN0YXJ0R2FtZShcIlBsYXllciBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3TXNnID0gZW5lbXkuYXR0YWNrUmFuZG9tKHBsYXllcik7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkcyA9IG5ld01zZy5zbGljZSgwLCAyKTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoY29vcmRzLmNoYXJBdCgxKSA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIitjb29yZHMuY2hhckF0KDApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIitjb29yZHMuY2hhckF0KDEpK2Nvb3Jkcy5jaGFyQXQoMCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV3TXNnLmluY2x1ZGVzKFwibWlzc2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC43KVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld01zZyA9IG5ld01zZy5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgICAgICAgdXBkYXRlTXNnQm9hcmQoXCJFbmVteSBBdHRhY2s6IFwiICsgbmV3TXNnKTtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmdldEdhbWVib2FyZCgpLmdldFN0YXR1cygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3RhcnRHYW1lKFwiRW5lbXkgXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8vRnVuY3Rpb24gZm9yIGFkZGluZyBldmVudCBMaXN0ZW5lcnMgZm9yIHBsYWNpbmcgc2hpcHMgb24gcGxheWVyQm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBhZGRQbGFjZUxpc3RlbmVyKHBsYXllcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IFwicGxheWVyXCIgKyBpO1xuICAgICAgICBsZXQgY3VycmVudFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBjdXJyZW50SWQpO1xuICAgICAgICBjdXJyZW50U3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL1NlY3Rpb24gZGVhbHMgd2l0aCBhY3R1YWxseSBwbGFjaW5nIHRoZSBzaGlwIGludG8gdGhlIHNoaXBBcnJheVxuICAgICAgICAgICAgbGV0IHggPSBudWxsO1xuICAgICAgICAgICAgbGV0IHkgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJZC5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgICAgICB4ID0gcGFyc2VJbnQoY3VycmVudElkLmNoYXJBdCg2KSk7XG4gICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gcGFyc2VJbnQoY3VycmVudElkLmNoYXJBdCg3KSk7XG4gICAgICAgICAgICAgICAgeSA9IHBhcnNlSW50KGN1cnJlbnRJZC5jaGFyQXQoNikpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gW3gsIHldO1xuICAgICAgICAgICAgbGV0IGR1bW15U2hpcCA9IGNyZWF0ZUR1bW15U2hpcChwb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAocGxheWVyLmdldEdhbWVib2FyZCgpLmNoZWNrVmFsaWRTaGlwQ29vcmRzKGR1bW15U2hpcCkpIHtcblxuXG4gICAgICAgICAgICAgICAgLy9TZWN0aW9uIGRlYWxzIHdpdGggbWFya2luZyB0aGUgc3F1YXJlcyB0aGF0IHRoZSBzaGlwIElTIHBsYWNlZCBpblxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2hpcExlbmd0aCA9IGN1cnJlbnRIaWdobGlnaHRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJZXCIgfHwgYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCAoaSArICgxMCpjdXJyZW50U2hpcExlbmd0aCkpOyBqKz0xMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPiA5OSkgey8vQ2hlY2tzIGZvciBpZiBqIGlzIGxlYXZpbmcgdGhlIGdyaWQgYm91bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBcIiNwbGF5ZXJcIiArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IChpICsgY3VycmVudFNoaXBMZW5ndGgpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID4gKE1hdGguZmxvb3IoKGkrMTApLzEwKSkqMTAtMSl7Ly9DaGVja3MgZm9yIGlmIGogaXMgbGVhdmluZyB0aGUgZ3JpZCBib3VuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IFwiI3BsYXllclwiICsgajtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgcGxhY2VDdXJyZW50U2hpcCA9IHBsYWNlU2hpcEFycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICBwbGFjZUN1cnJlbnRTaGlwKHBsYXllciwgcG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgcmVjcmVhdGVTcXVhcmVzKHBsYXllcik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VDdXJyZW50U2hpcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyQm9hcmRcIikuY2xhc3NMaXN0LnJlbW92ZShcImNlbnRlclZpZXdcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW5lbXlCb2FyZFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGhpcyBpcyBub3QgYSB2YWxpZCBwb3NpdGlvblwiO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdXBkYXRlTXNnQm9hcmQoXCJQbGVhc2UgY2hvb3NlIGEgbG9jYXRpb24gdG8gcGxhY2UgeW91ciBcIiArIHNoaXBTdHJpbmdBcnJheVtpbmRleF0gKyBcIi5cIik7XG4gICAgaWYgKGluZGV4ID09PSA1KSB7XG4gICAgICAgIHVwZGF0ZU1zZ0JvYXJkKFwiQ2hvb3NlIGEgbG9jYXRpb24gdG8gYXR0YWNrLlwiKTtcbiAgICB9XG59XG5cbi8vTGlzdGVuZXIgdG8gaGlnaGxpZ2h0IHRoZSBzcXVhcmVzIHdoZXJlIHRoZSBzaGlwIFdJTEwgQkUgcGxhY2VkOyBvbmx5IGFjdGl2ZSBpbiB0aGUgcGxhY2luZyBzaGlwIHBoYXNlXG5leHBvcnQgZnVuY3Rpb24gYWRkSGlnaGxpZ2h0TGlzdGVuZXIoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudElkID0gXCJwbGF5ZXJcIiArIGk7XG4gICAgICAgIGxldCBjdXJyZW50U2hpcExlbmd0aCA9IGN1cnJlbnRIaWdobGlnaHRbaW5kZXhdO1xuICAgICAgICBsZXQgY3VycmVudFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBjdXJyZW50SWQpO1xuICAgICAgICAvL1RoZSBsaXN0ZW5lciB1c2VkIHRvIGhpZ2hsaWdodFxuICAgICAgICBjdXJyZW50U3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwiWVwiIHx8IGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCAoaSArICgxMCpjdXJyZW50U2hpcExlbmd0aCkpOyBqKz0xMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA+IDk5KSB7Ly9DaGVja3MgZm9yIGlmIGogaXMgbGVhdmluZyB0aGUgZ3JpZCBib3VuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IFwiI3BsYXllclwiICsgajtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IChpICsgY3VycmVudFNoaXBMZW5ndGgpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPiAoTWF0aC5mbG9vcigoaSsxMCkvMTApKSoxMC0xKXsvL0NoZWNrcyBmb3IgaWYgaiBpcyBsZWF2aW5nIHRoZSBncmlkIGJvdW5kc1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gXCIjcGxheWVyXCIgKyBqO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy9UaGUgbGlzdGVuZXIgdXNlZCB0byB1bmhpZ2hsaWdodFxuICAgICAgICBjdXJyZW50U3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwiWVwiIHx8IGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCAoaSArICgxMCpjdXJyZW50U2hpcExlbmd0aCkpOyBqKz0xMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA+IDk5KSB7Ly9DaGVja3MgZm9yIGlmIGogaXMgbGVhdmluZyB0aGUgZ3JpZCBib3VuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IFwiI3BsYXllclwiICsgajtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IChpICsgY3VycmVudFNoaXBMZW5ndGgpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPiAoTWF0aC5mbG9vcigoaSsxMCkvMTApKSoxMC0xKXsvL0NoZWNrcyBmb3IgaWYgaiBpcyBsZWF2aW5nIHRoZSBncmlkIGJvdW5kc1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gXCIjcGxheWVyXCIgKyBqO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuLy9UaGUgc2VjdGlubyBiZWxvdyBob2xkcyBhIGNvdXBsZSBvZiBoZWxwZXIgZnVuY3Rpb25zXG5cblxuLy9GdW5jdGlvbiBmb3IgcmVtb3ZpbmcgYWxsIExpc3RlbmVycyAob24gcGxheWVyQm9hcmQpXG5mdW5jdGlvbiByZW1vdmVQbGF5ZXJMaXN0ZW5lcnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudElkID0gXCJwbGF5ZXJcIiArIGk7XG4gICAgICAgIGxldCBjdXJyZW50U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGN1cnJlbnRJZCk7XG4gICAgICAgIGN1cnJlbnRTcXVhcmUucmVwbGFjZVdpdGgoY3VycmVudFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbn1cblxuLy9GdW5jdGlvbiBmb3IgcmVtb3ZpbmcgYWxsIGxpc3RlbmVycyAob24gZW5lbXlCb2FyZClcbmZ1bmN0aW9uIHJlbW92ZUVuZW15TGlzdGVuZXJzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IFwiZW5lbXlcIiArIGk7XG4gICAgICAgIGxldCBjdXJyZW50U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGN1cnJlbnRJZCk7XG4gICAgICAgIGN1cnJlbnRTcXVhcmUucmVwbGFjZVdpdGgoY3VycmVudFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbn1cblxuLy9GdW5jdGlvbiB0aGF0IHdpbGwgcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgYW5kIGRpc3BsYXkgYSByZXN0YXJ0IGdhbWUgYnV0dG9uXG5mdW5jdGlvbiByZXN0YXJ0R2FtZSh3aW5uZXIpIHtcbiAgICB1cGRhdGVNc2dCb2FyZCh3aW5uZXIgKyBcImhhcyB3b24gdGhlIGdhbWUuXCIpO1xuICAgIHJlbW92ZVBsYXllckxpc3RlbmVycygpO1xuICAgIHJlbW92ZUVuZW15TGlzdGVuZXJzKCk7XG4gICAgbGV0IHJlc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlc3RhcnQuY2xhc3NMaXN0LmFkZChcInJlc3RhcnRcIik7XG4gICAgcmVzdGFydC50ZXh0Q29udGVudCA9IFwiUmVzdGFydCBHYW1lP1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKHJlc3RhcnQpO1xuICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2dnbGVCbGFja1NjcmVlbigpO1xuICAgICAgICByZXN0YXJ0LnJlbW92ZSgpO1xuICAgICAgICBzZXRUaW1lb3V0KHRvZ2dsZUJsYWNrU2NyZWVuLCAyMDAwKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJBcnJheSA9IGluaXRHYW1lKCk7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gcGxheWVyQXJyYXlbMF07XG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBwbGF5ZXJBcnJheVsxXTtcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVySW5pdEJvYXJkcygpO1xuICAgICAgICAgICAgYWRkUGxhY2VMaXN0ZW5lcihwbGF5ZXIpO1xuICAgICAgICAgICAgYWRkSGlnaGxpZ2h0TGlzdGVuZXIoKTtcbiAgICAgICAgICAgIGFkZEF0dGFja0xpc3RlbmVyKGVuZW15LCBwbGF5ZXIpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbn1cblxuLy9GdW5jdGlvbiB0byByZWNyZWF0ZSBhbGwgdGhlIHNxdWFyZXMgYW5kIHJlYXR0YWNoIGFsbCB0aGUgbGlzdGVuZXJzIChuZWVkZWQgdG8gY2hhbmdlIGhpZ2hsaWdodCBsZW5ndGgpXG5mdW5jdGlvbiByZWNyZWF0ZVNxdWFyZXMocGxheWVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudElkID0gXCJwbGF5ZXJcIiArIGk7XG4gICAgICAgIGxldCBjdXJyZW50U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGN1cnJlbnRJZCk7XG4gICAgICAgIGN1cnJlbnRTcXVhcmUucmVwbGFjZVdpdGgoY3VycmVudFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgICBhZGRQbGFjZUxpc3RlbmVyKHBsYXllcik7XG4gICAgYWRkSGlnaGxpZ2h0TGlzdGVuZXIoKTtcbn1cblxuLy9GdW5jdGlvbiB0byBjcmVhdGUgYSBkdW1teSBzaGlwIHRvIGNoZWNrIGZvciB2YWxpZCBwbGFjZW1lbnRcbmZ1bmN0aW9uIGNyZWF0ZUR1bW15U2hpcChwb3NpdGlvbikge1xuICAgIGxldCBkdW1teVNoaXAgPSBudWxsO1xuICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZHVtbXlTaGlwID0gY3JlYXRlU2hpcChcIkNhcnJpZXJcIiwgNSwgcG9zaXRpb24sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICBkdW1teVNoaXAgPSBjcmVhdGVTaGlwKFwiQmF0dGxlc2hpcFwiLCA0LCBwb3NpdGlvbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgZHVtbXlTaGlwID0gY3JlYXRlU2hpcChcIkRlc3Ryb3llclwiLCAzLCBwb3NpdGlvbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgZHVtbXlTaGlwID0gY3JlYXRlU2hpcChcIlN1Ym1hcmluZVwiLCAzLCBwb3NpdGlvbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OiBcbiAgICAgICAgICAgIGR1bW15U2hpcCA9IGNyZWF0ZVNoaXAoXCJQYXRyb2xcIiwgMiwgcG9zaXRpb24sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUwpO1xuICAgIH1cbiAgICBkdW1teVNoaXAuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICByZXR1cm4gZHVtbXlTaGlwO1xufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBsZW5ndGgsIHBvc2l0aW9uLCBheGlzKSB7XG4gICAgbGV0IF9uYW1lID0gbmFtZTtcbiAgICBsZXQgX2xlbmd0aCA9IGxlbmd0aDtcbiAgICBsZXQgX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgbGV0IF9heGlzID0gYXhpcztcbiAgICBsZXQgX2Nvb3JkaW5hdGVzID0gbnVsbDtcbiAgICBsZXQgX2lzU3VuayA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy9BY2Nlc3NvciBmdW5jdGlvbnNcbiAgICAgICAgZ2V0TmFtZTogZnVuY3Rpb24oKXtyZXR1cm4gX25hbWV9LFxuICAgICAgICBnZXRMZW5ndGg6IGZ1bmN0aW9uKCkge3JldHVybiBfbGVuZ3RofSxcbiAgICAgICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uKCkge3JldHVybiBfcG9zaXRpb259LFxuICAgICAgICBnZXRDb29yZGluYXRlczogZnVuY3Rpb24oKSB7cmV0dXJuIF9jb29yZGluYXRlc30sXG4gICAgICAgIGdldEF4aXM6IGZ1bmN0aW9uKCkge3JldHVybiBfYXhpc30sXG4gICAgICAgIGdldElzU3VuazogZnVuY3Rpb24oKSB7cmV0dXJuIF9pc1N1bmt9LFxuICAgICAgICAvL011dGF0b3IgZnVuY3Rpb25zXG4gICAgICAgIHNldFBvc2l0aW9uOiBmdW5jdGlvbihjb29yZGluYXRlcykge1xuICAgICAgICAgICAgX2Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFBvc2l0aW9uUmFuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IG51bGw7XG4gICAgICAgICAgICBsZXQgYXhpcyA9IFwiXCI7XG4gICAgICAgICAgICB3aGlsZSghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPj0gMC41KSB7XG4gICAgICAgICAgICAgICAgICAgIGF4aXMgPSBcInhcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uWzBdICsgX2xlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXhpcyA9IFwieVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25bMV0gKyBfbGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgICBfYXhpcyA9IGF4aXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldENvb3JkaW5hdGVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IG5ldyBBcnJheShfbGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChfYXhpcyA9PT0gXCJYXCIgfHwgX2F4aXMgPT09XCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IF9wb3NpdGlvblsxXTtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IF9wb3NpdGlvblswXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1tpXSA9IFt4ICsgaSwgeV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IF9wb3NpdGlvblsxXTtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IF9wb3NpdGlvblswXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1tpXSA9IFt4LCB5ICsgaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGhpdDogZnVuY3Rpb24oY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZVswXSA9PT0gX2Nvb3JkaW5hdGVzW2ldWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlWzFdID09PSBfY29vcmRpbmF0ZXNbaV1bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb29yZGluYXRlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX2Nvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF9pc1N1bmsgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9pc1N1bmspIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX25hbWUgKyBcIiBoYXMgYmVlbiBkZXN0cm95ZWQhISFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbmFtZSArIFwiIGhhcyBiZWVuIGhpdCEhIVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBjcmVhdGVTaGlwIGZyb20gXCIuL3NoaXBGYWN0b3J5LmpzXCI7XG5pbXBvcnQgY3JlYXRlR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZEZhY3RvcnkuanNcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyRmFjdG9yeS5qc1wiO1xuXG4vL0Z1bmN0aW9uIHRvIGluaXQgYWxsIGdhbWUgdmFsdWVzIHdpdGggdGVzdCB2YXJpYWJsZXNcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0R2FtZSgpIHtcbiAgICBsZXQgcGxheWVyQ2FycmllciA9IGNyZWF0ZVNoaXAoXCJDYXJyaWVyXCIsIDUsIFsxLCAxXSwgXCJ5XCIpO1xuICAgIHBsYXllckNhcnJpZXIuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgcGxheWVyQmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoXCJCYXR0bGVzaGlwXCIsIDQsIFszLCAxXSwgXCJ4XCIpO1xuICAgIHBsYXllckJhdHRsZXNoaXAuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgcGxheWVyRGVzdHJveWVyID0gY3JlYXRlU2hpcChcIkRlc3Ryb3llclwiLCAzLCBbNiwgOV0sIFwieFwiKTtcbiAgICBwbGF5ZXJEZXN0cm95ZXIuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgcGxheWVyU3VibWFyaW5lID0gY3JlYXRlU2hpcChcIlN1Ym1hcmluZVwiLCAzLCBbNSwgNV0sIFwieVwiKTtcbiAgICBwbGF5ZXJTdWJtYXJpbmUuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgcGxheWVyUGF0cm9sID0gY3JlYXRlU2hpcChcIlBhdHJvbFwiLCAyLCBbOCwgMl0sIFwieVwiKTtcbiAgICBwbGF5ZXJQYXRyb2wuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgICBsZXQgZW5lbXlDYXJyaWVyID0gY3JlYXRlU2hpcChcIkNhcnJpZXJcIiwgNSwgWzEsIDFdLCBcInlcIik7XG4gICAgZW5lbXlDYXJyaWVyLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15QmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoXCJCYXR0bGVzaGlwXCIsIDQsIFszLCAxXSwgXCJ4XCIpO1xuICAgIGVuZW15QmF0dGxlc2hpcC5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBlbmVteURlc3Ryb3llciA9IGNyZWF0ZVNoaXAoXCJEZXN0cm95ZXJcIiwgMywgWzYsIDldLCBcInhcIik7XG4gICAgZW5lbXlEZXN0cm95ZXIuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgZW5lbXlTdWJtYXJpbmUgPSBjcmVhdGVTaGlwKFwiU3VibWFyaW5lXCIsIDMsIFs1LCA1XSwgXCJ5XCIpO1xuICAgIGVuZW15U3VibWFyaW5lLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15UGF0cm9sID0gY3JlYXRlU2hpcChcIlBhdHJvbFwiLCAyLCBbOCwgMl0sIFwieVwiKTtcbiAgICBlbmVteVBhdHJvbC5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBlbmVteUJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgcGxheWVyQm9hcmQuaW5pdEdhbWVib2FyZCgpO1xuICAgIGVuZW15Qm9hcmQuaW5pdEdhbWVib2FyZCgpO1xuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJDYXJyaWVyKTtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyQmF0dGxlc2hpcCk7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckRlc3Ryb3llcik7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclN1Ym1hcmluZSk7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclBhdHJvbCk7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15Q2Fycmllcik7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15QmF0dGxlc2hpcCk7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15RGVzdHJveWVyKTtcbiAgICBlbmVteUJvYXJkLnBsYWNlU2hpcFJhbmQoZW5lbXlTdWJtYXJpbmUpO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteVBhdHJvbCk7XG4gICAgbGV0IHBsYXllciA9IGNyZWF0ZVBsYXllcihwbGF5ZXJCb2FyZCk7XG4gICAgbGV0IGVuZW15ID0gY3JlYXRlUGxheWVyKGVuZW15Qm9hcmQpO1xuICAgIHJldHVybiBbcGxheWVyLCBlbmVteV07XG59XG5cbi8vRnVuY3Rpb24gdG8gaW5pdCBlbXB0eSBib2FyZCBhbmQgcGxheWVyIG9iamVjdHNcbmV4cG9ydCBmdW5jdGlvbiBpbml0R2FtZSgpIHtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgICBwbGF5ZXJCb2FyZC5pbml0R2FtZWJvYXJkKCk7XG4gICAgbGV0IGVuZW15Qm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgICBlbmVteUJvYXJkLmluaXRHYW1lYm9hcmQoKTtcbiAgICBsZXQgZW5lbXlDYXJyaWVyID0gY3JlYXRlU2hpcChcIkNhcnJpZXJcIiwgNSwgWzEsIDFdLCBcInlcIik7XG4gICAgZW5lbXlDYXJyaWVyLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15QmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoXCJCYXR0bGVzaGlwXCIsIDQsIFszLCAxXSwgXCJ4XCIpO1xuICAgIGVuZW15QmF0dGxlc2hpcC5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBlbmVteURlc3Ryb3llciA9IGNyZWF0ZVNoaXAoXCJEZXN0cm95ZXJcIiwgMywgWzYsIDldLCBcInhcIik7XG4gICAgZW5lbXlEZXN0cm95ZXIuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgZW5lbXlTdWJtYXJpbmUgPSBjcmVhdGVTaGlwKFwiU3VibWFyaW5lXCIsIDMsIFs1LCA1XSwgXCJ5XCIpO1xuICAgIGVuZW15U3VibWFyaW5lLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15UGF0cm9sID0gY3JlYXRlU2hpcChcIlBhdHJvbFwiLCAyLCBbOCwgMl0sIFwieVwiKTtcbiAgICBlbmVteVBhdHJvbC5zZXRDb29yZGluYXRlcygpO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteUNhcnJpZXIpO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteUJhdHRsZXNoaXApO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteURlc3Ryb3llcik7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15U3VibWFyaW5lKTtcbiAgICBlbmVteUJvYXJkLnBsYWNlU2hpcFJhbmQoZW5lbXlQYXRyb2wpO1xuICAgIGxldCBwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIocGxheWVyQm9hcmQpO1xuICAgIGxldCBlbmVteSA9IGNyZWF0ZVBsYXllcihlbmVteUJvYXJkKTtcbiAgICByZXR1cm4gW3BsYXllciwgZW5lbXldO1xufVxuXG4vL0Z1bmN0aW9uIGZvciBwbGFjaW5nIGNhcnJpZXIgb24gcGxheWVyQm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZUNhcnJpZXIocGxheWVyLCBwb3NpdGlvbikge1xuICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTDtcbiAgICBsZXQgbmV3Q2FycmllciA9IGNyZWF0ZVNoaXAoXCJDYXJyaWVyXCIsIDUsIHBvc2l0aW9uLCBheGlzKTtcbiAgICBuZXdDYXJyaWVyLnNldENvb3JkaW5hdGVzKCk7XG4gICAgY29uc29sZS5sb2cobmV3Q2Fycmllci5nZXRDb29yZGluYXRlcygpKVxuICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5wbGFjZVNoaXAobmV3Q2Fycmllcik7XG59XG5cbi8vRnVuY3Rpb24gZm9yIHBsYWNpbmcgY2FycmllciBvbiBwbGF5ZXJCb2FyZFxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlQmF0dGxlc2hpcChwbGF5ZXIsIHBvc2l0aW9uKSB7XG4gICAgbGV0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikuaW5uZXJIVE1MO1xuICAgIGxldCBuZXdCYXR0bGVzaGlwID0gY3JlYXRlU2hpcChcIkJhdHRsZXNoaXBcIiwgNCwgcG9zaXRpb24sIGF4aXMpO1xuICAgIG5ld0JhdHRsZXNoaXAuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucGxhY2VTaGlwKG5ld0JhdHRsZXNoaXApO1xufVxuXG5cbi8vRnVuY3Rpb24gZm9yIHBsYWNpbmcgY2FycmllciBvbiBwbGF5ZXJCb2FyZFxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlRGVzdHJveWVyKHBsYXllciwgcG9zaXRpb24pIHtcbiAgICBsZXQgYXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUw7XG4gICAgbGV0IG5ld0Rlc3Ryb3llciA9IGNyZWF0ZVNoaXAoXCJEZXN0cm95ZXJcIiwgMywgcG9zaXRpb24sIGF4aXMpO1xuICAgIG5ld0Rlc3Ryb3llci5zZXRDb29yZGluYXRlcygpO1xuICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5wbGFjZVNoaXAobmV3RGVzdHJveWVyKTtcbn1cblxuXG4vL0Z1bmN0aW9uIGZvciBwbGFjaW5nIGNhcnJpZXIgb24gcGxheWVyQm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVN1Ym1hcmluZShwbGF5ZXIsIHBvc2l0aW9uKSB7XG4gICAgbGV0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikuaW5uZXJIVE1MO1xuICAgIGxldCBuZXdTdWJtYXJpbmUgPSBjcmVhdGVTaGlwKFwiU3VibWFyaW5lXCIsIDMsIHBvc2l0aW9uLCBheGlzKTtcbiAgICBuZXdTdWJtYXJpbmUuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucGxhY2VTaGlwKG5ld1N1Ym1hcmluZSk7XG59XG5cblxuLy9GdW5jdGlvbiBmb3IgcGxhY2luZyBjYXJyaWVyIG9uIHBsYXllckJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VQYXRyb2wocGxheWVyLCBwb3NpdGlvbikge1xuICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTDtcbiAgICBsZXQgbmV3UGF0cm9sID0gY3JlYXRlU2hpcChcIlBhdHJvbFwiLCAyLCBwb3NpdGlvbiwgYXhpcyk7XG4gICAgbmV3UGF0cm9sLnNldENvb3JkaW5hdGVzKCk7IFxuICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5wbGFjZVNoaXAobmV3UGF0cm9sKTtcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHsgdGVzdEdhbWUsIGluaXRHYW1lIH0gZnJvbSBcIi4vc3RhcnRHYW1lLmpzXCI7XG5pbXBvcnQgeyBpbml0QnRucywgcmVuZGVySW5pdEJvYXJkc30gZnJvbSBcIi4vbWFuaXB1bGF0ZURPTS5qc1wiO1xuaW1wb3J0IHsgYWRkQXR0YWNrTGlzdGVuZXIsIGFkZFBsYWNlTGlzdGVuZXIsIGFkZEhpZ2hsaWdodExpc3RlbmVyIH0gZnJvbSBcIi4vcnVuR2FtZS5qc1wiO1xuXG5pbml0QnRucygpO1xubGV0IHBsYXllckFycmF5ID0gaW5pdEdhbWUoKTtcbmxldCBwbGF5ZXIgPSBwbGF5ZXJBcnJheVswXTtcbmxldCBlbmVteSA9IHBsYXllckFycmF5WzFdO1xucmVuZGVySW5pdEJvYXJkcygpO1xuYWRkUGxhY2VMaXN0ZW5lcihwbGF5ZXIpO1xuYWRkSGlnaGxpZ2h0TGlzdGVuZXIoKTtcbmFkZEF0dGFja0xpc3RlbmVyKGVuZW15LCBwbGF5ZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9