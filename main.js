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
/* harmony export */   "renderInitBoards": () => (/* binding */ renderInitBoards),
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
let placeCurrentShip = placeShipArray[index];
//Array of numbers to represent the length of the current ship beign placed to support highlighting
let currentHighlight = [5, 4, 3, 3, 2]; //Carrier, battleship, destroyer, submarine, patrol

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


                placeCurrentShip(player, position);
                index++;
                if (index === 5) {
                    console.log("index = 5");
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
            recreateSquares(player);
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





(0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_2__.initBtns)();
let playerArray = (0,_startGame_js__WEBPACK_IMPORTED_MODULE_1__.initGame)();
let player = playerArray[0];
let enemy = playerArray[1];
(0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_2__.renderInitBoards)();
(0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_2__.addPlaceListener)(player);
(0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_2__.addHighlightListener)();
(0,_manipulateDOM_js__WEBPACK_IMPORTED_MODULE_2__.addAttackListener)(enemy, player);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL21hbmlwdWxhdGVET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL01hY2hpbmVTdGQtQm9sZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogNDB2dztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7IGJvdHRvbTogMDsgcmlnaHQ6IDA7IGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMzB2aDtcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjUlO1xcbn1cXG5cXG4jd2VsY29tZVBhZ2Uge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XFxufVxcblxcbiNtc2dCb2FyZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gICAgdG9wOiAxM3ZoO1xcbiAgICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxufVxcblxcbiNzdGFydEJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2MCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbiNheGlzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB0b3A6IDE1dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIHdpZHRoOiAzdnc7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2F4aXNMYWJlbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gICAgdG9wOiAxNXZoO1xcbiAgICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLnRpdGxlRm9udCB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwOyByaWdodDogMDsgYm90dG9tOiAwOyBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllckJvYXJkIHtcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjV2dztcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxufVxcblxcbi5lbmVteUJvYXJkIHtcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjV2dztcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4udHJhbnNwYXJlbnQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5oaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY2VudGVyVmlldyB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBoZWlnaHQ6IDMwdnc7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsK0RBQXdEO0FBQzVEOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTztJQUNwQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTztJQUNwQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHNyYzogdXJsKFxcXCJmb250cy9NYWNoaW5lU3RkLUJvbGQub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiA0MHZ3O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDsgYm90dG9tOiAwOyByaWdodDogMDsgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNSU7XFxufVxcblxcbiN3ZWxjb21lUGFnZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG59XFxuXFxuI21zZ0JvYXJkIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB0b3A6IDEzdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG59XFxuXFxuI3N0YXJ0QnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI2F4aXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICAgIHRvcDogMTV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IDN2dztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jYXhpc0xhYmVsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICB0b3A6IDE1dmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4udGl0bGVGb250IHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyQm9hcmQge1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyNXZ3O1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLmVuZW15Qm9hcmQge1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyNXZ3O1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxufVxcblxcbi50cmFuc3BhcmVudCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jZW50ZXJWaWV3IHtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGhlaWdodDogMzB2dztcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4uc3F1YXJlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgbGV0IF9ib2FyZFN0YXRlID0gbnVsbDsgLy8xMHgxMCBhcnJheSB0aGF0IGhvbGRzIGJvb2wgdmFsdWUgdGhhdCBzcGVjaWZpZXMgaWYgdGhhdCBzcG90IGhhcyBiZWVuIGhpdCBvciBub3Q7IGhpdCBhbmQgbWlzcyB3aWxsIGJlIGRpZmZlcmVudCBjb2xvciBvbiB1aVxuICAgIGxldCBfc2hpcEFycmF5ID0gW107IC8vaG9sZHMgdGhlIHNoaXBzIG9uIHRoZSBib2FyZDsgaWYgY29vcmRzIG9mIGFsbCBzaGlwcyBhcmUgZW1wdHkgdGhlbiBib2FyZCBpcyBlbXB0eVxuICAgIGxldCBfc3RhdHVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvL0FjY2Vzc29yIGZ1bmN0aW9uc1xuICAgICAgICBnZXRTaGlwQXJyYXk6IGZ1bmN0aW9uKCkge3JldHVybiBfc2hpcEFycmF5fSxcbiAgICAgICAgZ2V0V2lkdGg6IGZ1bmN0aW9uKCkge3JldHVybiBfYm9hcmRTdGF0ZS5sZW5ndGh9LFxuICAgICAgICBnZXRMZW5ndGg6IGZ1bmN0aW9uKCkge3JldHVybiBfYm9hcmRTdGF0ZVswXS5sZW5ndGh9LFxuICAgICAgICBnZXRTdGF0dXM6IGZ1bmN0aW9uKCkge3JldHVybiBfc3RhdHVzfSxcbiAgICAgICAgZ2V0Qm9hcmQ6IGZ1bmN0aW9uKCkge3JldHVybiBfYm9hcmRTdGF0ZX0sXG5cbiAgICAgICAgLy9NdXRhdG9yIGZ1bmN0aW9uc1xuICAgICAgICB1cGRhdGVTdGF0dXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc2hpcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfc2hpcEFycmF5W2ldLmdldElzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdEdhbWVib2FyZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gMTAsIGNvbHMgPSAxMDtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBfYm9hcmRTdGF0ZSA9IG5ldyBBcnJheShyb3dzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2JvYXJkU3RhdGVbaV0gPSBuZXcgQXJyYXkoY29scykuZmlsbCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwbGFjZVNoaXA6IGZ1bmN0aW9uKHNoaXApIHtcbiAgICAgICAgICAgIF9zaGlwQXJyYXkucHVzaChzaGlwKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2VTaGlwUmFuZDogZnVuY3Rpb24oc2hpcCkge1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgc2hpcC5zZXRQb3NpdGlvblJhbmQoKTtcbiAgICAgICAgICAgICAgICBzaGlwLnNldENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0aGlzLmNoZWNrVmFsaWRTaGlwQ29vcmRzKHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3NoaXBBcnJheS5wdXNoKHNoaXApO1xuICAgICAgICB9LFxuICAgICAgICBjaGVja1ZhbGlkU2hpcENvb3JkczogZnVuY3Rpb24oc2hpcCkge1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vQ2hlY2tzIHRvIHNlZSBpZiB0aGVyZSBhcmUgb3ZlcmxhcHMgYmV0d2VlbiBwcmUtZXhpc3Rpbmcgc2hpcHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3NoaXBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX3NoaXBBcnJheVtpXS5nZXRDb29yZGluYXRlcygpLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZHNMZW5ndGggPSBzaGlwLmdldENvb3JkaW5hdGVzKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvb3Jkc0xlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvbXBhcmUgPSBfc2hpcEFycmF5W2ldLmdldENvb3JkaW5hdGVzKClbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvb3JkID0gc2hpcC5nZXRDb29yZGluYXRlcygpW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDb21wYXJlWzBdID09PSBjdXJyZW50Q29vcmRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudENvbXBhcmVbMV0gPT09IGN1cnJlbnRDb29yZFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vQ2hlY2tzIHRvIHNlZSBpZiB0aGUgbmV3IHNoaXAgZ29lcyBvdXQgb2YgdGhlIGdyaWIgYm91bmRzXG4gICAgICAgICAgICBsZXQgeCA9IHNoaXAuZ2V0UG9zaXRpb24oKVswXTtcbiAgICAgICAgICAgIGxldCB5ID0gc2hpcC5nZXRQb3NpdGlvbigpWzFdO1xuICAgICAgICAgICAgaWYgKHNoaXAuZ2V0QXhpcygpID09PSBcIllcIiB8fCBzaGlwLmdldEF4aXMoKSA9PT1cInlcIikge1xuICAgICAgICAgICAgICAgIGlmICh5ICsgc2hpcC5nZXRMZW5ndGgoKSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHggKyBzaGlwLmdldExlbmd0aCgpID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2s6IGZ1bmN0aW9uKGNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gXCJUaGUgYXR0YWNrIGhhcyBtaXNzZWQgYWxsIHNoaXBzLlwiO1xuICAgICAgICAgICAgX2JvYXJkU3RhdGVbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc2hpcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTaGlwID0gX3NoaXBBcnJheVtpXTtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2hpcC5nZXRDb29yZGluYXRlcygpLmZvckVhY2goY29vcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZVswXSA9PT0gY29vcmRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlWzFdID09PSBjb29yZFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBjdXJyZW50U2hpcC5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBwbGFjZUNhcnJpZXIsIHBsYWNlQmF0dGxlc2hpcCwgcGxhY2VEZXN0cm95ZXIsIHBsYWNlU3VibWFyaW5lLCBwbGFjZVBhdHJvbH0gZnJvbSBcIi4vc3RhcnRHYW1lLmpzXCI7XG5pbXBvcnQgY3JlYXRlU2hpcCBmcm9tIFwiLi9zaGlwRmFjdG9yeS5qc1wiXG5cbi8vQXJyYXkgYW5kIGluZGV4IGFyZSBmb3IgY2hhbmdpbmcgdGhlIHBsYWNlQ3VycmVudFNoaXAgZnVuY3Rpb24gdG8gcGxhY2UgYWxsIHNoaXBzXG5sZXQgcGxhY2VTaGlwQXJyYXkgPSBbcGxhY2VDYXJyaWVyLCBwbGFjZUJhdHRsZXNoaXAsIHBsYWNlRGVzdHJveWVyLCBwbGFjZVN1Ym1hcmluZSwgcGxhY2VQYXRyb2xdO1xubGV0IGluZGV4ID0gMDtcbmxldCBwbGFjZUN1cnJlbnRTaGlwID0gcGxhY2VTaGlwQXJyYXlbaW5kZXhdO1xuLy9BcnJheSBvZiBudW1iZXJzIHRvIHJlcHJlc2VudCB0aGUgbGVuZ3RoIG9mIHRoZSBjdXJyZW50IHNoaXAgYmVpZ24gcGxhY2VkIHRvIHN1cHBvcnQgaGlnaGxpZ2h0aW5nXG5sZXQgY3VycmVudEhpZ2hsaWdodCA9IFs1LCA0LCAzLCAzLCAyXTsgLy9DYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sXG5cbi8vQ2FjaGUgRE9NXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5cbi8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdGFydCBnYW1lIGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCdG5zKCkge1xuICAgIGxldCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnRCdG5cIik7XG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgd2VsY29tZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlbGNvbWVQYWdlXCIpO1xuICAgICAgICBsZXQgd2VsY29tZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlbGNvbWVUZXh0XCIpO1xuICAgICAgICB3ZWxjb21lVGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgd2VsY29tZVBhZ2Uuc3R5bGUud2lkdGggPSBcIjAlXCI7XG4gICAgICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH0pO1xuICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpO1xuICAgIGF4aXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTCA9PT0gXCJYXCIpe1xuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gXCJZXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICAgICAgfVxuICAgIH0pXG59XG4gICAgXG5cbi8vRGlzcGxheSB0aGUgcHJpbWl0aXZlIGJvYXJkcyBvbiBzY3JlZW5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJbml0Qm9hcmRzKCkge1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllckJvYXJkXCIpO1xuICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJWaWV3XCIpO1xuICAgIHBsYXllckJvYXJkLmlkID0gXCJwbGF5ZXJCb2FyZFwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICsrKSB7XG4gICAgICAgIGxldCBuZXdTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgICAgbmV3U3F1YXJlLmlkID0gXCJwbGF5ZXJcIiArIGk7IC8vVGhlIG5hbWluZyBvZiB0aGUgaWQgaXMgc28gdGhhdCB0aGUgZ3JpZCBwb3NpdGlvbiBjYW4gYmUgZXh0cmFjdGVkIGZyb20gaXQgdmlhIGlkU3RyaW5nLmNoYXJBdCgwIG9yIDEpO1xuICAgICAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChuZXdTcXVhcmUpOyAvL0lmIHRoZSBpZCBpcyBpbiB0aGUgZmlyc3Qgcm93LCBhIGNoZWNrIHdpbGwgYmUgZG9uZSB0byBzZWUgaWYgdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nIGlzIDUgKFwiZW5lbXlcIjsgNiBmb3IgXCJwbGF5ZXJcIikgcGx1cyAxIG9yIDJcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcblxuICAgIGxldCBlbmVteUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbmVteUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJlbmVteUJvYXJkXCIpO1xuICAgIGVuZW15Qm9hcmQuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgIGVuZW15Qm9hcmQuaWQgPSBcImVuZW15Qm9hcmRcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArKykge1xuICAgICAgICBsZXQgbmV3U3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3U3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICAgIG5ld1NxdWFyZS5pZCA9IFwiZW5lbXlcIiArIGk7XG4gICAgICAgIGVuZW15Qm9hcmQuYXBwZW5kQ2hpbGQobmV3U3F1YXJlKTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Qm9hcmQpO1xufVxuXG4vL05lZWRlZCB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBlbmVteSBzcXVhcmVzIGZvciBpbml0aWF0aW5nIGF0dGFja3M7IHRoaXMgZnVuY3Rpb24gaXMgYSBsaXR0bGUgbG9uZyBiZWNhdXNlIGl0IGluY2x1ZGVzIGdhbWUgZnVuY3Rpb25hbGl0eSBhbG9uZyB3aXRoIERPTSBtYW5pcHVsYXRpb25cbmV4cG9ydCBmdW5jdGlvbiBhZGRBdHRhY2tMaXN0ZW5lcihlbmVteSwgcGxheWVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudElkID0gXCJlbmVteVwiICsgaTtcbiAgICAgICAgbGV0IGN1cnJlbnRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgY3VycmVudElkKTtcbiAgICAgICAgY3VycmVudFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbGV0IHggPSBudWxsO1xuICAgICAgICAgICAgbGV0IHkgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJZC5sZW5ndGggPT09IDYpIHtcbiAgICAgICAgICAgICAgICB4ID0gcGFyc2VJbnQoY3VycmVudElkLmNoYXJBdCg1KSk7XG4gICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gcGFyc2VJbnQoY3VycmVudElkLmNoYXJBdCg2KSk7XG4gICAgICAgICAgICAgICAgeSA9IHBhcnNlSW50KGN1cnJlbnRJZC5jaGFyQXQoNSkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG1zZyA9IHBsYXllci5hdHRhY2soZW5lbXksIFt4LCB5XSk7XG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBlLnRhcmdldC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBpZiAobXNnLmluY2x1ZGVzKFwibWlzc2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgY2xvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNylcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsb25lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnRhcmdldC5yZXBsYWNlV2l0aChjbG9uZSk7XG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBBdHRhY2s6IFwiICsgbXNnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld01zZyA9IGVuZW15LmF0dGFja1JhbmRvbShwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBuZXdNc2cuc2xpY2UoMCwgMik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29vcmRzKTtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoY29vcmRzLmNoYXJBdCgxKSA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIitjb29yZHMuY2hhckF0KDApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIitjb29yZHMuY2hhckF0KDEpK2Nvb3Jkcy5jaGFyQXQoMCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV3TXNnLmluY2x1ZGVzKFwibWlzc2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC43KVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld01zZyA9IG5ld01zZy5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbmVteSBBdHRhY2s6IFwiICsgbmV3TXNnKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy9GdW5jdGlvbiBmb3IgYWRkaW5nIGV2ZW50IExpc3RlbmVycyBmb3IgcGxhY2luZyBzaGlwcyBvbiBwbGF5ZXJCb2FyZFxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBsYWNlTGlzdGVuZXIocGxheWVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudElkID0gXCJwbGF5ZXJcIiArIGk7XG4gICAgICAgIGxldCBjdXJyZW50U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIGN1cnJlbnRJZCk7XG4gICAgICAgIGN1cnJlbnRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vU2VjdGlvbiBkZWFscyB3aXRoIGFjdHVhbGx5IHBsYWNpbmcgdGhlIHNoaXAgaW50byB0aGUgc2hpcEFycmF5XG4gICAgICAgICAgICBsZXQgeCA9IG51bGw7XG4gICAgICAgICAgICBsZXQgeSA9IG51bGw7XG4gICAgICAgICAgICBpZiAoY3VycmVudElkLmxlbmd0aCA9PT0gNykge1xuICAgICAgICAgICAgICAgIHggPSBwYXJzZUludChjdXJyZW50SWQuY2hhckF0KDYpKTtcbiAgICAgICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSBwYXJzZUludChjdXJyZW50SWQuY2hhckF0KDcpKTtcbiAgICAgICAgICAgICAgICB5ID0gcGFyc2VJbnQoY3VycmVudElkLmNoYXJBdCg2KSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBbeCwgeV07XG4gICAgICAgICAgICBsZXQgZHVtbXlTaGlwID0gY3JlYXRlRHVtbXlTaGlwKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuY2hlY2tWYWxpZFNoaXBDb29yZHMoZHVtbXlTaGlwKSkge1xuXG5cbiAgICAgICAgICAgICAgICAvL1NlY3Rpb24gZGVhbHMgd2l0aCBoaWdobGlnaHRpbmcgdGhlIHNxdWFyZXMgdGhhdCB0aGUgc2hpcCBpcyBwbGFjZWQgaW5cbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFNoaXBMZW5ndGggPSBjdXJyZW50SGlnaGxpZ2h0W2luZGV4XTtcbiAgICAgICAgICAgICAgICBsZXQgYXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwiWVwiIHx8IGF4aXMgPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgKGkgKyAoMTAqY3VycmVudFNoaXBMZW5ndGgpKTsgais9MTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID4gOTkpIHsvL0NoZWNrcyBmb3IgaWYgaiBpcyBsZWF2aW5nIHRoZSBncmlkIGJvdW5kc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gXCIjcGxheWVyXCIgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCAoaSArIGN1cnJlbnRTaGlwTGVuZ3RoKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA+IChNYXRoLmZsb29yKChpKzEwKS8xMCkpKjEwLTEpey8vQ2hlY2tzIGZvciBpZiBqIGlzIGxlYXZpbmcgdGhlIGdyaWQgYm91bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBcIiNwbGF5ZXJcIiArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBwbGFjZUN1cnJlbnRTaGlwKHBsYXllciwgcG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXggPSA1XCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSAwOyBrIDwgNTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkuZ2V0U2hpcEFycmF5KClba10uZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBwbGFjZUN1cnJlbnRTaGlwID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJCb2FyZFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2VudGVyVmlld1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbmVteUJvYXJkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGlzIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uXCI7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgcmVjcmVhdGVTcXVhcmVzKHBsYXllcik7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vL0xpc3RlbmVyIHRvIGhpZ2hsaWdodCB0aGUgc3F1YXJlcyB3aGVyZSB0aGUgc2hpcCB3aWxsIGJlIHBsYWNlZFxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhpZ2hsaWdodExpc3RlbmVyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IFwicGxheWVyXCIgKyBpO1xuICAgICAgICBsZXQgY3VycmVudFNoaXBMZW5ndGggPSBjdXJyZW50SGlnaGxpZ2h0W2luZGV4XTtcbiAgICAgICAgbGV0IGN1cnJlbnRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgY3VycmVudElkKTtcbiAgICAgICAgLy9UaGUgbGlzdGVuZXIgdXNlZCB0byBoaWdobGlnaHRcbiAgICAgICAgY3VycmVudFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgIGlmIChheGlzID09PSBcIllcIiB8fCBheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgKGkgKyAoMTAqY3VycmVudFNoaXBMZW5ndGgpKTsgais9MTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPiA5OSkgey8vQ2hlY2tzIGZvciBpZiBqIGlzIGxlYXZpbmcgdGhlIGdyaWQgYm91bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBcIiNwbGF5ZXJcIiArIGo7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjUpXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCAoaSArIGN1cnJlbnRTaGlwTGVuZ3RoKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqID4gKE1hdGguZmxvb3IoKGkrMTApLzEwKSkqMTAtMSl7Ly9DaGVja3MgZm9yIGlmIGogaXMgbGVhdmluZyB0aGUgZ3JpZCBib3VuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IFwiI3BsYXllclwiICsgajtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vVGhlIGxpc3RlbmVyIHVzZWQgdG8gdW5oaWdobGlnaHRcbiAgICAgICAgY3VycmVudFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgIGlmIChheGlzID09PSBcIllcIiB8fCBheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgKGkgKyAoMTAqY3VycmVudFNoaXBMZW5ndGgpKTsgais9MTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPiA5OSkgey8vQ2hlY2tzIGZvciBpZiBqIGlzIGxlYXZpbmcgdGhlIGdyaWQgYm91bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBcIiNwbGF5ZXJcIiArIGo7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCAoaSArIGN1cnJlbnRTaGlwTGVuZ3RoKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqID4gKE1hdGguZmxvb3IoKGkrMTApLzEwKSkqMTAtMSl7Ly9DaGVja3MgZm9yIGlmIGogaXMgbGVhdmluZyB0aGUgZ3JpZCBib3VuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IFwiI3BsYXllclwiICsgajtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vL0Z1bmN0aW9uIHRvIHJlY3JlYXRlIGFsbCB0aGUgc3F1YXJlcyBhbmQgcmVhdHRhY2ggYWxsIHRoZSBsaXN0ZW5lcnMgKG5lZWRlZCB0byBjaGFuZ2UgaGlnaGxpZ2h0IGxlbmd0aClcbmZ1bmN0aW9uIHJlY3JlYXRlU3F1YXJlcyhwbGF5ZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBcInBsYXllclwiICsgaTtcbiAgICAgICAgbGV0IGN1cnJlbnRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgY3VycmVudElkKTtcbiAgICAgICAgY3VycmVudFNxdWFyZS5yZXBsYWNlV2l0aChjdXJyZW50U3F1YXJlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfVxuICAgIGFkZFBsYWNlTGlzdGVuZXIocGxheWVyKTtcbiAgICBhZGRIaWdobGlnaHRMaXN0ZW5lcigpO1xufVxuXG4vL0Z1bmN0aW9uIHRvIGNyZWF0ZSBhIGR1bW15IHNoaXAgdG8gY2hlY2sgZm9yIHZhbGlkIHBsYWNlbWVudFxuZnVuY3Rpb24gY3JlYXRlRHVtbXlTaGlwKHBvc2l0aW9uKSB7XG4gICAgbGV0IGR1bW15U2hpcCA9IG51bGw7XG4gICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBkdW1teVNoaXAgPSBjcmVhdGVTaGlwKFwiQ2FycmllclwiLCA1LCBwb3NpdGlvbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOiBcbiAgICAgICAgICAgIGR1bW15U2hpcCA9IGNyZWF0ZVNoaXAoXCJCYXR0bGVzaGlwXCIsIDQsIHBvc2l0aW9uLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBkdW1teVNoaXAgPSBjcmVhdGVTaGlwKFwiRGVzdHJveWVyXCIsIDMsIHBvc2l0aW9uLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBkdW1teVNoaXAgPSBjcmVhdGVTaGlwKFwiU3VibWFyaW5lXCIsIDMsIHBvc2l0aW9uLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IFxuICAgICAgICAgICAgZHVtbXlTaGlwID0gY3JlYXRlU2hpcChcIlBhdHJvbFwiLCAyLCBwb3NpdGlvbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTCk7XG4gICAgfVxuICAgIGR1bW15U2hpcC5zZXRDb29yZGluYXRlcygpO1xuICAgIHJldHVybiBkdW1teVNoaXA7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZ2FtZWJvYXJkKSB7XG4gICAgbGV0IF9nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRHYW1lYm9hcmQ6IGZ1bmN0aW9uKCkge3JldHVybiBfZ2FtZWJvYXJkfSxcbiAgICAgICAgYXR0YWNrOiBmdW5jdGlvbihwbGF5ZXIsIGNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHBsYXllci5nZXRHYW1lYm9hcmQoKS5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9LFxuICAgICAgICBhdHRhY2tSYW5kb206IGZ1bmN0aW9uKHBsYXllcikge1xuICAgICAgICAgICAgbGV0IGlzTmV3Q29vcmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCByYW5kUm93ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCByYW5kQ29sID0gbnVsbDtcbiAgICAgICAgICAgIHdoaWxlICghaXNOZXdDb29yZCkge1xuICAgICAgICAgICAgICAgIHJhbmRSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgcmFuZENvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBsYXllci5nZXRHYW1lYm9hcmQoKS5nZXRCb2FyZCgpW3JhbmRDb2xdW3JhbmRSb3ddKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTmV3Q29vcmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHBsYXllci5nZXRHYW1lYm9hcmQoKS5yZWNlaXZlQXR0YWNrKFtyYW5kQ29sLCByYW5kUm93XSk7XG4gICAgICAgICAgICByZXR1cm4gcmFuZENvbCArIFwiXCIgKyByYW5kUm93ICsgcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgbGVuZ3RoLCBwb3NpdGlvbiwgYXhpcykge1xuICAgIGxldCBfbmFtZSA9IG5hbWU7XG4gICAgbGV0IF9sZW5ndGggPSBsZW5ndGg7XG4gICAgbGV0IF9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIGxldCBfYXhpcyA9IGF4aXM7XG4gICAgbGV0IF9jb29yZGluYXRlcyA9IG51bGw7XG4gICAgbGV0IF9pc1N1bmsgPSBmYWxzZTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vQWNjZXNzb3IgZnVuY3Rpb25zXG4gICAgICAgIGdldE5hbWU6IGZ1bmN0aW9uKCl7cmV0dXJuIF9uYW1lfSxcbiAgICAgICAgZ2V0TGVuZ3RoOiBmdW5jdGlvbigpIHtyZXR1cm4gX2xlbmd0aH0sXG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbigpIHtyZXR1cm4gX3Bvc2l0aW9ufSxcbiAgICAgICAgZ2V0Q29vcmRpbmF0ZXM6IGZ1bmN0aW9uKCkge3JldHVybiBfY29vcmRpbmF0ZXN9LFxuICAgICAgICBnZXRBeGlzOiBmdW5jdGlvbigpIHtyZXR1cm4gX2F4aXN9LFxuICAgICAgICBnZXRJc1N1bms6IGZ1bmN0aW9uKCkge3JldHVybiBfaXNTdW5rfSxcbiAgICAgICAgLy9NdXRhdG9yIGZ1bmN0aW9uc1xuICAgICAgICBzZXRQb3NpdGlvbjogZnVuY3Rpb24oY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIF9jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXRQb3NpdGlvblJhbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBudWxsO1xuICAgICAgICAgICAgbGV0IGF4aXMgPSBcIlwiO1xuICAgICAgICAgICAgd2hpbGUoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID49IDAuNSkge1xuICAgICAgICAgICAgICAgICAgICBheGlzID0gXCJ4XCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvblswXSArIF9sZW5ndGggPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF4aXMgPSBcInlcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uWzFdICsgX2xlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgX2F4aXMgPSBheGlzO1xuICAgICAgICB9LFxuICAgICAgICBzZXRDb29yZGluYXRlczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBuZXcgQXJyYXkoX2xlbmd0aCk7XG4gICAgICAgICAgICBpZiAoX2F4aXMgPT09IFwiWFwiIHx8IF9heGlzID09PVwieFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBfcG9zaXRpb25bMV07XG4gICAgICAgICAgICAgICAgbGV0IHggPSBfcG9zaXRpb25bMF07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbaV0gPSBbeCArIGksIHldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBfcG9zaXRpb25bMV07XG4gICAgICAgICAgICAgICAgbGV0IHggPSBfcG9zaXRpb25bMF07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbaV0gPSBbeCwgeSArIGldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgICB9LFxuICAgICAgICBoaXQ6IGZ1bmN0aW9uKGNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2Nvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGVbMF0gPT09IF9jb29yZGluYXRlc1tpXVswXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZVsxXSA9PT0gX2Nvb3JkaW5hdGVzW2ldWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY29vcmRpbmF0ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9jb29yZGluYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBfaXNTdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfaXNTdW5rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9uYW1lICsgXCIgaGFzIGJlZW4gZGVzdHJveWVkISEhXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX25hbWUgKyBcIiBoYXMgYmVlbiBoaXQhISFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgY3JlYXRlU2hpcCBmcm9tIFwiLi9zaGlwRmFjdG9yeS5qc1wiO1xuaW1wb3J0IGNyZWF0ZUdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRGYWN0b3J5LmpzXCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL3BsYXllckZhY3RvcnkuanNcIjtcblxuLy9GdW5jdGlvbiB0byBpbml0IGFsbCBnYW1lIHZhbHVlcyB3aXRoIHRlc3QgdmFyaWFibGVzXG5leHBvcnQgZnVuY3Rpb24gdGVzdEdhbWUoKSB7XG4gICAgbGV0IHBsYXllckNhcnJpZXIgPSBjcmVhdGVTaGlwKFwiQ2FycmllclwiLCA1LCBbMSwgMV0sIFwieVwiKTtcbiAgICBwbGF5ZXJDYXJyaWVyLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IHBsYXllckJhdHRsZXNoaXAgPSBjcmVhdGVTaGlwKFwiQmF0dGxlc2hpcFwiLCA0LCBbMywgMV0sIFwieFwiKTtcbiAgICBwbGF5ZXJCYXR0bGVzaGlwLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IHBsYXllckRlc3Ryb3llciA9IGNyZWF0ZVNoaXAoXCJEZXN0cm95ZXJcIiwgMywgWzYsIDldLCBcInhcIik7XG4gICAgcGxheWVyRGVzdHJveWVyLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IHBsYXllclN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoXCJTdWJtYXJpbmVcIiwgMywgWzUsIDVdLCBcInlcIik7XG4gICAgcGxheWVyU3VibWFyaW5lLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IHBsYXllclBhdHJvbCA9IGNyZWF0ZVNoaXAoXCJQYXRyb2xcIiwgMiwgWzgsIDJdLCBcInlcIik7XG4gICAgcGxheWVyUGF0cm9sLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IHBsYXllckJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgbGV0IGVuZW15Q2FycmllciA9IGNyZWF0ZVNoaXAoXCJDYXJyaWVyXCIsIDUsIFsxLCAxXSwgXCJ5XCIpO1xuICAgIGVuZW15Q2Fycmllci5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBlbmVteUJhdHRsZXNoaXAgPSBjcmVhdGVTaGlwKFwiQmF0dGxlc2hpcFwiLCA0LCBbMywgMV0sIFwieFwiKTtcbiAgICBlbmVteUJhdHRsZXNoaXAuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgZW5lbXlEZXN0cm95ZXIgPSBjcmVhdGVTaGlwKFwiRGVzdHJveWVyXCIsIDMsIFs2LCA5XSwgXCJ4XCIpO1xuICAgIGVuZW15RGVzdHJveWVyLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15U3VibWFyaW5lID0gY3JlYXRlU2hpcChcIlN1Ym1hcmluZVwiLCAzLCBbNSwgNV0sIFwieVwiKTtcbiAgICBlbmVteVN1Ym1hcmluZS5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBlbmVteVBhdHJvbCA9IGNyZWF0ZVNoaXAoXCJQYXRyb2xcIiwgMiwgWzgsIDJdLCBcInlcIik7XG4gICAgZW5lbXlQYXRyb2wuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgZW5lbXlCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuICAgIHBsYXllckJvYXJkLmluaXRHYW1lYm9hcmQoKTtcbiAgICBlbmVteUJvYXJkLmluaXRHYW1lYm9hcmQoKTtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAocGxheWVyQ2Fycmllcik7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHBsYXllckJhdHRsZXNoaXApO1xuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJEZXN0cm95ZXIpO1xuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJTdWJtYXJpbmUpO1xuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChwbGF5ZXJQYXRyb2wpO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteUNhcnJpZXIpO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteUJhdHRsZXNoaXApO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteURlc3Ryb3llcik7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15U3VibWFyaW5lKTtcbiAgICBlbmVteUJvYXJkLnBsYWNlU2hpcFJhbmQoZW5lbXlQYXRyb2wpO1xuICAgIGxldCBwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIocGxheWVyQm9hcmQpO1xuICAgIGxldCBlbmVteSA9IGNyZWF0ZVBsYXllcihlbmVteUJvYXJkKTtcbiAgICByZXR1cm4gW3BsYXllciwgZW5lbXldO1xufVxuXG4vL0Z1bmN0aW9uIHRvIGluaXQgZW1wdHkgYm9hcmQgYW5kIHBsYXllciBvYmplY3RzXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG4gICAgbGV0IHBsYXllckJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgcGxheWVyQm9hcmQuaW5pdEdhbWVib2FyZCgpO1xuICAgIGxldCBlbmVteUJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgZW5lbXlCb2FyZC5pbml0R2FtZWJvYXJkKCk7XG4gICAgbGV0IGVuZW15Q2FycmllciA9IGNyZWF0ZVNoaXAoXCJDYXJyaWVyXCIsIDUsIFsxLCAxXSwgXCJ5XCIpO1xuICAgIGVuZW15Q2Fycmllci5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBlbmVteUJhdHRsZXNoaXAgPSBjcmVhdGVTaGlwKFwiQmF0dGxlc2hpcFwiLCA0LCBbMywgMV0sIFwieFwiKTtcbiAgICBlbmVteUJhdHRsZXNoaXAuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgZW5lbXlEZXN0cm95ZXIgPSBjcmVhdGVTaGlwKFwiRGVzdHJveWVyXCIsIDMsIFs2LCA5XSwgXCJ4XCIpO1xuICAgIGVuZW15RGVzdHJveWVyLnNldENvb3JkaW5hdGVzKCk7XG4gICAgbGV0IGVuZW15U3VibWFyaW5lID0gY3JlYXRlU2hpcChcIlN1Ym1hcmluZVwiLCAzLCBbNSwgNV0sIFwieVwiKTtcbiAgICBlbmVteVN1Ym1hcmluZS5zZXRDb29yZGluYXRlcygpO1xuICAgIGxldCBlbmVteVBhdHJvbCA9IGNyZWF0ZVNoaXAoXCJQYXRyb2xcIiwgMiwgWzgsIDJdLCBcInlcIik7XG4gICAgZW5lbXlQYXRyb2wuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBlbmVteUJvYXJkLnBsYWNlU2hpcFJhbmQoZW5lbXlDYXJyaWVyKTtcbiAgICBlbmVteUJvYXJkLnBsYWNlU2hpcFJhbmQoZW5lbXlCYXR0bGVzaGlwKTtcbiAgICBlbmVteUJvYXJkLnBsYWNlU2hpcFJhbmQoZW5lbXlEZXN0cm95ZXIpO1xuICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwUmFuZChlbmVteVN1Ym1hcmluZSk7XG4gICAgZW5lbXlCb2FyZC5wbGFjZVNoaXBSYW5kKGVuZW15UGF0cm9sKTtcbiAgICBsZXQgcGxheWVyID0gY3JlYXRlUGxheWVyKHBsYXllckJvYXJkKTtcbiAgICBsZXQgZW5lbXkgPSBjcmVhdGVQbGF5ZXIoZW5lbXlCb2FyZCk7XG4gICAgcmV0dXJuIFtwbGF5ZXIsIGVuZW15XTtcbn1cblxuLy9GdW5jdGlvbiBmb3IgcGxhY2luZyBjYXJyaWVyIG9uIHBsYXllckJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VDYXJyaWVyKHBsYXllciwgcG9zaXRpb24pIHtcbiAgICBsZXQgYXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUw7XG4gICAgbGV0IG5ld0NhcnJpZXIgPSBjcmVhdGVTaGlwKFwiQ2FycmllclwiLCA1LCBwb3NpdGlvbiwgYXhpcyk7XG4gICAgbmV3Q2Fycmllci5zZXRDb29yZGluYXRlcygpO1xuICAgIGNvbnNvbGUubG9nKG5ld0NhcnJpZXIuZ2V0Q29vcmRpbmF0ZXMoKSlcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucGxhY2VTaGlwKG5ld0NhcnJpZXIpO1xufVxuXG4vL0Z1bmN0aW9uIGZvciBwbGFjaW5nIGNhcnJpZXIgb24gcGxheWVyQm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZUJhdHRsZXNoaXAocGxheWVyLCBwb3NpdGlvbikge1xuICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTDtcbiAgICBsZXQgbmV3QmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoXCJCYXR0bGVzaGlwXCIsIDQsIHBvc2l0aW9uLCBheGlzKTtcbiAgICBuZXdCYXR0bGVzaGlwLnNldENvb3JkaW5hdGVzKCk7XG4gICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnBsYWNlU2hpcChuZXdCYXR0bGVzaGlwKTtcbn1cblxuXG4vL0Z1bmN0aW9uIGZvciBwbGFjaW5nIGNhcnJpZXIgb24gcGxheWVyQm9hcmRcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZURlc3Ryb3llcihwbGF5ZXIsIHBvc2l0aW9uKSB7XG4gICAgbGV0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikuaW5uZXJIVE1MO1xuICAgIGxldCBuZXdEZXN0cm95ZXIgPSBjcmVhdGVTaGlwKFwiRGVzdHJveWVyXCIsIDMsIHBvc2l0aW9uLCBheGlzKTtcbiAgICBuZXdEZXN0cm95ZXIuc2V0Q29vcmRpbmF0ZXMoKTtcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucGxhY2VTaGlwKG5ld0Rlc3Ryb3llcik7XG59XG5cblxuLy9GdW5jdGlvbiBmb3IgcGxhY2luZyBjYXJyaWVyIG9uIHBsYXllckJvYXJkXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTdWJtYXJpbmUocGxheWVyLCBwb3NpdGlvbikge1xuICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLmlubmVySFRNTDtcbiAgICBsZXQgbmV3U3VibWFyaW5lID0gY3JlYXRlU2hpcChcIlN1Ym1hcmluZVwiLCAzLCBwb3NpdGlvbiwgYXhpcyk7XG4gICAgbmV3U3VibWFyaW5lLnNldENvb3JkaW5hdGVzKCk7XG4gICAgcGxheWVyLmdldEdhbWVib2FyZCgpLnBsYWNlU2hpcChuZXdTdWJtYXJpbmUpO1xufVxuXG5cbi8vRnVuY3Rpb24gZm9yIHBsYWNpbmcgY2FycmllciBvbiBwbGF5ZXJCb2FyZFxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlUGF0cm9sKHBsYXllciwgcG9zaXRpb24pIHtcbiAgICBsZXQgYXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS5pbm5lckhUTUw7XG4gICAgbGV0IG5ld1BhdHJvbCA9IGNyZWF0ZVNoaXAoXCJQYXRyb2xcIiwgMiwgcG9zaXRpb24sIGF4aXMpO1xuICAgIG5ld1BhdHJvbC5zZXRDb29yZGluYXRlcygpOyBcbiAgICBwbGF5ZXIuZ2V0R2FtZWJvYXJkKCkucGxhY2VTaGlwKG5ld1BhdHJvbCk7XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGUuY3NzXCJcbmltcG9ydCB7IHRlc3RHYW1lLCBpbml0R2FtZSB9IGZyb20gXCIuL3N0YXJ0R2FtZS5qc1wiO1xuaW1wb3J0IHsgaW5pdEJ0bnMsIHJlbmRlckluaXRCb2FyZHMsIGFkZEF0dGFja0xpc3RlbmVyLCBhZGRQbGFjZUxpc3RlbmVyLCBhZGRIaWdobGlnaHRMaXN0ZW5lcn0gZnJvbSBcIi4vbWFuaXB1bGF0ZURPTS5qc1wiO1xuaW1wb3J0IHsgcGxhY2VDYXJyaWVyLCBwbGFjZUJhdHRsZXNoaXAsIHBsYWNlRGVzdHJveWVyLCBwbGFjZVN1Ym1hcmluZSwgcGxhY2VQYXRyb2x9IGZyb20gXCIuL3N0YXJ0R2FtZS5qc1wiO1xuXG5pbml0QnRucygpO1xubGV0IHBsYXllckFycmF5ID0gaW5pdEdhbWUoKTtcbmxldCBwbGF5ZXIgPSBwbGF5ZXJBcnJheVswXTtcbmxldCBlbmVteSA9IHBsYXllckFycmF5WzFdO1xucmVuZGVySW5pdEJvYXJkcygpO1xuYWRkUGxhY2VMaXN0ZW5lcihwbGF5ZXIpO1xuYWRkSGlnaGxpZ2h0TGlzdGVuZXIoKTtcbmFkZEF0dGFja0xpc3RlbmVyKGVuZW15LCBwbGF5ZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9