/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-400.woff */ "./src/fonts/Roboto-400.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Pacifico-Regular.woff2 */ "./src/fonts/Pacifico-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Pacifico-Regular.woff */ "./src/fonts/Pacifico-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*  =========== Reset =========  */
/* 1. Use a more-intuitive box-sizing model */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
}

body {
  /* 3. Add accessible line-height */
  line-height: 1.5;
  /* 4. Improve text rendering */
  -webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img,
svg {
  display: block;
  max-width: 100%;
}

/* 6. Inherit fonts for form controls */
input,
button,
textarea,
select {
  font: inherit;
}

/* 7. Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* 8. Improve line wrapping */
p {
  text-wrap: pretty;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

/* font */
@font-face {
  font-family: Roboto;
  src:
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(woff),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(woff2);
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Pacifico;
  src:
    url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(woff),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(woff2);
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

:root {
  --pri-accent: rgb(217, 176, 13);
  --sec-accent: rgb(131, 127, 83);
  --ter-accent: rgb(60, 70, 4);
  --white: rgb(255, 255, 255);
  --black: rgb(0, 0, 0);
  --error-transparent: rgba(249, 12, 12, 0.2);
  --error: rgba(249, 12, 12);

  --transparent-white-xsm: rgba(255, 255, 255, 0.8);
  --transparent-white-sm: rgba(255, 255, 255, 0.5);
  --transparent-white-lg: rgba(255, 255, 255, 0.2);

  --transparent-black-xsm: rgba(0, 0, 0, 0.8);
  --transparent-black-sm: rgba(0, 0, 0, 0.5);
  --transparent-black-lg: rgba(0, 0, 0, 0.2);

  --sz-xxxsm: 1px;
  --sz-xxsm: 2px;
  --sz-xsm: 5px;
  --sz-sm: 10px;
  --sz-lg: 20px;
  --sz-xlg: 30px;
  --sz-xxlg: 60px;

  --bx-shadow: 0.5px 0.5px 5px var(--transparent-black-lg);
}

body {
  font-family: Roboto, arial;
  font-size: clamp(var(--sz-sm), var(--sz-sm) + 0.5vw, var(--sz-sm) + var(--sz-xsm));
  color: var(--white);
  position: relative;
  perspective: 300px;
  background: var(--ter-accent);
}

.container {
  max-width: 700px;
  padding: 0 var(--sz-lg);
  margin: 0 auto 0;
  min-height: 100vh;
}

main {
  display: flex;
  flex-direction: column;
  row-gap: var(--sz-sm);
  align-items: center;
  padding: var(--sz-lg) 0;
}

.game-title {
  font-family: Pacifico, Arial, Helvetica, sans-serif;
  color: var(--transparent-white-xsm);
}

@keyframes toAndFro {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-70%);
  }
}

.pirateShip {
  position: absolute;
  opacity: 0.2;
  bottom: 0;
  animation: toAndFro 5000ms infinite alternate;
}

.sailingShip {
  position: absolute;
  opacity: 0.2;
  top: -400px;
  right: -130px;
  transform: scale(0.2);
}

.howToSetShipInstruction {
  color: var(--transparent-white-xsm);
}

.human {
  font-weight: 900;
}

.boards-section {
  border: var(--sz-lg) solid var(--pri-accent);
  box-shadow: var(--bx-shadow);
  height: 640px;
  min-width: 320px;
  display: grid;
  grid-template-rows: 1fr max-content 1fr;
  position: relative;
}

.hide-player-ship {
  position: absolute;
  color: var(--black);
  transform: translateX(-50%);
  text-wrap: nowrap;
  cursor: pointer;
}

.toggle-player-one-ship {
  top: 0;
  left: 50%;
  top: -20px;
}

.toggle-player-two-ship {
  bottom: -20px;
  left: 50%;
}

.select-ship {
  display: flex;
  flex-wrap: wrap;
  border-left: var(--sz-xxsm) solid var(--transparent-black-lg);
  border: var(--sz-xsm) solid var(--pri-accent);
  box-shadow: var(--bx-shadow);
  background-color: var(--sec-accent);
}

.select-ship-cell {
  min-width: calc(100% / 10);
  min-height: calc(100% / 10);
  border: var(--sz-xxxsm) solid var(--transparent-white-sm);
  position: relative;
}

.select-ship-cell:nth-child(1n + 7) {
  border-top: none;
  border-top: none;
}

.select-ship-cell:nth-child(1n + 1) {
  border-left: none;
}

.shipImg {
  position: absolute;
  z-index: 90;
  bottom: 0;
  transform-origin: 0;
}

.pointerEventNone {
  pointer-events: none;
}

.inp_playerName {
  border-radius: var(--sz-xsm);
  padding: var(--sz-xsm);
  border: none;
  box-shadow: var(--bx-shadow);

  &:read-only {
    opacity: 0.8;
    background: var(--transparent-black-lg);
    color: var(--white);
  }

  &:focus {
    outline-color: var(--pri-accent);
  }
}

.submit-playerName {
  background: none;
  border: none;
}

.player-board {
  display: flex;
  flex-wrap: wrap;

  border: var(--sz-xxsm) solid var(--transparent-black-lg);
  background: var(--white);
}

.player-board-cell {
  min-height: calc(100% / 10);
  min-width: calc(100% / 10);
  border: 1px solid var(--transparent-black-lg);
  position: relative;
  display: flex;
}

.attackCellStatus {
  position: absolute;
  left: 20%;
  top: 20%;
  z-index: 99;
}

.hinge {
  background-color: var(--pri-accent);
  text-align: center;
  padding: var(--sz-xxsm) var(--sz-xsm);
  display: grid;
  grid-template-columns: max-content max-content 1fr max-content;
  grid-template-rows: 1fr;
  column-gap: var(--sz-sm);
  position: relative;
}

.playerMsg {
  position: absolute;
  background: var(--black);
  padding: var(--sz-xsm);
  border-radius: var(--sz-xsm);
  color: var(--error);
  font-weight: 900;
  transform: translateX(-50%) scale(1);
  transition: 300ms;
  box-shadow: var(--bx-shadow);

  max-width: 200px;
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  z-index: 100;
}

.playerOneMsg {
  transition: 300ms;
  top: -40px;
  left: 50%;
}

.playerTwoMsg {
  top: 53px;
  left: 50%;
}

.scaleTo0 {
  transform: translateX(-50%) scale(0);
}

.play,
.reset,
.play-again {
  background-color: var(--transparent-white-lg);
  color: var(--black);
  display: flex;
  align-items: center;
  padding: var(--sz-xsm) var(--sz-sm);
  border-radius: var(--sz-xsm);
  box-shadow: var(--bx-shadow);
  cursor: pointer;
  transition: 300ms;

  &:active {
    scale: 0.8;
  }
}

.winner-name {
  max-width: 100px;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  padding: var(--sz-sm);
  color: var(--black);
  font-weight: 900;
}

.select_computer_or_player2 {
  display: flex;
  column-gap: var(--sz-lg);
}

.check_player {
  display: flex;
  column-gap: var(--sz-xsm);
}

.rotate {
  transform: rotate(90deg) translateY(-50%) translateX(-14px);
}

.hide {
  display: none;
}

.visibilityHidden {
  visibility: hidden;
}
.bgColor {
  background-color: var(--transparent-black-lg);
}

/* 
Visualize computer ship

.player-2-board {
  [data-len='1'] {
    background: rgb(27, 71, 85);
  }
  [data-len='2'] {
    background: rgb(164, 181, 12);
  }
  [data-len='3'] {
    background: rgb(80, 23, 214);
  }
  [data-len='4'] {
    background: rgb(202, 8, 199);
  }
} */
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*  =========== Reset =========  */\n/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n  margin: 0;\n}\n\nbody {\n  /* 3. Add accessible line-height */\n  line-height: 1.5;\n  /* 4. Improve text rendering */\n  -webkit-font-smoothing: antialiased;\n}\n\n/* 5. Improve media defaults */\nimg,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/* 6. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* 7. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* 8. Improve line wrapping */\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n/* font */\n@font-face {\n  font-family: Roboto;\n  src:\n    url(./fonts/Roboto-400.woff) format(woff),\n    url(./fonts/Pacifico-Regular.woff2) format(woff2);\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: Pacifico;\n  src:\n    url(./fonts/Pacifico-Regular.woff) format(woff),\n    url(./fonts/Pacifico-Regular.woff2) format(woff2);\n  font-style: normal;\n  font-weight: normal;\n  font-display: swap;\n}\n\n:root {\n  --pri-accent: rgb(217, 176, 13);\n  --sec-accent: rgb(131, 127, 83);\n  --ter-accent: rgb(60, 70, 4);\n  --white: rgb(255, 255, 255);\n  --black: rgb(0, 0, 0);\n  --error-transparent: rgba(249, 12, 12, 0.2);\n  --error: rgba(249, 12, 12);\n\n  --transparent-white-xsm: rgba(255, 255, 255, 0.8);\n  --transparent-white-sm: rgba(255, 255, 255, 0.5);\n  --transparent-white-lg: rgba(255, 255, 255, 0.2);\n\n  --transparent-black-xsm: rgba(0, 0, 0, 0.8);\n  --transparent-black-sm: rgba(0, 0, 0, 0.5);\n  --transparent-black-lg: rgba(0, 0, 0, 0.2);\n\n  --sz-xxxsm: 1px;\n  --sz-xxsm: 2px;\n  --sz-xsm: 5px;\n  --sz-sm: 10px;\n  --sz-lg: 20px;\n  --sz-xlg: 30px;\n  --sz-xxlg: 60px;\n\n  --bx-shadow: 0.5px 0.5px 5px var(--transparent-black-lg);\n}\n\nbody {\n  font-family: Roboto, arial;\n  font-size: clamp(var(--sz-sm), var(--sz-sm) + 0.5vw, var(--sz-sm) + var(--sz-xsm));\n  color: var(--white);\n  position: relative;\n  perspective: 300px;\n  background: var(--ter-accent);\n}\n\n.container {\n  max-width: 700px;\n  padding: 0 var(--sz-lg);\n  margin: 0 auto 0;\n  min-height: 100vh;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  row-gap: var(--sz-sm);\n  align-items: center;\n  padding: var(--sz-lg) 0;\n}\n\n.game-title {\n  font-family: Pacifico, Arial, Helvetica, sans-serif;\n  color: var(--transparent-white-xsm);\n}\n\n@keyframes toAndFro {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(-70%);\n  }\n}\n\n.pirateShip {\n  position: absolute;\n  opacity: 0.2;\n  bottom: 0;\n  animation: toAndFro 5000ms infinite alternate;\n}\n\n.sailingShip {\n  position: absolute;\n  opacity: 0.2;\n  top: -400px;\n  right: -130px;\n  transform: scale(0.2);\n}\n\n.howToSetShipInstruction {\n  color: var(--transparent-white-xsm);\n}\n\n.human {\n  font-weight: 900;\n}\n\n.boards-section {\n  border: var(--sz-lg) solid var(--pri-accent);\n  box-shadow: var(--bx-shadow);\n  height: 640px;\n  min-width: 320px;\n  display: grid;\n  grid-template-rows: 1fr max-content 1fr;\n  position: relative;\n}\n\n.hide-player-ship {\n  position: absolute;\n  color: var(--black);\n  transform: translateX(-50%);\n  text-wrap: nowrap;\n  cursor: pointer;\n}\n\n.toggle-player-one-ship {\n  top: 0;\n  left: 50%;\n  top: -20px;\n}\n\n.toggle-player-two-ship {\n  bottom: -20px;\n  left: 50%;\n}\n\n.select-ship {\n  display: flex;\n  flex-wrap: wrap;\n  border-left: var(--sz-xxsm) solid var(--transparent-black-lg);\n  border: var(--sz-xsm) solid var(--pri-accent);\n  box-shadow: var(--bx-shadow);\n  background-color: var(--sec-accent);\n}\n\n.select-ship-cell {\n  min-width: calc(100% / 10);\n  min-height: calc(100% / 10);\n  border: var(--sz-xxxsm) solid var(--transparent-white-sm);\n  position: relative;\n}\n\n.select-ship-cell:nth-child(1n + 7) {\n  border-top: none;\n  border-top: none;\n}\n\n.select-ship-cell:nth-child(1n + 1) {\n  border-left: none;\n}\n\n.shipImg {\n  position: absolute;\n  z-index: 90;\n  bottom: 0;\n  transform-origin: 0;\n}\n\n.pointerEventNone {\n  pointer-events: none;\n}\n\n.inp_playerName {\n  border-radius: var(--sz-xsm);\n  padding: var(--sz-xsm);\n  border: none;\n  box-shadow: var(--bx-shadow);\n\n  &:read-only {\n    opacity: 0.8;\n    background: var(--transparent-black-lg);\n    color: var(--white);\n  }\n\n  &:focus {\n    outline-color: var(--pri-accent);\n  }\n}\n\n.submit-playerName {\n  background: none;\n  border: none;\n}\n\n.player-board {\n  display: flex;\n  flex-wrap: wrap;\n\n  border: var(--sz-xxsm) solid var(--transparent-black-lg);\n  background: var(--white);\n}\n\n.player-board-cell {\n  min-height: calc(100% / 10);\n  min-width: calc(100% / 10);\n  border: 1px solid var(--transparent-black-lg);\n  position: relative;\n  display: flex;\n}\n\n.attackCellStatus {\n  position: absolute;\n  left: 20%;\n  top: 20%;\n  z-index: 99;\n}\n\n.hinge {\n  background-color: var(--pri-accent);\n  text-align: center;\n  padding: var(--sz-xxsm) var(--sz-xsm);\n  display: grid;\n  grid-template-columns: max-content max-content 1fr max-content;\n  grid-template-rows: 1fr;\n  column-gap: var(--sz-sm);\n  position: relative;\n}\n\n.playerMsg {\n  position: absolute;\n  background: var(--black);\n  padding: var(--sz-xsm);\n  border-radius: var(--sz-xsm);\n  color: var(--error);\n  font-weight: 900;\n  transform: translateX(-50%) scale(1);\n  transition: 300ms;\n  box-shadow: var(--bx-shadow);\n\n  max-width: 200px;\n  overflow: hidden;\n  text-wrap: nowrap;\n  text-overflow: ellipsis;\n  z-index: 100;\n}\n\n.playerOneMsg {\n  transition: 300ms;\n  top: -40px;\n  left: 50%;\n}\n\n.playerTwoMsg {\n  top: 53px;\n  left: 50%;\n}\n\n.scaleTo0 {\n  transform: translateX(-50%) scale(0);\n}\n\n.play,\n.reset,\n.play-again {\n  background-color: var(--transparent-white-lg);\n  color: var(--black);\n  display: flex;\n  align-items: center;\n  padding: var(--sz-xsm) var(--sz-sm);\n  border-radius: var(--sz-xsm);\n  box-shadow: var(--bx-shadow);\n  cursor: pointer;\n  transition: 300ms;\n\n  &:active {\n    scale: 0.8;\n  }\n}\n\n.winner-name {\n  max-width: 100px;\n  text-wrap: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: center;\n  padding: var(--sz-sm);\n  color: var(--black);\n  font-weight: 900;\n}\n\n.select_computer_or_player2 {\n  display: flex;\n  column-gap: var(--sz-lg);\n}\n\n.check_player {\n  display: flex;\n  column-gap: var(--sz-xsm);\n}\n\n.rotate {\n  transform: rotate(90deg) translateY(-50%) translateX(-14px);\n}\n\n.hide {\n  display: none;\n}\n\n.visibilityHidden {\n  visibility: hidden;\n}\n.bgColor {\n  background-color: var(--transparent-black-lg);\n}\n\n/* \nVisualize computer ship\n\n.player-2-board {\n  [data-len='1'] {\n    background: rgb(27, 71, 85);\n  }\n  [data-len='2'] {\n    background: rgb(164, 181, 12);\n  }\n  [data-len='3'] {\n    background: rgb(80, 23, 214);\n  }\n  [data-len='4'] {\n    background: rgb(202, 8, 199);\n  }\n} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(module, __webpack_exports__, __webpack_require__) {

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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");
 return (function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/gameBoard.js"
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function Cell(coordinate) {
  let shipInCell = null;
  let hit = false;

  const setShip = (ship) => {
    shipInCell = ship;
  };

  const getShip = () => shipInCell;

  const removeShip = () => {
    const ship = shipInCell;
    shipInCell = null;
    return ship;
  };

  const hitCell = () => {
    hit = true;
  };

  const resetHit = () => {
    hit = false;
  };

  const isCellHit = () => hit;

  const getCoordinate = () => coordinate;

  return { setShip, getShip, removeShip, hitCell, isCellHit, resetHit, getCoordinate };
}

function GameBoard(id) {
  const board = [];
  const yAxis = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
  const xAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const cellInOrderOfHit = [];
  const ALL_SHIP_LEN = 20;

  let hitCoordinate;

  for (let i = 0; i < yAxis.length; i++) {
    for (let j = 0; j < xAxis.length; j++) {
      board.push(Cell(`${yAxis[i]}${xAxis[j]}`));
    }
  }

  const getCoordinateIndex = (coordinate) =>
    board.findIndex((cell) => cell.getCoordinate() === coordinate);

  const isInterSection = (index) => {
    const validAdjacentIndexInObj = getValidAdjacentCoordinateInObj(index);

    const leftIndex = validAdjacentIndexInObj.findIndex((obj) => obj.dir === 'left');
    const topIndex = validAdjacentIndexInObj.findIndex((obj) => obj.dir === 'top');
    const bottomIndex = validAdjacentIndexInObj.findIndex((obj) => obj.dir === 'bottom');
    const rightIndex = validAdjacentIndexInObj.findIndex((obj) => obj.dir === 'right');

    const nearestCoord = validAdjacentIndexInObj.map((obj) => obj.coordinateIndex);

    if (leftIndex !== -1) {
      if (topIndex !== -1) {
        const topLeftIndex = validAdjacentIndexInObj[topIndex].coordinateIndex - 1;
        nearestCoord.push(topLeftIndex);
      }

      if (bottomIndex !== -1) {
        const bottomLeftIndex = validAdjacentIndexInObj[bottomIndex].coordinateIndex - 1;
        nearestCoord.push(bottomLeftIndex);
      }
    }

    if (rightIndex !== -1) {
      if (topIndex !== -1) {
        const topRightIndex = validAdjacentIndexInObj[topIndex].coordinateIndex + 1;
        nearestCoord.push(topRightIndex);
      }
      if (bottomIndex !== -1) {
        const bottomRightIndex = validAdjacentIndexInObj[bottomIndex].coordinateIndex + 1;
        nearestCoord.push(bottomRightIndex);
      }
    }

    return nearestCoord;
  };

  const setShip = (shipTemplate, coordinate) => {
    if (shipTemplate.id !== id) return;

    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipTemplate.len, coordinate);
    const shipLen = ship.len();

    let coordinateIndex = getCoordinateIndex(coordinate);

    if (!isRightCoordinateValid(coordinateIndex, coordinateIndex + shipLen - 1)) return;

    let count = 0;
    let index = coordinateIndex;

    while (count < shipLen) {
      const cell = board[index];

      if (
        cell.getShip() ||
        isInterSection(index).some((indexCoord) => board[indexCoord].getShip())
      ) {
        return;
      }
      count++;
      index++;
    }

    count = 0;
    index = coordinateIndex;

    while (count < shipLen) {
      board[index].setShip(ship);
      count++;
      index++;
    }

    hitCoordinate = coordinate;
    return true;
  };

  const getShip = (coordinate) => board[getCoordinateIndex(coordinate)].getShip();

  const switchShipAxis = (coordinate) => {
    const coordinateIndex = getCoordinateIndex(coordinate);
    const ship = board[coordinateIndex].getShip();

    if (!ship) return;

    const shipLen = ship.len();
    ship.switchAxis();
    const axis = ship.getAxis();

    if (!isBottomCoordinateValid(coordinateIndex + shipLen * 10)) return;

    let count = 0;
    let oldIndex = coordinateIndex;
    let newIndex = coordinateIndex;

    const reset = () => {
      count = 0;
      oldIndex = coordinateIndex;
      newIndex = coordinateIndex;
    };

    const tempRemoveShip = [];
    while (count < shipLen) {
      const oldCell = board[oldIndex];
      tempRemoveShip.push({ ship: oldCell.removeShip(), oldIndex });

      count++;
      axis === 'xAxis' ? (oldIndex += 10) : oldIndex++;
    }

    reset();

    while (count < shipLen) {
      const newCell = board[newIndex];

      if (
        newCell.getShip() ||
        isInterSection(newIndex).some((indexCoord) => board[indexCoord].getShip())
      ) {
        tempRemoveShip.forEach((obj) => {
          board[obj.oldIndex].setShip(obj.ship);
        });
        return;
      }

      count++;
      axis === 'xAxis' ? newIndex++ : (newIndex += 10);
    }

    reset();

    tempRemoveShip.forEach((obj, ind) => {
      if (ind === 0) {
        newIndex = obj.oldIndex;
      } else {
        if (axis === 'xAxis') {
          newIndex++;
        } else {
          newIndex += 10;
        }
      }

      board[newIndex].setShip(obj.ship);
    });

    return true;
  };

  const receiveAttack = (coordinate) => {
    const coordinateIndex = getCoordinateIndex(coordinate);
    const cell = board[coordinateIndex];

    if (!cell) return;

    if (!cell.isCellHit()) {
      cellInOrderOfHit.push(coordinate);
      cell.hitCell();
      const ship = cell.getShip();
      if (ship) {
        ship.hit();
        return 'hit';
      }
      return 'miss';
    }
    return false;
  };

  const isRightCoordinateValid = (coordinateIndex, rightCoordinateIndex) => {
    if (rightCoordinateIndex >= 100) return;
    return (
      board[coordinateIndex].getCoordinate()[0] === board[rightCoordinateIndex].getCoordinate()[0]
    );
  };

  const isBottomCoordinateValid = (bottomCoordinateIndex) => bottomCoordinateIndex < 100;

  const getValidAdjacentCoordinateInObj = (coordinate) => {
    const coordinateIndex = Number.isInteger(coordinate)
      ? coordinate
      : getCoordinateIndex(coordinate);

    const leftCoordinateIndex = coordinateIndex - 1;
    const topCoordinateIndex = coordinateIndex - 10;
    const rightCoordinateIndex = coordinateIndex + 1;
    const bottomCoordinateIndex = coordinateIndex + 10;

    return [
      {
        coordinateIndex: leftCoordinateIndex,
        dir: 'left',
        isValid:
          leftCoordinateIndex >= 0 &&
          +board[leftCoordinateIndex].getCoordinate()[1] <
            +board[coordinateIndex].getCoordinate()[1],
      },
      { coordinateIndex: topCoordinateIndex, dir: 'top', isValid: topCoordinateIndex >= 0 },
      {
        coordinateIndex: rightCoordinateIndex,
        dir: 'right',
        isValid: isRightCoordinateValid(coordinateIndex, rightCoordinateIndex),
      },
      {
        coordinateIndex: bottomCoordinateIndex,
        dir: 'bottom',
        isValid: isBottomCoordinateValid(bottomCoordinateIndex),
      },
    ]
      .filter((coordObj) => coordObj.isValid)
      .filter((coordObj) => !getBoard()[coordObj.coordinateIndex].isCellHit())
      .map((coordObj) => {
        coordObj.axis = coordObj.dir === 'top' || coordObj.dir === 'bottom' ? 'yAxis' : 'xAxis';
        coordObj.coordinate = getCoordinate(coordObj.coordinateIndex);
        return coordObj;
      });
  };

  const getValidAdjacentIndex = (coordinate) => {
    return getValidAdjacentCoordinateInObj(coordinate).map((coordObj) => coordObj.coordinateIndex);
  };

  const setShipDynamically = () => {
    const availableLen = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    const allCoordinate = getAllCoordinate();

    const isShipSet = (len) => {
      const randomIndex = Math.floor(Math.random() * allCoordinate.length);
      return setShip({ len, id: 'computer' }, allCoordinate[randomIndex]);
    };

    while (availableLen.length) {
      const len = availableLen.shift();

      while (true) {
        if (isShipSet(len)) {
          break;
        }
      }
    }

    getCoordinateOfShip()
      .slice(2)
      .forEach((coordinate) => {
        switchShipAxis(coordinate);
      });
  };

  const isAllShipSunk = () => {
    const cellWithShip = board.filter((cell) => cell.getShip());
    return cellWithShip.every((cell) => cell.getShip().isSunk());
  };

  const filterAllShip = () => {
    return [...new Set(board.filter((cell) => cell.getShip()).map((cell) => cell.getShip()))];
  };

  const getCoordinateOfShip = () => filterAllShip().map((ship) => ship.getCoordinate());

  const getBoard = () => board;

  const getCellInOrderOfHit = () => cellInOrderOfHit;

  const getAllCoordinate = () => board.map((cell) => cell.getCoordinate());

  const getCoordinate = (index) => board[index].getCoordinate();

  const getID = () => id;

  const getHitCellCoordinate = () =>
    board.filter((cell) => cell.isCellHit()).map((cell) => cell.getCoordinate());

  const reset = () => {
    playAgain();
    board.forEach((cell) => {
      if (cell) {
        cell.removeShip();
      }
    });
  };

  const playAgain = () => {
    board.forEach((cell) => {
      const ship = cell.getShip();
      if (ship) {
        ship.reset();
      }
      cell.resetHit();
    });
  };

  const isAllShipSet = () =>
    filterAllShip().reduce((curLen, ship) => curLen + ship.len(), 0) === ALL_SHIP_LEN;

  const getHitCoordinate = () => hitCoordinate;

  return {
    setShip,
    getShip,
    switchShipAxis,
    receiveAttack,
    getHitCellCoordinate,
    setShipDynamically,
    isAllShipSunk,
    getCoordinate,
    getBoard,
    getAllCoordinate,
    getHitCoordinate,
    getCoordinateIndex,
    getCellInOrderOfHit,
    getValidAdjacentIndex,
    getValidAdjacentCoordinateInObj,
    getCoordinateOfShip,
    isAllShipSet,
    getID,
    reset,
    playAgain,
  };
}


/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _imgs_ship_len3_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/ship_len3.svg */ "./src/imgs/ship_len3.svg");
/* harmony import */ var _imgs_ship_len2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/ship_len2.svg */ "./src/imgs/ship_len2.svg");
/* harmony import */ var _imgs_pirate_ship_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/pirate_ship.svg */ "./src/imgs/pirate_ship.svg");
/* harmony import */ var _imgs_sailingShip_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/sailingShip.svg */ "./src/imgs/sailingShip.svg");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player */ "./src/player.js");








const play = document.querySelector('[data-play]');
const reset = document.querySelector('[data-reset]');
const playAgain = document.querySelector('[data-play-again]');
const generalMsg = document.querySelector('[data-winner-name]');

const togglePlayerOneShip = document.querySelector('[data-toggle-player-one-ship]');
const togglePlayerTwoShip = document.querySelector('[data-toggle-player-two-ship]');

const playerOneMsg = document.querySelector('[data-player-one-msg]');
const playerTwoMsg = document.querySelector('[data-player-two-msg]');

const player1Name = document.querySelector('[data-player1Name]');
const player2Name = document.querySelector('[data-player2Name]');

const playerOneBoard = document.querySelector('[data-player-board="one"]');
const playerTwoBoard = document.querySelector('[data-player-board="two"]');
const playerBoards = document.querySelectorAll('[data-player-board]');

const select_player2_or_computer = document.querySelector('[data-select_computer_or_player2]');
const playerOneSelectShipBoard = document.querySelector('[data-select-ship-board="playerOne"]');
const playerTwoSelectShipBoard = document.querySelector('[data-select-ship-board="playerTwo"]');
const selectShipBoards = document.querySelectorAll('[data-select-ship-board]');
const pirateShipImg = document.createElement('img');
const sailingShipImg = document.createElement('img');
const bgPatternImg = document.createElement('img');

const selectShipDim = 240;

const playerOne = {
  board: (0,_gameBoard__WEBPACK_IMPORTED_MODULE_5__["default"])(crypto.randomUUID()),
};

const playerTwo = {
  board: (0,_gameBoard__WEBPACK_IMPORTED_MODULE_5__["default"])(crypto.randomUUID()),
};

const computer = {
  board: (0,_gameBoard__WEBPACK_IMPORTED_MODULE_5__["default"])('computer'),
};

const playerOneID = playerOne.board.getID();
const playerTwoID = playerTwo.board.getID();

playerOneBoard.id = playerOneID;
playerTwoBoard.id = playerTwoID;

const setImgBackgroundToBody = () => {
  const body = document.body;
  pirateShipImg.classList.add('pirateShip');
  sailingShipImg.classList.add('sailingShip');

  pirateShipImg.src = _imgs_pirate_ship_svg__WEBPACK_IMPORTED_MODULE_3__;
  sailingShipImg.src = _imgs_sailingShip_svg__WEBPACK_IMPORTED_MODULE_4__;

  body.append(pirateShipImg, sailingShipImg);
};

const appendCellToSelectShipBoard = (selectShip) => {
  let count = 0;
  while (count < 100) {
    const cell = document.createElement('div');
    cell.classList.add('select-ship-cell');
    selectShip.append(cell);
    count++;
  }
};

const setDimToSelectShipBoard = (selectShip) => {
  selectShip.style.minWidth = `${selectShipDim}px`;
  selectShip.style.minHeight = `${selectShipDim}px`;
};

selectShipBoards.forEach((selectShip) => {
  setDimToSelectShipBoard(selectShip);
  appendCellToSelectShipBoard(selectShip);
});

const shipTemplates = [
  { len: 4, ind: 0, ship: _imgs_ship_len3_svg__WEBPACK_IMPORTED_MODULE_1__ },
  { len: 3, ind: 20, ship: _imgs_ship_len3_svg__WEBPACK_IMPORTED_MODULE_1__ },
  { len: 3, ind: 26, ship: _imgs_ship_len3_svg__WEBPACK_IMPORTED_MODULE_1__ },
  { len: 2, ind: 40, ship: _imgs_ship_len2_svg__WEBPACK_IMPORTED_MODULE_2__ },
  { len: 2, ind: 43, ship: _imgs_ship_len2_svg__WEBPACK_IMPORTED_MODULE_2__ },
  { len: 2, ind: 46, ship: _imgs_ship_len2_svg__WEBPACK_IMPORTED_MODULE_2__ },
  { len: 1, ind: 60, ship: _imgs_ship_len2_svg__WEBPACK_IMPORTED_MODULE_2__ },
  { len: 1, ind: 63, ship: _imgs_ship_len2_svg__WEBPACK_IMPORTED_MODULE_2__ },
  { len: 1, ind: 66, ship: _imgs_ship_len2_svg__WEBPACK_IMPORTED_MODULE_2__ },
  { len: 1, ind: 69, ship: _imgs_ship_len2_svg__WEBPACK_IMPORTED_MODULE_2__ },
];

const appendShipTemplateOnSelectBoard = (selectBoard, playerID) => {
  shipTemplates.forEach((shipTemplate) => {
    const img = document.createElement('img').cloneNode(true);
    const cell = [...selectBoard.children][shipTemplate.ind];
    img.classList.add('shipImg');
    img.setAttribute('data-len', shipTemplate.len);
    img.style.minWidth = `${(selectShipDim / 10) * shipTemplate.len}px`;
    img.src = shipTemplate.ship;
    img.id = playerID;
    cell.append(img);
  });
};

const appendCellToBoard = () => {
  playerOne.board.getAllCoordinate().forEach((coordinate) => {
    const cellElem = document.createElement('div');
    cellElem.classList.add('player-board-cell');
    playerBoards.forEach((board) => {
      const cloneCell = cellElem.cloneNode(true);
      cloneCell.setAttribute('data-coordinate', coordinate);
      board.append(cloneCell);
    });
  });
};

function toggleShipDisplay(board) {
  board.querySelectorAll('[data-len]').forEach((ship) => ship.classList.toggle('visibilityHidden'));
}

function handleTogglePlayerOneShip() {
  toggleShipDisplay(playerOneBoard);
}

function handleTogglePlayerTwoShip() {
  toggleShipDisplay(playerTwoBoard);
}

function ShipSelection() {
  let selectedShip = null;

  function selectShip(e) {
    e.stopPropagation();
    const ship = e.target;
    if (ship.dataset.len) {
      selectedShip = ship;
    }
  }

  const getSelectedShip = () => selectedShip;

  const unselectShip = () => {
    selectedShip = null;
  };

  return { selectShip, getSelectedShip, unselectShip };
}

const shipSel = ShipSelection();

function setComputerShip() {
  computer.board.setShipDynamically();

  playerTwoBoard.innerHTML = '';
  computer.board.getBoard().forEach((cell) => {
    const cellElem = document.createElement('div');
    cellElem.setAttribute('data-coordinate', cell.getCoordinate());
    cellElem.classList.add('player-board-cell');
    if (cell.getShip()) {
      cellElem.setAttribute('data-len', `${cell.getShip().len()}`);
    }
    playerTwoBoard.append(cellElem);
  });
}

function togglePlayer2SelectShipBoard() {
  const inpCheckPlayer = document.querySelector('[data-inp-check-player]:checked');

  if (inpCheckPlayer.id === 'computer') {
    playerTwoSelectShipBoard.classList.add('hide');
  } else playerTwoSelectShipBoard.classList.remove('hide');

  game.reset();
}

const removeShip = (cellElem) => {
  const ship = cellElem.querySelector('[data-len]');
  if (ship) ship.remove();
};

const removeAttackCell = (cellElem) => {
  const attackCellStatus = cellElem.querySelector('[data-hit-status]');
  if (attackCellStatus) {
    attackCellStatus.remove();
  }
};

const resetSelectShipBoardTwo = () => {
  [...[...selectShipBoards][1].children].forEach(removeShip);
  appendShipTemplateOnSelectBoard(playerTwoSelectShipBoard, playerTwoID);
};

const resetSelectShipBoardOne = () => {
  [...[...selectShipBoards][0].children].forEach(removeShip);
  appendShipTemplateOnSelectBoard(playerOneSelectShipBoard, playerOneID);
};

const removeAttackCellMark = () => {
  playerBoards.forEach((board) => {
    [...board.children].forEach(removeAttackCell);
  });
};

const removeShipFromPlayerOneBoard = () => {
  [...playerOneBoard.children].forEach(removeShip);
};

const removeShipOnFromPlayerTwoBoard = () => {
  [...playerTwoBoard.children].forEach(removeShip);
};

function handleResetSelectShipBoardTwo(e) {
  const checkPlayer = e.target.dataset.inpCheckPlayer;

  if (!checkPlayer) return;

  if (checkPlayer === 'computer') {
    resetSelectShipBoardTwo();
    [...playerTwoBoard.children].forEach(removeShip);
  }
  togglePlayer2SelectShipBoard();
}

const filterCellWithShip = (cellElem) => {
  return cellElem.querySelector('[data-len]');
};

const makePointerNone = (cellElem) => {
  cellElem.querySelector('[data-len]').classList.add('pointerEventNone');
};

const makeInpReadOnly = () => {
  [player1Name, player2Name].forEach((name) => (name.readOnly = true));
};

const makeReadOnlyFromInp = () => {
  [player1Name, player2Name].forEach((name) => (name.readOnly = false));
};

const togglePlayerMsg = (playerMsg) => {
  playerMsg.classList.remove('scaleTo0');
  setTimeout(() => playerMsg.classList.add('scaleTo0'), 2000);
};

const togglePlayerOneMsg = (msg) => {
  playerOneMsg.textContent = msg;
  togglePlayerMsg(playerOneMsg);
};

const togglePlayerTwoMsg = (msg) => {
  playerTwoMsg.textContent = msg;
  togglePlayerMsg(playerTwoMsg);
};

const setPlayerTurnMsg = (msg) => {
  generalMsg.textContent = `${msg} turn`;
};

function Game() {
  let isBtw, player, winner, gameStart;

  const playerInfo = {
    playerOne: playerOne.board,
    playerOneName: 'Player 1',
  };

  const humanAndComputer = {
    attackShip(cell, coordinate) {
      const boardElemID = cell.closest('[data-player-board]').id;

      if (boardElemID === playerOneID) return;

      let attackState = player.humanTurn(coordinate);

      if (!attackState) {
        togglePlayerOneMsg('Already hit');
        return;
      }
      markHitCell(cell, attackState);

      if (attackState === 'miss') {
        setPlayerTurnMsg(player.getPlayerTwoName());
        const isAllShipSunk = player.computerTurn(false, 'randomIndex', computerTurnCb);
        if (isAllShipSunk === 'allSunk') {
          winner = player.getPlayerTwoName();
          return;
        }
      } else {
        if (computer.board.isAllShipSunk()) {
          winner = player.getPlayerOneName();
          return;
        }
      }
    },

    playAgain() {
      computer.board.playAgain();
    },

    reset() {
      computer.board.reset();
    },
  };

  const humanAndHuman = {
    attackShip(cell, coordinate) {
      const boardElemID = cell.closest('[data-player-board]').id;
      const boardID = player.getCurrentBoardID();

      if (boardElemID !== boardID) return;

      const currentBoardAttack = player.getCurrentBoardToAttack();
      const attackState = currentBoardAttack.receiveAttack(coordinate);

      if (!attackState) {
        if (playerOneID === boardID) {
          togglePlayerOneMsg('Already hit');
        } else {
          togglePlayerTwoMsg('Already hit');
        }
        return;
      }

      markHitCell(cell, attackState);

      if (attackState === 'miss') {
        player.switchBoardID();
        player.switchBoard();
        player.switchPlayerName();
        setPlayerTurnMsg(player.getCurPlayerName());
      } else {
        if (currentBoardAttack.isAllShipSunk()) {
          winner = player.getCurPlayerName();
        }
      }
    },

    playAgain() {
      playerTwo.board.playAgain();
    },

    reset() {
      playerTwo.board.reset();
      removeShipOnFromPlayerTwoBoard();
      resetSelectShipBoardTwo();
    },
  };

  function start() {
    if (gameStart) return;

    makeInpReadOnly();
    const inpCheckPlayer = document.querySelector('[data-inp-check-player]:checked');

    if (inpCheckPlayer.id === 'computer') {
      isBtw = humanAndComputer;
      playerInfo.playerTwo = computer.board;
      playerInfo.playerTwoName = 'Grok';

      if (player1Name.value.trim() !== '') playerInfo.playerOneName = player1Name.value;

      if (!playerOne.board.isAllShipSet()) {
        togglePlayerOneMsg(`${playerInfo.playerOneName} set all your Ship`);
        return;
      }

      setComputerShip();
    } else {
      isBtw = humanAndHuman;

      playerInfo.playerTwo = playerTwo.board;
      playerInfo.playerTwoName = 'Player 2';

      if (!playerOne.board.isAllShipSet()) {
        togglePlayerOneMsg(`${playerInfo.playerOneName} set all your Ship`);
        return;
      } else if (!playerTwo.board.isAllShipSet()) {
        togglePlayerTwoMsg(`${playerInfo.playerTwoName} set all your Ship`);
        return;
      }

      [...playerTwoBoard.children].filter(filterCellWithShip).forEach(makePointerNone);
    }

    if (player2Name.value.trim() !== '') playerInfo.playerTwoName = player2Name.value;

    player = (0,_player__WEBPACK_IMPORTED_MODULE_6__["default"])(playerInfo);

    [...playerOneBoard.children].filter(filterCellWithShip).forEach(makePointerNone);
    setPlayerTurnMsg(player.getPlayerOneName());
    gameStart = true;
  }

  const resetBoard = () => {
    winner = false;
    gameStart = false;
    generalMsg.innerHTML = '🎯';
    removeAttackCellMark();
  };

  function playAgain() {
    if (!isBtw) return;

    gameStart = true;

    isBtw.playAgain();
    playerOne.board.playAgain();
    removeAttackCellMark();
    generalMsg.textContent = 'Game Ongoing';
    resetBoard();
  }

  function reset() {
    if (!isBtw) return;

    isBtw.reset();
    playerOne.board.reset();

    removeAttackCellMark();
    removeShipFromPlayerOneBoard();
    resetSelectShipBoardOne();
    makeReadOnlyFromInp();
    resetBoard();
  }

  const markHitCell = (cellElem, attackState) => {
    const attackCellStatus = document.createElement('div');
    attackCellStatus.classList.add('attackCellStatus');
    attackCellStatus.setAttribute('data-hit-status', '');
    attackCellStatus.innerHTML = attackState === 'hit' ? '💥' : '❌';
    cellElem.append(attackCellStatus);
  };

  const displayWinnerMsg = (winner) => {
    if (winner) {
      generalMsg.textContent = `${winner} won`;
      gameStart = false;
    }
  };

  const computerTurnCb = (coordinate, attackState) => {
    const cell = playerOneBoard.querySelector(`[data-coordinate="${coordinate}"]`);

    if (attackState === 'miss') {
      setPlayerTurnMsg(player.getPlayerOneName());
    }
    markHitCell(cell, attackState);
  };

  function attackShip(e) {
    if (!gameStart || !isBtw) return;

    let cell = e.target;
    const coordinate = cell.dataset.coordinate;

    isBtw.attackShip(cell, coordinate);
    displayWinnerMsg(winner);
  }

  function setShip(e) {
    if (gameStart) return;

    const cell = e.target;
    const ship = e.target;
    const boardElem = cell.closest('[data-player-board]');
    const board = boardElem.dataset.playerBoard === 'one' ? playerOne.board : playerTwo.board;
    let coordinate = cell.dataset.coordinate;

    if (ship.dataset.len) {
      coordinate = ship.closest('[data-coordinate]').getAttribute('data-coordinate');
      if (board.switchShipAxis(coordinate)) {
        ship.classList.toggle('rotate');
      }
    } else if (coordinate) {
      const shipElem = shipSel.getSelectedShip();
      if (!shipElem) return;
      const id = shipElem.id;
      const len = +shipElem.getAttribute('data-len');

      const isShipSet = board.setShip({ id, len }, coordinate);
      if (isShipSet) {
        const width = getComputedStyle(playerOneBoard).width;
        shipElem.style.minWidth = `${(+width.replace(/[a-z]/gi, '') / 10) * len}px`;
        cell.append(shipElem);
      } else {
        if (id === playerOneID) {
          togglePlayerOneMsg('Invalid Position');
        } else {
          togglePlayerTwoMsg('Invalid Position');
        }
      }
    }
  }

  return { setShip, start, playAgain, reset, attackShip };
}

const game = Game();

appendShipTemplateOnSelectBoard(playerOneSelectShipBoard, playerOneID);
appendShipTemplateOnSelectBoard(playerTwoSelectShipBoard, playerTwoID);

setImgBackgroundToBody();
appendCellToBoard();
togglePlayer2SelectShipBoard();

select_player2_or_computer.addEventListener('change', handleResetSelectShipBoardTwo);

play.addEventListener('click', game.start);
reset.addEventListener('click', game.reset);
playAgain.addEventListener('click', game.playAgain);

playerOneSelectShipBoard.addEventListener('click', shipSel.selectShip);
playerTwoSelectShipBoard.addEventListener('click', shipSel.selectShip);

playerOneBoard.addEventListener('click', game.setShip);
playerTwoBoard.addEventListener('click', game.setShip);

playerOneBoard.addEventListener('click', game.attackShip);
playerTwoBoard.addEventListener('click', game.attackShip);

togglePlayerOneShip.addEventListener('click', handleTogglePlayerOneShip);
togglePlayerTwoShip.addEventListener('click', handleTogglePlayerTwoShip);

document.addEventListener('click', () => {
  shipSel.unselectShip();
});


/***/ },

/***/ "./src/player.js"
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function Player({ playerOne, playerOneName, playerTwo, playerTwoName }) {
  const stack = [];
  const allCoordinate = playerTwo.getAllCoordinate();

  const playerOneID = playerOne.getID();
  const playerTwoID = playerTwo.getID();

  let playerID = playerTwoID;
  let boardToAttack = playerTwo;
  let playerName = playerOneName;

  const switchPlayerName = () => {
    playerName = playerName === playerOneName ? playerTwoName : playerOneName;
  };

  const switchBoardID = () => {
    playerID = playerID === playerTwoID ? playerOneID : playerTwoID;
  };

  const switchBoard = () => {
    boardToAttack = boardToAttack === playerTwo ? playerOne : playerTwo;
  };

  const getCurrentBoardID = () => playerID;

  const getCurPlayerName = () => playerName;

  const getCurrentBoardToAttack = () => boardToAttack;

  const computerSendAttack = (coordinateObj, modeKey, computerTurnCb) => {
    let isShipHit = playerOne.receiveAttack(coordinateObj.coordinate) === 'hit';

    const attackState = isShipHit ? 'hit' : 'miss';

    computerTurnCb(coordinateObj.coordinate, attackState);

    allCoordinate.splice(allCoordinate.indexOf(coordinateObj.coordinate), 1);

    if (isShipHit) {
      const arrOfCoordinate = stack.shift();

      const ship = playerOne.getBoard()[coordinateObj.coordinateIndex].getShip();

      const hit = ship.getHit();
      const len = ship.len();

      // When hit is 2 then the axis of the ship is certain, so filter the previous coordinate to target that axis
      if (hit === 2 && len > 2) {
        const coordAxisToTry = arrOfCoordinate.filter((coord) => coord.axis === coordinateObj.axis);

        if (coordAxisToTry.length) {
          stack.unshift(coordAxisToTry);
        }
      } else if (arrOfCoordinate) {
        if (arrOfCoordinate.length) {
          stack.unshift(arrOfCoordinate);
        }
      }

      const ValidAdjacentCoordinateInObj = playerOne.getValidAdjacentCoordinateInObj(
        coordinateObj.coordinateIndex,
      );

      // Use the hit axis from previous attack to filter the next axis to attack
      if (hit > 1 && hit < len) {
        const coordAxisToTry = ValidAdjacentCoordinateInObj.filter(
          (coord) => coord.axis === coordinateObj.axis,
        );

        if (coordAxisToTry.length) stack.unshift(coordAxisToTry);
      } else {
        if (ValidAdjacentCoordinateInObj.length) stack.unshift(ValidAdjacentCoordinateInObj);
      }

      if (playerOne.isAllShipSunk()) return 'allSunk';
      if (computerTurn(false, modeKey, computerTurnCb)) return 'allSunk';
    } else if (stack[0]) {
      if (stack[0].length === 0) stack.shift();
    }
  };

  const computerTurn = (predictableCoordinateObj, modeKey = 'randomIndex', computerTurnCb) => {
    let coordinateObj = predictableCoordinateObj;

    if (stack.length > 0) {
      // try adjacent slot
      const coordinateToTry = stack[0];

      const mode = {
        predictableIndex: () => coordinateToTry.length - 1,
        randomIndex: () => Math.floor(Math.random() * coordinateToTry.length),
      };
      coordinateObj = coordinateToTry.splice(mode[modeKey](), 1)[0];
    } else if (!predictableCoordinateObj) {
      const randomIndex = Math.floor(Math.random() * allCoordinate.length);
      const coordinate = allCoordinate[randomIndex].toString();
      const coordinateIndex = playerOne.getCoordinateIndex(coordinate);

      coordinateObj = { coordinate, coordinateIndex };
    }
    return computerSendAttack(coordinateObj, modeKey, computerTurnCb);
  };

  const humanTurn = (coordinate) => {
    return playerTwo.receiveAttack(coordinate);
  };

  const getPlayerOneName = () => playerOneName;

  const getPlayerTwoName = () => playerTwoName;

  return {
    humanTurn,
    computerTurn,
    switchPlayerName,
    switchBoard,
    switchBoardID,
    getCurrentBoardToAttack,
    getCurPlayerName,
    getCurrentBoardID,
    getPlayerOneName,
    getPlayerTwoName,
  };
}


/***/ },

/***/ "./src/ship.js"
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length, coordinate) {
  let hitCount = 0;
  let axis = 'xAxis';

  const hit = () => {
    hitCount++;
  };

  const getHit = () => hitCount;

  const isSunk = () => {
    return hitCount === length;
  };

  const len = () => length;

  const switchAxis = () => {
    axis = axis === 'xAxis' ? 'yAxis' : 'xAxis';
  };

  const getAxis = () => axis;

  const reset = () => {
    hitCount = 0;
    axis = 'xAxis';
  };

  const getCoordinate = () => coordinate;

  return { hit, getHit, reset, isSunk, len, getAxis, switchAxis, getCoordinate };
}


/***/ },

/***/ "./src/fonts/Pacifico-Regular.woff"
/*!*****************************************!*\
  !*** ./src/fonts/Pacifico-Regular.woff ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e339c6943424b7bcceb6.woff";

/***/ },

/***/ "./src/fonts/Pacifico-Regular.woff2"
/*!******************************************!*\
  !*** ./src/fonts/Pacifico-Regular.woff2 ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d75d5ecea13c228ed785.woff2";

/***/ },

/***/ "./src/fonts/Roboto-400.woff"
/*!***********************************!*\
  !*** ./src/fonts/Roboto-400.woff ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fbebe70817c0f48eb4ee.woff";

/***/ },

/***/ "./src/imgs/pirate_ship.svg"
/*!**********************************!*\
  !*** ./src/imgs/pirate_ship.svg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "75233467aeefa2ac446b.svg";

/***/ },

/***/ "./src/imgs/sailingShip.svg"
/*!**********************************!*\
  !*** ./src/imgs/sailingShip.svg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "32a7829504b1f875df3b.svg";

/***/ },

/***/ "./src/imgs/ship_len2.svg"
/*!********************************!*\
  !*** ./src/imgs/ship_len2.svg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8ad2ec847ec84b681019.svg";

/***/ },

/***/ "./src/imgs/ship_len3.svg"
/*!********************************!*\
  !*** ./src/imgs/ship_len3.svg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1bd18fab28aab2ae0e3a.svg";

/***/ }

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("index." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e50073fa96fcea408925")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "battleship:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules,
/******/ 									update.css
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 		
/******/ 			var onAccepted = function () {
/******/ 				return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 					// handle errors in accept handlers and self accepted module load
/******/ 					if (error) {
/******/ 						return setStatus("fail").then(function () {
/******/ 							throw error;
/******/ 						});
/******/ 					}
/******/ 		
/******/ 					if (queuedInvalidatedModules) {
/******/ 						return internalApply(options).then(function (list) {
/******/ 							outdatedModules.forEach(function (moduleId) {
/******/ 								if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 							});
/******/ 							return list;
/******/ 						});
/******/ 					}
/******/ 		
/******/ 					return setStatus("idle").then(function () {
/******/ 						return outdatedModules;
/******/ 					});
/******/ 				});
/******/ 			};
/******/ 		
/******/ 			return Promise.all(
/******/ 				results
/******/ 					.filter(function (result) {
/******/ 						return result.apply;
/******/ 					})
/******/ 					.map(function (result) {
/******/ 						return result.apply(reportError);
/******/ 					})
/******/ 			)
/******/ 				.then(function (applyResults) {
/******/ 					applyResults.forEach(function (modules) {
/******/ 						if (modules) {
/******/ 							for (var i = 0; i < modules.length; i++) {
/******/ 								outdatedModules.push(modules[i]);
/******/ 							}
/******/ 						}
/******/ 					});
/******/ 				})
/******/ 				.then(onAccepted);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatebattleship"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					var acceptPromises = [];
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									var result;
/******/ 									try {
/******/ 										result = callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 									if (result && typeof result.then === "function") {
/******/ 										acceptPromises.push(result);
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					var onAccepted = function () {
/******/ 						// Load self accepted modules
/******/ 						for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 							var item = outdatedSelfAcceptedModules[o];
/******/ 							var moduleId = item.module;
/******/ 							try {
/******/ 								item.require(moduleId);
/******/ 							} catch (err) {
/******/ 								if (typeof item.errorHandler === "function") {
/******/ 									try {
/******/ 										item.errorHandler(err, {
/******/ 											moduleId: moduleId,
/******/ 											module: __webpack_require__.c[moduleId]
/******/ 										});
/******/ 									} catch (err1) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "self-accept-error-handler-errored",
/******/ 												moduleId: moduleId,
/******/ 												error: err1,
/******/ 												originalError: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err1);
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								} else {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					};
/******/ 		
/******/ 					return Promise.all(acceptPromises)
/******/ 						.then(onAccepted)
/******/ 						.then(function () {
/******/ 							return outdatedModules;
/******/ 						});
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLHlJQUFpRDtBQUM3Riw0Q0FBNEMsdUlBQWdEO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixPQUFPLHVGQUF1RixhQUFhLFFBQVEsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxPQUFPLFlBQVksU0FBUyxVQUFVLE1BQU0sWUFBWSxZQUFZLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sT0FBTyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxvQkFBb0IseUlBQXlJLDJCQUEyQixHQUFHLHVDQUF1QyxjQUFj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O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzQ0FBc0M7O0FBRWxFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxRQUFRLG1GQUFtRjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw4QkFBOEIsMEJBQTBCO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQSxRQUFRO0FBQ1IsOEJBQThCLDBCQUEwQjtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYSxtREFBTTs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRSxXQUFXOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBLHFDQUFxQywyQ0FBMkM7QUFDaEY7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcmhCYyxrQkFBa0Isb0RBQW9EO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzSGU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQSxzQkFBc0I7VUFDdEIsb0RBQW9ELHVCQUF1QjtVQUMzRTtVQUNBO1VBQ0EsR0FBRztVQUNIO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDOUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQSwyRjs7Ozs7V0NBQSxzRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsdUJBQXVCLDRCQUE0QjtXQUNuRDtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIsb0JBQW9CO1dBQ3JDO1dBQ0EsbUdBQW1HLFlBQVk7V0FDL0c7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUVBQW1FLGlDQUFpQztXQUNwRztXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3hDQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsQ0FBQzs7V0FFRDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwyQkFBMkI7V0FDM0IsNEJBQTRCO1dBQzVCLDJCQUEyQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHOztXQUVIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG9CQUFvQixnQkFBZ0I7V0FDcEM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQSxvQkFBb0IsZ0JBQWdCO1dBQ3BDO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRzs7V0FFSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQSxHQUFHOztXQUVIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUEsaUJBQWlCLHFDQUFxQztXQUN0RDs7V0FFQSxnREFBZ0Q7V0FDaEQ7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esb0JBQW9CLGlCQUFpQjtXQUNyQztXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNILEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxPQUFPO1dBQ1AsTUFBTTtXQUNOLEtBQUs7V0FDTCxJQUFJO1dBQ0osR0FBRztXQUNIOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLEVBQUU7O1dBRUY7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQSxLQUFLO1dBQ0w7O1dBRUE7V0FDQTtXQUNBLElBQUk7V0FDSixHQUFHO1dBQ0g7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBLHFCQUFxQixvQkFBb0I7V0FDekM7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKLEdBQUc7V0FDSDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSixHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0EsQzs7Ozs7V0MvWUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUJBQW1CLDJCQUEyQjtXQUM5QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxrQkFBa0IsY0FBYztXQUNoQztXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsY0FBYyxhQUFhO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsaUJBQWlCLDRCQUE0QjtXQUM3QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQSxnQkFBZ0IsNEJBQTRCO1dBQzVDO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBLGdCQUFnQiw0QkFBNEI7V0FDNUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLHVDQUF1QztXQUN6RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0EsbUJBQW1CLGlDQUFpQztXQUNwRDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0JBQXNCLHVDQUF1QztXQUM3RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0Isc0JBQXNCO1dBQzVDO1dBQ0E7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsV0FBVztXQUNYLFdBQVc7V0FDWDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFlBQVk7V0FDWjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxVQUFVO1dBQ1Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsV0FBVztXQUNYO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxvQkFBb0Isd0NBQXdDO1dBQzVEO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsT0FBTztXQUNQO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxTQUFTO1dBQ1QsU0FBUztXQUNUO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFVBQVU7V0FDVjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLHNDQUFzQztXQUN0QztXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBOztXQUVBLG9COzs7OztXQ3JnQkEsbUM7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLTQwMC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9QYWNpZmljby1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9QYWNpZmljby1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogID09PT09PT09PT09IFJlc2V0ID09PT09PT09PSAgKi9cbi8qIDEuIFVzZSBhIG1vcmUtaW50dWl0aXZlIGJveC1zaXppbmcgbW9kZWwgKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIC8qIDMuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0ICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIC8qIDQuIEltcHJvdmUgdGV4dCByZW5kZXJpbmcgKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8qIDUuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHMgKi9cbmltZyxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8qIDYuIEluaGVyaXQgZm9udHMgZm9yIGZvcm0gY29udHJvbHMgKi9cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG4vKiA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93cyAqL1xucCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi8qIDguIEltcHJvdmUgbGluZSB3cmFwcGluZyAqL1xucCB7XG4gIHRleHQtd3JhcDogcHJldHR5O1xufVxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgdGV4dC13cmFwOiBiYWxhbmNlO1xufVxuXG4vKiBmb250ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgc3JjOlxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQod29mZiksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCh3b2ZmMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFBhY2lmaWNvO1xuICBzcmM6XG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCh3b2ZmKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KHdvZmYyKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbjpyb290IHtcbiAgLS1wcmktYWNjZW50OiByZ2IoMjE3LCAxNzYsIDEzKTtcbiAgLS1zZWMtYWNjZW50OiByZ2IoMTMxLCAxMjcsIDgzKTtcbiAgLS10ZXItYWNjZW50OiByZ2IoNjAsIDcwLCA0KTtcbiAgLS13aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAtLWJsYWNrOiByZ2IoMCwgMCwgMCk7XG4gIC0tZXJyb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMjQ5LCAxMiwgMTIsIDAuMik7XG4gIC0tZXJyb3I6IHJnYmEoMjQ5LCAxMiwgMTIpO1xuXG4gIC0tdHJhbnNwYXJlbnQtd2hpdGUteHNtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIC0tdHJhbnNwYXJlbnQtd2hpdGUtc206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgLS10cmFuc3BhcmVudC13aGl0ZS1sZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXG4gIC0tdHJhbnNwYXJlbnQtYmxhY2steHNtOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIC0tdHJhbnNwYXJlbnQtYmxhY2stc206IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLS10cmFuc3BhcmVudC1ibGFjay1sZzogcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG4gIC0tc3oteHh4c206IDFweDtcbiAgLS1zei14eHNtOiAycHg7XG4gIC0tc3oteHNtOiA1cHg7XG4gIC0tc3otc206IDEwcHg7XG4gIC0tc3otbGc6IDIwcHg7XG4gIC0tc3oteGxnOiAzMHB4O1xuICAtLXN6LXh4bGc6IDYwcHg7XG5cbiAgLS1ieC1zaGFkb3c6IDAuNXB4IDAuNXB4IDVweCB2YXIoLS10cmFuc3BhcmVudC1ibGFjay1sZyk7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBhcmlhbDtcbiAgZm9udC1zaXplOiBjbGFtcCh2YXIoLS1zei1zbSksIHZhcigtLXN6LXNtKSArIDAuNXZ3LCB2YXIoLS1zei1zbSkgKyB2YXIoLS1zei14c20pKTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwZXJzcGVjdGl2ZTogMzAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRlci1hY2NlbnQpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgcGFkZGluZzogMCB2YXIoLS1zei1sZyk7XG4gIG1hcmdpbjogMCBhdXRvIDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogdmFyKC0tc3otc20pO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiB2YXIoLS1zei1sZykgMDtcbn1cblxuLmdhbWUtdGl0bGUge1xuICBmb250LWZhbWlseTogUGFjaWZpY28sIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC13aGl0ZS14c20pO1xufVxuXG5Aa2V5ZnJhbWVzIHRvQW5kRnJvIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03MCUpO1xuICB9XG59XG5cbi5waXJhdGVTaGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwLjI7XG4gIGJvdHRvbTogMDtcbiAgYW5pbWF0aW9uOiB0b0FuZEZybyA1MDAwbXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uc2FpbGluZ1NoaXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDAuMjtcbiAgdG9wOiAtNDAwcHg7XG4gIHJpZ2h0OiAtMTMwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4yKTtcbn1cblxuLmhvd1RvU2V0U2hpcEluc3RydWN0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlLXhzbSk7XG59XG5cbi5odW1hbiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5ib2FyZHMtc2VjdGlvbiB7XG4gIGJvcmRlcjogdmFyKC0tc3otbGcpIHNvbGlkIHZhcigtLXByaS1hY2NlbnQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1ieC1zaGFkb3cpO1xuICBoZWlnaHQ6IDY0MHB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtYXgtY29udGVudCAxZnI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhpZGUtcGxheWVyLXNoaXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdGV4dC13cmFwOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZ2dsZS1wbGF5ZXItb25lLXNoaXAge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAtMjBweDtcbn1cblxuLnRvZ2dsZS1wbGF5ZXItdHdvLXNoaXAge1xuICBib3R0b206IC0yMHB4O1xuICBsZWZ0OiA1MCU7XG59XG5cbi5zZWxlY3Qtc2hpcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLXN6LXh4c20pIHNvbGlkIHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWxnKTtcbiAgYm9yZGVyOiB2YXIoLS1zei14c20pIHNvbGlkIHZhcigtLXByaS1hY2NlbnQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1ieC1zaGFkb3cpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWMtYWNjZW50KTtcbn1cblxuLnNlbGVjdC1zaGlwLWNlbGwge1xuICBtaW4td2lkdGg6IGNhbGMoMTAwJSAvIDEwKTtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC8gMTApO1xuICBib3JkZXI6IHZhcigtLXN6LXh4eHNtKSBzb2xpZCB2YXIoLS10cmFuc3BhcmVudC13aGl0ZS1zbSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlbGVjdC1zaGlwLWNlbGw6bnRoLWNoaWxkKDFuICsgNykge1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uc2VsZWN0LXNoaXAtY2VsbDpudGgtY2hpbGQoMW4gKyAxKSB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2hpcEltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMDtcbn1cblxuLnBvaW50ZXJFdmVudE5vbmUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmlucF9wbGF5ZXJOYW1lIHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3oteHNtKTtcbiAgcGFkZGluZzogdmFyKC0tc3oteHNtKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiB2YXIoLS1ieC1zaGFkb3cpO1xuXG4gICY6cmVhZC1vbmx5IHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQtYmxhY2stbGcpO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1wcmktYWNjZW50KTtcbiAgfVxufVxuXG4uc3VibWl0LXBsYXllck5hbWUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wbGF5ZXItYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgYm9yZGVyOiB2YXIoLS1zei14eHNtKSBzb2xpZCB2YXIoLS10cmFuc3BhcmVudC1ibGFjay1sZyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cblxuLnBsYXllci1ib2FyZC1jZWxsIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC8gMTApO1xuICBtaW4td2lkdGg6IGNhbGMoMTAwJSAvIDEwKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQtYmxhY2stbGcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hdHRhY2tDZWxsU3RhdHVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMCU7XG4gIHRvcDogMjAlO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmhpbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpLWFjY2VudCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tc3oteHhzbSkgdmFyKC0tc3oteHNtKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBtYXgtY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBjb2x1bW4tZ2FwOiB2YXIoLS1zei1zbSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBsYXllck1zZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xuICBwYWRkaW5nOiB2YXIoLS1zei14c20pO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zei14c20pO1xuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IDMwMG1zO1xuICBib3gtc2hhZG93OiB2YXIoLS1ieC1zaGFkb3cpO1xuXG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtd3JhcDogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgei1pbmRleDogMTAwO1xufVxuXG4ucGxheWVyT25lTXNnIHtcbiAgdHJhbnNpdGlvbjogMzAwbXM7XG4gIHRvcDogLTQwcHg7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLnBsYXllclR3b01zZyB7XG4gIHRvcDogNTNweDtcbiAgbGVmdDogNTAlO1xufVxuXG4uc2NhbGVUbzAge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMCk7XG59XG5cbi5wbGF5LFxuLnJlc2V0LFxuLnBsYXktYWdhaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC13aGl0ZS1sZyk7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLXN6LXhzbSkgdmFyKC0tc3otc20pO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zei14c20pO1xuICBib3gtc2hhZG93OiB2YXIoLS1ieC1zaGFkb3cpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDMwMG1zO1xuXG4gICY6YWN0aXZlIHtcbiAgICBzY2FsZTogMC44O1xuICB9XG59XG5cbi53aW5uZXItbmFtZSB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIHRleHQtd3JhcDogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiB2YXIoLS1zei1zbSk7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5zZWxlY3RfY29tcHV0ZXJfb3JfcGxheWVyMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbHVtbi1nYXA6IHZhcigtLXN6LWxnKTtcbn1cblxuLmNoZWNrX3BsYXllciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbHVtbi1nYXA6IHZhcigtLXN6LXhzbSk7XG59XG5cbi5yb3RhdGUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC0xNHB4KTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udmlzaWJpbGl0eUhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5iZ0NvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtYmxhY2stbGcpO1xufVxuXG4vKiBcblZpc3VhbGl6ZSBjb21wdXRlciBzaGlwXG5cbi5wbGF5ZXItMi1ib2FyZCB7XG4gIFtkYXRhLWxlbj0nMSddIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjcsIDcxLCA4NSk7XG4gIH1cbiAgW2RhdGEtbGVuPScyJ10ge1xuICAgIGJhY2tncm91bmQ6IHJnYigxNjQsIDE4MSwgMTIpO1xuICB9XG4gIFtkYXRhLWxlbj0nMyddIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODAsIDIzLCAyMTQpO1xuICB9XG4gIFtkYXRhLWxlbj0nNCddIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAyLCA4LCAxOTkpO1xuICB9XG59ICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0NBQWtDO0FBQ2xDLDZDQUE2QztBQUM3Qzs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLG1DQUFtQztBQUNyQzs7QUFFQSw4QkFBOEI7QUFDOUI7O0VBRUUsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUEsdUNBQXVDO0FBQ3ZDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLDRCQUE0QjtBQUM1Qjs7Ozs7OztFQU9FLHlCQUF5QjtBQUMzQjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTs7Ozs7O0VBTUUsa0JBQWtCO0FBQ3BCOztBQUVBLFNBQVM7QUFDVDtFQUNFLG1CQUFtQjtFQUNuQjs7eURBRW1EO0VBQ25ELG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCOzt5REFFbUQ7RUFDbkQsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLDJDQUEyQztFQUMzQywwQkFBMEI7O0VBRTFCLGlEQUFpRDtFQUNqRCxnREFBZ0Q7RUFDaEQsZ0RBQWdEOztFQUVoRCwyQ0FB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RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7OztFQUdFLDZDQUE2QztFQUM3QyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQjtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogID09PT09PT09PT09IFJlc2V0ID09PT09PT09PSAgKi9cXG4vKiAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgLyogMy4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAvKiA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nICovXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLyogNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0cyAqL1xcbmltZyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIDYuIEluaGVyaXQgZm9udHMgZm9yIGZvcm0gY29udHJvbHMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIDcuIEF2b2lkIHRleHQgb3ZlcmZsb3dzICovXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4vKiA4LiBJbXByb3ZlIGxpbmUgd3JhcHBpbmcgKi9cXG5wIHtcXG4gIHRleHQtd3JhcDogcHJldHR5O1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICB0ZXh0LXdyYXA6IGJhbGFuY2U7XFxufVxcblxcbi8qIGZvbnQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6XFxuICAgIHVybCguL2ZvbnRzL1JvYm90by00MDAud29mZikgZm9ybWF0KHdvZmYpLFxcbiAgICB1cmwoLi9mb250cy9QYWNpZmljby1SZWd1bGFyLndvZmYyKSBmb3JtYXQod29mZjIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUGFjaWZpY287XFxuICBzcmM6XFxuICAgIHVybCguL2ZvbnRzL1BhY2lmaWNvLVJlZ3VsYXIud29mZikgZm9ybWF0KHdvZmYpLFxcbiAgICB1cmwoLi9mb250cy9QYWNpZmljby1SZWd1bGFyLndvZmYyKSBmb3JtYXQod29mZjIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmktYWNjZW50OiByZ2IoMjE3LCAxNzYsIDEzKTtcXG4gIC0tc2VjLWFjY2VudDogcmdiKDEzMSwgMTI3LCA4Myk7XFxuICAtLXRlci1hY2NlbnQ6IHJnYig2MCwgNzAsIDQpO1xcbiAgLS13aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgLS1ibGFjazogcmdiKDAsIDAsIDApO1xcbiAgLS1lcnJvci10cmFuc3BhcmVudDogcmdiYSgyNDksIDEyLCAxMiwgMC4yKTtcXG4gIC0tZXJyb3I6IHJnYmEoMjQ5LCAxMiwgMTIpO1xcblxcbiAgLS10cmFuc3BhcmVudC13aGl0ZS14c206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIC0tdHJhbnNwYXJlbnQtd2hpdGUtc206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIC0tdHJhbnNwYXJlbnQtd2hpdGUtbGc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG5cXG4gIC0tdHJhbnNwYXJlbnQtYmxhY2steHNtOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAtLXRyYW5zcGFyZW50LWJsYWNrLXNtOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAtLXRyYW5zcGFyZW50LWJsYWNrLWxnOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFxuICAtLXN6LXh4eHNtOiAxcHg7XFxuICAtLXN6LXh4c206IDJweDtcXG4gIC0tc3oteHNtOiA1cHg7XFxuICAtLXN6LXNtOiAxMHB4O1xcbiAgLS1zei1sZzogMjBweDtcXG4gIC0tc3oteGxnOiAzMHB4O1xcbiAgLS1zei14eGxnOiA2MHB4O1xcblxcbiAgLS1ieC1zaGFkb3c6IDAuNXB4IDAuNXB4IDVweCB2YXIoLS10cmFuc3BhcmVudC1ibGFjay1sZyk7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgYXJpYWw7XFxuICBmb250LXNpemU6IGNsYW1wKHZhcigtLXN6LXNtKSwgdmFyKC0tc3otc20pICsgMC41dncsIHZhcigtLXN6LXNtKSArIHZhcigtLXN6LXhzbSkpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBlcnNwZWN0aXZlOiAzMDBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRlci1hY2NlbnQpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBwYWRkaW5nOiAwIHZhcigtLXN6LWxnKTtcXG4gIG1hcmdpbjogMCBhdXRvIDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IHZhcigtLXN6LXNtKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1zei1sZykgMDtcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFBhY2lmaWNvLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlLXhzbSk7XFxufVxcblxcbkBrZXlmcmFtZXMgdG9BbmRGcm8ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNzAlKTtcXG4gIH1cXG59XFxuXFxuLnBpcmF0ZVNoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgYm90dG9tOiAwO1xcbiAgYW5pbWF0aW9uOiB0b0FuZEZybyA1MDAwbXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG4uc2FpbGluZ1NoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgdG9wOiAtNDAwcHg7XFxuICByaWdodDogLTEzMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xcbn1cXG5cXG4uaG93VG9TZXRTaGlwSW5zdHJ1Y3Rpb24ge1xcbiAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlLXhzbSk7XFxufVxcblxcbi5odW1hbiB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uYm9hcmRzLXNlY3Rpb24ge1xcbiAgYm9yZGVyOiB2YXIoLS1zei1sZykgc29saWQgdmFyKC0tcHJpLWFjY2VudCk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1ieC1zaGFkb3cpO1xcbiAgaGVpZ2h0OiA2NDBweDtcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWF4LWNvbnRlbnQgMWZyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGlkZS1wbGF5ZXItc2hpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdGV4dC13cmFwOiBub3dyYXA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2dnbGUtcGxheWVyLW9uZS1zaGlwIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogLTIwcHg7XFxufVxcblxcbi50b2dnbGUtcGxheWVyLXR3by1zaGlwIHtcXG4gIGJvdHRvbTogLTIwcHg7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbi5zZWxlY3Qtc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLXN6LXh4c20pIHNvbGlkIHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWxnKTtcXG4gIGJvcmRlcjogdmFyKC0tc3oteHNtKSBzb2xpZCB2YXIoLS1wcmktYWNjZW50KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJ4LXNoYWRvdyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWMtYWNjZW50KTtcXG59XFxuXFxuLnNlbGVjdC1zaGlwLWNlbGwge1xcbiAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLyAxMCk7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLyAxMCk7XFxuICBib3JkZXI6IHZhcigtLXN6LXh4eHNtKSBzb2xpZCB2YXIoLS10cmFuc3BhcmVudC13aGl0ZS1zbSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWxlY3Qtc2hpcC1jZWxsOm50aC1jaGlsZCgxbiArIDcpIHtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0LXNoaXAtY2VsbDpudGgtY2hpbGQoMW4gKyAxKSB7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuXFxuLnNoaXBJbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTA7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwO1xcbn1cXG5cXG4ucG9pbnRlckV2ZW50Tm9uZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmlucF9wbGF5ZXJOYW1lIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXN6LXhzbSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zei14c20pO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYngtc2hhZG93KTtcXG5cXG4gICY6cmVhZC1vbmx5IHtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudC1ibGFjay1sZyk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICB9XFxuXFxuICAmOmZvY3VzIHtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tcHJpLWFjY2VudCk7XFxuICB9XFxufVxcblxcbi5zdWJtaXQtcGxheWVyTmFtZSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICBib3JkZXI6IHZhcigtLXN6LXh4c20pIHNvbGlkIHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWxnKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnBsYXllci1ib2FyZC1jZWxsIHtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAvIDEwKTtcXG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC8gMTApO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHJhbnNwYXJlbnQtYmxhY2stbGcpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmF0dGFja0NlbGxTdGF0dXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjAlO1xcbiAgdG9wOiAyMCU7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLmhpbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaS1hY2NlbnQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tc3oteHhzbSkgdmFyKC0tc3oteHNtKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50IDFmciBtYXgtY29udGVudDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgY29sdW1uLWdhcDogdmFyKC0tc3otc20pO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheWVyTXNnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcXG4gIHBhZGRpbmc6IHZhcigtLXN6LXhzbSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zei14c20pO1xcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJ4LXNoYWRvdyk7XFxuXFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtd3JhcDogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wbGF5ZXJPbmVNc2cge1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICB0b3A6IC00MHB4O1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4ucGxheWVyVHdvTXNnIHtcXG4gIHRvcDogNTNweDtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLnNjYWxlVG8wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwKTtcXG59XFxuXFxuLnBsYXksXFxuLnJlc2V0LFxcbi5wbGF5LWFnYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlLWxnKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXN6LXhzbSkgdmFyKC0tc3otc20pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3oteHNtKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJ4LXNoYWRvdyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG5cXG4gICY6YWN0aXZlIHtcXG4gICAgc2NhbGU6IDAuODtcXG4gIH1cXG59XFxuXFxuLndpbm5lci1uYW1lIHtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXN6LXNtKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uc2VsZWN0X2NvbXB1dGVyX29yX3BsYXllcjIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IHZhcigtLXN6LWxnKTtcXG59XFxuXFxuLmNoZWNrX3BsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogdmFyKC0tc3oteHNtKTtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC0xNHB4KTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnZpc2liaWxpdHlIaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uYmdDb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1ibGFjay1sZyk7XFxufVxcblxcbi8qIFxcblZpc3VhbGl6ZSBjb21wdXRlciBzaGlwXFxuXFxuLnBsYXllci0yLWJvYXJkIHtcXG4gIFtkYXRhLWxlbj0nMSddIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI3LCA3MSwgODUpO1xcbiAgfVxcbiAgW2RhdGEtbGVuPScyJ10ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTY0LCAxODEsIDEyKTtcXG4gIH1cXG4gIFtkYXRhLWxlbj0nMyddIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDgwLCAyMywgMjE0KTtcXG4gIH1cXG4gIFtkYXRhLWxlbj0nNCddIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwMiwgOCwgMTk5KTtcXG4gIH1cXG59ICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmZ1bmN0aW9uIENlbGwoY29vcmRpbmF0ZSkge1xuICBsZXQgc2hpcEluQ2VsbCA9IG51bGw7XG4gIGxldCBoaXQgPSBmYWxzZTtcblxuICBjb25zdCBzZXRTaGlwID0gKHNoaXApID0+IHtcbiAgICBzaGlwSW5DZWxsID0gc2hpcDtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwID0gKCkgPT4gc2hpcEluQ2VsbDtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBzaGlwSW5DZWxsO1xuICAgIHNoaXBJbkNlbGwgPSBudWxsO1xuICAgIHJldHVybiBzaGlwO1xuICB9O1xuXG4gIGNvbnN0IGhpdENlbGwgPSAoKSA9PiB7XG4gICAgaGl0ID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCByZXNldEhpdCA9ICgpID0+IHtcbiAgICBoaXQgPSBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBpc0NlbGxIaXQgPSAoKSA9PiBoaXQ7XG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZSA9ICgpID0+IGNvb3JkaW5hdGU7XG5cbiAgcmV0dXJuIHsgc2V0U2hpcCwgZ2V0U2hpcCwgcmVtb3ZlU2hpcCwgaGl0Q2VsbCwgaXNDZWxsSGl0LCByZXNldEhpdCwgZ2V0Q29vcmRpbmF0ZSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoaWQpIHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgY29uc3QgeUF4aXMgPSBbJ2onLCAnaScsICdoJywgJ2cnLCAnZicsICdlJywgJ2QnLCAnYycsICdiJywgJ2EnXTtcbiAgY29uc3QgeEF4aXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gIGNvbnN0IGNlbGxJbk9yZGVyT2ZIaXQgPSBbXTtcbiAgY29uc3QgQUxMX1NISVBfTEVOID0gMjA7XG5cbiAgbGV0IGhpdENvb3JkaW5hdGU7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB5QXhpcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgeEF4aXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGJvYXJkLnB1c2goQ2VsbChgJHt5QXhpc1tpXX0ke3hBeGlzW2pdfWApKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRDb29yZGluYXRlSW5kZXggPSAoY29vcmRpbmF0ZSkgPT5cbiAgICBib2FyZC5maW5kSW5kZXgoKGNlbGwpID0+IGNlbGwuZ2V0Q29vcmRpbmF0ZSgpID09PSBjb29yZGluYXRlKTtcblxuICBjb25zdCBpc0ludGVyU2VjdGlvbiA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHZhbGlkQWRqYWNlbnRJbmRleEluT2JqID0gZ2V0VmFsaWRBZGphY2VudENvb3JkaW5hdGVJbk9iaihpbmRleCk7XG5cbiAgICBjb25zdCBsZWZ0SW5kZXggPSB2YWxpZEFkamFjZW50SW5kZXhJbk9iai5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmRpciA9PT0gJ2xlZnQnKTtcbiAgICBjb25zdCB0b3BJbmRleCA9IHZhbGlkQWRqYWNlbnRJbmRleEluT2JqLmZpbmRJbmRleCgob2JqKSA9PiBvYmouZGlyID09PSAndG9wJyk7XG4gICAgY29uc3QgYm90dG9tSW5kZXggPSB2YWxpZEFkamFjZW50SW5kZXhJbk9iai5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmRpciA9PT0gJ2JvdHRvbScpO1xuICAgIGNvbnN0IHJpZ2h0SW5kZXggPSB2YWxpZEFkamFjZW50SW5kZXhJbk9iai5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmRpciA9PT0gJ3JpZ2h0Jyk7XG5cbiAgICBjb25zdCBuZWFyZXN0Q29vcmQgPSB2YWxpZEFkamFjZW50SW5kZXhJbk9iai5tYXAoKG9iaikgPT4gb2JqLmNvb3JkaW5hdGVJbmRleCk7XG5cbiAgICBpZiAobGVmdEluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKHRvcEluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCB0b3BMZWZ0SW5kZXggPSB2YWxpZEFkamFjZW50SW5kZXhJbk9ialt0b3BJbmRleF0uY29vcmRpbmF0ZUluZGV4IC0gMTtcbiAgICAgICAgbmVhcmVzdENvb3JkLnB1c2godG9wTGVmdEluZGV4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJvdHRvbUluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBib3R0b21MZWZ0SW5kZXggPSB2YWxpZEFkamFjZW50SW5kZXhJbk9ialtib3R0b21JbmRleF0uY29vcmRpbmF0ZUluZGV4IC0gMTtcbiAgICAgICAgbmVhcmVzdENvb3JkLnB1c2goYm90dG9tTGVmdEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmlnaHRJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmICh0b3BJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdG9wUmlnaHRJbmRleCA9IHZhbGlkQWRqYWNlbnRJbmRleEluT2JqW3RvcEluZGV4XS5jb29yZGluYXRlSW5kZXggKyAxO1xuICAgICAgICBuZWFyZXN0Q29vcmQucHVzaCh0b3BSaWdodEluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmIChib3R0b21JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgYm90dG9tUmlnaHRJbmRleCA9IHZhbGlkQWRqYWNlbnRJbmRleEluT2JqW2JvdHRvbUluZGV4XS5jb29yZGluYXRlSW5kZXggKyAxO1xuICAgICAgICBuZWFyZXN0Q29vcmQucHVzaChib3R0b21SaWdodEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmVhcmVzdENvb3JkO1xuICB9O1xuXG4gIGNvbnN0IHNldFNoaXAgPSAoc2hpcFRlbXBsYXRlLCBjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKHNoaXBUZW1wbGF0ZS5pZCAhPT0gaWQpIHJldHVybjtcblxuICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBUZW1wbGF0ZS5sZW4sIGNvb3JkaW5hdGUpO1xuICAgIGNvbnN0IHNoaXBMZW4gPSBzaGlwLmxlbigpO1xuXG4gICAgbGV0IGNvb3JkaW5hdGVJbmRleCA9IGdldENvb3JkaW5hdGVJbmRleChjb29yZGluYXRlKTtcblxuICAgIGlmICghaXNSaWdodENvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlSW5kZXgsIGNvb3JkaW5hdGVJbmRleCArIHNoaXBMZW4gLSAxKSkgcmV0dXJuO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsZXQgaW5kZXggPSBjb29yZGluYXRlSW5kZXg7XG5cbiAgICB3aGlsZSAoY291bnQgPCBzaGlwTGVuKSB7XG4gICAgICBjb25zdCBjZWxsID0gYm9hcmRbaW5kZXhdO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGNlbGwuZ2V0U2hpcCgpIHx8XG4gICAgICAgIGlzSW50ZXJTZWN0aW9uKGluZGV4KS5zb21lKChpbmRleENvb3JkKSA9PiBib2FyZFtpbmRleENvb3JkXS5nZXRTaGlwKCkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY291bnQrKztcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgY291bnQgPSAwO1xuICAgIGluZGV4ID0gY29vcmRpbmF0ZUluZGV4O1xuXG4gICAgd2hpbGUgKGNvdW50IDwgc2hpcExlbikge1xuICAgICAgYm9hcmRbaW5kZXhdLnNldFNoaXAoc2hpcCk7XG4gICAgICBjb3VudCsrO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBoaXRDb29yZGluYXRlID0gY29vcmRpbmF0ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwID0gKGNvb3JkaW5hdGUpID0+IGJvYXJkW2dldENvb3JkaW5hdGVJbmRleChjb29yZGluYXRlKV0uZ2V0U2hpcCgpO1xuXG4gIGNvbnN0IHN3aXRjaFNoaXBBeGlzID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBjb29yZGluYXRlSW5kZXggPSBnZXRDb29yZGluYXRlSW5kZXgoY29vcmRpbmF0ZSk7XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkW2Nvb3JkaW5hdGVJbmRleF0uZ2V0U2hpcCgpO1xuXG4gICAgaWYgKCFzaGlwKSByZXR1cm47XG5cbiAgICBjb25zdCBzaGlwTGVuID0gc2hpcC5sZW4oKTtcbiAgICBzaGlwLnN3aXRjaEF4aXMoKTtcbiAgICBjb25zdCBheGlzID0gc2hpcC5nZXRBeGlzKCk7XG5cbiAgICBpZiAoIWlzQm90dG9tQ29vcmRpbmF0ZVZhbGlkKGNvb3JkaW5hdGVJbmRleCArIHNoaXBMZW4gKiAxMCkpIHJldHVybjtcblxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IG9sZEluZGV4ID0gY29vcmRpbmF0ZUluZGV4O1xuICAgIGxldCBuZXdJbmRleCA9IGNvb3JkaW5hdGVJbmRleDtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgY291bnQgPSAwO1xuICAgICAgb2xkSW5kZXggPSBjb29yZGluYXRlSW5kZXg7XG4gICAgICBuZXdJbmRleCA9IGNvb3JkaW5hdGVJbmRleDtcbiAgICB9O1xuXG4gICAgY29uc3QgdGVtcFJlbW92ZVNoaXAgPSBbXTtcbiAgICB3aGlsZSAoY291bnQgPCBzaGlwTGVuKSB7XG4gICAgICBjb25zdCBvbGRDZWxsID0gYm9hcmRbb2xkSW5kZXhdO1xuICAgICAgdGVtcFJlbW92ZVNoaXAucHVzaCh7IHNoaXA6IG9sZENlbGwucmVtb3ZlU2hpcCgpLCBvbGRJbmRleCB9KTtcblxuICAgICAgY291bnQrKztcbiAgICAgIGF4aXMgPT09ICd4QXhpcycgPyAob2xkSW5kZXggKz0gMTApIDogb2xkSW5kZXgrKztcbiAgICB9XG5cbiAgICByZXNldCgpO1xuXG4gICAgd2hpbGUgKGNvdW50IDwgc2hpcExlbikge1xuICAgICAgY29uc3QgbmV3Q2VsbCA9IGJvYXJkW25ld0luZGV4XTtcblxuICAgICAgaWYgKFxuICAgICAgICBuZXdDZWxsLmdldFNoaXAoKSB8fFxuICAgICAgICBpc0ludGVyU2VjdGlvbihuZXdJbmRleCkuc29tZSgoaW5kZXhDb29yZCkgPT4gYm9hcmRbaW5kZXhDb29yZF0uZ2V0U2hpcCgpKVxuICAgICAgKSB7XG4gICAgICAgIHRlbXBSZW1vdmVTaGlwLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgICAgIGJvYXJkW29iai5vbGRJbmRleF0uc2V0U2hpcChvYmouc2hpcCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvdW50Kys7XG4gICAgICBheGlzID09PSAneEF4aXMnID8gbmV3SW5kZXgrKyA6IChuZXdJbmRleCArPSAxMCk7XG4gICAgfVxuXG4gICAgcmVzZXQoKTtcblxuICAgIHRlbXBSZW1vdmVTaGlwLmZvckVhY2goKG9iaiwgaW5kKSA9PiB7XG4gICAgICBpZiAoaW5kID09PSAwKSB7XG4gICAgICAgIG5ld0luZGV4ID0gb2JqLm9sZEluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGF4aXMgPT09ICd4QXhpcycpIHtcbiAgICAgICAgICBuZXdJbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0luZGV4ICs9IDEwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJvYXJkW25ld0luZGV4XS5zZXRTaGlwKG9iai5zaGlwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVJbmRleCA9IGdldENvb3JkaW5hdGVJbmRleChjb29yZGluYXRlKTtcbiAgICBjb25zdCBjZWxsID0gYm9hcmRbY29vcmRpbmF0ZUluZGV4XTtcblxuICAgIGlmICghY2VsbCkgcmV0dXJuO1xuXG4gICAgaWYgKCFjZWxsLmlzQ2VsbEhpdCgpKSB7XG4gICAgICBjZWxsSW5PcmRlck9mSGl0LnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICBjZWxsLmhpdENlbGwoKTtcbiAgICAgIGNvbnN0IHNoaXAgPSBjZWxsLmdldFNoaXAoKTtcbiAgICAgIGlmIChzaGlwKSB7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBpc1JpZ2h0Q29vcmRpbmF0ZVZhbGlkID0gKGNvb3JkaW5hdGVJbmRleCwgcmlnaHRDb29yZGluYXRlSW5kZXgpID0+IHtcbiAgICBpZiAocmlnaHRDb29yZGluYXRlSW5kZXggPj0gMTAwKSByZXR1cm47XG4gICAgcmV0dXJuIChcbiAgICAgIGJvYXJkW2Nvb3JkaW5hdGVJbmRleF0uZ2V0Q29vcmRpbmF0ZSgpWzBdID09PSBib2FyZFtyaWdodENvb3JkaW5hdGVJbmRleF0uZ2V0Q29vcmRpbmF0ZSgpWzBdXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBpc0JvdHRvbUNvb3JkaW5hdGVWYWxpZCA9IChib3R0b21Db29yZGluYXRlSW5kZXgpID0+IGJvdHRvbUNvb3JkaW5hdGVJbmRleCA8IDEwMDtcblxuICBjb25zdCBnZXRWYWxpZEFkamFjZW50Q29vcmRpbmF0ZUluT2JqID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBjb29yZGluYXRlSW5kZXggPSBOdW1iZXIuaXNJbnRlZ2VyKGNvb3JkaW5hdGUpXG4gICAgICA/IGNvb3JkaW5hdGVcbiAgICAgIDogZ2V0Q29vcmRpbmF0ZUluZGV4KGNvb3JkaW5hdGUpO1xuXG4gICAgY29uc3QgbGVmdENvb3JkaW5hdGVJbmRleCA9IGNvb3JkaW5hdGVJbmRleCAtIDE7XG4gICAgY29uc3QgdG9wQ29vcmRpbmF0ZUluZGV4ID0gY29vcmRpbmF0ZUluZGV4IC0gMTA7XG4gICAgY29uc3QgcmlnaHRDb29yZGluYXRlSW5kZXggPSBjb29yZGluYXRlSW5kZXggKyAxO1xuICAgIGNvbnN0IGJvdHRvbUNvb3JkaW5hdGVJbmRleCA9IGNvb3JkaW5hdGVJbmRleCArIDEwO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgY29vcmRpbmF0ZUluZGV4OiBsZWZ0Q29vcmRpbmF0ZUluZGV4LFxuICAgICAgICBkaXI6ICdsZWZ0JyxcbiAgICAgICAgaXNWYWxpZDpcbiAgICAgICAgICBsZWZ0Q29vcmRpbmF0ZUluZGV4ID49IDAgJiZcbiAgICAgICAgICArYm9hcmRbbGVmdENvb3JkaW5hdGVJbmRleF0uZ2V0Q29vcmRpbmF0ZSgpWzFdIDxcbiAgICAgICAgICAgICtib2FyZFtjb29yZGluYXRlSW5kZXhdLmdldENvb3JkaW5hdGUoKVsxXSxcbiAgICAgIH0sXG4gICAgICB7IGNvb3JkaW5hdGVJbmRleDogdG9wQ29vcmRpbmF0ZUluZGV4LCBkaXI6ICd0b3AnLCBpc1ZhbGlkOiB0b3BDb29yZGluYXRlSW5kZXggPj0gMCB9LFxuICAgICAge1xuICAgICAgICBjb29yZGluYXRlSW5kZXg6IHJpZ2h0Q29vcmRpbmF0ZUluZGV4LFxuICAgICAgICBkaXI6ICdyaWdodCcsXG4gICAgICAgIGlzVmFsaWQ6IGlzUmlnaHRDb29yZGluYXRlVmFsaWQoY29vcmRpbmF0ZUluZGV4LCByaWdodENvb3JkaW5hdGVJbmRleCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb29yZGluYXRlSW5kZXg6IGJvdHRvbUNvb3JkaW5hdGVJbmRleCxcbiAgICAgICAgZGlyOiAnYm90dG9tJyxcbiAgICAgICAgaXNWYWxpZDogaXNCb3R0b21Db29yZGluYXRlVmFsaWQoYm90dG9tQ29vcmRpbmF0ZUluZGV4KSxcbiAgICAgIH0sXG4gICAgXVxuICAgICAgLmZpbHRlcigoY29vcmRPYmopID0+IGNvb3JkT2JqLmlzVmFsaWQpXG4gICAgICAuZmlsdGVyKChjb29yZE9iaikgPT4gIWdldEJvYXJkKClbY29vcmRPYmouY29vcmRpbmF0ZUluZGV4XS5pc0NlbGxIaXQoKSlcbiAgICAgIC5tYXAoKGNvb3JkT2JqKSA9PiB7XG4gICAgICAgIGNvb3JkT2JqLmF4aXMgPSBjb29yZE9iai5kaXIgPT09ICd0b3AnIHx8IGNvb3JkT2JqLmRpciA9PT0gJ2JvdHRvbScgPyAneUF4aXMnIDogJ3hBeGlzJztcbiAgICAgICAgY29vcmRPYmouY29vcmRpbmF0ZSA9IGdldENvb3JkaW5hdGUoY29vcmRPYmouY29vcmRpbmF0ZUluZGV4KTtcbiAgICAgICAgcmV0dXJuIGNvb3JkT2JqO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsaWRBZGphY2VudEluZGV4ID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICByZXR1cm4gZ2V0VmFsaWRBZGphY2VudENvb3JkaW5hdGVJbk9iaihjb29yZGluYXRlKS5tYXAoKGNvb3JkT2JqKSA9PiBjb29yZE9iai5jb29yZGluYXRlSW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IHNldFNoaXBEeW5hbWljYWxseSA9ICgpID0+IHtcbiAgICBjb25zdCBhdmFpbGFibGVMZW4gPSBbNCwgMywgMywgMiwgMiwgMiwgMSwgMSwgMSwgMV07XG4gICAgY29uc3QgYWxsQ29vcmRpbmF0ZSA9IGdldEFsbENvb3JkaW5hdGUoKTtcblxuICAgIGNvbnN0IGlzU2hpcFNldCA9IChsZW4pID0+IHtcbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsQ29vcmRpbmF0ZS5sZW5ndGgpO1xuICAgICAgcmV0dXJuIHNldFNoaXAoeyBsZW4sIGlkOiAnY29tcHV0ZXInIH0sIGFsbENvb3JkaW5hdGVbcmFuZG9tSW5kZXhdKTtcbiAgICB9O1xuXG4gICAgd2hpbGUgKGF2YWlsYWJsZUxlbi5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGxlbiA9IGF2YWlsYWJsZUxlbi5zaGlmdCgpO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBpZiAoaXNTaGlwU2V0KGxlbikpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVPZlNoaXAoKVxuICAgICAgLnNsaWNlKDIpXG4gICAgICAuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBzd2l0Y2hTaGlwQXhpcyhjb29yZGluYXRlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGlzQWxsU2hpcFN1bmsgPSAoKSA9PiB7XG4gICAgY29uc3QgY2VsbFdpdGhTaGlwID0gYm9hcmQuZmlsdGVyKChjZWxsKSA9PiBjZWxsLmdldFNoaXAoKSk7XG4gICAgcmV0dXJuIGNlbGxXaXRoU2hpcC5ldmVyeSgoY2VsbCkgPT4gY2VsbC5nZXRTaGlwKCkuaXNTdW5rKCkpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckFsbFNoaXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5uZXcgU2V0KGJvYXJkLmZpbHRlcigoY2VsbCkgPT4gY2VsbC5nZXRTaGlwKCkpLm1hcCgoY2VsbCkgPT4gY2VsbC5nZXRTaGlwKCkpKV07XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZU9mU2hpcCA9ICgpID0+IGZpbHRlckFsbFNoaXAoKS5tYXAoKHNoaXApID0+IHNoaXAuZ2V0Q29vcmRpbmF0ZSgpKTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gIGNvbnN0IGdldENlbGxJbk9yZGVyT2ZIaXQgPSAoKSA9PiBjZWxsSW5PcmRlck9mSGl0O1xuXG4gIGNvbnN0IGdldEFsbENvb3JkaW5hdGUgPSAoKSA9PiBib2FyZC5tYXAoKGNlbGwpID0+IGNlbGwuZ2V0Q29vcmRpbmF0ZSgpKTtcblxuICBjb25zdCBnZXRDb29yZGluYXRlID0gKGluZGV4KSA9PiBib2FyZFtpbmRleF0uZ2V0Q29vcmRpbmF0ZSgpO1xuXG4gIGNvbnN0IGdldElEID0gKCkgPT4gaWQ7XG5cbiAgY29uc3QgZ2V0SGl0Q2VsbENvb3JkaW5hdGUgPSAoKSA9PlxuICAgIGJvYXJkLmZpbHRlcigoY2VsbCkgPT4gY2VsbC5pc0NlbGxIaXQoKSkubWFwKChjZWxsKSA9PiBjZWxsLmdldENvb3JkaW5hdGUoKSk7XG5cbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgcGxheUFnYWluKCk7XG4gICAgYm9hcmQuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgY2VsbC5yZW1vdmVTaGlwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcGxheUFnYWluID0gKCkgPT4ge1xuICAgIGJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IHNoaXAgPSBjZWxsLmdldFNoaXAoKTtcbiAgICAgIGlmIChzaGlwKSB7XG4gICAgICAgIHNoaXAucmVzZXQoKTtcbiAgICAgIH1cbiAgICAgIGNlbGwucmVzZXRIaXQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpc0FsbFNoaXBTZXQgPSAoKSA9PlxuICAgIGZpbHRlckFsbFNoaXAoKS5yZWR1Y2UoKGN1ckxlbiwgc2hpcCkgPT4gY3VyTGVuICsgc2hpcC5sZW4oKSwgMCkgPT09IEFMTF9TSElQX0xFTjtcblxuICBjb25zdCBnZXRIaXRDb29yZGluYXRlID0gKCkgPT4gaGl0Q29vcmRpbmF0ZTtcblxuICByZXR1cm4ge1xuICAgIHNldFNoaXAsXG4gICAgZ2V0U2hpcCxcbiAgICBzd2l0Y2hTaGlwQXhpcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGdldEhpdENlbGxDb29yZGluYXRlLFxuICAgIHNldFNoaXBEeW5hbWljYWxseSxcbiAgICBpc0FsbFNoaXBTdW5rLFxuICAgIGdldENvb3JkaW5hdGUsXG4gICAgZ2V0Qm9hcmQsXG4gICAgZ2V0QWxsQ29vcmRpbmF0ZSxcbiAgICBnZXRIaXRDb29yZGluYXRlLFxuICAgIGdldENvb3JkaW5hdGVJbmRleCxcbiAgICBnZXRDZWxsSW5PcmRlck9mSGl0LFxuICAgIGdldFZhbGlkQWRqYWNlbnRJbmRleCxcbiAgICBnZXRWYWxpZEFkamFjZW50Q29vcmRpbmF0ZUluT2JqLFxuICAgIGdldENvb3JkaW5hdGVPZlNoaXAsXG4gICAgaXNBbGxTaGlwU2V0LFxuICAgIGdldElELFxuICAgIHJlc2V0LFxuICAgIHBsYXlBZ2FpbixcbiAgfTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNoaXBJbWcxIGZyb20gJy4vaW1ncy9zaGlwX2xlbjMuc3ZnJztcbmltcG9ydCBzaGlwSW1nMiBmcm9tICcuL2ltZ3Mvc2hpcF9sZW4yLnN2Zyc7XG5pbXBvcnQgcGlyYXRlU2hpcCBmcm9tICcuL2ltZ3MvcGlyYXRlX3NoaXAuc3ZnJztcbmltcG9ydCBzYWlsaW5nU2hpcCBmcm9tICcuL2ltZ3Mvc2FpbGluZ1NoaXAuc3ZnJztcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IHBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5XScpO1xuY29uc3QgcmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yZXNldF0nKTtcbmNvbnN0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXktYWdhaW5dJyk7XG5jb25zdCBnZW5lcmFsTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2lubmVyLW5hbWVdJyk7XG5cbmNvbnN0IHRvZ2dsZVBsYXllck9uZVNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2dnbGUtcGxheWVyLW9uZS1zaGlwXScpO1xuY29uc3QgdG9nZ2xlUGxheWVyVHdvU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZS1wbGF5ZXItdHdvLXNoaXBdJyk7XG5cbmNvbnN0IHBsYXllck9uZU1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXllci1vbmUtbXNnXScpO1xuY29uc3QgcGxheWVyVHdvTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheWVyLXR3by1tc2ddJyk7XG5cbmNvbnN0IHBsYXllcjFOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheWVyMU5hbWVdJyk7XG5jb25zdCBwbGF5ZXIyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXllcjJOYW1lXScpO1xuXG5jb25zdCBwbGF5ZXJPbmVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXllci1ib2FyZD1cIm9uZVwiXScpO1xuY29uc3QgcGxheWVyVHdvQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5ZXItYm9hcmQ9XCJ0d29cIl0nKTtcbmNvbnN0IHBsYXllckJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBsYXllci1ib2FyZF0nKTtcblxuY29uc3Qgc2VsZWN0X3BsYXllcjJfb3JfY29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWxlY3RfY29tcHV0ZXJfb3JfcGxheWVyMl0nKTtcbmNvbnN0IHBsYXllck9uZVNlbGVjdFNoaXBCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlbGVjdC1zaGlwLWJvYXJkPVwicGxheWVyT25lXCJdJyk7XG5jb25zdCBwbGF5ZXJUd29TZWxlY3RTaGlwQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWxlY3Qtc2hpcC1ib2FyZD1cInBsYXllclR3b1wiXScpO1xuY29uc3Qgc2VsZWN0U2hpcEJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNlbGVjdC1zaGlwLWJvYXJkXScpO1xuY29uc3QgcGlyYXRlU2hpcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3Qgc2FpbGluZ1NoaXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGJnUGF0dGVybkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG5jb25zdCBzZWxlY3RTaGlwRGltID0gMjQwO1xuXG5jb25zdCBwbGF5ZXJPbmUgPSB7XG4gIGJvYXJkOiBHYW1lQm9hcmQoY3J5cHRvLnJhbmRvbVVVSUQoKSksXG59O1xuXG5jb25zdCBwbGF5ZXJUd28gPSB7XG4gIGJvYXJkOiBHYW1lQm9hcmQoY3J5cHRvLnJhbmRvbVVVSUQoKSksXG59O1xuXG5jb25zdCBjb21wdXRlciA9IHtcbiAgYm9hcmQ6IEdhbWVCb2FyZCgnY29tcHV0ZXInKSxcbn07XG5cbmNvbnN0IHBsYXllck9uZUlEID0gcGxheWVyT25lLmJvYXJkLmdldElEKCk7XG5jb25zdCBwbGF5ZXJUd29JRCA9IHBsYXllclR3by5ib2FyZC5nZXRJRCgpO1xuXG5wbGF5ZXJPbmVCb2FyZC5pZCA9IHBsYXllck9uZUlEO1xucGxheWVyVHdvQm9hcmQuaWQgPSBwbGF5ZXJUd29JRDtcblxuY29uc3Qgc2V0SW1nQmFja2dyb3VuZFRvQm9keSA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIHBpcmF0ZVNoaXBJbWcuY2xhc3NMaXN0LmFkZCgncGlyYXRlU2hpcCcpO1xuICBzYWlsaW5nU2hpcEltZy5jbGFzc0xpc3QuYWRkKCdzYWlsaW5nU2hpcCcpO1xuXG4gIHBpcmF0ZVNoaXBJbWcuc3JjID0gcGlyYXRlU2hpcDtcbiAgc2FpbGluZ1NoaXBJbWcuc3JjID0gc2FpbGluZ1NoaXA7XG5cbiAgYm9keS5hcHBlbmQocGlyYXRlU2hpcEltZywgc2FpbGluZ1NoaXBJbWcpO1xufTtcblxuY29uc3QgYXBwZW5kQ2VsbFRvU2VsZWN0U2hpcEJvYXJkID0gKHNlbGVjdFNoaXApID0+IHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgd2hpbGUgKGNvdW50IDwgMTAwKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LXNoaXAtY2VsbCcpO1xuICAgIHNlbGVjdFNoaXAuYXBwZW5kKGNlbGwpO1xuICAgIGNvdW50Kys7XG4gIH1cbn07XG5cbmNvbnN0IHNldERpbVRvU2VsZWN0U2hpcEJvYXJkID0gKHNlbGVjdFNoaXApID0+IHtcbiAgc2VsZWN0U2hpcC5zdHlsZS5taW5XaWR0aCA9IGAke3NlbGVjdFNoaXBEaW19cHhgO1xuICBzZWxlY3RTaGlwLnN0eWxlLm1pbkhlaWdodCA9IGAke3NlbGVjdFNoaXBEaW19cHhgO1xufTtcblxuc2VsZWN0U2hpcEJvYXJkcy5mb3JFYWNoKChzZWxlY3RTaGlwKSA9PiB7XG4gIHNldERpbVRvU2VsZWN0U2hpcEJvYXJkKHNlbGVjdFNoaXApO1xuICBhcHBlbmRDZWxsVG9TZWxlY3RTaGlwQm9hcmQoc2VsZWN0U2hpcCk7XG59KTtcblxuY29uc3Qgc2hpcFRlbXBsYXRlcyA9IFtcbiAgeyBsZW46IDQsIGluZDogMCwgc2hpcDogc2hpcEltZzEgfSxcbiAgeyBsZW46IDMsIGluZDogMjAsIHNoaXA6IHNoaXBJbWcxIH0sXG4gIHsgbGVuOiAzLCBpbmQ6IDI2LCBzaGlwOiBzaGlwSW1nMSB9LFxuICB7IGxlbjogMiwgaW5kOiA0MCwgc2hpcDogc2hpcEltZzIgfSxcbiAgeyBsZW46IDIsIGluZDogNDMsIHNoaXA6IHNoaXBJbWcyIH0sXG4gIHsgbGVuOiAyLCBpbmQ6IDQ2LCBzaGlwOiBzaGlwSW1nMiB9LFxuICB7IGxlbjogMSwgaW5kOiA2MCwgc2hpcDogc2hpcEltZzIgfSxcbiAgeyBsZW46IDEsIGluZDogNjMsIHNoaXA6IHNoaXBJbWcyIH0sXG4gIHsgbGVuOiAxLCBpbmQ6IDY2LCBzaGlwOiBzaGlwSW1nMiB9LFxuICB7IGxlbjogMSwgaW5kOiA2OSwgc2hpcDogc2hpcEltZzIgfSxcbl07XG5cbmNvbnN0IGFwcGVuZFNoaXBUZW1wbGF0ZU9uU2VsZWN0Qm9hcmQgPSAoc2VsZWN0Qm9hcmQsIHBsYXllcklEKSA9PiB7XG4gIHNoaXBUZW1wbGF0ZXMuZm9yRWFjaCgoc2hpcFRlbXBsYXRlKSA9PiB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IGNlbGwgPSBbLi4uc2VsZWN0Qm9hcmQuY2hpbGRyZW5dW3NoaXBUZW1wbGF0ZS5pbmRdO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdzaGlwSW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1sZW4nLCBzaGlwVGVtcGxhdGUubGVuKTtcbiAgICBpbWcuc3R5bGUubWluV2lkdGggPSBgJHsoc2VsZWN0U2hpcERpbSAvIDEwKSAqIHNoaXBUZW1wbGF0ZS5sZW59cHhgO1xuICAgIGltZy5zcmMgPSBzaGlwVGVtcGxhdGUuc2hpcDtcbiAgICBpbWcuaWQgPSBwbGF5ZXJJRDtcbiAgICBjZWxsLmFwcGVuZChpbWcpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFwcGVuZENlbGxUb0JvYXJkID0gKCkgPT4ge1xuICBwbGF5ZXJPbmUuYm9hcmQuZ2V0QWxsQ29vcmRpbmF0ZSgpLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBjZWxsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbGxFbGVtLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1ib2FyZC1jZWxsJyk7XG4gICAgcGxheWVyQm9hcmRzLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgICBjb25zdCBjbG9uZUNlbGwgPSBjZWxsRWxlbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBjbG9uZUNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGUnLCBjb29yZGluYXRlKTtcbiAgICAgIGJvYXJkLmFwcGVuZChjbG9uZUNlbGwpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHRvZ2dsZVNoaXBEaXNwbGF5KGJvYXJkKSB7XG4gIGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxlbl0nKS5mb3JFYWNoKChzaGlwKSA9PiBzaGlwLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2liaWxpdHlIaWRkZW4nKSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvZ2dsZVBsYXllck9uZVNoaXAoKSB7XG4gIHRvZ2dsZVNoaXBEaXNwbGF5KHBsYXllck9uZUJvYXJkKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG9nZ2xlUGxheWVyVHdvU2hpcCgpIHtcbiAgdG9nZ2xlU2hpcERpc3BsYXkocGxheWVyVHdvQm9hcmQpO1xufVxuXG5mdW5jdGlvbiBTaGlwU2VsZWN0aW9uKCkge1xuICBsZXQgc2VsZWN0ZWRTaGlwID0gbnVsbDtcblxuICBmdW5jdGlvbiBzZWxlY3RTaGlwKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHNoaXAgPSBlLnRhcmdldDtcbiAgICBpZiAoc2hpcC5kYXRhc2V0Lmxlbikge1xuICAgICAgc2VsZWN0ZWRTaGlwID0gc2hpcDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRTZWxlY3RlZFNoaXAgPSAoKSA9PiBzZWxlY3RlZFNoaXA7XG5cbiAgY29uc3QgdW5zZWxlY3RTaGlwID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHsgc2VsZWN0U2hpcCwgZ2V0U2VsZWN0ZWRTaGlwLCB1bnNlbGVjdFNoaXAgfTtcbn1cblxuY29uc3Qgc2hpcFNlbCA9IFNoaXBTZWxlY3Rpb24oKTtcblxuZnVuY3Rpb24gc2V0Q29tcHV0ZXJTaGlwKCkge1xuICBjb21wdXRlci5ib2FyZC5zZXRTaGlwRHluYW1pY2FsbHkoKTtcblxuICBwbGF5ZXJUd29Cb2FyZC5pbm5lckhUTUwgPSAnJztcbiAgY29tcHV0ZXIuYm9hcmQuZ2V0Qm9hcmQoKS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY29uc3QgY2VsbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZWxsRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZScsIGNlbGwuZ2V0Q29vcmRpbmF0ZSgpKTtcbiAgICBjZWxsRWxlbS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItYm9hcmQtY2VsbCcpO1xuICAgIGlmIChjZWxsLmdldFNoaXAoKSkge1xuICAgICAgY2VsbEVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWxlbicsIGAke2NlbGwuZ2V0U2hpcCgpLmxlbigpfWApO1xuICAgIH1cbiAgICBwbGF5ZXJUd29Cb2FyZC5hcHBlbmQoY2VsbEVsZW0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGxheWVyMlNlbGVjdFNoaXBCb2FyZCgpIHtcbiAgY29uc3QgaW5wQ2hlY2tQbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbnAtY2hlY2stcGxheWVyXTpjaGVja2VkJyk7XG5cbiAgaWYgKGlucENoZWNrUGxheWVyLmlkID09PSAnY29tcHV0ZXInKSB7XG4gICAgcGxheWVyVHdvU2VsZWN0U2hpcEJvYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfSBlbHNlIHBsYXllclR3b1NlbGVjdFNoaXBCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cbiAgZ2FtZS5yZXNldCgpO1xufVxuXG5jb25zdCByZW1vdmVTaGlwID0gKGNlbGxFbGVtKSA9PiB7XG4gIGNvbnN0IHNoaXAgPSBjZWxsRWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sZW5dJyk7XG4gIGlmIChzaGlwKSBzaGlwLnJlbW92ZSgpO1xufTtcblxuY29uc3QgcmVtb3ZlQXR0YWNrQ2VsbCA9IChjZWxsRWxlbSkgPT4ge1xuICBjb25zdCBhdHRhY2tDZWxsU3RhdHVzID0gY2VsbEVsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtaGl0LXN0YXR1c10nKTtcbiAgaWYgKGF0dGFja0NlbGxTdGF0dXMpIHtcbiAgICBhdHRhY2tDZWxsU3RhdHVzLnJlbW92ZSgpO1xuICB9XG59O1xuXG5jb25zdCByZXNldFNlbGVjdFNoaXBCb2FyZFR3byA9ICgpID0+IHtcbiAgWy4uLlsuLi5zZWxlY3RTaGlwQm9hcmRzXVsxXS5jaGlsZHJlbl0uZm9yRWFjaChyZW1vdmVTaGlwKTtcbiAgYXBwZW5kU2hpcFRlbXBsYXRlT25TZWxlY3RCb2FyZChwbGF5ZXJUd29TZWxlY3RTaGlwQm9hcmQsIHBsYXllclR3b0lEKTtcbn07XG5cbmNvbnN0IHJlc2V0U2VsZWN0U2hpcEJvYXJkT25lID0gKCkgPT4ge1xuICBbLi4uWy4uLnNlbGVjdFNoaXBCb2FyZHNdWzBdLmNoaWxkcmVuXS5mb3JFYWNoKHJlbW92ZVNoaXApO1xuICBhcHBlbmRTaGlwVGVtcGxhdGVPblNlbGVjdEJvYXJkKHBsYXllck9uZVNlbGVjdFNoaXBCb2FyZCwgcGxheWVyT25lSUQpO1xufTtcblxuY29uc3QgcmVtb3ZlQXR0YWNrQ2VsbE1hcmsgPSAoKSA9PiB7XG4gIHBsYXllckJvYXJkcy5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgIFsuLi5ib2FyZC5jaGlsZHJlbl0uZm9yRWFjaChyZW1vdmVBdHRhY2tDZWxsKTtcbiAgfSk7XG59O1xuXG5jb25zdCByZW1vdmVTaGlwRnJvbVBsYXllck9uZUJvYXJkID0gKCkgPT4ge1xuICBbLi4ucGxheWVyT25lQm9hcmQuY2hpbGRyZW5dLmZvckVhY2gocmVtb3ZlU2hpcCk7XG59O1xuXG5jb25zdCByZW1vdmVTaGlwT25Gcm9tUGxheWVyVHdvQm9hcmQgPSAoKSA9PiB7XG4gIFsuLi5wbGF5ZXJUd29Cb2FyZC5jaGlsZHJlbl0uZm9yRWFjaChyZW1vdmVTaGlwKTtcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc2V0U2VsZWN0U2hpcEJvYXJkVHdvKGUpIHtcbiAgY29uc3QgY2hlY2tQbGF5ZXIgPSBlLnRhcmdldC5kYXRhc2V0LmlucENoZWNrUGxheWVyO1xuXG4gIGlmICghY2hlY2tQbGF5ZXIpIHJldHVybjtcblxuICBpZiAoY2hlY2tQbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcbiAgICByZXNldFNlbGVjdFNoaXBCb2FyZFR3bygpO1xuICAgIFsuLi5wbGF5ZXJUd29Cb2FyZC5jaGlsZHJlbl0uZm9yRWFjaChyZW1vdmVTaGlwKTtcbiAgfVxuICB0b2dnbGVQbGF5ZXIyU2VsZWN0U2hpcEJvYXJkKCk7XG59XG5cbmNvbnN0IGZpbHRlckNlbGxXaXRoU2hpcCA9IChjZWxsRWxlbSkgPT4ge1xuICByZXR1cm4gY2VsbEVsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtbGVuXScpO1xufTtcblxuY29uc3QgbWFrZVBvaW50ZXJOb25lID0gKGNlbGxFbGVtKSA9PiB7XG4gIGNlbGxFbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxlbl0nKS5jbGFzc0xpc3QuYWRkKCdwb2ludGVyRXZlbnROb25lJyk7XG59O1xuXG5jb25zdCBtYWtlSW5wUmVhZE9ubHkgPSAoKSA9PiB7XG4gIFtwbGF5ZXIxTmFtZSwgcGxheWVyMk5hbWVdLmZvckVhY2goKG5hbWUpID0+IChuYW1lLnJlYWRPbmx5ID0gdHJ1ZSkpO1xufTtcblxuY29uc3QgbWFrZVJlYWRPbmx5RnJvbUlucCA9ICgpID0+IHtcbiAgW3BsYXllcjFOYW1lLCBwbGF5ZXIyTmFtZV0uZm9yRWFjaCgobmFtZSkgPT4gKG5hbWUucmVhZE9ubHkgPSBmYWxzZSkpO1xufTtcblxuY29uc3QgdG9nZ2xlUGxheWVyTXNnID0gKHBsYXllck1zZykgPT4ge1xuICBwbGF5ZXJNc2cuY2xhc3NMaXN0LnJlbW92ZSgnc2NhbGVUbzAnKTtcbiAgc2V0VGltZW91dCgoKSA9PiBwbGF5ZXJNc2cuY2xhc3NMaXN0LmFkZCgnc2NhbGVUbzAnKSwgMjAwMCk7XG59O1xuXG5jb25zdCB0b2dnbGVQbGF5ZXJPbmVNc2cgPSAobXNnKSA9PiB7XG4gIHBsYXllck9uZU1zZy50ZXh0Q29udGVudCA9IG1zZztcbiAgdG9nZ2xlUGxheWVyTXNnKHBsYXllck9uZU1zZyk7XG59O1xuXG5jb25zdCB0b2dnbGVQbGF5ZXJUd29Nc2cgPSAobXNnKSA9PiB7XG4gIHBsYXllclR3b01zZy50ZXh0Q29udGVudCA9IG1zZztcbiAgdG9nZ2xlUGxheWVyTXNnKHBsYXllclR3b01zZyk7XG59O1xuXG5jb25zdCBzZXRQbGF5ZXJUdXJuTXNnID0gKG1zZykgPT4ge1xuICBnZW5lcmFsTXNnLnRleHRDb250ZW50ID0gYCR7bXNnfSB0dXJuYDtcbn07XG5cbmZ1bmN0aW9uIEdhbWUoKSB7XG4gIGxldCBpc0J0dywgcGxheWVyLCB3aW5uZXIsIGdhbWVTdGFydDtcblxuICBjb25zdCBwbGF5ZXJJbmZvID0ge1xuICAgIHBsYXllck9uZTogcGxheWVyT25lLmJvYXJkLFxuICAgIHBsYXllck9uZU5hbWU6ICdQbGF5ZXIgMScsXG4gIH07XG5cbiAgY29uc3QgaHVtYW5BbmRDb21wdXRlciA9IHtcbiAgICBhdHRhY2tTaGlwKGNlbGwsIGNvb3JkaW5hdGUpIHtcbiAgICAgIGNvbnN0IGJvYXJkRWxlbUlEID0gY2VsbC5jbG9zZXN0KCdbZGF0YS1wbGF5ZXItYm9hcmRdJykuaWQ7XG5cbiAgICAgIGlmIChib2FyZEVsZW1JRCA9PT0gcGxheWVyT25lSUQpIHJldHVybjtcblxuICAgICAgbGV0IGF0dGFja1N0YXRlID0gcGxheWVyLmh1bWFuVHVybihjb29yZGluYXRlKTtcblxuICAgICAgaWYgKCFhdHRhY2tTdGF0ZSkge1xuICAgICAgICB0b2dnbGVQbGF5ZXJPbmVNc2coJ0FscmVhZHkgaGl0Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1hcmtIaXRDZWxsKGNlbGwsIGF0dGFja1N0YXRlKTtcblxuICAgICAgaWYgKGF0dGFja1N0YXRlID09PSAnbWlzcycpIHtcbiAgICAgICAgc2V0UGxheWVyVHVybk1zZyhwbGF5ZXIuZ2V0UGxheWVyVHdvTmFtZSgpKTtcbiAgICAgICAgY29uc3QgaXNBbGxTaGlwU3VuayA9IHBsYXllci5jb21wdXRlclR1cm4oZmFsc2UsICdyYW5kb21JbmRleCcsIGNvbXB1dGVyVHVybkNiKTtcbiAgICAgICAgaWYgKGlzQWxsU2hpcFN1bmsgPT09ICdhbGxTdW5rJykge1xuICAgICAgICAgIHdpbm5lciA9IHBsYXllci5nZXRQbGF5ZXJUd29OYW1lKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29tcHV0ZXIuYm9hcmQuaXNBbGxTaGlwU3VuaygpKSB7XG4gICAgICAgICAgd2lubmVyID0gcGxheWVyLmdldFBsYXllck9uZU5hbWUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcGxheUFnYWluKCkge1xuICAgICAgY29tcHV0ZXIuYm9hcmQucGxheUFnYWluKCk7XG4gICAgfSxcblxuICAgIHJlc2V0KCkge1xuICAgICAgY29tcHV0ZXIuYm9hcmQucmVzZXQoKTtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGh1bWFuQW5kSHVtYW4gPSB7XG4gICAgYXR0YWNrU2hpcChjZWxsLCBjb29yZGluYXRlKSB7XG4gICAgICBjb25zdCBib2FyZEVsZW1JRCA9IGNlbGwuY2xvc2VzdCgnW2RhdGEtcGxheWVyLWJvYXJkXScpLmlkO1xuICAgICAgY29uc3QgYm9hcmRJRCA9IHBsYXllci5nZXRDdXJyZW50Qm9hcmRJRCgpO1xuXG4gICAgICBpZiAoYm9hcmRFbGVtSUQgIT09IGJvYXJkSUQpIHJldHVybjtcblxuICAgICAgY29uc3QgY3VycmVudEJvYXJkQXR0YWNrID0gcGxheWVyLmdldEN1cnJlbnRCb2FyZFRvQXR0YWNrKCk7XG4gICAgICBjb25zdCBhdHRhY2tTdGF0ZSA9IGN1cnJlbnRCb2FyZEF0dGFjay5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuXG4gICAgICBpZiAoIWF0dGFja1N0YXRlKSB7XG4gICAgICAgIGlmIChwbGF5ZXJPbmVJRCA9PT0gYm9hcmRJRCkge1xuICAgICAgICAgIHRvZ2dsZVBsYXllck9uZU1zZygnQWxyZWFkeSBoaXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2dnbGVQbGF5ZXJUd29Nc2coJ0FscmVhZHkgaGl0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBtYXJrSGl0Q2VsbChjZWxsLCBhdHRhY2tTdGF0ZSk7XG5cbiAgICAgIGlmIChhdHRhY2tTdGF0ZSA9PT0gJ21pc3MnKSB7XG4gICAgICAgIHBsYXllci5zd2l0Y2hCb2FyZElEKCk7XG4gICAgICAgIHBsYXllci5zd2l0Y2hCb2FyZCgpO1xuICAgICAgICBwbGF5ZXIuc3dpdGNoUGxheWVyTmFtZSgpO1xuICAgICAgICBzZXRQbGF5ZXJUdXJuTXNnKHBsYXllci5nZXRDdXJQbGF5ZXJOYW1lKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnRCb2FyZEF0dGFjay5pc0FsbFNoaXBTdW5rKCkpIHtcbiAgICAgICAgICB3aW5uZXIgPSBwbGF5ZXIuZ2V0Q3VyUGxheWVyTmFtZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHBsYXlBZ2FpbigpIHtcbiAgICAgIHBsYXllclR3by5ib2FyZC5wbGF5QWdhaW4oKTtcbiAgICB9LFxuXG4gICAgcmVzZXQoKSB7XG4gICAgICBwbGF5ZXJUd28uYm9hcmQucmVzZXQoKTtcbiAgICAgIHJlbW92ZVNoaXBPbkZyb21QbGF5ZXJUd29Cb2FyZCgpO1xuICAgICAgcmVzZXRTZWxlY3RTaGlwQm9hcmRUd28oKTtcbiAgICB9LFxuICB9O1xuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmIChnYW1lU3RhcnQpIHJldHVybjtcblxuICAgIG1ha2VJbnBSZWFkT25seSgpO1xuICAgIGNvbnN0IGlucENoZWNrUGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaW5wLWNoZWNrLXBsYXllcl06Y2hlY2tlZCcpO1xuXG4gICAgaWYgKGlucENoZWNrUGxheWVyLmlkID09PSAnY29tcHV0ZXInKSB7XG4gICAgICBpc0J0dyA9IGh1bWFuQW5kQ29tcHV0ZXI7XG4gICAgICBwbGF5ZXJJbmZvLnBsYXllclR3byA9IGNvbXB1dGVyLmJvYXJkO1xuICAgICAgcGxheWVySW5mby5wbGF5ZXJUd29OYW1lID0gJ0dyb2snO1xuXG4gICAgICBpZiAocGxheWVyMU5hbWUudmFsdWUudHJpbSgpICE9PSAnJykgcGxheWVySW5mby5wbGF5ZXJPbmVOYW1lID0gcGxheWVyMU5hbWUudmFsdWU7XG5cbiAgICAgIGlmICghcGxheWVyT25lLmJvYXJkLmlzQWxsU2hpcFNldCgpKSB7XG4gICAgICAgIHRvZ2dsZVBsYXllck9uZU1zZyhgJHtwbGF5ZXJJbmZvLnBsYXllck9uZU5hbWV9IHNldCBhbGwgeW91ciBTaGlwYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0Q29tcHV0ZXJTaGlwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQnR3ID0gaHVtYW5BbmRIdW1hbjtcblxuICAgICAgcGxheWVySW5mby5wbGF5ZXJUd28gPSBwbGF5ZXJUd28uYm9hcmQ7XG4gICAgICBwbGF5ZXJJbmZvLnBsYXllclR3b05hbWUgPSAnUGxheWVyIDInO1xuXG4gICAgICBpZiAoIXBsYXllck9uZS5ib2FyZC5pc0FsbFNoaXBTZXQoKSkge1xuICAgICAgICB0b2dnbGVQbGF5ZXJPbmVNc2coYCR7cGxheWVySW5mby5wbGF5ZXJPbmVOYW1lfSBzZXQgYWxsIHlvdXIgU2hpcGApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKCFwbGF5ZXJUd28uYm9hcmQuaXNBbGxTaGlwU2V0KCkpIHtcbiAgICAgICAgdG9nZ2xlUGxheWVyVHdvTXNnKGAke3BsYXllckluZm8ucGxheWVyVHdvTmFtZX0gc2V0IGFsbCB5b3VyIFNoaXBgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBbLi4ucGxheWVyVHdvQm9hcmQuY2hpbGRyZW5dLmZpbHRlcihmaWx0ZXJDZWxsV2l0aFNoaXApLmZvckVhY2gobWFrZVBvaW50ZXJOb25lKTtcbiAgICB9XG5cbiAgICBpZiAocGxheWVyMk5hbWUudmFsdWUudHJpbSgpICE9PSAnJykgcGxheWVySW5mby5wbGF5ZXJUd29OYW1lID0gcGxheWVyMk5hbWUudmFsdWU7XG5cbiAgICBwbGF5ZXIgPSBQbGF5ZXIocGxheWVySW5mbyk7XG5cbiAgICBbLi4ucGxheWVyT25lQm9hcmQuY2hpbGRyZW5dLmZpbHRlcihmaWx0ZXJDZWxsV2l0aFNoaXApLmZvckVhY2gobWFrZVBvaW50ZXJOb25lKTtcbiAgICBzZXRQbGF5ZXJUdXJuTXNnKHBsYXllci5nZXRQbGF5ZXJPbmVOYW1lKCkpO1xuICAgIGdhbWVTdGFydCA9IHRydWU7XG4gIH1cblxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xuICAgIHdpbm5lciA9IGZhbHNlO1xuICAgIGdhbWVTdGFydCA9IGZhbHNlO1xuICAgIGdlbmVyYWxNc2cuaW5uZXJIVE1MID0gJ/Cfjq8nO1xuICAgIHJlbW92ZUF0dGFja0NlbGxNYXJrKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGxheUFnYWluKCkge1xuICAgIGlmICghaXNCdHcpIHJldHVybjtcblxuICAgIGdhbWVTdGFydCA9IHRydWU7XG5cbiAgICBpc0J0dy5wbGF5QWdhaW4oKTtcbiAgICBwbGF5ZXJPbmUuYm9hcmQucGxheUFnYWluKCk7XG4gICAgcmVtb3ZlQXR0YWNrQ2VsbE1hcmsoKTtcbiAgICBnZW5lcmFsTXNnLnRleHRDb250ZW50ID0gJ0dhbWUgT25nb2luZyc7XG4gICAgcmVzZXRCb2FyZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaWYgKCFpc0J0dykgcmV0dXJuO1xuXG4gICAgaXNCdHcucmVzZXQoKTtcbiAgICBwbGF5ZXJPbmUuYm9hcmQucmVzZXQoKTtcblxuICAgIHJlbW92ZUF0dGFja0NlbGxNYXJrKCk7XG4gICAgcmVtb3ZlU2hpcEZyb21QbGF5ZXJPbmVCb2FyZCgpO1xuICAgIHJlc2V0U2VsZWN0U2hpcEJvYXJkT25lKCk7XG4gICAgbWFrZVJlYWRPbmx5RnJvbUlucCgpO1xuICAgIHJlc2V0Qm9hcmQoKTtcbiAgfVxuXG4gIGNvbnN0IG1hcmtIaXRDZWxsID0gKGNlbGxFbGVtLCBhdHRhY2tTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGF0dGFja0NlbGxTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhdHRhY2tDZWxsU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2F0dGFja0NlbGxTdGF0dXMnKTtcbiAgICBhdHRhY2tDZWxsU3RhdHVzLnNldEF0dHJpYnV0ZSgnZGF0YS1oaXQtc3RhdHVzJywgJycpO1xuICAgIGF0dGFja0NlbGxTdGF0dXMuaW5uZXJIVE1MID0gYXR0YWNrU3RhdGUgPT09ICdoaXQnID8gJ/CfkqUnIDogJ+KdjCc7XG4gICAgY2VsbEVsZW0uYXBwZW5kKGF0dGFja0NlbGxTdGF0dXMpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlXaW5uZXJNc2cgPSAod2lubmVyKSA9PiB7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgZ2VuZXJhbE1zZy50ZXh0Q29udGVudCA9IGAke3dpbm5lcn0gd29uYDtcbiAgICAgIGdhbWVTdGFydCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb21wdXRlclR1cm5DYiA9IChjb29yZGluYXRlLCBhdHRhY2tTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXJPbmVCb2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZGluYXRlPVwiJHtjb29yZGluYXRlfVwiXWApO1xuXG4gICAgaWYgKGF0dGFja1N0YXRlID09PSAnbWlzcycpIHtcbiAgICAgIHNldFBsYXllclR1cm5Nc2cocGxheWVyLmdldFBsYXllck9uZU5hbWUoKSk7XG4gICAgfVxuICAgIG1hcmtIaXRDZWxsKGNlbGwsIGF0dGFja1N0YXRlKTtcbiAgfTtcblxuICBmdW5jdGlvbiBhdHRhY2tTaGlwKGUpIHtcbiAgICBpZiAoIWdhbWVTdGFydCB8fCAhaXNCdHcpIHJldHVybjtcblxuICAgIGxldCBjZWxsID0gZS50YXJnZXQ7XG4gICAgY29uc3QgY29vcmRpbmF0ZSA9IGNlbGwuZGF0YXNldC5jb29yZGluYXRlO1xuXG4gICAgaXNCdHcuYXR0YWNrU2hpcChjZWxsLCBjb29yZGluYXRlKTtcbiAgICBkaXNwbGF5V2lubmVyTXNnKHdpbm5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTaGlwKGUpIHtcbiAgICBpZiAoZ2FtZVN0YXJ0KSByZXR1cm47XG5cbiAgICBjb25zdCBjZWxsID0gZS50YXJnZXQ7XG4gICAgY29uc3Qgc2hpcCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGJvYXJkRWxlbSA9IGNlbGwuY2xvc2VzdCgnW2RhdGEtcGxheWVyLWJvYXJkXScpO1xuICAgIGNvbnN0IGJvYXJkID0gYm9hcmRFbGVtLmRhdGFzZXQucGxheWVyQm9hcmQgPT09ICdvbmUnID8gcGxheWVyT25lLmJvYXJkIDogcGxheWVyVHdvLmJvYXJkO1xuICAgIGxldCBjb29yZGluYXRlID0gY2VsbC5kYXRhc2V0LmNvb3JkaW5hdGU7XG5cbiAgICBpZiAoc2hpcC5kYXRhc2V0Lmxlbikge1xuICAgICAgY29vcmRpbmF0ZSA9IHNoaXAuY2xvc2VzdCgnW2RhdGEtY29vcmRpbmF0ZV0nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZScpO1xuICAgICAgaWYgKGJvYXJkLnN3aXRjaFNoaXBBeGlzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb29yZGluYXRlKSB7XG4gICAgICBjb25zdCBzaGlwRWxlbSA9IHNoaXBTZWwuZ2V0U2VsZWN0ZWRTaGlwKCk7XG4gICAgICBpZiAoIXNoaXBFbGVtKSByZXR1cm47XG4gICAgICBjb25zdCBpZCA9IHNoaXBFbGVtLmlkO1xuICAgICAgY29uc3QgbGVuID0gK3NoaXBFbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1sZW4nKTtcblxuICAgICAgY29uc3QgaXNTaGlwU2V0ID0gYm9hcmQuc2V0U2hpcCh7IGlkLCBsZW4gfSwgY29vcmRpbmF0ZSk7XG4gICAgICBpZiAoaXNTaGlwU2V0KSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShwbGF5ZXJPbmVCb2FyZCkud2lkdGg7XG4gICAgICAgIHNoaXBFbGVtLnN0eWxlLm1pbldpZHRoID0gYCR7KCt3aWR0aC5yZXBsYWNlKC9bYS16XS9naSwgJycpIC8gMTApICogbGVufXB4YDtcbiAgICAgICAgY2VsbC5hcHBlbmQoc2hpcEVsZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlkID09PSBwbGF5ZXJPbmVJRCkge1xuICAgICAgICAgIHRvZ2dsZVBsYXllck9uZU1zZygnSW52YWxpZCBQb3NpdGlvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvZ2dsZVBsYXllclR3b01zZygnSW52YWxpZCBQb3NpdGlvbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgc2V0U2hpcCwgc3RhcnQsIHBsYXlBZ2FpbiwgcmVzZXQsIGF0dGFja1NoaXAgfTtcbn1cblxuY29uc3QgZ2FtZSA9IEdhbWUoKTtcblxuYXBwZW5kU2hpcFRlbXBsYXRlT25TZWxlY3RCb2FyZChwbGF5ZXJPbmVTZWxlY3RTaGlwQm9hcmQsIHBsYXllck9uZUlEKTtcbmFwcGVuZFNoaXBUZW1wbGF0ZU9uU2VsZWN0Qm9hcmQocGxheWVyVHdvU2VsZWN0U2hpcEJvYXJkLCBwbGF5ZXJUd29JRCk7XG5cbnNldEltZ0JhY2tncm91bmRUb0JvZHkoKTtcbmFwcGVuZENlbGxUb0JvYXJkKCk7XG50b2dnbGVQbGF5ZXIyU2VsZWN0U2hpcEJvYXJkKCk7XG5cbnNlbGVjdF9wbGF5ZXIyX29yX2NvbXB1dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZVJlc2V0U2VsZWN0U2hpcEJvYXJkVHdvKTtcblxucGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWUuc3RhcnQpO1xucmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lLnJlc2V0KTtcbnBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWUucGxheUFnYWluKTtcblxucGxheWVyT25lU2VsZWN0U2hpcEJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hpcFNlbC5zZWxlY3RTaGlwKTtcbnBsYXllclR3b1NlbGVjdFNoaXBCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNoaXBTZWwuc2VsZWN0U2hpcCk7XG5cbnBsYXllck9uZUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZS5zZXRTaGlwKTtcbnBsYXllclR3b0JvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZS5zZXRTaGlwKTtcblxucGxheWVyT25lQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lLmF0dGFja1NoaXApO1xucGxheWVyVHdvQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lLmF0dGFja1NoaXApO1xuXG50b2dnbGVQbGF5ZXJPbmVTaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9nZ2xlUGxheWVyT25lU2hpcCk7XG50b2dnbGVQbGF5ZXJUd29TaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9nZ2xlUGxheWVyVHdvU2hpcCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzaGlwU2VsLnVuc2VsZWN0U2hpcCgpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIoeyBwbGF5ZXJPbmUsIHBsYXllck9uZU5hbWUsIHBsYXllclR3bywgcGxheWVyVHdvTmFtZSB9KSB7XG4gIGNvbnN0IHN0YWNrID0gW107XG4gIGNvbnN0IGFsbENvb3JkaW5hdGUgPSBwbGF5ZXJUd28uZ2V0QWxsQ29vcmRpbmF0ZSgpO1xuXG4gIGNvbnN0IHBsYXllck9uZUlEID0gcGxheWVyT25lLmdldElEKCk7XG4gIGNvbnN0IHBsYXllclR3b0lEID0gcGxheWVyVHdvLmdldElEKCk7XG5cbiAgbGV0IHBsYXllcklEID0gcGxheWVyVHdvSUQ7XG4gIGxldCBib2FyZFRvQXR0YWNrID0gcGxheWVyVHdvO1xuICBsZXQgcGxheWVyTmFtZSA9IHBsYXllck9uZU5hbWU7XG5cbiAgY29uc3Qgc3dpdGNoUGxheWVyTmFtZSA9ICgpID0+IHtcbiAgICBwbGF5ZXJOYW1lID0gcGxheWVyTmFtZSA9PT0gcGxheWVyT25lTmFtZSA/IHBsYXllclR3b05hbWUgOiBwbGF5ZXJPbmVOYW1lO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaEJvYXJkSUQgPSAoKSA9PiB7XG4gICAgcGxheWVySUQgPSBwbGF5ZXJJRCA9PT0gcGxheWVyVHdvSUQgPyBwbGF5ZXJPbmVJRCA6IHBsYXllclR3b0lEO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaEJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkVG9BdHRhY2sgPSBib2FyZFRvQXR0YWNrID09PSBwbGF5ZXJUd28gPyBwbGF5ZXJPbmUgOiBwbGF5ZXJUd287XG4gIH07XG5cbiAgY29uc3QgZ2V0Q3VycmVudEJvYXJkSUQgPSAoKSA9PiBwbGF5ZXJJRDtcblxuICBjb25zdCBnZXRDdXJQbGF5ZXJOYW1lID0gKCkgPT4gcGxheWVyTmFtZTtcblxuICBjb25zdCBnZXRDdXJyZW50Qm9hcmRUb0F0dGFjayA9ICgpID0+IGJvYXJkVG9BdHRhY2s7XG5cbiAgY29uc3QgY29tcHV0ZXJTZW5kQXR0YWNrID0gKGNvb3JkaW5hdGVPYmosIG1vZGVLZXksIGNvbXB1dGVyVHVybkNiKSA9PiB7XG4gICAgbGV0IGlzU2hpcEhpdCA9IHBsYXllck9uZS5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVPYmouY29vcmRpbmF0ZSkgPT09ICdoaXQnO1xuXG4gICAgY29uc3QgYXR0YWNrU3RhdGUgPSBpc1NoaXBIaXQgPyAnaGl0JyA6ICdtaXNzJztcblxuICAgIGNvbXB1dGVyVHVybkNiKGNvb3JkaW5hdGVPYmouY29vcmRpbmF0ZSwgYXR0YWNrU3RhdGUpO1xuXG4gICAgYWxsQ29vcmRpbmF0ZS5zcGxpY2UoYWxsQ29vcmRpbmF0ZS5pbmRleE9mKGNvb3JkaW5hdGVPYmouY29vcmRpbmF0ZSksIDEpO1xuXG4gICAgaWYgKGlzU2hpcEhpdCkge1xuICAgICAgY29uc3QgYXJyT2ZDb29yZGluYXRlID0gc3RhY2suc2hpZnQoKTtcblxuICAgICAgY29uc3Qgc2hpcCA9IHBsYXllck9uZS5nZXRCb2FyZCgpW2Nvb3JkaW5hdGVPYmouY29vcmRpbmF0ZUluZGV4XS5nZXRTaGlwKCk7XG5cbiAgICAgIGNvbnN0IGhpdCA9IHNoaXAuZ2V0SGl0KCk7XG4gICAgICBjb25zdCBsZW4gPSBzaGlwLmxlbigpO1xuXG4gICAgICAvLyBXaGVuIGhpdCBpcyAyIHRoZW4gdGhlIGF4aXMgb2YgdGhlIHNoaXAgaXMgY2VydGFpbiwgc28gZmlsdGVyIHRoZSBwcmV2aW91cyBjb29yZGluYXRlIHRvIHRhcmdldCB0aGF0IGF4aXNcbiAgICAgIGlmIChoaXQgPT09IDIgJiYgbGVuID4gMikge1xuICAgICAgICBjb25zdCBjb29yZEF4aXNUb1RyeSA9IGFyck9mQ29vcmRpbmF0ZS5maWx0ZXIoKGNvb3JkKSA9PiBjb29yZC5heGlzID09PSBjb29yZGluYXRlT2JqLmF4aXMpO1xuXG4gICAgICAgIGlmIChjb29yZEF4aXNUb1RyeS5sZW5ndGgpIHtcbiAgICAgICAgICBzdGFjay51bnNoaWZ0KGNvb3JkQXhpc1RvVHJ5KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcnJPZkNvb3JkaW5hdGUpIHtcbiAgICAgICAgaWYgKGFyck9mQ29vcmRpbmF0ZS5sZW5ndGgpIHtcbiAgICAgICAgICBzdGFjay51bnNoaWZ0KGFyck9mQ29vcmRpbmF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgVmFsaWRBZGphY2VudENvb3JkaW5hdGVJbk9iaiA9IHBsYXllck9uZS5nZXRWYWxpZEFkamFjZW50Q29vcmRpbmF0ZUluT2JqKFxuICAgICAgICBjb29yZGluYXRlT2JqLmNvb3JkaW5hdGVJbmRleCxcbiAgICAgICk7XG5cbiAgICAgIC8vIFVzZSB0aGUgaGl0IGF4aXMgZnJvbSBwcmV2aW91cyBhdHRhY2sgdG8gZmlsdGVyIHRoZSBuZXh0IGF4aXMgdG8gYXR0YWNrXG4gICAgICBpZiAoaGl0ID4gMSAmJiBoaXQgPCBsZW4pIHtcbiAgICAgICAgY29uc3QgY29vcmRBeGlzVG9UcnkgPSBWYWxpZEFkamFjZW50Q29vcmRpbmF0ZUluT2JqLmZpbHRlcihcbiAgICAgICAgICAoY29vcmQpID0+IGNvb3JkLmF4aXMgPT09IGNvb3JkaW5hdGVPYmouYXhpcyxcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoY29vcmRBeGlzVG9UcnkubGVuZ3RoKSBzdGFjay51bnNoaWZ0KGNvb3JkQXhpc1RvVHJ5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChWYWxpZEFkamFjZW50Q29vcmRpbmF0ZUluT2JqLmxlbmd0aCkgc3RhY2sudW5zaGlmdChWYWxpZEFkamFjZW50Q29vcmRpbmF0ZUluT2JqKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllck9uZS5pc0FsbFNoaXBTdW5rKCkpIHJldHVybiAnYWxsU3Vuayc7XG4gICAgICBpZiAoY29tcHV0ZXJUdXJuKGZhbHNlLCBtb2RlS2V5LCBjb21wdXRlclR1cm5DYikpIHJldHVybiAnYWxsU3Vuayc7XG4gICAgfSBlbHNlIGlmIChzdGFja1swXSkge1xuICAgICAgaWYgKHN0YWNrWzBdLmxlbmd0aCA9PT0gMCkgc3RhY2suc2hpZnQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJUdXJuID0gKHByZWRpY3RhYmxlQ29vcmRpbmF0ZU9iaiwgbW9kZUtleSA9ICdyYW5kb21JbmRleCcsIGNvbXB1dGVyVHVybkNiKSA9PiB7XG4gICAgbGV0IGNvb3JkaW5hdGVPYmogPSBwcmVkaWN0YWJsZUNvb3JkaW5hdGVPYmo7XG5cbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgLy8gdHJ5IGFkamFjZW50IHNsb3RcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVUb1RyeSA9IHN0YWNrWzBdO1xuXG4gICAgICBjb25zdCBtb2RlID0ge1xuICAgICAgICBwcmVkaWN0YWJsZUluZGV4OiAoKSA9PiBjb29yZGluYXRlVG9UcnkubGVuZ3RoIC0gMSxcbiAgICAgICAgcmFuZG9tSW5kZXg6ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvb3JkaW5hdGVUb1RyeS5sZW5ndGgpLFxuICAgICAgfTtcbiAgICAgIGNvb3JkaW5hdGVPYmogPSBjb29yZGluYXRlVG9Ucnkuc3BsaWNlKG1vZGVbbW9kZUtleV0oKSwgMSlbMF07XG4gICAgfSBlbHNlIGlmICghcHJlZGljdGFibGVDb29yZGluYXRlT2JqKSB7XG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbENvb3JkaW5hdGUubGVuZ3RoKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBhbGxDb29yZGluYXRlW3JhbmRvbUluZGV4XS50b1N0cmluZygpO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZUluZGV4ID0gcGxheWVyT25lLmdldENvb3JkaW5hdGVJbmRleChjb29yZGluYXRlKTtcblxuICAgICAgY29vcmRpbmF0ZU9iaiA9IHsgY29vcmRpbmF0ZSwgY29vcmRpbmF0ZUluZGV4IH07XG4gICAgfVxuICAgIHJldHVybiBjb21wdXRlclNlbmRBdHRhY2soY29vcmRpbmF0ZU9iaiwgbW9kZUtleSwgY29tcHV0ZXJUdXJuQ2IpO1xuICB9O1xuXG4gIGNvbnN0IGh1bWFuVHVybiA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgcmV0dXJuIHBsYXllclR3by5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYXllck9uZU5hbWUgPSAoKSA9PiBwbGF5ZXJPbmVOYW1lO1xuXG4gIGNvbnN0IGdldFBsYXllclR3b05hbWUgPSAoKSA9PiBwbGF5ZXJUd29OYW1lO1xuXG4gIHJldHVybiB7XG4gICAgaHVtYW5UdXJuLFxuICAgIGNvbXB1dGVyVHVybixcbiAgICBzd2l0Y2hQbGF5ZXJOYW1lLFxuICAgIHN3aXRjaEJvYXJkLFxuICAgIHN3aXRjaEJvYXJkSUQsXG4gICAgZ2V0Q3VycmVudEJvYXJkVG9BdHRhY2ssXG4gICAgZ2V0Q3VyUGxheWVyTmFtZSxcbiAgICBnZXRDdXJyZW50Qm9hcmRJRCxcbiAgICBnZXRQbGF5ZXJPbmVOYW1lLFxuICAgIGdldFBsYXllclR3b05hbWUsXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCwgY29vcmRpbmF0ZSkge1xuICBsZXQgaGl0Q291bnQgPSAwO1xuICBsZXQgYXhpcyA9ICd4QXhpcyc7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdENvdW50Kys7XG4gIH07XG5cbiAgY29uc3QgZ2V0SGl0ID0gKCkgPT4gaGl0Q291bnQ7XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRDb3VudCA9PT0gbGVuZ3RoO1xuICB9O1xuXG4gIGNvbnN0IGxlbiA9ICgpID0+IGxlbmd0aDtcblxuICBjb25zdCBzd2l0Y2hBeGlzID0gKCkgPT4ge1xuICAgIGF4aXMgPSBheGlzID09PSAneEF4aXMnID8gJ3lBeGlzJyA6ICd4QXhpcyc7XG4gIH07XG5cbiAgY29uc3QgZ2V0QXhpcyA9ICgpID0+IGF4aXM7XG5cbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgaGl0Q291bnQgPSAwO1xuICAgIGF4aXMgPSAneEF4aXMnO1xuICB9O1xuXG4gIGNvbnN0IGdldENvb3JkaW5hdGUgPSAoKSA9PiBjb29yZGluYXRlO1xuXG4gIHJldHVybiB7IGhpdCwgZ2V0SGl0LCByZXNldCwgaXNTdW5rLCBsZW4sIGdldEF4aXMsIHN3aXRjaEF4aXMsIGdldENvb3JkaW5hdGUgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoY2FjaGVkTW9kdWxlLmVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGNhY2hlZE1vZHVsZS5lcnJvcjtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR0cnkge1xuXHRcdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0XHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdFx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0bW9kdWxlLmVycm9yID0gZTtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcImluZGV4LlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTUwMDczZmE5NmZjZWE0MDg5MjVcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJiYXR0bGVzaGlwOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzID0gMDtcbnZhciBibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkLCBmZXRjaFByaW9yaXR5KSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkLCBmZXRjaFByaW9yaXR5KSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly8gaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZXN1bHRzW2ldID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cykudGhlbihmdW5jdGlvbiAoKSB7fSk7XG59XG5cbmZ1bmN0aW9uIHVuYmxvY2soKSB7XG5cdGlmICgtLWJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0XHRcdHZhciBsaXN0ID0gYmxvY2tpbmdQcm9taXNlc1dhaXRpbmc7XG5cdFx0XHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxpc3RbaV0oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdC8qIGZhbGx0aHJvdWdoICovXG5cdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMrKztcblx0XHRcdHByb21pc2UudGhlbih1bmJsb2NrLCB1bmJsb2NrKTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuXHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nLnB1c2goZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShmbigpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG5cdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUucixcblx0XHRcdFx0XHRcdFx0dXBkYXRlLm0sXG5cdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlZE1vZHVsZXMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5jc3Ncblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHRcdFx0fSwgW10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1cyAoc3RhdGU6IFwiICtcblx0XHRcdFx0XHRjdXJyZW50U3RhdHVzICtcblx0XHRcdFx0XHRcIilcIlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cblx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcblx0fSk7XG5cdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG5cdHZhciBlcnJvcnMgPSByZXN1bHRzXG5cdFx0Lm1hcChmdW5jdGlvbiAocikge1xuXHRcdFx0cmV0dXJuIHIuZXJyb3I7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJhYm9ydFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yc1swXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuXHR2YXIgZGlzcG9zZVByb21pc2UgPSBzZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuXG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5kaXNwb3NlKSByZXN1bHQuZGlzcG9zZSgpO1xuXHR9KTtcblxuXHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG5cdHZhciBhcHBseVByb21pc2UgPSBzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cblx0dmFyIG9uQWNjZXB0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKFtkaXNwb3NlUHJvbWlzZSwgYXBwbHlQcm9taXNlXSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJmYWlsXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiaWRsZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRyZXN1bHRzXG5cdFx0XHQuZmlsdGVyKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdC5hcHBseTtcblx0XHRcdH0pXG5cdFx0XHQubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdC5hcHBseShyZXBvcnRFcnJvcik7XG5cdFx0XHR9KVxuXHQpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKGFwcGx5UmVzdWx0cykge1xuXHRcdFx0YXBwbHlSZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZXMpIHtcblx0XHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSlcblx0XHQudGhlbihvbkFjY2VwdGVkKTtcbn1cblxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9ICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmJhc2VVUkkpIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wIHx8IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSB7XG5cdGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QgPSB1cGRhdGVkTW9kdWxlc0xpc3Q7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlYmF0dGxlc2hpcFwiXSA9IChjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkgPT4ge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdHZhciByZXN1bHQgPSBuZXdNb2R1bGVGYWN0b3J5XG5cdFx0XHRcdD8gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKVxuXHRcdFx0XHQ6IHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdHZhciBhY2NlcHRQcm9taXNlcyA9IFtdO1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXIgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzLnB1c2goZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQgPSBjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZXJyb3JIYW5kbGVyc1trXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzW2tdKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdGFjY2VwdFByb21pc2VzLnB1c2gocmVzdWx0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgb25BY2NlcHRlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjEpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKGFjY2VwdFByb21pc2VzKVxuXHRcdFx0XHQudGhlbihvbkFjY2VwdGVkKVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdCFjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHRocm93IG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydDogbmVlZCBmZXRjaCBBUElcIik7XG5cdHJldHVybiBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYoKSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG5cdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=