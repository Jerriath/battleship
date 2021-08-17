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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"MyFont\";\n    font-weight: bold;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\");\n}\n\nbody {\n    background-color: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n\nh1 {\n    font-family: \"MyFont\";\n}\n\n#container {\n    width: 70%;\n    height: 40vw;\n    position: relative;\n    top: 0; bottom: 0; right: 0; left: 0;\n    margin: auto;\n    margin-top: 30vh;\n    font-size: 0;\n    position: relative;\n    top: 25%;\n}\n\n#welcomePage {\n    color: white;\n    background-color: black;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    text-align: center;\n    transition: all 0.5s linear;\n}\n\n#msgBoard {\n    text-align: center;\n    position: relative; \n    top: 13vh;\n    font-family: \"MyFont\";\n}\n\n#startBtn {\n    position: absolute;\n    top: 60%;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\n#axis {\n    text-align: center;\n    position: relative; \n    top: 15vh;\n    cursor: pointer;\n    height: 3vh;\n    width: 3vw;\n    font-size: 20px;\n}\n\n#axisLabel {\n    text-align: center;\n    position: relative; \n    top: 15vh;\n    font-family: \"MyFont\";\n}\n\n#header {\n    text-align: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n.titleFont {\n    height: 100px;\n    width: 400px;\n    font-size: 100px;\n    text-decoration: underline;\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    margin: auto;\n    margin-top: 25px;\n    text-align: center;\n}\n\n.playerBoard {\n    width: 25vw;\n    min-width: 300px;\n    height: 25vw;\n    min-height: 300px;\n    position: absolute;\n    left: 0;\n    margin: auto;\n    border: 1px solid black;\n    display: inline-block;\n    transition: all 0.2s linear;\n}\n\n.enemyBoard {\n    width: 25vw;\n    min-width: 300px;\n    height: 25vw;\n    min-height: 300px;\n    position: absolute;\n    right: 0;\n    margin: auto;\n    border: 1px solid black;\n    display: inline-block;\n    transition: all 0.2s linear;\n}\n\n.transparent {\n    opacity: 0;\n    visibility: hidden;\n}\n\n.highlighted {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.centerView {\n    width: 30vw;\n    height: 30vw;\n    right: 0;\n}\n\n.square {\n    width: 10%;\n    height: 10%;\n    margin: 0px;\n    outline: 1px solid black;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    transition: all 0.2s linear;\n}\n\n.square:hover {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,+DAAwD;AAC5D;;AAEA;IACI,oCAAoC;IACpC,WAAW;IACX,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,MAAM,EAAE,SAAS,EAAE,QAAQ,EAAE,OAAO;IACpC,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,UAAU;IACV,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,eAAe;IACf,WAAW;IACX,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,0BAA0B;IAC1B,kBAAkB;IAClB,MAAM,EAAE,QAAQ,EAAE,SAAS,EAAE,OAAO;IACpC,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,OAAO;IACP,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,UAAU;IACV,WAAW;IACX,WAAW;IACX,wBAAwB;IACxB,qBAAqB;IACrB,oCAAoC;IACpC,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":["@font-face {\n    font-family: \"MyFont\";\n    font-weight: bold;\n    src: url(\"fonts/MachineStd-Bold.otf\") format(\"opentype\");\n}\n\nbody {\n    background-color: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n\nh1 {\n    font-family: \"MyFont\";\n}\n\n#container {\n    width: 70%;\n    height: 40vw;\n    position: relative;\n    top: 0; bottom: 0; right: 0; left: 0;\n    margin: auto;\n    margin-top: 30vh;\n    font-size: 0;\n    position: relative;\n    top: 25%;\n}\n\n#welcomePage {\n    color: white;\n    background-color: black;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    text-align: center;\n    transition: all 0.5s linear;\n}\n\n#msgBoard {\n    text-align: center;\n    position: relative; \n    top: 13vh;\n    font-family: \"MyFont\";\n}\n\n#startBtn {\n    position: absolute;\n    top: 60%;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\n#axis {\n    text-align: center;\n    position: relative; \n    top: 15vh;\n    cursor: pointer;\n    height: 3vh;\n    width: 3vw;\n    font-size: 20px;\n}\n\n#axisLabel {\n    text-align: center;\n    position: relative; \n    top: 15vh;\n    font-family: \"MyFont\";\n}\n\n#header {\n    text-align: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n.titleFont {\n    height: 100px;\n    width: 400px;\n    font-size: 100px;\n    text-decoration: underline;\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    margin: auto;\n    margin-top: 25px;\n    text-align: center;\n}\n\n.playerBoard {\n    width: 25vw;\n    min-width: 300px;\n    height: 25vw;\n    min-height: 300px;\n    position: absolute;\n    left: 0;\n    margin: auto;\n    border: 1px solid black;\n    display: inline-block;\n    transition: all 0.2s linear;\n}\n\n.enemyBoard {\n    width: 25vw;\n    min-width: 300px;\n    height: 25vw;\n    min-height: 300px;\n    position: absolute;\n    right: 0;\n    margin: auto;\n    border: 1px solid black;\n    display: inline-block;\n    transition: all 0.2s linear;\n}\n\n.transparent {\n    opacity: 0;\n    visibility: hidden;\n}\n\n.highlighted {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.centerView {\n    width: 30vw;\n    height: 30vw;\n    right: 0;\n}\n\n.square {\n    width: 10%;\n    height: 10%;\n    margin: 0px;\n    outline: 1px solid black;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    transition: all 0.2s linear;\n}\n\n.square:hover {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "renderInitBoards": () => (/* binding */ renderInitBoards)
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




//Array and index are for changing the placeCurrentShip function to place all ships
let placeShipArray = [_startGame_js__WEBPACK_IMPORTED_MODULE_1__.placeCarrier, _startGame_js__WEBPACK_IMPORTED_MODULE_1__.placeBattleship, _startGame_js__WEBPACK_IMPORTED_MODULE_1__.placeDestroyer, _startGame_js__WEBPACK_IMPORTED_MODULE_1__.placeSubmarine, _startGame_js__WEBPACK_IMPORTED_MODULE_1__.placePatrol];
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
            clone.style.backgroundColor = "black";
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
                    square.classList.remove("highlighted");
                    square.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                }
                else {
                    square.classList.remove("highlighted");
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


                //Section deals with highlighting the squares that the ship is placed in
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
                    console.log("index = 5");
                    removePlayerListeners();
                    for(let k = 0; k < 5; k++) {
                        console.log(player.getGameboard().getShipArray()[k].getCoordinates());
                    }
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
}

//Listener to highlight the squares where the ship will be placed
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

//Function for removing all Listeners (on playerBoard)
function removePlayerListeners() {
    for (let i = 0; i < 100; i++) {
        let currentId = "player" + i;
        let currentSquare = document.querySelector("#" + currentId);
        currentSquare.replaceWith(currentSquare.cloneNode(true));
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCO0FBQ2hCLDZEQUFnQjtBQUNoQixpRUFBb0I7QUFDcEIsOERBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvbWFuaXB1bGF0ZURPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcnVuR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0YXJ0R2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvTWFjaGluZVN0ZC1Cb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiA0MHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDsgYm90dG9tOiAwOyByaWdodDogMDsgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNSU7XFxufVxcblxcbiN3ZWxjb21lUGFnZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG59XFxuXFxuI21zZ0JvYXJkIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB0b3A6IDEzdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG59XFxuXFxuI3N0YXJ0QnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI2F4aXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIHRvcDogMTV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IDN2dztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jYXhpc0xhYmVsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB0b3A6IDE1dmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4udGl0bGVGb250IHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyQm9hcmQge1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyNXZ3O1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLmVuZW15Qm9hcmQge1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyNXZ3O1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxufVxcblxcbi50cmFuc3BhcmVudCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jZW50ZXJWaWV3IHtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGhlaWdodDogMzB2dztcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4uc3F1YXJlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiwrREFBd0Q7QUFDNUQ7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPO0lBQ3BDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPO0lBQ3BDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtBQUNaOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgc3JjOiB1cmwoXFxcImZvbnRzL01hY2hpbmVTdGQtQm9sZC5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IDQwdnc7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwOyBib3R0b206IDA7IHJpZ2h0OiAwOyBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDMwdmg7XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1JTtcXG59XFxuXFxuI3dlbGNvbWVQYWdlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xcbn1cXG5cXG4jbXNnQm9hcmQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIHRvcDogMTN2aDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbn1cXG5cXG4jc3RhcnRCdG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jYXhpcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gICAgdG9wOiAxNXZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICB3aWR0aDogM3Z3O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNheGlzTGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIHRvcDogMTV2aDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi50aXRsZUZvbnQge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXJCb2FyZCB7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDI1dnc7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4uZW5lbXlCb2FyZCB7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDI1dnc7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLnRyYW5zcGFyZW50IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uaGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmNlbnRlclZpZXcge1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgaGVpZ2h0OiAzMHZ3O1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxufVxcblxcbi5zcXVhcmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBsZXQgX2JvYXJkU3RhdGUgPSBudWxsOyAvLzEweDEwIGFycmF5IHRoYXQgaG9sZHMgYm9vbCB2YWx1ZSB0aGF0IHNwZWNpZmllcyBpZiB0aGF0IHNwb3QgaGFzIGJlZW4gaGl0IG9yIG5vdDsgaGl0IGFuZCBtaXNzIHdpbGwgYmUgZGlmZmVyZW50IGNvbG9yIG9uIHVpXG4gICAgbGV0IF9zaGlwQXJyYXkgPSBbXTsgLy9ob2xkcyB0aGUgc2hpcHMgb24gdGhlIGJvYXJkOyBpZiBjb29yZHMgb2YgYWxsIHNoaXBzIGFyZSBlbXB0eSB0aGVuIGJvYXJkIGlzIGVtcHR5XG4gICAgbGV0IF9zdGF0dXMgPSBmYWxzZTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vQWNjZXNzb3IgZnVuY3Rpb25zXG4gICAgICAgIGdldFNoaXBBcnJheTogZnVuY3Rpb24oKSB7cmV0dXJuIF9zaGlwQXJyYXl9LFxuICAgICAgICBnZXRXaWR0aDogZnVuY3Rpb24oKSB7cmV0dXJuIF9ib2FyZFN0YXRlLmxlbmd0aH0sXG4gICAgICAgIGdldExlbmd0aDogZnVuY3Rpb24oKSB7cmV0dXJuIF9ib2FyZFN0YXRlWzBdLmxlbmd0aH0sXG4gICAgICAgIGdldFN0YXR1czogZnVuY3Rpb24oKSB7cmV0dXJuIF9zdGF0dXN9LFxuICAgICAgICBnZXRCb2FyZDogZnVuY3Rpb24oKSB7cmV0dXJuIF9ib2FyZFN0YXRlfSxcblxuICAgICAgICAvL011dGF0b3IgZnVuY3Rpb25zXG4gICAgICAgIHVwZGF0ZVN0YXR1czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9zaGlwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIV9zaGlwQXJyYXlbaV0uZ2V0SXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9zdGF0dXMgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBpbml0R2FtZWJvYXJkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSAxMCwgY29scyA9IDEwO1xuICAgICAgICAgICAgY29uc3QgdmFsID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF9ib2FyZFN0YXRlID0gbmV3IEFycmF5KHJvd3MpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfYm9hcmRTdGF0ZVtpXSA9IG5ldyBBcnJheShjb2xzKS5maWxsKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlU2hpcDogZnVuY3Rpb24oc2hpcCkge1xuICAgICAgICAgICAgX3NoaXBBcnJheS5wdXNoKHNoaXApO1xuICAgICAgICB9LFxuICAgICAgICBwbGFjZVNoaXBSYW5kOiBmdW5jdGlvbihzaGlwKSB7XG4gICAgICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBzaGlwLnNldFBvc2l0aW9uUmFuZCgpO1xuICAgICAgICAgICAgICAgIHNoaXAuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMuY2hlY2tWYWxpZFNoaXBDb29yZHMoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc2hpcEFycmF5LnB1c2goc2hpcCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrVmFsaWRTaGlwQ29vcmRzOiBmdW5jdGlvbihzaGlwKSB7XG4gICAgICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgLy9DaGVja3MgdG8gc2VlIGlmIHRoZXJlIGFyZSBvdmVybGFwcyBiZXR3ZWVuIHByZS1leGlzdGluZyBzaGlwc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc2hpcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBfc2hpcEFycmF5W2ldLmdldENvb3JkaW5hdGVzKCkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3Jkc0xlbmd0aCA9IHNoaXAuZ2V0Q29vcmRpbmF0ZXMoKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY29vcmRzTGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q29tcGFyZSA9IF9zaGlwQXJyYXlbaV0uZ2V0Q29vcmRpbmF0ZXMoKVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q29vcmQgPSBzaGlwLmdldENvb3JkaW5hdGVzKClba107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudENvbXBhcmVbMF0gPT09IGN1cnJlbnRDb29yZFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29tcGFyZVsxXSA9PT0gY3VycmVudENvb3JkWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9DaGVja3MgdG8gc2VlIGlmIHRoZSBuZXcgc2hpcCBnb2VzIG91dCBvZiB0aGUgZ3JpYiBib3VuZHNcbiAgICAgICAgICAgIGxldCB4ID0gc2hpcC5nZXRQb3NpdGlvbigpWzBdO1xuICAgICAgICAgICAgbGV0IHkgPSBzaGlwLmdldFBvc2l0aW9uKClbMV07XG4gICAgICAgICAgICBpZiAoc2hpcC5nZXRBeGlzKCkgPT09IFwiWVwiIHx8IHNoaXAuZ2V0QXhpcygpID09PVwieVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHkgKyBzaGlwLmdldExlbmd0aCgpID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoeCArIHNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjazogZnVuY3Rpb24oY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIlRoZSBhdHRhY2sgaGFzIG1pc3NlZCBhbGwgc2hpcHMuXCI7XG4gICAgICAgICAgICBfYm9hcmRTdGF0ZVtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9zaGlwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFNoaXAgPSBfc2hpcEFycmF5W2ldO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwLmdldENvb3JkaW5hdGVzKCkuZm9yRWFjaChjb29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlWzBdID09PSBjb29yZFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVbMV0gPT09IGNvb3JkWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGN1cnJlbnRTaGlwLmhpdChjb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZS5jc3NcIjtcblxuLy9DYWNoZSBET01cbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcblxuLy9BZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHN0YXJ0IGdhbWUgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJ0bnMoKSB7XG4gICAgbGV0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydEJ0blwiKTtcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB3ZWxjb21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VsY29tZVBhZ2VcIik7XG4gICAgICAgIGxldCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VsY29tZVRleHRcIik7XG4gICAgICAgIHdlbGNvbWVUZXh0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB3ZWxjb21lUGFnZS5zdHlsZS53aWR0aCA9IFwiMCVcIjtcbiAgICAgICAgc3RhcnRCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgfSk7XG4gICAgbGV0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIik7XG4gICAgYXhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuaW5uZXJIVE1MID09PSBcIlhcIil7XG4gICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBcIllcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IFwiWFwiO1xuICAgICAgICB9XG4gICAgfSlcbn1cbiAgICBcblxuLy9EaXNwbGF5IHRoZSBwcmltaXRpdmUgYm9hcmRzIG9uIHNjcmVlblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckluaXRCb2FyZHMoKSB7XG4gICAgbGV0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyQm9hcmRcIik7XG4gICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcImNlbnRlclZpZXdcIik7XG4gICAgcGxheWVyQm9hcmQuaWQgPSBcInBsYXllckJvYXJkXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKyspIHtcbiAgICAgICAgbGV0IG5ld1NxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld1NxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgICBuZXdTcXVhcmUuaWQgPSBcInBsYXllclwiICsgaTsgLy9UaGUgbmFtaW5nIG9mIHRoZSBpZCBpcyBzbyB0aGF0IHRoZSBncmlkIHBvc2l0aW9uIGNhbiBiZSBleHRyYWN0ZWQgZnJvbSBpdCB2aWEgaWRTdHJpbmcuY2hhckF0KDAgb3IgMSk7XG4gICAgICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKG5ld1NxdWFyZSk7IC8vSWYgdGhlIGlkIGlzIGluIHRoZSBmaXJzdCByb3csIGEgY2hlY2sgd2lsbCBiZSBkb25lIHRvIHNlZSBpZiB0aGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmcgaXMgNSAoXCJlbmVteVwiOyA2IGZvciBcInBsYXllclwiKSBwbHVzIDEgb3IgMlxuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuXG4gICAgbGV0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVuZW15Qm9hcmQuY2xhc3NMaXN0LmFkZChcImVuZW15Qm9hcmRcIik7XG4gICAgZW5lbXlCb2FyZC5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIik7XG4gICAgZW5lbXlCb2FyZC5pZCA9IFwiZW5lbXlCb2FyZFwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICsrKSB7XG4gICAgICAgIGxldCBuZXdTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgICAgbmV3U3F1YXJlLmlkID0gXCJlbmVteVwiICsgaTtcbiAgICAgICAgZW5lbXlCb2FyZC5hcHBlbmRDaGlsZChuZXdTcXVhcmUpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlCb2FyZCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihnYW1lYm9hcmQpIHtcbiAgICBsZXQgX2dhbWVib2FyZCA9IGdhbWVib2FyZDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEdhbWVib2FyZDogZnVuY3Rpb24oKSB7cmV0dXJuIF9nYW1lYm9hcmR9LFxuICAgICAgICBhdHRhY2s6IGZ1bmN0aW9uKHBsYXllciwgY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcGxheWVyLmdldEdhbWVib2FyZCgpLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGF0dGFja1JhbmRvbTogZnVuY3Rpb24ocGxheWVyKSB7XG4gICAgICAgICAgICBsZXQgaXNOZXdDb29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHJhbmRSb3cgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHJhbmRDb2wgPSBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKCFpc05ld0Nvb3JkKSB7XG4gICAgICAgICAgICAgICAgcmFuZFJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICByYW5kQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGlmICghcGxheWVyLmdldEdhbWVib2FyZCgpLmdldEJvYXJkKClbcmFuZENvbF1bcmFuZFJvd10pIHtcbiAgICAgICAgICAgICAgICAgICAgaXNOZXdDb29yZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcGxheWVyLmdldEdhbWVib2FyZCgpLnJlY2VpdmVBdHRhY2soW3JhbmRDb2wsIHJhbmRSb3ddKTtcbiAgICAgICAgICAgIHJldHVybiByYW5kQ29sICsgXCJcIiArIHJhbmRSb3cgKyByZXNwb25zZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHBsYWNlQ2FycmllciwgcGxhY2VCYXR0bGVzaGlwLCBwbGFjZURlc3Ryb3llciwgcGxhY2VTdWJtYXJpbmUsIHBsYWNlUGF0cm9sfSBmcm9tIFwiLi9zdGFydEdhbWUuanNcIjtcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gXCIuL3NoaXBGYWN0b3J5LmpzXCJcblxuLy9BcnJheSBhbmQgaW5kZXggYXJlIGZvciBjaGFuZ2luZyB0aGUgcGxhY2VDdXJyZW50U2hpcCBmdW5jdGlvbiB0byBwbGFjZSBhbGwgc2hpcHNcbmxldCBwbGFjZVNoaXBBcnJheSA9IFtwbGFjZUNhcnJpZXIsIHBsYWNlQmF0dGxlc2hpcCwgcGxhY2VEZXN0cm95ZXIsIHBsYWNlU3VibWFyaW5lLCBwbGFjZVBhdHJvbF07XG5sZXQgaW5kZXggPSAwO1xuLy9BcnJheSBvZiBudW1iZXJzIHRvIHJlcHJlc2VudCB0aGUgbGVuZ3RoIG9mIHRoZSBjdXJyZW50IHNoaXAgYmVpZ24gcGxhY2VkIHRvIHN1cHBvcnQgaGlnaGxpZ2h0aW5nXG5sZXQgY3VycmVudEhpZ2hsaWdodCA9IFs1LCA0LCAzLCAzLCAyXTsgLy9DYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sXG5cblxuXG5cblxuLy9OZWVkZWQgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgZW5lbXkgc3F1YXJlcyBmb3IgaW5pdGlhdGluZyBhdHRhY2tzOyB0aGlzIGZ1bmN0aW9uIGlzIGEgbGl0dGxlIGxvbmcgYmVjYXVzZSBpdCBpbmNsdWRlcyBnYW1lIGZ1bmN0aW9uYWxpdHkgYWxvbmcgd2l0aCBET00gbWFuaXB1bGF0aW9uXG5leHBvcnQgZnVuY3Rpb24gYWRkQXR0YWNrTGlzdGVuZXIoZW5lbXksIHBsYXllcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IFwiZW5lbXlcIiArIGk7XG4gICAgICAgIGxldCBjdXJyZW50U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGN1cnJlbnRJZCk7XG4gICAgICAgIGN1cnJlbnRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGxldCB4ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCB5ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SWQubGVuZ3RoID09PSA2KSB7XG4gICAgICAgICAgICAgICAgeCA9IHBhcnNlSW50KGN1cnJlbnRJZC5jaGFyQXQoNSkpO1xuICAgICAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeCA9IHBhcnNlSW50KGN1cnJlbnRJZC5jaGFyQXQoNikpO1xuICAgICAgICAgICAgICAgIHkgPSBwYXJzZUludChjdXJyZW50SWQuY2hhckF0KDUpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBtc2cgPSBwbGF5ZXIuYXR0YWNrKGVuZW15LCBbeCwgeV0pO1xuICAgICAgICAgICAgbGV0IGNsb25lID0gZS50YXJnZXQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgaWYgKG1zZy5pbmNsdWRlcyhcIm1pc3NlZFwiKSkge1xuICAgICAgICAgICAgICAgIGNsb25lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjcpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9uZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS50YXJnZXQucmVwbGFjZVdpdGgoY2xvbmUpO1xuICAgICAgICAgICAgY2xvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgQXR0YWNrOiBcIiArIG1zZyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdNc2cgPSBlbmVteS5hdHRhY2tSYW5kb20ocGxheWVyKTtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRzID0gbmV3TXNnLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGNvb3Jkcy5jaGFyQXQoMSkgPT09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIrY29vcmRzLmNoYXJBdCgwKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIrY29vcmRzLmNoYXJBdCgxKStjb29yZHMuY2hhckF0KDApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5ld01zZy5pbmNsdWRlcyhcIm1pc3NlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNylcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdNc2cgPSBuZXdNc2cuc3Vic3RyaW5nKDIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW5lbXkgQXR0YWNrOiBcIiArIG5ld01zZyk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8vRnVuY3Rpb24gZm9yIGFkZGluZyBldmVudCBMaXN0ZW5lcnMgZm9yIHBsYWNpbmcgc2hpcHMgb24gcGxheWVyQm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBhZGRQbGFjZUxpc3RlbmVyKHBsYXllcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IFwicGxheWVyXCIgKyBpO1xuICAgICAgICBsZXQgY3VycmVudFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBjdXJyZW50SWQpO1xuICAgICAgICBjdXJyZW50U3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL1NlY3Rpb24gZGVhbHMgd2l0aCBhY3R1YWxseSBwbGFjaW5nIHRoZSBzaGlwIGludG8gdGhlIHNoaXBBcnJheVxuICAgICAgICAgICAgbGV0IHggPSBudWxsO1xuICAgICAgICAgICAgbGV0IHkgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJZC5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgICAgICB4ID0gcGFyc2VJbnQoY3VycmVudElkLmNoYXJBdCg2KSk7XG4gICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gcGFyc2VJbnQoY3VycmVudElkLmNoYXJBdCg3KSk7XG4gICAgICAgICAgICAgICAgeSA9IHBhcnNlSW50KGN1cnJlbnRJZC5jaGFyQXQoNikpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gW3gsIHldO1xuICAgICAgICAgICAgbGV0IGR1bW15U2hpcCA9IGNyZWF0ZUR1bW15U2hpcChwb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAocGxheWVyLmdldEdhbWVib2FyZCgpLmNoZWNrVmFsaWRTaGlwQ29vcmRzKGR1bW15U2hpcCkpIHtcblxuXG4gICAgICAgICAgICAgICAgLy9TZWN0aW9uIGRlYWxzIHdpdGggaGlnaGxpZ2h0aW5nIHRoZSBzcXVhcmVzIHRoYXQgdGhlIHNoaXAgaXMgcGxhY2VkIGluXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTaGlwTGVuZ3RoID0gY3VycmVudEhpZ2hsaWdodFtpbmRleF07XG4gICAgICAgICAgICAgICAgbGV0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgIGlmIChheGlzID09PSBcIllcIiB8fCBheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IChpICsgKDEwKmN1cnJlbnRTaGlwTGVuZ3RoKSk7IGorPTEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA+IDk5KSB7Ly9DaGVja3MgZm9yIGlmIGogaXMgbGVhdmluZyB0aGUgZ3JpZCBib3VuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IFwiI3BsYXllclwiICsgajtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgKGkgKyBjdXJyZW50U2hpcExlbmd0aCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPiAoTWF0aC5mbG9vcigoaSsxMCkvMTApKSoxMC0xKXsvL0NoZWNrcyBmb3IgaWYgaiBpcyBsZWF2aW5nIHRoZSBncmlkIGJvdW5kc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gXCIjcGxheWVyXCIgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBwbGFjZUN1cnJlbnRTaGlwID0gcGxhY2VTaGlwQXJyYXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHBsYWNlQ3VycmVudFNoaXAocGxheWVyLCBwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICByZWNyZWF0ZVNxdWFyZXMocGxheWVyKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmRleCA9IDVcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVBsYXllckxpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSAwOyBrIDwgNTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0U2hpcEFycmF5KClba10uZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBwbGFjZUN1cnJlbnRTaGlwID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJCb2FyZFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2VudGVyVmlld1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbmVteUJvYXJkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGlzIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uXCI7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy9MaXN0ZW5lciB0byBoaWdobGlnaHQgdGhlIHNxdWFyZXMgd2hlcmUgdGhlIHNoaXAgd2lsbCBiZSBwbGFjZWRcbmV4cG9ydCBmdW5jdGlvbiBhZGRIaWdobGlnaHRMaXN0ZW5lcigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBcInBsYXllclwiICsgaTtcbiAgICAgICAgbGV0IGN1cnJlbnRTaGlwTGVuZ3RoID0gY3VycmVudEhpZ2hsaWdodFtpbmRleF07XG4gICAgICAgIGxldCBjdXJyZW50U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGN1cnJlbnRJZCk7XG4gICAgICAgIC8vVGhlIGxpc3RlbmVyIHVzZWQgdG8gaGlnaGxpZ2h0XG4gICAgICAgIGN1cnJlbnRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgYXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJZXCIgfHwgYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IChpICsgKDEwKmN1cnJlbnRTaGlwTGVuZ3RoKSk7IGorPTEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqID4gOTkpIHsvL0NoZWNrcyBmb3IgaWYgaiBpcyBsZWF2aW5nIHRoZSBncmlkIGJvdW5kc1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gXCIjcGxheWVyXCIgKyBqO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgKGkgKyBjdXJyZW50U2hpcExlbmd0aCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA+IChNYXRoLmZsb29yKChpKzEwKS8xMCkpKjEwLTEpey8vQ2hlY2tzIGZvciBpZiBqIGlzIGxlYXZpbmcgdGhlIGdyaWQgYm91bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBcIiNwbGF5ZXJcIiArIGo7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjUpXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvL1RoZSBsaXN0ZW5lciB1c2VkIHRvIHVuaGlnaGxpZ2h0XG4gICAgICAgIGN1cnJlbnRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgYXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJZXCIgfHwgYXhpcyA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IChpICsgKDEwKmN1cnJlbnRTaGlwTGVuZ3RoKSk7IGorPTEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqID4gOTkpIHsvL0NoZWNrcyBmb3IgaWYgaiBpcyBsZWF2aW5nIHRoZSBncmlkIGJvdW5kc1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gXCIjcGxheWVyXCIgKyBqO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgKGkgKyBjdXJyZW50U2hpcExlbmd0aCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA+IChNYXRoLmZsb29yKChpKzEwKS8xMCkpKjEwLTEpey8vQ2hlY2tzIGZvciBpZiBqIGlzIGxlYXZpbmcgdGhlIGdyaWQgYm91bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBcIiNwbGF5ZXJcIiArIGo7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy9GdW5jdGlvbiBmb3IgcmVtb3ZpbmcgYWxsIExpc3RlbmVycyAob24gcGxheWVyQm9hcmQpXG5mdW5jdGlvbiByZW1vdmVQbGF5ZXJMaXN0ZW5lcnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudElkID0gXCJwbGF5ZXJcIiArIGk7XG4gICAgICAgIGxldCBjdXJyZW50U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGN1cnJlbnRJZCk7XG4gICAgICAgIGN1cnJlbnRTcXVhcmUucmVwbGFjZVdpdGgoY3VycmVudFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbn1cblxuLy9GdW5jdGlvbiB0byByZWNyZWF0ZSBhbGwgdGhlIHNxdWFyZXMgYW5kIHJlYXR0YWNoIGFsbCB0aGUgbGlzdGVuZXJzIChuZWVkZWQgdG8gY2hhbmdlIGhpZ2hsaWdodCBsZW5ndGgpXG5mdW5jdGlvbiByZWNyZWF0ZVNxdWFyZXMocGxheWVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudElkID0gXCJwbGF5ZXJcIiArIGk7XG4gICAgICAgIGxldCBjdXJyZW50U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGN1cnJlbnRJZCk7XG4gICAgICAgIGN1cnJlbnRTcXVhcmUucmVwbGFjZVdpdGgoY3VycmVudFNxdWFyZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgICBhZGRQbGFjZUxpc3RlbmVyKHBsYXllcik7XG4gICAgYWRkSGlnaGxpZ2h0TGlzdGVuZXIoKTtcbn1cblxuLy9GdW5jdGlvbiB0byBjcmVhdGUgYSBkdW1teSBzaGlwIHRvIGNoZWNrIGZvciB2YWxpZCBwbGFjZW1lbnRcbmZ1bmN0aW9uIGNyZWF0ZUR1bW15U2hpcChwb3NpdGlvbikge1xuICAgIGxldCBkdW1teVNoaXAgPSBudWxsO1xuICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZHVtbXlTaGlwID0gY3JlYXRlU2hpcChcIkNhcnJpZXJcIiwgNSwgcG9zaXRpb24sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICBkdW1teVNoaXAgPSBjcmVhdGVTaGlwKFwiQmF0dGxlc2hpcFwiLCA0LCBwb3NpdGlvbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgZHVtbXlTaGlwID0gY3JlYXRlU2hpcChcIkRlc3Ryb3llclwiLCAzLCBwb3NpdGlvbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgZHVtbXlTaGlwID0gY3JlYXRlU2hpcChcIlN1Ym1hcmluZVwiLCAzLCBwb3NpdGlvbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OiBcbiAgICAgICAgICAgIGR1bW15U2hpcCA9IGNyZWF0ZVNoaXAoXCJQYXRyb2xcIiwgMiwgcG9zaXRpb24sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUwpO1xuICAgIH1cbiAgICBkdW1teVNoaXAuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICByZXR1cm4gZHVtbXlTaGlwO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGxlbmd0aCwgcG9zaXRpb24sIGF4aXMpIHtcbiAgICBsZXQgX25hbWUgPSBuYW1lO1xuICAgIGxldCBfbGVuZ3RoID0gbGVuZ3RoO1xuICAgIGxldCBfcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICBsZXQgX2F4aXMgPSBheGlzO1xuICAgIGxldCBfY29vcmRpbmF0ZXMgPSBudWxsO1xuICAgIGxldCBfaXNTdW5rID0gZmFsc2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvL0FjY2Vzc29yIGZ1bmN0aW9uc1xuICAgICAgICBnZXROYW1lOiBmdW5jdGlvbigpe3JldHVybiBfbmFtZX0sXG4gICAgICAgIGdldExlbmd0aDogZnVuY3Rpb24oKSB7cmV0dXJuIF9sZW5ndGh9LFxuICAgICAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24oKSB7cmV0dXJuIF9wb3NpdGlvbn0sXG4gICAgICAgIGdldENvb3JkaW5hdGVzOiBmdW5jdGlvbigpIHtyZXR1cm4gX2Nvb3JkaW5hdGVzfSxcbiAgICAgICAgZ2V0QXhpczogZnVuY3Rpb24oKSB7cmV0dXJuIF9heGlzfSxcbiAgICAgICAgZ2V0SXNTdW5rOiBmdW5jdGlvbigpIHtyZXR1cm4gX2lzU3Vua30sXG4gICAgICAgIC8vTXV0YXRvciBmdW5jdGlvbnNcbiAgICAgICAgc2V0UG9zaXRpb246IGZ1bmN0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICBfY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UG9zaXRpb25SYW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBheGlzID0gXCJcIjtcbiAgICAgICAgICAgIHdoaWxlKCF2YWxpZCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+PSAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXhpcyA9IFwieFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25bMF0gKyBfbGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBheGlzID0gXCJ5XCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvblsxXSArIF9sZW5ndGggPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIF9heGlzID0gYXhpcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0Q29vcmRpbmF0ZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbmV3IEFycmF5KF9sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKF9heGlzID09PSBcIlhcIiB8fCBfYXhpcyA9PT1cInhcIikge1xuICAgICAgICAgICAgICAgIGxldCB5ID0gX3Bvc2l0aW9uWzFdO1xuICAgICAgICAgICAgICAgIGxldCB4ID0gX3Bvc2l0aW9uWzBdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzW2ldID0gW3ggKyBpLCB5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCB5ID0gX3Bvc2l0aW9uWzFdO1xuICAgICAgICAgICAgICAgIGxldCB4ID0gX3Bvc2l0aW9uWzBdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzW2ldID0gW3gsIHkgKyBpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICAgICAgfSxcbiAgICAgICAgaGl0OiBmdW5jdGlvbihjb29yZGluYXRlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlWzBdID09PSBfY29vcmRpbmF0ZXNbaV1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVbMV0gPT09IF9jb29yZGluYXRlc1tpXVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2Nvb3JkaW5hdGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfY29vcmRpbmF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgX2lzU3VuayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX2lzU3Vuaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbmFtZSArIFwiIGhhcyBiZWVuIGRlc3Ryb3llZCEhIVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9uYW1lICsgXCIgaGFzIGJlZW4gaGl0ISEhXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4vc2hpcEZhY3RvcnkuanNcIjtcbmltcG9ydCBjcmVhdGVHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeS5qc1wiO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXJGYWN0b3J5LmpzXCI7XG5cbi8vRnVuY3Rpb24gdG8gaW5pdCBhbGwgZ2FtZSB2YWx1ZXMgd2l0aCB0ZXN0IHZhcmlhYmxlc1xuZXhwb3J0IGZ1bmN0aW9uIHRlc3RHYW1lKCkge1xuICAgIGxldCBwbGF5ZXJDYXJyaWVyID0gY3JlYXRlU2hpcChcIkNhcnJpZXJcIiwgNSwgWzEsIDFdLCBcInlcIik7XG4gICAgcGxheWVyQ2Fycmllci5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBwbGF5ZXJCYXR0bGVzaGlwID0gY3JlYXRlU2hpcChcIkJhdHRsZXNoaXBcIiwgNCwgWzMsIDFdLCBcInhcIik7XG4gICAgcGxheWVyQmF0dGxlc2hpcC5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBwbGF5ZXJEZXN0cm95ZXIgPSBjcmVhdGVTaGlwKFwiRGVzdHJveWVyXCIsIDMsIFs2LCA5XSwgXCJ4XCIpO1xuICAgIHBsYXllckRlc3Ryb3llci5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBwbGF5ZXJTdWJtYXJpbmUgPSBjcmVhdGVTaGlwKFwiU3VibWFyaW5lXCIsIDMsIFs1LCA1XSwgXCJ5XCIpO1xuICAgIHBsYXllclN1Ym1hcmluZS5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBwbGF5ZXJQYXRyb2wgPSBjcmVhdGVTaGlwKFwiUGF0cm9sXCIsIDIsIFs4LCAyXSwgXCJ5XCIpO1xuICAgIHBsYXllclBhdHJvbC5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuICAgIGxldCBlbmVteUNhcnJpZXIgPSBjcmVhdGVTaGlwKFwiQ2FycmllclwiLCA1LCBbMSwgMV0sIFwieVwiKTtcbiAgICBlbmVteUNhcnJpZXIuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgZW5lbXlCYXR0bGVzaGlwID0gY3JlYXRlU2hpcChcIkJhdHRsZXNoaXBcIiwgNCwgWzMsIDFdLCBcInhcIik7XG4gICAgZW5lbXlCYXR0bGVzaGlwLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15RGVzdHJveWVyID0gY3JlYXRlU2hpcChcIkRlc3Ryb3llclwiLCAzLCBbNiwgOV0sIFwieFwiKTtcbiAgICBlbmVteURlc3Ryb3llci5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBlbmVteVN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoXCJTdWJtYXJpbmVcIiwgMywgWzUsIDVdLCBcInlcIik7XG4gICAgZW5lbXlTdWJtYXJpbmUuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgZW5lbXlQYXRyb2wgPSBjcmVhdGVTaGlwKFwiUGF0cm9sXCIsIDIsIFs4LCAyXSwgXCJ5XCIpO1xuICAgIGVuZW15UGF0cm9sLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15Qm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgICBwbGF5ZXJCb2FyZC5pbml0R2FtZWJvYXJkKCk7XG4gICAgZW5lbXlCb2FyZC5pbml0R2FtZWJvYXJkKCk7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckNhcnJpZXIpO1xuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJCYXR0bGVzaGlwKTtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyRGVzdHJveWVyKTtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyU3VibWFyaW5lKTtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyUGF0cm9sKTtcbiAgICBlbmVteUJvYXJkLnBsYWNlU2hpcFJhbmQoZW5lbXlDYXJyaWVyKTtcbiAgICBlbmVteUJvYXJkLnBsYWNlU2hpcFJhbmQoZW5lbXlCYXR0bGVzaGlwKTtcbiAgICBlbmVteUJvYXJkLnBsYWNlU2hpcFJhbmQoZW5lbXlEZXN0cm95ZXIpO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteVN1Ym1hcmluZSk7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15UGF0cm9sKTtcbiAgICBsZXQgcGxheWVyID0gY3JlYXRlUGxheWVyKHBsYXllckJvYXJkKTtcbiAgICBsZXQgZW5lbXkgPSBjcmVhdGVQbGF5ZXIoZW5lbXlCb2FyZCk7XG4gICAgcmV0dXJuIFtwbGF5ZXIsIGVuZW15XTtcbn1cblxuLy9GdW5jdGlvbiB0byBpbml0IGVtcHR5IGJvYXJkIGFuZCBwbGF5ZXIgb2JqZWN0c1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRHYW1lKCkge1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuICAgIHBsYXllckJvYXJkLmluaXRHYW1lYm9hcmQoKTtcbiAgICBsZXQgZW5lbXlCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuICAgIGVuZW15Qm9hcmQuaW5pdEdhbWVib2FyZCgpO1xuICAgIGxldCBlbmVteUNhcnJpZXIgPSBjcmVhdGVTaGlwKFwiQ2FycmllclwiLCA1LCBbMSwgMV0sIFwieVwiKTtcbiAgICBlbmVteUNhcnJpZXIuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgZW5lbXlCYXR0bGVzaGlwID0gY3JlYXRlU2hpcChcIkJhdHRsZXNoaXBcIiwgNCwgWzMsIDFdLCBcInhcIik7XG4gICAgZW5lbXlCYXR0bGVzaGlwLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15RGVzdHJveWVyID0gY3JlYXRlU2hpcChcIkRlc3Ryb3llclwiLCAzLCBbNiwgOV0sIFwieFwiKTtcbiAgICBlbmVteURlc3Ryb3llci5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBlbmVteVN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoXCJTdWJtYXJpbmVcIiwgMywgWzUsIDVdLCBcInlcIik7XG4gICAgZW5lbXlTdWJtYXJpbmUuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgZW5lbXlQYXRyb2wgPSBjcmVhdGVTaGlwKFwiUGF0cm9sXCIsIDIsIFs4LCAyXSwgXCJ5XCIpO1xuICAgIGVuZW15UGF0cm9sLnNldENvb3JkaW5hdGVzKCk7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15Q2Fycmllcik7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15QmF0dGxlc2hpcCk7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15RGVzdHJveWVyKTtcbiAgICBlbmVteUJvYXJkLnBsYWNlU2hpcFJhbmQoZW5lbXlTdWJtYXJpbmUpO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteVBhdHJvbCk7XG4gICAgbGV0IHBsYXllciA9IGNyZWF0ZVBsYXllcihwbGF5ZXJCb2FyZCk7XG4gICAgbGV0IGVuZW15ID0gY3JlYXRlUGxheWVyKGVuZW15Qm9hcmQpO1xuICAgIHJldHVybiBbcGxheWVyLCBlbmVteV07XG59XG5cbi8vRnVuY3Rpb24gZm9yIHBsYWNpbmcgY2FycmllciBvbiBwbGF5ZXJCb2FyZFxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlQ2FycmllcihwbGF5ZXIsIHBvc2l0aW9uKSB7XG4gICAgbGV0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikuaW5uZXJIVE1MO1xuICAgIGxldCBuZXdDYXJyaWVyID0gY3JlYXRlU2hpcChcIkNhcnJpZXJcIiwgNSwgcG9zaXRpb24sIGF4aXMpO1xuICAgIG5ld0NhcnJpZXIuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBjb25zb2xlLmxvZyhuZXdDYXJyaWVyLmdldENvb3JkaW5hdGVzKCkpXG4gICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnBsYWNlU2hpcChuZXdDYXJyaWVyKTtcbn1cblxuLy9GdW5jdGlvbiBmb3IgcGxhY2luZyBjYXJyaWVyIG9uIHBsYXllckJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VCYXR0bGVzaGlwKHBsYXllciwgcG9zaXRpb24pIHtcbiAgICBsZXQgYXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUw7XG4gICAgbGV0IG5ld0JhdHRsZXNoaXAgPSBjcmVhdGVTaGlwKFwiQmF0dGxlc2hpcFwiLCA0LCBwb3NpdGlvbiwgYXhpcyk7XG4gICAgbmV3QmF0dGxlc2hpcC5zZXRDb29yZGluYXRlcygpO1xuICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5wbGFjZVNoaXAobmV3QmF0dGxlc2hpcCk7XG59XG5cblxuLy9GdW5jdGlvbiBmb3IgcGxhY2luZyBjYXJyaWVyIG9uIHBsYXllckJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VEZXN0cm95ZXIocGxheWVyLCBwb3NpdGlvbikge1xuICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTDtcbiAgICBsZXQgbmV3RGVzdHJveWVyID0gY3JlYXRlU2hpcChcIkRlc3Ryb3llclwiLCAzLCBwb3NpdGlvbiwgYXhpcyk7XG4gICAgbmV3RGVzdHJveWVyLnNldENvb3JkaW5hdGVzKCk7XG4gICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnBsYWNlU2hpcChuZXdEZXN0cm95ZXIpO1xufVxuXG5cbi8vRnVuY3Rpb24gZm9yIHBsYWNpbmcgY2FycmllciBvbiBwbGF5ZXJCb2FyZFxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU3VibWFyaW5lKHBsYXllciwgcG9zaXRpb24pIHtcbiAgICBsZXQgYXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUw7XG4gICAgbGV0IG5ld1N1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoXCJTdWJtYXJpbmVcIiwgMywgcG9zaXRpb24sIGF4aXMpO1xuICAgIG5ld1N1Ym1hcmluZS5zZXRDb29yZGluYXRlcygpO1xuICAgIHBsYXllci5nZXRHYW1lYm9hcmQoKS5wbGFjZVNoaXAobmV3U3VibWFyaW5lKTtcbn1cblxuXG4vL0Z1bmN0aW9uIGZvciBwbGFjaW5nIGNhcnJpZXIgb24gcGxheWVyQm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVBhdHJvbChwbGF5ZXIsIHBvc2l0aW9uKSB7XG4gICAgbGV0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikuaW5uZXJIVE1MO1xuICAgIGxldCBuZXdQYXRyb2wgPSBjcmVhdGVTaGlwKFwiUGF0cm9sXCIsIDIsIHBvc2l0aW9uLCBheGlzKTtcbiAgICBuZXdQYXRyb2wuc2V0Q29vcmRpbmF0ZXMoKTsgXG4gICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnBsYWNlU2hpcChuZXdQYXRyb2wpO1xufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlLmNzc1wiXG5pbXBvcnQgeyB0ZXN0R2FtZSwgaW5pdEdhbWUgfSBmcm9tIFwiLi9zdGFydEdhbWUuanNcIjtcbmltcG9ydCB7IGluaXRCdG5zLCByZW5kZXJJbml0Qm9hcmRzfSBmcm9tIFwiLi9tYW5pcHVsYXRlRE9NLmpzXCI7XG5pbXBvcnQgeyBhZGRBdHRhY2tMaXN0ZW5lciwgYWRkUGxhY2VMaXN0ZW5lciwgYWRkSGlnaGxpZ2h0TGlzdGVuZXIgfSBmcm9tIFwiLi9ydW5HYW1lLmpzXCI7XG5cbmluaXRCdG5zKCk7XG5sZXQgcGxheWVyQXJyYXkgPSBpbml0R2FtZSgpO1xubGV0IHBsYXllciA9IHBsYXllckFycmF5WzBdO1xubGV0IGVuZW15ID0gcGxheWVyQXJyYXlbMV07XG5yZW5kZXJJbml0Qm9hcmRzKCk7XG5hZGRQbGFjZUxpc3RlbmVyKHBsYXllcik7XG5hZGRIaWdobGlnaHRMaXN0ZW5lcigpO1xuYWRkQXR0YWNrTGlzdGVuZXIoZW5lbXksIHBsYXllcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=