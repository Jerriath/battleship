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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"MyFont\";\n    font-weight: bold;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\");\n}\n\nbody {\n    background-color: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n\nh1 {\n    font-family: \"MyFont\";\n}\n\n#container {\n    width: 70%;\n    height: 40vw;\n    position: relative;\n    top: 0; bottom: 0; right: 0; left: 0;\n    margin: auto;\n    margin-top: 30vh;\n    font-size: 0;\n    position: relative;\n    top: 25%;\n}\n\n#welcomePage {\n    color: white;\n    background-color: black;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    text-align: center;\n    transition: all 0.5s linear;\n}\n\n#msgBoard {\n    text-align: center;\n    position: relative; \n    top: 13vh;\n    font-family: \"MyFont\";\n}\n\n#startBtn {\n    position: absolute;\n    top: 60%;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\n#axis {\n    text-align: center;\n    position: relative; \n    top: 15vh;\n    cursor: pointer;\n    height: 3vh;\n    width: 3vw;\n    font-size: 20px;\n}\n\n#axisLabel {\n    text-align: center;\n    position: relative; \n    top: 15vh;\n    font-family: \"MyFont\";\n}\n\n#header {\n    text-align: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n.titleFont {\n    height: 100px;\n    width: 400px;\n    font-size: 100px;\n    text-decoration: underline;\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    margin: auto;\n    margin-top: 25px;\n    text-align: center;\n}\n\n.playerBoard {\n    width: 25vw;\n    min-width: 300px;\n    height: 25vw;\n    min-height: 300px;\n    position: absolute;\n    left: 0;\n    margin: auto;\n    border: 1px solid black;\n    display: inline-block;\n    transition: all 0.2s linear;\n}\n\n.enemyBoard {\n    width: 25vw;\n    min-width: 300px;\n    height: 25vw;\n    min-height: 300px;\n    position: absolute;\n    right: 0;\n    margin: auto;\n    border: 1px solid black;\n    display: inline-block;\n    transition: all 0.2s linear;\n}\n\n.transparent {\n    opacity: 0;\n}\n\n.centerView {\n    width: 30vw;\n    height: 30vw;\n    right: 0;\n}\n\n.square {\n    width: 10%;\n    height: 10%;\n    margin: 0px;\n    outline: 1px solid black;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    transition: all 0.2s linear;\n}\n\n.square:hover {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,+DAAwD;AAC5D;;AAEA;IACI,oCAAoC;IACpC,WAAW;IACX,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,MAAM,EAAE,SAAS,EAAE,QAAQ,EAAE,OAAO;IACpC,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,UAAU;IACV,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,eAAe;IACf,WAAW;IACX,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,0BAA0B;IAC1B,kBAAkB;IAClB,MAAM,EAAE,QAAQ,EAAE,SAAS,EAAE,OAAO;IACpC,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,OAAO;IACP,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,UAAU;IACV,WAAW;IACX,WAAW;IACX,wBAAwB;IACxB,qBAAqB;IACrB,oCAAoC;IACpC,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":["@font-face {\n    font-family: \"MyFont\";\n    font-weight: bold;\n    src: url(\"fonts/MachineStd-Bold.otf\") format(\"opentype\");\n}\n\nbody {\n    background-color: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n\nh1 {\n    font-family: \"MyFont\";\n}\n\n#container {\n    width: 70%;\n    height: 40vw;\n    position: relative;\n    top: 0; bottom: 0; right: 0; left: 0;\n    margin: auto;\n    margin-top: 30vh;\n    font-size: 0;\n    position: relative;\n    top: 25%;\n}\n\n#welcomePage {\n    color: white;\n    background-color: black;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    text-align: center;\n    transition: all 0.5s linear;\n}\n\n#msgBoard {\n    text-align: center;\n    position: relative; \n    top: 13vh;\n    font-family: \"MyFont\";\n}\n\n#startBtn {\n    position: absolute;\n    top: 60%;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\n#axis {\n    text-align: center;\n    position: relative; \n    top: 15vh;\n    cursor: pointer;\n    height: 3vh;\n    width: 3vw;\n    font-size: 20px;\n}\n\n#axisLabel {\n    text-align: center;\n    position: relative; \n    top: 15vh;\n    font-family: \"MyFont\";\n}\n\n#header {\n    text-align: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n.titleFont {\n    height: 100px;\n    width: 400px;\n    font-size: 100px;\n    text-decoration: underline;\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    margin: auto;\n    margin-top: 25px;\n    text-align: center;\n}\n\n.playerBoard {\n    width: 25vw;\n    min-width: 300px;\n    height: 25vw;\n    min-height: 300px;\n    position: absolute;\n    left: 0;\n    margin: auto;\n    border: 1px solid black;\n    display: inline-block;\n    transition: all 0.2s linear;\n}\n\n.enemyBoard {\n    width: 25vw;\n    min-width: 300px;\n    height: 25vw;\n    min-height: 300px;\n    position: absolute;\n    right: 0;\n    margin: auto;\n    border: 1px solid black;\n    display: inline-block;\n    transition: all 0.2s linear;\n}\n\n.transparent {\n    opacity: 0;\n}\n\n.centerView {\n    width: 30vw;\n    height: 30vw;\n    right: 0;\n}\n\n.square {\n    width: 10%;\n    height: 10%;\n    margin: 0px;\n    outline: 1px solid black;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    transition: all 0.2s linear;\n}\n\n.square:hover {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n"],"sourceRoot":""}]);
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
                        }
                    }
                })
            }
            return message;
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
/* harmony export */   "addAttackListener": () => (/* binding */ addAttackListener),
/* harmony export */   "addPlaceListener": () => (/* binding */ addPlaceListener)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _startGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startGame.js */ "./src/modules/startGame.js");



//Array and index are for changing the placeCurrentShip function to place all ships
let placeShipArray = [_startGame_js__WEBPACK_IMPORTED_MODULE_1__.placeCarrier, _startGame_js__WEBPACK_IMPORTED_MODULE_1__.placeBattleship, _startGame_js__WEBPACK_IMPORTED_MODULE_1__.placeDestroyer, _startGame_js__WEBPACK_IMPORTED_MODULE_1__.placeSubmarine, _startGame_js__WEBPACK_IMPORTED_MODULE_1__.placePatrol];
let index = 0;
let placeCurrentShip = placeShipArray[index];

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
            e.target.style.backgroundColor = "black";
            console.log("Player Attack: " + msg);
            setTimeout(function() {
                let newMsg = enemy.attackRandom(player);
                let coords = newMsg.slice(0, 2);
                console.log(coords);
                let square = null;
                if (coords.charAt(1) === "0") {
                    square = document.querySelector("#player"+coords.charAt(0))
                }
                else {
                    square = document.querySelector("#player"+coords.charAt(1)+coords.charAt(0));
                }
                if (newMsg.includes("missed")) {
                    square.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                }
                else {
                    square.style.backgroundColor = "red";
                }
                newMsg = newMsg.substring(2);
                console.log("Enemy Attack: " + newMsg);
            }, 1000);
        })
    }
}

//Function for adding event Listeners for placing ships on playerBoard
function addPlaceListener(player) {
    for (let i = 0; i < 100; i++) {
        let currentId = "player" + i;
        let currentSquare = document.querySelector("#" + currentId);
        currentSquare.addEventListener("click", function(e) {
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
            placeCurrentShip(player, position);
            index++;
            if (index === 5) {
                console.log("index = 5");
                index = 0;
                placeCurrentShip = null;
                document.querySelector("#playerBoard").classList.remove("centerView");
                document.querySelector("#enemyBoard").classList.remove("transparent");
            }
        })
    }
}

function highlight(e, length) {
    let currentSquare = e.target;
    //Need to figure out how to highlight "length" number of blocks in the correct axis orientation
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
            if (_axis === "x") {
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
    player.getGameboard().placeShip(newCarrier);
}

//Function for placing carrier on playerBoard
function placeBattleship(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newBattleship = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Battleship", 4, position, axis);
    player.getGameboard().placeShip(newBattleship);
}


//Function for placing carrier on playerBoard
function placeDestroyer(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newDestroyer = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Destroyer", 3, position, axis);
    player.getGameboard().placeShip(newDestroyer);
}


//Function for placing carrier on playerBoard
function placeSubmarine(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newSubmarine = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Submarine", 3, position, axis);
    player.getGameboard().placeShip(newSubmarine);
}


//Function for placing carrier on playerBoard
function placePatrol(player, position) {
    let axis = document.querySelector("#axis").innerHTML;
    let newPatrol = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)("Patrol", 2, position, axis);
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





(0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_2__.initBtns)();
let playerArray = (0,_startGame_js__WEBPACK_IMPORTED_MODULE_1__.initGame)();
let player = playerArray[0];
let enemy = playerArray[1];
(0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_2__.renderInitBoards)();
(0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_2__.addPlaceListener)(player);
(0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_2__.addAttackListener)(enemy, player);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7VUMzR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJpQztBQUNtQjtBQUNnRDtBQUNPOztBQUUzRywyREFBUTtBQUNSLGtCQUFrQix1REFBUTtBQUMxQjtBQUNBO0FBQ0EsbUVBQWdCO0FBQ2hCLG1FQUFnQjtBQUNoQixvRUFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9tYW5pcHVsYXRlRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3RhcnRHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9NYWNoaW5lU3RkLUJvbGQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IDQwdnc7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwOyBib3R0b206IDA7IHJpZ2h0OiAwOyBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDMwdmg7XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1JTtcXG59XFxuXFxuI3dlbGNvbWVQYWdlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbn1cXG5cXG4jbXNnQm9hcmQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIHRvcDogMTN2aDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbn1cXG5cXG4jc3RhcnRCdG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jYXhpcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gICAgdG9wOiAxNXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICB3aWR0aDogM3Z3O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNheGlzTGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIHRvcDogMTV2aDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi50aXRsZUZvbnQge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXJCb2FyZCB7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDI1dnc7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4uZW5lbXlCb2FyZCB7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDI1dnc7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLnRyYW5zcGFyZW50IHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNlbnRlclZpZXcge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgaGVpZ2h0OiAzMHZ3O1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxufVxcblxcbi5zcXVhcmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLCtEQUF3RDtBQUM1RDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU87SUFDcEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU87SUFDcEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHNyYzogdXJsKFxcXCJmb250cy9NYWNoaW5lU3RkLUJvbGQub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiA0MHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDsgYm90dG9tOiAwOyByaWdodDogMDsgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNSU7XFxufVxcblxcbiN3ZWxjb21lUGFnZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG59XFxuXFxuI21zZ0JvYXJkIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB0b3A6IDEzdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG59XFxuXFxuI3N0YXJ0QnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI2F4aXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIHRvcDogMTV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IDN2dztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jYXhpc0xhYmVsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB0b3A6IDE1dmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4udGl0bGVGb250IHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyQm9hcmQge1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyNXZ3O1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLmVuZW15Qm9hcmQge1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyNXZ3O1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxufVxcblxcbi50cmFuc3BhcmVudCB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jZW50ZXJWaWV3IHtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGhlaWdodDogMzB2dztcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4uc3F1YXJlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgbGV0IF9ib2FyZFN0YXRlID0gbnVsbDsgLy8xMHgxMCBhcnJheSB0aGF0IGhvbGRzIGJvb2wgdmFsdWUgdGhhdCBzcGVjaWZpZXMgaWYgdGhhdCBzcG90IGhhcyBiZWVuIGhpdCBvciBub3Q7IGhpdCBhbmQgbWlzcyB3aWxsIGJlIGRpZmZlcmVudCBjb2xvciBvbiB1aVxuICAgIGxldCBfc2hpcEFycmF5ID0gW107IC8vaG9sZHMgdGhlIHNoaXBzIG9uIHRoZSBib2FyZDsgaWYgY29vcmRzIG9mIGFsbCBzaGlwcyBhcmUgZW1wdHkgdGhlbiBib2FyZCBpcyBlbXB0eVxuICAgIGxldCBfc3RhdHVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvL0FjY2Vzc29yIGZ1bmN0aW9uc1xuICAgICAgICBnZXRTaGlwQXJyYXk6IGZ1bmN0aW9uKCkge3JldHVybiBfc2hpcEFycmF5fSxcbiAgICAgICAgZ2V0V2lkdGg6IGZ1bmN0aW9uKCkge3JldHVybiBfYm9hcmRTdGF0ZS5sZW5ndGh9LFxuICAgICAgICBnZXRMZW5ndGg6IGZ1bmN0aW9uKCkge3JldHVybiBfYm9hcmRTdGF0ZVswXS5sZW5ndGh9LFxuICAgICAgICBnZXRTdGF0dXM6IGZ1bmN0aW9uKCkge3JldHVybiBfc3RhdHVzfSxcbiAgICAgICAgZ2V0Qm9hcmQ6IGZ1bmN0aW9uKCkge3JldHVybiBfYm9hcmRTdGF0ZX0sXG5cbiAgICAgICAgLy9NdXRhdG9yIGZ1bmN0aW9uc1xuICAgICAgICB1cGRhdGVTdGF0dXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc2hpcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfc2hpcEFycmF5W2ldLmdldElzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdEdhbWVib2FyZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gMTAsIGNvbHMgPSAxMDtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBfYm9hcmRTdGF0ZSA9IG5ldyBBcnJheShyb3dzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2JvYXJkU3RhdGVbaV0gPSBuZXcgQXJyYXkoY29scykuZmlsbCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwbGFjZVNoaXA6IGZ1bmN0aW9uKHNoaXApIHtcbiAgICAgICAgICAgIF9zaGlwQXJyYXkucHVzaChzaGlwKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2VTaGlwUmFuZDogZnVuY3Rpb24oc2hpcCkge1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgc2hpcC5zZXRQb3NpdGlvblJhbmQoKTtcbiAgICAgICAgICAgICAgICBzaGlwLnNldENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0aGlzLmNoZWNrVmFsaWRTaGlwQ29vcmRzKHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3NoaXBBcnJheS5wdXNoKHNoaXApO1xuICAgICAgICB9LFxuICAgICAgICBjaGVja1ZhbGlkU2hpcENvb3JkczogZnVuY3Rpb24oc2hpcCkge1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3NoaXBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX3NoaXBBcnJheVtpXS5nZXRDb29yZGluYXRlcygpLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZHNMZW5ndGggPSBzaGlwLmdldENvb3JkaW5hdGVzKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvb3Jkc0xlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvbXBhcmUgPSBfc2hpcEFycmF5W2ldLmdldENvb3JkaW5hdGVzKClbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvb3JkID0gc2hpcC5nZXRDb29yZGluYXRlcygpW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDb21wYXJlWzBdID09PSBjdXJyZW50Q29vcmRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudENvbXBhcmVbMV0gPT09IGN1cnJlbnRDb29yZFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjazogZnVuY3Rpb24oY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIlRoZSBhdHRhY2sgaGFzIG1pc3NlZCBhbGwgc2hpcHMuXCI7XG4gICAgICAgICAgICBfYm9hcmRTdGF0ZVtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9zaGlwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFNoaXAgPSBfc2hpcEFycmF5W2ldO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwLmdldENvb3JkaW5hdGVzKCkuZm9yRWFjaChjb29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlWzBdID09PSBjb29yZFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVbMV0gPT09IGNvb3JkWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGN1cnJlbnRTaGlwLmhpdChjb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHBsYWNlQ2FycmllciwgcGxhY2VCYXR0bGVzaGlwLCBwbGFjZURlc3Ryb3llciwgcGxhY2VTdWJtYXJpbmUsIHBsYWNlUGF0cm9sfSBmcm9tIFwiLi9zdGFydEdhbWUuanNcIjtcblxuLy9BcnJheSBhbmQgaW5kZXggYXJlIGZvciBjaGFuZ2luZyB0aGUgcGxhY2VDdXJyZW50U2hpcCBmdW5jdGlvbiB0byBwbGFjZSBhbGwgc2hpcHNcbmxldCBwbGFjZVNoaXBBcnJheSA9IFtwbGFjZUNhcnJpZXIsIHBsYWNlQmF0dGxlc2hpcCwgcGxhY2VEZXN0cm95ZXIsIHBsYWNlU3VibWFyaW5lLCBwbGFjZVBhdHJvbF07XG5sZXQgaW5kZXggPSAwO1xubGV0IHBsYWNlQ3VycmVudFNoaXAgPSBwbGFjZVNoaXBBcnJheVtpbmRleF07XG5cbi8vQ2FjaGUgRE9NXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5cbi8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdGFydCBnYW1lIGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCdG5zKCkge1xuICAgIGxldCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnRCdG5cIik7XG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgd2VsY29tZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlbGNvbWVQYWdlXCIpO1xuICAgICAgICBsZXQgd2VsY29tZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlbGNvbWVUZXh0XCIpO1xuICAgICAgICB3ZWxjb21lVGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgd2VsY29tZVBhZ2Uuc3R5bGUud2lkdGggPSBcIjAlXCI7XG4gICAgICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH0pO1xuICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpO1xuICAgIGF4aXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTCA9PT0gXCJYXCIpe1xuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gXCJZXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICAgICAgfVxuICAgIH0pXG59XG4gICAgXG5cbi8vRGlzcGxheSB0aGUgcHJpbWl0aXZlIGJvYXJkcyBvbiBzY3JlZW5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJbml0Qm9hcmRzKCkge1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllckJvYXJkXCIpO1xuICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJWaWV3XCIpO1xuICAgIHBsYXllckJvYXJkLmlkID0gXCJwbGF5ZXJCb2FyZFwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICsrKSB7XG4gICAgICAgIGxldCBuZXdTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgICAgbmV3U3F1YXJlLmlkID0gXCJwbGF5ZXJcIiArIGk7IC8vVGhlIG5hbWluZyBvZiB0aGUgaWQgaXMgc28gdGhhdCB0aGUgZ3JpZCBwb3NpdGlvbiBjYW4gYmUgZXh0cmFjdGVkIGZyb20gaXQgdmlhIGlkU3RyaW5nLmNoYXJBdCgwIG9yIDEpO1xuICAgICAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChuZXdTcXVhcmUpOyAvL0lmIHRoZSBpZCBpcyBpbiB0aGUgZmlyc3Qgcm93LCBhIGNoZWNrIHdpbGwgYmUgZG9uZSB0byBzZWUgaWYgdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nIGlzIDUgKFwiZW5lbXlcIjsgNiBmb3IgXCJwbGF5ZXJcIikgcGx1cyAxIG9yIDJcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcblxuICAgIGxldCBlbmVteUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbmVteUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJlbmVteUJvYXJkXCIpO1xuICAgIGVuZW15Qm9hcmQuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgIGVuZW15Qm9hcmQuaWQgPSBcImVuZW15Qm9hcmRcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArKykge1xuICAgICAgICBsZXQgbmV3U3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3U3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICAgIG5ld1NxdWFyZS5pZCA9IFwiZW5lbXlcIiArIGk7XG4gICAgICAgIGVuZW15Qm9hcmQuYXBwZW5kQ2hpbGQobmV3U3F1YXJlKTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Qm9hcmQpO1xufVxuXG4vL05lZWRlZCB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBlbmVteSBzcXVhcmVzIGZvciBpbml0aWF0aW5nIGF0dGFja3M7IHRoaXMgZnVuY3Rpb24gaXMgYSBsaXR0bGUgbG9uZyBiZWNhdXNlIGl0IGluY2x1ZGVzIGdhbWUgZnVuY3Rpb25hbGl0eSBhbG9uZyB3aXRoIERPTSBtYW5pcHVsYXRpb25cbmV4cG9ydCBmdW5jdGlvbiBhZGRBdHRhY2tMaXN0ZW5lcihlbmVteSwgcGxheWVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudElkID0gXCJlbmVteVwiICsgaTtcbiAgICAgICAgbGV0IGN1cnJlbnRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgY3VycmVudElkKTtcbiAgICAgICAgY3VycmVudFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbGV0IHggPSBudWxsO1xuICAgICAgICAgICAgbGV0IHkgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJZC5sZW5ndGggPT09IDYpIHtcbiAgICAgICAgICAgICAgICB4ID0gcGFyc2VJbnQoY3VycmVudElkLmNoYXJBdCg1KSk7XG4gICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gcGFyc2VJbnQoY3VycmVudElkLmNoYXJBdCg2KSk7XG4gICAgICAgICAgICAgICAgeSA9IHBhcnNlSW50KGN1cnJlbnRJZC5jaGFyQXQoNSkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG1zZyA9IHBsYXllci5hdHRhY2soZW5lbXksIFt4LCB5XSk7XG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBlLnRhcmdldC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBpZiAobXNnLmluY2x1ZGVzKFwibWlzc2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgY2xvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNylcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsb25lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnRhcmdldC5yZXBsYWNlV2l0aChjbG9uZSk7XG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBBdHRhY2s6IFwiICsgbXNnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld01zZyA9IGVuZW15LmF0dGFja1JhbmRvbShwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBuZXdNc2cuc2xpY2UoMCwgMik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29vcmRzKTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoY29vcmRzLmNoYXJBdCgxKSA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIitjb29yZHMuY2hhckF0KDApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIitjb29yZHMuY2hhckF0KDEpK2Nvb3Jkcy5jaGFyQXQoMCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV3TXNnLmluY2x1ZGVzKFwibWlzc2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC43KVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld01zZyA9IG5ld01zZy5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbmVteSBBdHRhY2s6IFwiICsgbmV3TXNnKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy9GdW5jdGlvbiBmb3IgYWRkaW5nIGV2ZW50IExpc3RlbmVycyBmb3IgcGxhY2luZyBzaGlwcyBvbiBwbGF5ZXJCb2FyZFxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBsYWNlTGlzdGVuZXIocGxheWVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudElkID0gXCJwbGF5ZXJcIiArIGk7XG4gICAgICAgIGxldCBjdXJyZW50U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGN1cnJlbnRJZCk7XG4gICAgICAgIGN1cnJlbnRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGxldCB4ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCB5ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SWQubGVuZ3RoID09PSA3KSB7XG4gICAgICAgICAgICAgICAgeCA9IHBhcnNlSW50KGN1cnJlbnRJZC5jaGFyQXQoNikpO1xuICAgICAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeCA9IHBhcnNlSW50KGN1cnJlbnRJZC5jaGFyQXQoNykpO1xuICAgICAgICAgICAgICAgIHkgPSBwYXJzZUludChjdXJyZW50SWQuY2hhckF0KDYpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IFt4LCB5XTtcbiAgICAgICAgICAgIHBsYWNlQ3VycmVudFNoaXAocGxheWVyLCBwb3NpdGlvbik7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSA1KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmRleCA9IDVcIik7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHBsYWNlQ3VycmVudFNoaXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyQm9hcmRcIikuY2xhc3NMaXN0LnJlbW92ZShcImNlbnRlclZpZXdcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbmVteUJvYXJkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhpZ2hsaWdodChlLCBsZW5ndGgpIHtcbiAgICBsZXQgY3VycmVudFNxdWFyZSA9IGUudGFyZ2V0O1xuICAgIC8vTmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byBoaWdobGlnaHQgXCJsZW5ndGhcIiBudW1iZXIgb2YgYmxvY2tzIGluIHRoZSBjb3JyZWN0IGF4aXMgb3JpZW50YXRpb25cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihnYW1lYm9hcmQpIHtcbiAgICBsZXQgX2dhbWVib2FyZCA9IGdhbWVib2FyZDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEdhbWVib2FyZDogZnVuY3Rpb24oKSB7cmV0dXJuIF9nYW1lYm9hcmR9LFxuICAgICAgICBhdHRhY2s6IGZ1bmN0aW9uKHBsYXllciwgY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcGxheWVyLmdldEdhbWVib2FyZCgpLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGF0dGFja1JhbmRvbTogZnVuY3Rpb24ocGxheWVyKSB7XG4gICAgICAgICAgICBsZXQgaXNOZXdDb29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHJhbmRSb3cgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHJhbmRDb2wgPSBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKCFpc05ld0Nvb3JkKSB7XG4gICAgICAgICAgICAgICAgcmFuZFJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICByYW5kQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGlmICghcGxheWVyLmdldEdhbWVib2FyZCgpLmdldEJvYXJkKClbcmFuZENvbF1bcmFuZFJvd10pIHtcbiAgICAgICAgICAgICAgICAgICAgaXNOZXdDb29yZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcGxheWVyLmdldEdhbWVib2FyZCgpLnJlY2VpdmVBdHRhY2soW3JhbmRDb2wsIHJhbmRSb3ddKTtcbiAgICAgICAgICAgIHJldHVybiByYW5kQ29sICsgXCJcIiArIHJhbmRSb3cgKyByZXNwb25zZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBsZW5ndGgsIHBvc2l0aW9uLCBheGlzKSB7XG4gICAgbGV0IF9uYW1lID0gbmFtZTtcbiAgICBsZXQgX2xlbmd0aCA9IGxlbmd0aDtcbiAgICBsZXQgX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgbGV0IF9heGlzID0gYXhpcztcbiAgICBsZXQgX2Nvb3JkaW5hdGVzID0gbnVsbDtcbiAgICBsZXQgX2lzU3VuayA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy9BY2Nlc3NvciBmdW5jdGlvbnNcbiAgICAgICAgZ2V0TmFtZTogZnVuY3Rpb24oKXtyZXR1cm4gX25hbWV9LFxuICAgICAgICBnZXRMZW5ndGg6IGZ1bmN0aW9uKCkge3JldHVybiBfbGVuZ3RofSxcbiAgICAgICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uKCkge3JldHVybiBfcG9zaXRpb259LFxuICAgICAgICBnZXRDb29yZGluYXRlczogZnVuY3Rpb24oKSB7cmV0dXJuIF9jb29yZGluYXRlc30sXG4gICAgICAgIGdldElzU3VuazogZnVuY3Rpb24oKSB7cmV0dXJuIF9pc1N1bmt9LFxuICAgICAgICAvL011dGF0b3IgZnVuY3Rpb25zXG4gICAgICAgIHNldFBvc2l0aW9uOiBmdW5jdGlvbihjb29yZGluYXRlcykge1xuICAgICAgICAgICAgX2Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFBvc2l0aW9uUmFuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IG51bGw7XG4gICAgICAgICAgICBsZXQgYXhpcyA9IFwiXCI7XG4gICAgICAgICAgICB3aGlsZSghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPj0gMC41KSB7XG4gICAgICAgICAgICAgICAgICAgIGF4aXMgPSBcInhcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uWzBdICsgX2xlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXhpcyA9IFwieVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25bMV0gKyBfbGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgICBfYXhpcyA9IGF4aXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldENvb3JkaW5hdGVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IG5ldyBBcnJheShfbGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChfYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IF9wb3NpdGlvblsxXTtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IF9wb3NpdGlvblswXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1tpXSA9IFt4ICsgaSwgeV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IF9wb3NpdGlvblsxXTtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IF9wb3NpdGlvblswXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1tpXSA9IFt4LCB5ICsgaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGhpdDogZnVuY3Rpb24oY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZVswXSA9PT0gX2Nvb3JkaW5hdGVzW2ldWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlWzFdID09PSBfY29vcmRpbmF0ZXNbaV1bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb29yZGluYXRlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX2Nvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF9pc1N1bmsgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9pc1N1bmspIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX25hbWUgKyBcIiBoYXMgYmVlbiBkZXN0cm95ZWQhISFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbmFtZSArIFwiIGhhcyBiZWVuIGhpdCEhIVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBjcmVhdGVTaGlwIGZyb20gXCIuL3NoaXBGYWN0b3J5LmpzXCI7XG5pbXBvcnQgY3JlYXRlR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZEZhY3RvcnkuanNcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyRmFjdG9yeS5qc1wiO1xuXG4vL0Z1bmN0aW9uIHRvIGluaXQgYWxsIGdhbWUgdmFsdWVzIHdpdGggdGVzdCB2YXJpYWJsZXNcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0R2FtZSgpIHtcbiAgICBsZXQgcGxheWVyQ2FycmllciA9IGNyZWF0ZVNoaXAoXCJDYXJyaWVyXCIsIDUsIFsxLCAxXSwgXCJ5XCIpO1xuICAgIHBsYXllckNhcnJpZXIuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgcGxheWVyQmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoXCJCYXR0bGVzaGlwXCIsIDQsIFszLCAxXSwgXCJ4XCIpO1xuICAgIHBsYXllckJhdHRsZXNoaXAuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgcGxheWVyRGVzdHJveWVyID0gY3JlYXRlU2hpcChcIkRlc3Ryb3llclwiLCAzLCBbNiwgOV0sIFwieFwiKTtcbiAgICBwbGF5ZXJEZXN0cm95ZXIuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgcGxheWVyU3VibWFyaW5lID0gY3JlYXRlU2hpcChcIlN1Ym1hcmluZVwiLCAzLCBbNSwgNV0sIFwieVwiKTtcbiAgICBwbGF5ZXJTdWJtYXJpbmUuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgcGxheWVyUGF0cm9sID0gY3JlYXRlU2hpcChcIlBhdHJvbFwiLCAyLCBbOCwgMl0sIFwieVwiKTtcbiAgICBwbGF5ZXJQYXRyb2wuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgICBsZXQgZW5lbXlDYXJyaWVyID0gY3JlYXRlU2hpcChcIkNhcnJpZXJcIiwgNSwgWzEsIDFdLCBcInlcIik7XG4gICAgZW5lbXlDYXJyaWVyLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15QmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoXCJCYXR0bGVzaGlwXCIsIDQsIFszLCAxXSwgXCJ4XCIpO1xuICAgIGVuZW15QmF0dGxlc2hpcC5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBlbmVteURlc3Ryb3llciA9IGNyZWF0ZVNoaXAoXCJEZXN0cm95ZXJcIiwgMywgWzYsIDldLCBcInhcIik7XG4gICAgZW5lbXlEZXN0cm95ZXIuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgZW5lbXlTdWJtYXJpbmUgPSBjcmVhdGVTaGlwKFwiU3VibWFyaW5lXCIsIDMsIFs1LCA1XSwgXCJ5XCIpO1xuICAgIGVuZW15U3VibWFyaW5lLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15UGF0cm9sID0gY3JlYXRlU2hpcChcIlBhdHJvbFwiLCAyLCBbOCwgMl0sIFwieVwiKTtcbiAgICBlbmVteVBhdHJvbC5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBlbmVteUJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgcGxheWVyQm9hcmQuaW5pdEdhbWVib2FyZCgpO1xuICAgIGVuZW15Qm9hcmQuaW5pdEdhbWVib2FyZCgpO1xuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJDYXJyaWVyKTtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyQmF0dGxlc2hpcCk7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckRlc3Ryb3llcik7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclN1Ym1hcmluZSk7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllclBhdHJvbCk7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15Q2Fycmllcik7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15QmF0dGxlc2hpcCk7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15RGVzdHJveWVyKTtcbiAgICBlbmVteUJvYXJkLnBsYWNlU2hpcFJhbmQoZW5lbXlTdWJtYXJpbmUpO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteVBhdHJvbCk7XG4gICAgbGV0IHBsYXllciA9IGNyZWF0ZVBsYXllcihwbGF5ZXJCb2FyZCk7XG4gICAgbGV0IGVuZW15ID0gY3JlYXRlUGxheWVyKGVuZW15Qm9hcmQpO1xuICAgIHJldHVybiBbcGxheWVyLCBlbmVteV07XG59XG5cbi8vRnVuY3Rpb24gdG8gaW5pdCBlbXB0eSBib2FyZCBhbmQgcGxheWVyIG9iamVjdHNcbmV4cG9ydCBmdW5jdGlvbiBpbml0R2FtZSgpIHtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgICBwbGF5ZXJCb2FyZC5pbml0R2FtZWJvYXJkKCk7XG4gICAgbGV0IGVuZW15Qm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgICBlbmVteUJvYXJkLmluaXRHYW1lYm9hcmQoKTtcbiAgICBsZXQgZW5lbXlDYXJyaWVyID0gY3JlYXRlU2hpcChcIkNhcnJpZXJcIiwgNSwgWzEsIDFdLCBcInlcIik7XG4gICAgZW5lbXlDYXJyaWVyLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15QmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoXCJCYXR0bGVzaGlwXCIsIDQsIFszLCAxXSwgXCJ4XCIpO1xuICAgIGVuZW15QmF0dGxlc2hpcC5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBlbmVteURlc3Ryb3llciA9IGNyZWF0ZVNoaXAoXCJEZXN0cm95ZXJcIiwgMywgWzYsIDldLCBcInhcIik7XG4gICAgZW5lbXlEZXN0cm95ZXIuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgZW5lbXlTdWJtYXJpbmUgPSBjcmVhdGVTaGlwKFwiU3VibWFyaW5lXCIsIDMsIFs1LCA1XSwgXCJ5XCIpO1xuICAgIGVuZW15U3VibWFyaW5lLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15UGF0cm9sID0gY3JlYXRlU2hpcChcIlBhdHJvbFwiLCAyLCBbOCwgMl0sIFwieVwiKTtcbiAgICBlbmVteVBhdHJvbC5zZXRDb29yZGluYXRlcygpO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteUNhcnJpZXIpO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteUJhdHRsZXNoaXApO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteURlc3Ryb3llcik7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15U3VibWFyaW5lKTtcbiAgICBlbmVteUJvYXJkLnBsYWNlU2hpcFJhbmQoZW5lbXlQYXRyb2wpO1xuICAgIGxldCBwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIocGxheWVyQm9hcmQpO1xuICAgIGxldCBlbmVteSA9IGNyZWF0ZVBsYXllcihlbmVteUJvYXJkKTtcbiAgICByZXR1cm4gW3BsYXllciwgZW5lbXldO1xufVxuXG4vL0Z1bmN0aW9uIGZvciBwbGFjaW5nIGNhcnJpZXIgb24gcGxheWVyQm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZUNhcnJpZXIocGxheWVyLCBwb3NpdGlvbikge1xuICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTDtcbiAgICBsZXQgbmV3Q2FycmllciA9IGNyZWF0ZVNoaXAoXCJDYXJyaWVyXCIsIDUsIHBvc2l0aW9uLCBheGlzKTtcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucGxhY2VTaGlwKG5ld0NhcnJpZXIpO1xufVxuXG4vL0Z1bmN0aW9uIGZvciBwbGFjaW5nIGNhcnJpZXIgb24gcGxheWVyQm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZUJhdHRsZXNoaXAocGxheWVyLCBwb3NpdGlvbikge1xuICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTDtcbiAgICBsZXQgbmV3QmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoXCJCYXR0bGVzaGlwXCIsIDQsIHBvc2l0aW9uLCBheGlzKTtcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucGxhY2VTaGlwKG5ld0JhdHRsZXNoaXApO1xufVxuXG5cbi8vRnVuY3Rpb24gZm9yIHBsYWNpbmcgY2FycmllciBvbiBwbGF5ZXJCb2FyZFxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlRGVzdHJveWVyKHBsYXllciwgcG9zaXRpb24pIHtcbiAgICBsZXQgYXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUw7XG4gICAgbGV0IG5ld0Rlc3Ryb3llciA9IGNyZWF0ZVNoaXAoXCJEZXN0cm95ZXJcIiwgMywgcG9zaXRpb24sIGF4aXMpO1xuICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5wbGFjZVNoaXAobmV3RGVzdHJveWVyKTtcbn1cblxuXG4vL0Z1bmN0aW9uIGZvciBwbGFjaW5nIGNhcnJpZXIgb24gcGxheWVyQm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVN1Ym1hcmluZShwbGF5ZXIsIHBvc2l0aW9uKSB7XG4gICAgbGV0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikuaW5uZXJIVE1MO1xuICAgIGxldCBuZXdTdWJtYXJpbmUgPSBjcmVhdGVTaGlwKFwiU3VibWFyaW5lXCIsIDMsIHBvc2l0aW9uLCBheGlzKTtcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucGxhY2VTaGlwKG5ld1N1Ym1hcmluZSk7XG59XG5cblxuLy9GdW5jdGlvbiBmb3IgcGxhY2luZyBjYXJyaWVyIG9uIHBsYXllckJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VQYXRyb2wocGxheWVyLCBwb3NpdGlvbikge1xuICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTDtcbiAgICBsZXQgbmV3UGF0cm9sID0gY3JlYXRlU2hpcChcIlBhdHJvbFwiLCAyLCBwb3NpdGlvbiwgYXhpcyk7XG4gICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnBsYWNlU2hpcChuZXdQYXRyb2wpO1xufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlLmNzc1wiXG5pbXBvcnQgeyB0ZXN0R2FtZSwgaW5pdEdhbWUgfSBmcm9tIFwiLi9zdGFydEdhbWUuanNcIjtcbmltcG9ydCB7IGluaXRCdG5zLCByZW5kZXJJbml0Qm9hcmRzLCBhZGRBdHRhY2tMaXN0ZW5lciwgYWRkUGxhY2VMaXN0ZW5lcn0gZnJvbSBcIi4vbWFuaXB1bGF0ZURPTS5qc1wiO1xuaW1wb3J0IHsgcGxhY2VDYXJyaWVyLCBwbGFjZUJhdHRsZXNoaXAsIHBsYWNlRGVzdHJveWVyLCBwbGFjZVN1Ym1hcmluZSwgcGxhY2VQYXRyb2x9IGZyb20gXCIuL3N0YXJ0R2FtZS5qc1wiO1xuXG5pbml0QnRucygpO1xubGV0IHBsYXllckFycmF5ID0gaW5pdEdhbWUoKTtcbmxldCBwbGF5ZXIgPSBwbGF5ZXJBcnJheVswXTtcbmxldCBlbmVteSA9IHBsYXllckFycmF5WzFdO1xucmVuZGVySW5pdEJvYXJkcygpO1xuYWRkUGxhY2VMaXN0ZW5lcihwbGF5ZXIpO1xuYWRkQXR0YWNrTGlzdGVuZXIoZW5lbXksIHBsYXllcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=