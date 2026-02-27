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
  transition: 300ms;

  &:active {
    background-color: var(--transparent-black-lg);
  }
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*  =========== Reset =========  */\n/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n  margin: 0;\n}\n\nbody {\n  /* 3. Add accessible line-height */\n  line-height: 1.5;\n  /* 4. Improve text rendering */\n  -webkit-font-smoothing: antialiased;\n}\n\n/* 5. Improve media defaults */\nimg,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/* 6. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* 7. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* 8. Improve line wrapping */\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n/* font */\n@font-face {\n  font-family: Roboto;\n  src:\n    url(./fonts/Roboto-400.woff) format(woff),\n    url(./fonts/Pacifico-Regular.woff2) format(woff2);\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: Pacifico;\n  src:\n    url(./fonts/Pacifico-Regular.woff) format(woff),\n    url(./fonts/Pacifico-Regular.woff2) format(woff2);\n  font-style: normal;\n  font-weight: normal;\n  font-display: swap;\n}\n\n:root {\n  --pri-accent: rgb(217, 176, 13);\n  --sec-accent: rgb(131, 127, 83);\n  --ter-accent: rgb(60, 70, 4);\n  --white: rgb(255, 255, 255);\n  --black: rgb(0, 0, 0);\n  --error-transparent: rgba(249, 12, 12, 0.2);\n  --error: rgba(249, 12, 12);\n\n  --transparent-white-xsm: rgba(255, 255, 255, 0.8);\n  --transparent-white-sm: rgba(255, 255, 255, 0.5);\n  --transparent-white-lg: rgba(255, 255, 255, 0.2);\n\n  --transparent-black-xsm: rgba(0, 0, 0, 0.8);\n  --transparent-black-sm: rgba(0, 0, 0, 0.5);\n  --transparent-black-lg: rgba(0, 0, 0, 0.2);\n\n  --sz-xxxsm: 1px;\n  --sz-xxsm: 2px;\n  --sz-xsm: 5px;\n  --sz-sm: 10px;\n  --sz-lg: 20px;\n  --sz-xlg: 30px;\n  --sz-xxlg: 60px;\n\n  --bx-shadow: 0.5px 0.5px 5px var(--transparent-black-lg);\n}\n\nbody {\n  font-family: Roboto, arial;\n  font-size: clamp(var(--sz-sm), var(--sz-sm) + 0.5vw, var(--sz-sm) + var(--sz-xsm));\n  color: var(--white);\n  position: relative;\n  perspective: 300px;\n  background: var(--ter-accent);\n}\n\n.container {\n  max-width: 700px;\n  padding: 0 var(--sz-lg);\n  margin: 0 auto 0;\n  min-height: 100vh;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  row-gap: var(--sz-sm);\n  align-items: center;\n  padding: var(--sz-lg) 0;\n}\n\n.game-title {\n  font-family: Pacifico, Arial, Helvetica, sans-serif;\n  color: var(--transparent-white-xsm);\n}\n\n@keyframes toAndFro {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(-70%);\n  }\n}\n\n.pirateShip {\n  position: absolute;\n  opacity: 0.2;\n  bottom: 0;\n  animation: toAndFro 5000ms infinite alternate;\n}\n\n.sailingShip {\n  position: absolute;\n  opacity: 0.2;\n  top: -400px;\n  right: -130px;\n  transform: scale(0.2);\n}\n\n.howToSetShipInstruction {\n  color: var(--transparent-white-xsm);\n}\n\n.human {\n  font-weight: 900;\n}\n\n.boards-section {\n  border: var(--sz-lg) solid var(--pri-accent);\n  box-shadow: var(--bx-shadow);\n  height: 640px;\n  min-width: 320px;\n  display: grid;\n  grid-template-rows: 1fr max-content 1fr;\n  position: relative;\n}\n\n.hide-player-ship {\n  position: absolute;\n  color: var(--black);\n  transform: translateX(-50%);\n  text-wrap: nowrap;\n  cursor: pointer;\n}\n\n.toggle-player-one-ship {\n  top: 0;\n  left: 50%;\n  top: -20px;\n}\n\n.toggle-player-two-ship {\n  bottom: -20px;\n  left: 50%;\n}\n\n.select-ship {\n  display: flex;\n  flex-wrap: wrap;\n  border-left: var(--sz-xxsm) solid var(--transparent-black-lg);\n  border: var(--sz-xsm) solid var(--pri-accent);\n  box-shadow: var(--bx-shadow);\n  background-color: var(--sec-accent);\n}\n\n.select-ship-cell {\n  min-width: calc(100% / 10);\n  min-height: calc(100% / 10);\n  border: var(--sz-xxxsm) solid var(--transparent-white-sm);\n  position: relative;\n}\n\n.select-ship-cell:nth-child(1n + 7) {\n  border-top: none;\n  border-top: none;\n}\n\n.select-ship-cell:nth-child(1n + 1) {\n  border-left: none;\n}\n\n.shipImg {\n  position: absolute;\n  z-index: 90;\n  bottom: 0;\n  transform-origin: 0;\n}\n\n.pointerEventNone {\n  pointer-events: none;\n}\n\n.inp_playerName {\n  border-radius: var(--sz-xsm);\n  padding: var(--sz-xsm);\n  border: none;\n  box-shadow: var(--bx-shadow);\n\n  &:read-only {\n    opacity: 0.8;\n    background: var(--transparent-black-lg);\n    color: var(--white);\n  }\n\n  &:focus {\n    outline-color: var(--pri-accent);\n  }\n}\n\n.submit-playerName {\n  background: none;\n  border: none;\n}\n\n.player-board {\n  display: flex;\n  flex-wrap: wrap;\n\n  border: var(--sz-xxsm) solid var(--transparent-black-lg);\n  background: var(--white);\n}\n\n.player-board-cell {\n  min-height: calc(100% / 10);\n  min-width: calc(100% / 10);\n  border: 1px solid var(--transparent-black-lg);\n  position: relative;\n  display: flex;\n  transition: 300ms;\n\n  &:active {\n    background-color: var(--transparent-black-lg);\n  }\n}\n\n.attackCellStatus {\n  position: absolute;\n  left: 20%;\n  top: 20%;\n  z-index: 99;\n}\n\n.hinge {\n  background-color: var(--pri-accent);\n  text-align: center;\n  padding: var(--sz-xxsm) var(--sz-xsm);\n  display: grid;\n  grid-template-columns: max-content max-content 1fr max-content;\n  grid-template-rows: 1fr;\n  column-gap: var(--sz-sm);\n  position: relative;\n}\n\n.playerMsg {\n  position: absolute;\n  background: var(--black);\n  padding: var(--sz-xsm);\n  border-radius: var(--sz-xsm);\n  color: var(--error);\n  font-weight: 900;\n  transform: translateX(-50%) scale(1);\n  transition: 300ms;\n  box-shadow: var(--bx-shadow);\n\n  max-width: 200px;\n  overflow: hidden;\n  text-wrap: nowrap;\n  text-overflow: ellipsis;\n  z-index: 100;\n}\n\n.playerOneMsg {\n  transition: 300ms;\n  top: -40px;\n  left: 50%;\n}\n\n.playerTwoMsg {\n  top: 53px;\n  left: 50%;\n}\n\n.scaleTo0 {\n  transform: translateX(-50%) scale(0);\n}\n\n.play,\n.reset,\n.play-again {\n  background-color: var(--transparent-white-lg);\n  color: var(--black);\n  display: flex;\n  align-items: center;\n  padding: var(--sz-xsm) var(--sz-sm);\n  border-radius: var(--sz-xsm);\n  box-shadow: var(--bx-shadow);\n  cursor: pointer;\n  transition: 300ms;\n\n  &:active {\n    scale: 0.8;\n  }\n}\n\n.winner-name {\n  max-width: 100px;\n  text-wrap: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: center;\n  padding: var(--sz-sm);\n  color: var(--black);\n  font-weight: 900;\n}\n\n.select_computer_or_player2 {\n  display: flex;\n  column-gap: var(--sz-lg);\n}\n\n.check_player {\n  display: flex;\n  column-gap: var(--sz-xsm);\n}\n\n.rotate {\n  transform: rotate(90deg) translateY(-50%) translateX(-14px);\n}\n\n.hide {\n  display: none;\n}\n\n.visibilityHidden {\n  visibility: hidden;\n}\n.bgColor {\n  background-color: var(--transparent-black-lg);\n}\n\n/* \nVisualize computer ship\n\n.player-2-board {\n  [data-len='1'] {\n    background: rgb(27, 71, 85);\n  }\n  [data-len='2'] {\n    background: rgb(164, 181, 12);\n  }\n  [data-len='3'] {\n    background: rgb(80, 23, 214);\n  }\n  [data-len='4'] {\n    background: rgb(202, 8, 199);\n  }\n} */\n"],"sourceRoot":""}]);
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
    img.setAttribute('data-img', 'ship');
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
  board.querySelectorAll('[data-img]').forEach((ship) => ship.classList.toggle('visibilityHidden'));
}

function handleTogglePlayerOneShip() {
  if (!playerOne.board.isAllShipSet()) {
    togglePlayerOneMsg(`Set all your Ship first`);
    return;
  }
  toggleShipDisplay(playerOneBoard);
}

function handleTogglePlayerTwoShip() {
  const inpCheckPlayer = document.querySelector('[data-inp-check-player]:checked');

  if (inpCheckPlayer.id === 'computer') {
    togglePlayerTwoMsg(`Feature N/A for Computer`);
  } else if (!playerTwo.board.isAllShipSet()) {
    togglePlayerTwoMsg(`Set all your Ship first`);
  } else {
    toggleShipDisplay(playerTwoBoard);
  }
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

const removeReadOnlyFromInp = () => {
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

    playerInfo.playerOneName = player1Name.value.trim() !== '' ? player1Name.value : 'Player 1';
    playerInfo.playerTwoName = player2Name.value.trim() !== '' ? player2Name.value : 'Player 2';

    if (inpCheckPlayer.id === 'computer') {
      isBtw = humanAndComputer;

      playerInfo.playerTwo = computer.board;

      if (!playerOne.board.isAllShipSet()) {
        togglePlayerOneMsg(`${playerInfo.playerOneName} set all your Ship`);
        return;
      }

      setComputerShip();
    } else {
      isBtw = humanAndHuman;

      playerInfo.playerTwo = playerTwo.board;

      if (!playerOne.board.isAllShipSet()) {
        togglePlayerOneMsg(`${playerInfo.playerOneName} set all your Ship`);
        return;
      } else if (!playerTwo.board.isAllShipSet()) {
        togglePlayerTwoMsg(`${playerInfo.playerTwoName} set all your Ship`);
        return;
      }

      [...playerTwoBoard.children].filter(filterCellWithShip).forEach(makePointerNone);
    }

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
    removeReadOnlyFromInp();
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
/******/ 		__webpack_require__.h = () => ("9cc0c1c7a7a66b539cc8")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLHlJQUFpRDtBQUM3Riw0Q0FBNEMsdUlBQWdEO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixPQUFPLHVGQUF1RixhQUFhLFFBQVEsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxPQUFPLFlBQVksU0FBUyxVQUFVLE1BQU0sWUFBWSxZQUFZLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sT0FBTyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxP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QUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0NBQXNDOztBQUVsRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsUUFBUSxtRkFBbUY7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEJBQThCLDBCQUEwQjtBQUN4RDtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOOztBQUVBOztBQUVBO0FBQ0EsOEJBQThCLDBCQUEwQjtBQUN4RDtBQUNBLFFBQVE7QUFDUiw4QkFBOEIsMEJBQTBCO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1EQUFNOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtQkFBbUIsMkJBQTJCO1dBQzlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQixjQUFjO1dBQ2hDO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLGFBQWE7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7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bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hvdCBtb2R1bGUgcmVwbGFjZW1lbnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tNDAwLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BhY2lmaWNvLVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BhY2lmaWNvLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAgPT09PT09PT09PT0gUmVzZXQgPT09PT09PT09ICAqL1xuLyogMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbCAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG4qIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgLyogMy4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHQgKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgLyogNC4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZyAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLyogNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0cyAqL1xuaW1nLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLyogNi4gSW5oZXJpdCBmb250cyBmb3IgZm9ybSBjb250cm9scyAqL1xuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbi8qIDcuIEF2b2lkIHRleHQgb3ZlcmZsb3dzICovXG5wLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cblxuLyogOC4gSW1wcm92ZSBsaW5lIHdyYXBwaW5nICovXG5wIHtcbiAgdGV4dC13cmFwOiBwcmV0dHk7XG59XG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICB0ZXh0LXdyYXA6IGJhbGFuY2U7XG59XG5cbi8qIGZvbnQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBzcmM6XG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCh3b2ZmKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KHdvZmYyKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUGFjaWZpY287XG4gIHNyYzpcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KHdvZmYpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQod29mZjIpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuOnJvb3Qge1xuICAtLXByaS1hY2NlbnQ6IHJnYigyMTcsIDE3NiwgMTMpO1xuICAtLXNlYy1hY2NlbnQ6IHJnYigxMzEsIDEyNywgODMpO1xuICAtLXRlci1hY2NlbnQ6IHJnYig2MCwgNzAsIDQpO1xuICAtLXdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC0tYmxhY2s6IHJnYigwLCAwLCAwKTtcbiAgLS1lcnJvci10cmFuc3BhcmVudDogcmdiYSgyNDksIDEyLCAxMiwgMC4yKTtcbiAgLS1lcnJvcjogcmdiYSgyNDksIDEyLCAxMik7XG5cbiAgLS10cmFuc3BhcmVudC13aGl0ZS14c206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgLS10cmFuc3BhcmVudC13aGl0ZS1zbTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAtLXRyYW5zcGFyZW50LXdoaXRlLWxnOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cbiAgLS10cmFuc3BhcmVudC1ibGFjay14c206IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgLS10cmFuc3BhcmVudC1ibGFjay1zbTogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtLXRyYW5zcGFyZW50LWJsYWNrLWxnOiByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbiAgLS1zei14eHhzbTogMXB4O1xuICAtLXN6LXh4c206IDJweDtcbiAgLS1zei14c206IDVweDtcbiAgLS1zei1zbTogMTBweDtcbiAgLS1zei1sZzogMjBweDtcbiAgLS1zei14bGc6IDMwcHg7XG4gIC0tc3oteHhsZzogNjBweDtcblxuICAtLWJ4LXNoYWRvdzogMC41cHggMC41cHggNXB4IHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWxnKTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIGFyaWFsO1xuICBmb250LXNpemU6IGNsYW1wKHZhcigtLXN6LXNtKSwgdmFyKC0tc3otc20pICsgMC41dncsIHZhcigtLXN6LXNtKSArIHZhcigtLXN6LXhzbSkpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBlcnNwZWN0aXZlOiAzMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGVyLWFjY2VudCk7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBwYWRkaW5nOiAwIHZhcigtLXN6LWxnKTtcbiAgbWFyZ2luOiAwIGF1dG8gMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiB2YXIoLS1zei1zbSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLXN6LWxnKSAwO1xufVxuXG4uZ2FtZS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBQYWNpZmljbywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlLXhzbSk7XG59XG5cbkBrZXlmcmFtZXMgdG9BbmRGcm8ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTcwJSk7XG4gIH1cbn1cblxuLnBpcmF0ZVNoaXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDAuMjtcbiAgYm90dG9tOiAwO1xuICBhbmltYXRpb246IHRvQW5kRnJvIDUwMDBtcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5zYWlsaW5nU2hpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMC4yO1xuICB0b3A6IC00MDBweDtcbiAgcmlnaHQ6IC0xMzBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xufVxuXG4uaG93VG9TZXRTaGlwSW5zdHJ1Y3Rpb24ge1xuICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUteHNtKTtcbn1cblxuLmh1bWFuIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmJvYXJkcy1zZWN0aW9uIHtcbiAgYm9yZGVyOiB2YXIoLS1zei1sZykgc29saWQgdmFyKC0tcHJpLWFjY2VudCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJ4LXNoYWRvdyk7XG4gIGhlaWdodDogNjQwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1heC1jb250ZW50IDFmcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGlkZS1wbGF5ZXItc2hpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9nZ2xlLXBsYXllci1vbmUtc2hpcCB7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IC0yMHB4O1xufVxuXG4udG9nZ2xlLXBsYXllci10d28tc2hpcCB7XG4gIGJvdHRvbTogLTIwcHg7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLnNlbGVjdC1zaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3JkZXItbGVmdDogdmFyKC0tc3oteHhzbSkgc29saWQgdmFyKC0tdHJhbnNwYXJlbnQtYmxhY2stbGcpO1xuICBib3JkZXI6IHZhcigtLXN6LXhzbSkgc29saWQgdmFyKC0tcHJpLWFjY2VudCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJ4LXNoYWRvdyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1hY2NlbnQpO1xufVxuXG4uc2VsZWN0LXNoaXAtY2VsbCB7XG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC8gMTApO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLyAxMCk7XG4gIGJvcmRlcjogdmFyKC0tc3oteHh4c20pIHNvbGlkIHZhcigtLXRyYW5zcGFyZW50LXdoaXRlLXNtKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VsZWN0LXNoaXAtY2VsbDpudGgtY2hpbGQoMW4gKyA3KSB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5zZWxlY3Qtc2hpcC1jZWxsOm50aC1jaGlsZCgxbiArIDEpIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5zaGlwSW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5MDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwO1xufVxuXG4ucG9pbnRlckV2ZW50Tm9uZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaW5wX3BsYXllck5hbWUge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zei14c20pO1xuICBwYWRkaW5nOiB2YXIoLS1zei14c20pO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJ4LXNoYWRvdyk7XG5cbiAgJjpyZWFkLW9ubHkge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudC1ibGFjay1sZyk7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLXByaS1hY2NlbnQpO1xuICB9XG59XG5cbi5zdWJtaXQtcGxheWVyTmFtZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnBsYXllci1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBib3JkZXI6IHZhcigtLXN6LXh4c20pIHNvbGlkIHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWxnKTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuXG4ucGxheWVyLWJvYXJkLWNlbGwge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLyAxMCk7XG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC8gMTApO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudC1ibGFjay1sZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbjogMzAwbXM7XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWxnKTtcbiAgfVxufVxuXG4uYXR0YWNrQ2VsbFN0YXR1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjAlO1xuICB0b3A6IDIwJTtcbiAgei1pbmRleDogOTk7XG59XG5cbi5oaW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaS1hY2NlbnQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLXN6LXh4c20pIHZhcigtLXN6LXhzbSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyIG1heC1jb250ZW50O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgY29sdW1uLWdhcDogdmFyKC0tc3otc20pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wbGF5ZXJNc2cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcbiAgcGFkZGluZzogdmFyKC0tc3oteHNtKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3oteHNtKTtcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgYm94LXNoYWRvdzogdmFyKC0tYngtc2hhZG93KTtcblxuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLnBsYXllck9uZU1zZyB7XG4gIHRyYW5zaXRpb246IDMwMG1zO1xuICB0b3A6IC00MHB4O1xuICBsZWZ0OiA1MCU7XG59XG5cbi5wbGF5ZXJUd29Nc2cge1xuICB0b3A6IDUzcHg7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLnNjYWxlVG8wIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDApO1xufVxuXG4ucGxheSxcbi5yZXNldCxcbi5wbGF5LWFnYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUtbGcpO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiB2YXIoLS1zei14c20pIHZhcigtLXN6LXNtKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3oteHNtKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYngtc2hhZG93KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAzMDBtcztcblxuICAmOmFjdGl2ZSB7XG4gICAgc2NhbGU6IDAuODtcbiAgfVxufVxuXG4ud2lubmVyLW5hbWUge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tc3otc20pO1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uc2VsZWN0X2NvbXB1dGVyX29yX3BsYXllcjIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2x1bW4tZ2FwOiB2YXIoLS1zei1sZyk7XG59XG5cbi5jaGVja19wbGF5ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2x1bW4tZ2FwOiB2YXIoLS1zei14c20pO1xufVxuXG4ucm90YXRlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtMTRweCk7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZpc2liaWxpdHlIaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uYmdDb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWxnKTtcbn1cblxuLyogXG5WaXN1YWxpemUgY29tcHV0ZXIgc2hpcFxuXG4ucGxheWVyLTItYm9hcmQge1xuICBbZGF0YS1sZW49JzEnXSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI3LCA3MSwgODUpO1xuICB9XG4gIFtkYXRhLWxlbj0nMiddIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTY0LCAxODEsIDEyKTtcbiAgfVxuICBbZGF0YS1sZW49JzMnXSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDgwLCAyMywgMjE0KTtcbiAgfVxuICBbZGF0YS1sZW49JzQnXSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIwMiwgOCwgMTk5KTtcbiAgfVxufSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtDQUFrQztBQUNsQyw2Q0FBNkM7QUFDN0M7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixtQ0FBbUM7QUFDckM7O0FBRUEsOEJBQThCO0FBQzlCOztFQUVFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBLHVDQUF1QztBQUN2Qzs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQSw0QkFBNEI7QUFDNUI7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7Ozs7OztFQU1FLGtCQUFrQjtBQUNwQjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxtQkFBbUI7RUFDbkI7O3lEQUVtRDtFQUNuRCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7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LGFBQWE7RUFDYiw4REFBOEQ7RUFDOUQsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLDRCQUE0Qjs7RUFFNUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7O0VBR0UsNkNBQTZDO0VBQzdDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixpQkFBaUI7O0VBRWpCO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAgPT09PT09PT09PT0gUmVzZXQgPT09PT09PT09ICAqL1xcbi8qIDEuIFVzZSBhIG1vcmUtaW50dWl0aXZlIGJveC1zaXppbmcgbW9kZWwgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAvKiAzLiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC8qIDQuIEltcHJvdmUgdGV4dCByZW5kZXJpbmcgKi9cXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG4vKiA1LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzICovXFxuaW1nLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLyogNi4gSW5oZXJpdCBmb250cyBmb3IgZm9ybSBjb250cm9scyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogNy4gQXZvaWQgdGV4dCBvdmVyZmxvd3MgKi9cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi8qIDguIEltcHJvdmUgbGluZSB3cmFwcGluZyAqL1xcbnAge1xcbiAgdGV4dC13cmFwOiBwcmV0dHk7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIHRleHQtd3JhcDogYmFsYW5jZTtcXG59XFxuXFxuLyogZm9udCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzpcXG4gICAgdXJsKC4vZm9udHMvUm9ib3RvLTQwMC53b2ZmKSBmb3JtYXQod29mZiksXFxuICAgIHVybCguL2ZvbnRzL1BhY2lmaWNvLVJlZ3VsYXIud29mZjIpIGZvcm1hdCh3b2ZmMik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBQYWNpZmljbztcXG4gIHNyYzpcXG4gICAgdXJsKC4vZm9udHMvUGFjaWZpY28tUmVndWxhci53b2ZmKSBmb3JtYXQod29mZiksXFxuICAgIHVybCguL2ZvbnRzL1BhY2lmaWNvLVJlZ3VsYXIud29mZjIpIGZvcm1hdCh3b2ZmMik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByaS1hY2NlbnQ6IHJnYigyMTcsIDE3NiwgMTMpO1xcbiAgLS1zZWMtYWNjZW50OiByZ2IoMTMxLCAxMjcsIDgzKTtcXG4gIC0tdGVyLWFjY2VudDogcmdiKDYwLCA3MCwgNCk7XFxuICAtLXdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAtLWJsYWNrOiByZ2IoMCwgMCwgMCk7XFxuICAtLWVycm9yLXRyYW5zcGFyZW50OiByZ2JhKDI0OSwgMTIsIDEyLCAwLjIpO1xcbiAgLS1lcnJvcjogcmdiYSgyNDksIDEyLCAxMik7XFxuXFxuICAtLXRyYW5zcGFyZW50LXdoaXRlLXhzbTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgLS10cmFuc3BhcmVudC13aGl0ZS1zbTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgLS10cmFuc3BhcmVudC13aGl0ZS1sZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcblxcbiAgLS10cmFuc3BhcmVudC1ibGFjay14c206IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIC0tdHJhbnNwYXJlbnQtYmxhY2stc206IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIC0tdHJhbnNwYXJlbnQtYmxhY2stbGc6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG5cXG4gIC0tc3oteHh4c206IDFweDtcXG4gIC0tc3oteHhzbTogMnB4O1xcbiAgLS1zei14c206IDVweDtcXG4gIC0tc3otc206IDEwcHg7XFxuICAtLXN6LWxnOiAyMHB4O1xcbiAgLS1zei14bGc6IDMwcHg7XFxuICAtLXN6LXh4bGc6IDYwcHg7XFxuXFxuICAtLWJ4LXNoYWRvdzogMC41cHggMC41cHggNXB4IHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWxnKTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBhcmlhbDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAodmFyKC0tc3otc20pLCB2YXIoLS1zei1zbSkgKyAwLjV2dywgdmFyKC0tc3otc20pICsgdmFyKC0tc3oteHNtKSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGVyc3BlY3RpdmU6IDMwMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGVyLWFjY2VudCk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tc3otbGcpO1xcbiAgbWFyZ2luOiAwIGF1dG8gMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcm93LWdhcDogdmFyKC0tc3otc20pO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXN6LWxnKSAwO1xcbn1cXG5cXG4uZ2FtZS10aXRsZSB7XFxuICBmb250LWZhbWlseTogUGFjaWZpY28sIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUteHNtKTtcXG59XFxuXFxuQGtleWZyYW1lcyB0b0FuZEZybyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03MCUpO1xcbiAgfVxcbn1cXG5cXG4ucGlyYXRlU2hpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwLjI7XFxuICBib3R0b206IDA7XFxuICBhbmltYXRpb246IHRvQW5kRnJvIDUwMDBtcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi5zYWlsaW5nU2hpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwLjI7XFxuICB0b3A6IC00MDBweDtcXG4gIHJpZ2h0OiAtMTMwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxufVxcblxcbi5ob3dUb1NldFNoaXBJbnN0cnVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUteHNtKTtcXG59XFxuXFxuLmh1bWFuIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5ib2FyZHMtc2VjdGlvbiB7XFxuICBib3JkZXI6IHZhcigtLXN6LWxnKSBzb2xpZCB2YXIoLS1wcmktYWNjZW50KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJ4LXNoYWRvdyk7XFxuICBoZWlnaHQ6IDY0MHB4O1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtYXgtY29udGVudCAxZnI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oaWRlLXBsYXllci1zaGlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZ2dsZS1wbGF5ZXItb25lLXNoaXAge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAtMjBweDtcXG59XFxuXFxuLnRvZ2dsZS1wbGF5ZXItdHdvLXNoaXAge1xcbiAgYm90dG9tOiAtMjBweDtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLnNlbGVjdC1zaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3JkZXItbGVmdDogdmFyKC0tc3oteHhzbSkgc29saWQgdmFyKC0tdHJhbnNwYXJlbnQtYmxhY2stbGcpO1xcbiAgYm9yZGVyOiB2YXIoLS1zei14c20pIHNvbGlkIHZhcigtLXByaS1hY2NlbnQpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYngtc2hhZG93KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1hY2NlbnQpO1xcbn1cXG5cXG4uc2VsZWN0LXNoaXAtY2VsbCB7XFxuICBtaW4td2lkdGg6IGNhbGMoMTAwJSAvIDEwKTtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAvIDEwKTtcXG4gIGJvcmRlcjogdmFyKC0tc3oteHh4c20pIHNvbGlkIHZhcigtLXRyYW5zcGFyZW50LXdoaXRlLXNtKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlbGVjdC1zaGlwLWNlbGw6bnRoLWNoaWxkKDFuICsgNykge1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbi5zZWxlY3Qtc2hpcC1jZWxsOm50aC1jaGlsZCgxbiArIDEpIHtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4uc2hpcEltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5MDtcXG4gIGJvdHRvbTogMDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDA7XFxufVxcblxcbi5wb2ludGVyRXZlbnROb25lIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uaW5wX3BsYXllck5hbWUge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3oteHNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXN6LXhzbSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiB2YXIoLS1ieC1zaGFkb3cpO1xcblxcbiAgJjpyZWFkLW9ubHkge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWxnKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIH1cXG5cXG4gICY6Zm9jdXMge1xcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1wcmktYWNjZW50KTtcXG4gIH1cXG59XFxuXFxuLnN1Ym1pdC1wbGF5ZXJOYW1lIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gIGJvcmRlcjogdmFyKC0tc3oteHhzbSkgc29saWQgdmFyKC0tdHJhbnNwYXJlbnQtYmxhY2stbGcpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkLWNlbGwge1xcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC8gMTApO1xcbiAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLyAxMCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudC1ibGFjay1sZyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuXFxuICAmOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWJsYWNrLWxnKTtcXG4gIH1cXG59XFxuXFxuLmF0dGFja0NlbGxTdGF0dXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjAlO1xcbiAgdG9wOiAyMCU7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLmhpbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaS1hY2NlbnQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tc3oteHhzbSkgdmFyKC0tc3oteHNtKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50IDFmciBtYXgtY29udGVudDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgY29sdW1uLWdhcDogdmFyKC0tc3otc20pO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheWVyTXNnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcXG4gIHBhZGRpbmc6IHZhcigtLXN6LXhzbSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zei14c20pO1xcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJ4LXNoYWRvdyk7XFxuXFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtd3JhcDogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wbGF5ZXJPbmVNc2cge1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICB0b3A6IC00MHB4O1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4ucGxheWVyVHdvTXNnIHtcXG4gIHRvcDogNTNweDtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLnNjYWxlVG8wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwKTtcXG59XFxuXFxuLnBsYXksXFxuLnJlc2V0LFxcbi5wbGF5LWFnYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlLWxnKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXN6LXhzbSkgdmFyKC0tc3otc20pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3oteHNtKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJ4LXNoYWRvdyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG5cXG4gICY6YWN0aXZlIHtcXG4gICAgc2NhbGU6IDAuODtcXG4gIH1cXG59XFxuXFxuLndpbm5lci1uYW1lIHtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXN6LXNtKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uc2VsZWN0X2NvbXB1dGVyX29yX3BsYXllcjIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IHZhcigtLXN6LWxnKTtcXG59XFxuXFxuLmNoZWNrX3BsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogdmFyKC0tc3oteHNtKTtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC0xNHB4KTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnZpc2liaWxpdHlIaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uYmdDb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1ibGFjay1sZyk7XFxufVxcblxcbi8qIFxcblZpc3VhbGl6ZSBjb21wdXRlciBzaGlwXFxuXFxuLnBsYXllci0yLWJvYXJkIHtcXG4gIFtkYXRhLWxlbj0nMSddIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI3LCA3MSwgODUpO1xcbiAgfVxcbiAgW2RhdGEtbGVuPScyJ10ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTY0LCAxODEsIDEyKTtcXG4gIH1cXG4gIFtkYXRhLWxlbj0nMyddIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDgwLCAyMywgMjE0KTtcXG4gIH1cXG4gIFtkYXRhLWxlbj0nNCddIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwMiwgOCwgMTk5KTtcXG4gIH1cXG59ICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmZ1bmN0aW9uIENlbGwoY29vcmRpbmF0ZSkge1xuICBsZXQgc2hpcEluQ2VsbCA9IG51bGw7XG4gIGxldCBoaXQgPSBmYWxzZTtcblxuICBjb25zdCBzZXRTaGlwID0gKHNoaXApID0+IHtcbiAgICBzaGlwSW5DZWxsID0gc2hpcDtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwID0gKCkgPT4gc2hpcEluQ2VsbDtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBzaGlwSW5DZWxsO1xuICAgIHNoaXBJbkNlbGwgPSBudWxsO1xuICAgIHJldHVybiBzaGlwO1xuICB9O1xuXG4gIGNvbnN0IGhpdENlbGwgPSAoKSA9PiB7XG4gICAgaGl0ID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCByZXNldEhpdCA9ICgpID0+IHtcbiAgICBoaXQgPSBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBpc0NlbGxIaXQgPSAoKSA9PiBoaXQ7XG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZSA9ICgpID0+IGNvb3JkaW5hdGU7XG5cbiAgcmV0dXJuIHsgc2V0U2hpcCwgZ2V0U2hpcCwgcmVtb3ZlU2hpcCwgaGl0Q2VsbCwgaXNDZWxsSGl0LCByZXNldEhpdCwgZ2V0Q29vcmRpbmF0ZSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoaWQpIHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgY29uc3QgeUF4aXMgPSBbJ2onLCAnaScsICdoJywgJ2cnLCAnZicsICdlJywgJ2QnLCAnYycsICdiJywgJ2EnXTtcbiAgY29uc3QgeEF4aXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gIGNvbnN0IGNlbGxJbk9yZGVyT2ZIaXQgPSBbXTtcbiAgY29uc3QgQUxMX1NISVBfTEVOID0gMjA7XG5cbiAgbGV0IGhpdENvb3JkaW5hdGU7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB5QXhpcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgeEF4aXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGJvYXJkLnB1c2goQ2VsbChgJHt5QXhpc1tpXX0ke3hBeGlzW2pdfWApKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRDb29yZGluYXRlSW5kZXggPSAoY29vcmRpbmF0ZSkgPT5cbiAgICBib2FyZC5maW5kSW5kZXgoKGNlbGwpID0+IGNlbGwuZ2V0Q29vcmRpbmF0ZSgpID09PSBjb29yZGluYXRlKTtcblxuICBjb25zdCBpc0ludGVyU2VjdGlvbiA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHZhbGlkQWRqYWNlbnRJbmRleEluT2JqID0gZ2V0VmFsaWRBZGphY2VudENvb3JkaW5hdGVJbk9iaihpbmRleCk7XG5cbiAgICBjb25zdCBsZWZ0SW5kZXggPSB2YWxpZEFkamFjZW50SW5kZXhJbk9iai5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmRpciA9PT0gJ2xlZnQnKTtcbiAgICBjb25zdCB0b3BJbmRleCA9IHZhbGlkQWRqYWNlbnRJbmRleEluT2JqLmZpbmRJbmRleCgob2JqKSA9PiBvYmouZGlyID09PSAndG9wJyk7XG4gICAgY29uc3QgYm90dG9tSW5kZXggPSB2YWxpZEFkamFjZW50SW5kZXhJbk9iai5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmRpciA9PT0gJ2JvdHRvbScpO1xuICAgIGNvbnN0IHJpZ2h0SW5kZXggPSB2YWxpZEFkamFjZW50SW5kZXhJbk9iai5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmRpciA9PT0gJ3JpZ2h0Jyk7XG5cbiAgICBjb25zdCBuZWFyZXN0Q29vcmQgPSB2YWxpZEFkamFjZW50SW5kZXhJbk9iai5tYXAoKG9iaikgPT4gb2JqLmNvb3JkaW5hdGVJbmRleCk7XG5cbiAgICBpZiAobGVmdEluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKHRvcEluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCB0b3BMZWZ0SW5kZXggPSB2YWxpZEFkamFjZW50SW5kZXhJbk9ialt0b3BJbmRleF0uY29vcmRpbmF0ZUluZGV4IC0gMTtcbiAgICAgICAgbmVhcmVzdENvb3JkLnB1c2godG9wTGVmdEluZGV4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJvdHRvbUluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBib3R0b21MZWZ0SW5kZXggPSB2YWxpZEFkamFjZW50SW5kZXhJbk9ialtib3R0b21JbmRleF0uY29vcmRpbmF0ZUluZGV4IC0gMTtcbiAgICAgICAgbmVhcmVzdENvb3JkLnB1c2goYm90dG9tTGVmdEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmlnaHRJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmICh0b3BJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdG9wUmlnaHRJbmRleCA9IHZhbGlkQWRqYWNlbnRJbmRleEluT2JqW3RvcEluZGV4XS5jb29yZGluYXRlSW5kZXggKyAxO1xuICAgICAgICBuZWFyZXN0Q29vcmQucHVzaCh0b3BSaWdodEluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmIChib3R0b21JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgYm90dG9tUmlnaHRJbmRleCA9IHZhbGlkQWRqYWNlbnRJbmRleEluT2JqW2JvdHRvbUluZGV4XS5jb29yZGluYXRlSW5kZXggKyAxO1xuICAgICAgICBuZWFyZXN0Q29vcmQucHVzaChib3R0b21SaWdodEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmVhcmVzdENvb3JkO1xuICB9O1xuXG4gIGNvbnN0IHNldFNoaXAgPSAoc2hpcFRlbXBsYXRlLCBjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKHNoaXBUZW1wbGF0ZS5pZCAhPT0gaWQpIHJldHVybjtcblxuICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBUZW1wbGF0ZS5sZW4sIGNvb3JkaW5hdGUpO1xuICAgIGNvbnN0IHNoaXBMZW4gPSBzaGlwLmxlbigpO1xuXG4gICAgbGV0IGNvb3JkaW5hdGVJbmRleCA9IGdldENvb3JkaW5hdGVJbmRleChjb29yZGluYXRlKTtcblxuICAgIGlmICghaXNSaWdodENvb3JkaW5hdGVWYWxpZChjb29yZGluYXRlSW5kZXgsIGNvb3JkaW5hdGVJbmRleCArIHNoaXBMZW4gLSAxKSkgcmV0dXJuO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsZXQgaW5kZXggPSBjb29yZGluYXRlSW5kZXg7XG5cbiAgICB3aGlsZSAoY291bnQgPCBzaGlwTGVuKSB7XG4gICAgICBjb25zdCBjZWxsID0gYm9hcmRbaW5kZXhdO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGNlbGwuZ2V0U2hpcCgpIHx8XG4gICAgICAgIGlzSW50ZXJTZWN0aW9uKGluZGV4KS5zb21lKChpbmRleENvb3JkKSA9PiBib2FyZFtpbmRleENvb3JkXS5nZXRTaGlwKCkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY291bnQrKztcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgY291bnQgPSAwO1xuICAgIGluZGV4ID0gY29vcmRpbmF0ZUluZGV4O1xuXG4gICAgd2hpbGUgKGNvdW50IDwgc2hpcExlbikge1xuICAgICAgYm9hcmRbaW5kZXhdLnNldFNoaXAoc2hpcCk7XG4gICAgICBjb3VudCsrO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBoaXRDb29yZGluYXRlID0gY29vcmRpbmF0ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRTaGlwID0gKGNvb3JkaW5hdGUpID0+IGJvYXJkW2dldENvb3JkaW5hdGVJbmRleChjb29yZGluYXRlKV0uZ2V0U2hpcCgpO1xuXG4gIGNvbnN0IHN3aXRjaFNoaXBBeGlzID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBjb29yZGluYXRlSW5kZXggPSBnZXRDb29yZGluYXRlSW5kZXgoY29vcmRpbmF0ZSk7XG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkW2Nvb3JkaW5hdGVJbmRleF0uZ2V0U2hpcCgpO1xuXG4gICAgaWYgKCFzaGlwKSByZXR1cm47XG5cbiAgICBjb25zdCBzaGlwTGVuID0gc2hpcC5sZW4oKTtcbiAgICBzaGlwLnN3aXRjaEF4aXMoKTtcbiAgICBjb25zdCBheGlzID0gc2hpcC5nZXRBeGlzKCk7XG5cbiAgICBpZiAoIWlzQm90dG9tQ29vcmRpbmF0ZVZhbGlkKGNvb3JkaW5hdGVJbmRleCArIHNoaXBMZW4gKiAxMCkpIHJldHVybjtcblxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IG9sZEluZGV4ID0gY29vcmRpbmF0ZUluZGV4O1xuICAgIGxldCBuZXdJbmRleCA9IGNvb3JkaW5hdGVJbmRleDtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgY291bnQgPSAwO1xuICAgICAgb2xkSW5kZXggPSBjb29yZGluYXRlSW5kZXg7XG4gICAgICBuZXdJbmRleCA9IGNvb3JkaW5hdGVJbmRleDtcbiAgICB9O1xuXG4gICAgY29uc3QgdGVtcFJlbW92ZVNoaXAgPSBbXTtcbiAgICB3aGlsZSAoY291bnQgPCBzaGlwTGVuKSB7XG4gICAgICBjb25zdCBvbGRDZWxsID0gYm9hcmRbb2xkSW5kZXhdO1xuICAgICAgdGVtcFJlbW92ZVNoaXAucHVzaCh7IHNoaXA6IG9sZENlbGwucmVtb3ZlU2hpcCgpLCBvbGRJbmRleCB9KTtcblxuICAgICAgY291bnQrKztcbiAgICAgIGF4aXMgPT09ICd4QXhpcycgPyAob2xkSW5kZXggKz0gMTApIDogb2xkSW5kZXgrKztcbiAgICB9XG5cbiAgICByZXNldCgpO1xuXG4gICAgd2hpbGUgKGNvdW50IDwgc2hpcExlbikge1xuICAgICAgY29uc3QgbmV3Q2VsbCA9IGJvYXJkW25ld0luZGV4XTtcblxuICAgICAgaWYgKFxuICAgICAgICBuZXdDZWxsLmdldFNoaXAoKSB8fFxuICAgICAgICBpc0ludGVyU2VjdGlvbihuZXdJbmRleCkuc29tZSgoaW5kZXhDb29yZCkgPT4gYm9hcmRbaW5kZXhDb29yZF0uZ2V0U2hpcCgpKVxuICAgICAgKSB7XG4gICAgICAgIHRlbXBSZW1vdmVTaGlwLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgICAgIGJvYXJkW29iai5vbGRJbmRleF0uc2V0U2hpcChvYmouc2hpcCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvdW50Kys7XG4gICAgICBheGlzID09PSAneEF4aXMnID8gbmV3SW5kZXgrKyA6IChuZXdJbmRleCArPSAxMCk7XG4gICAgfVxuXG4gICAgcmVzZXQoKTtcblxuICAgIHRlbXBSZW1vdmVTaGlwLmZvckVhY2goKG9iaiwgaW5kKSA9PiB7XG4gICAgICBpZiAoaW5kID09PSAwKSB7XG4gICAgICAgIG5ld0luZGV4ID0gb2JqLm9sZEluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGF4aXMgPT09ICd4QXhpcycpIHtcbiAgICAgICAgICBuZXdJbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0luZGV4ICs9IDEwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJvYXJkW25ld0luZGV4XS5zZXRTaGlwKG9iai5zaGlwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVJbmRleCA9IGdldENvb3JkaW5hdGVJbmRleChjb29yZGluYXRlKTtcbiAgICBjb25zdCBjZWxsID0gYm9hcmRbY29vcmRpbmF0ZUluZGV4XTtcblxuICAgIGlmICghY2VsbCkgcmV0dXJuO1xuXG4gICAgaWYgKCFjZWxsLmlzQ2VsbEhpdCgpKSB7XG4gICAgICBjZWxsSW5PcmRlck9mSGl0LnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICBjZWxsLmhpdENlbGwoKTtcbiAgICAgIGNvbnN0IHNoaXAgPSBjZWxsLmdldFNoaXAoKTtcbiAgICAgIGlmIChzaGlwKSB7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBpc1JpZ2h0Q29vcmRpbmF0ZVZhbGlkID0gKGNvb3JkaW5hdGVJbmRleCwgcmlnaHRDb29yZGluYXRlSW5kZXgpID0+IHtcbiAgICBpZiAocmlnaHRDb29yZGluYXRlSW5kZXggPj0gMTAwKSByZXR1cm47XG4gICAgcmV0dXJuIChcbiAgICAgIGJvYXJkW2Nvb3JkaW5hdGVJbmRleF0uZ2V0Q29vcmRpbmF0ZSgpWzBdID09PSBib2FyZFtyaWdodENvb3JkaW5hdGVJbmRleF0uZ2V0Q29vcmRpbmF0ZSgpWzBdXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBpc0JvdHRvbUNvb3JkaW5hdGVWYWxpZCA9IChib3R0b21Db29yZGluYXRlSW5kZXgpID0+IGJvdHRvbUNvb3JkaW5hdGVJbmRleCA8IDEwMDtcblxuICBjb25zdCBnZXRWYWxpZEFkamFjZW50Q29vcmRpbmF0ZUluT2JqID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBjb29yZGluYXRlSW5kZXggPSBOdW1iZXIuaXNJbnRlZ2VyKGNvb3JkaW5hdGUpXG4gICAgICA/IGNvb3JkaW5hdGVcbiAgICAgIDogZ2V0Q29vcmRpbmF0ZUluZGV4KGNvb3JkaW5hdGUpO1xuXG4gICAgY29uc3QgbGVmdENvb3JkaW5hdGVJbmRleCA9IGNvb3JkaW5hdGVJbmRleCAtIDE7XG4gICAgY29uc3QgdG9wQ29vcmRpbmF0ZUluZGV4ID0gY29vcmRpbmF0ZUluZGV4IC0gMTA7XG4gICAgY29uc3QgcmlnaHRDb29yZGluYXRlSW5kZXggPSBjb29yZGluYXRlSW5kZXggKyAxO1xuICAgIGNvbnN0IGJvdHRvbUNvb3JkaW5hdGVJbmRleCA9IGNvb3JkaW5hdGVJbmRleCArIDEwO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgY29vcmRpbmF0ZUluZGV4OiBsZWZ0Q29vcmRpbmF0ZUluZGV4LFxuICAgICAgICBkaXI6ICdsZWZ0JyxcbiAgICAgICAgaXNWYWxpZDpcbiAgICAgICAgICBsZWZ0Q29vcmRpbmF0ZUluZGV4ID49IDAgJiZcbiAgICAgICAgICArYm9hcmRbbGVmdENvb3JkaW5hdGVJbmRleF0uZ2V0Q29vcmRpbmF0ZSgpWzFdIDxcbiAgICAgICAgICAgICtib2FyZFtjb29yZGluYXRlSW5kZXhdLmdldENvb3JkaW5hdGUoKVsxXSxcbiAgICAgIH0sXG4gICAgICB7IGNvb3JkaW5hdGVJbmRleDogdG9wQ29vcmRpbmF0ZUluZGV4LCBkaXI6ICd0b3AnLCBpc1ZhbGlkOiB0b3BDb29yZGluYXRlSW5kZXggPj0gMCB9LFxuICAgICAge1xuICAgICAgICBjb29yZGluYXRlSW5kZXg6IHJpZ2h0Q29vcmRpbmF0ZUluZGV4LFxuICAgICAgICBkaXI6ICdyaWdodCcsXG4gICAgICAgIGlzVmFsaWQ6IGlzUmlnaHRDb29yZGluYXRlVmFsaWQoY29vcmRpbmF0ZUluZGV4LCByaWdodENvb3JkaW5hdGVJbmRleCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb29yZGluYXRlSW5kZXg6IGJvdHRvbUNvb3JkaW5hdGVJbmRleCxcbiAgICAgICAgZGlyOiAnYm90dG9tJyxcbiAgICAgICAgaXNWYWxpZDogaXNCb3R0b21Db29yZGluYXRlVmFsaWQoYm90dG9tQ29vcmRpbmF0ZUluZGV4KSxcbiAgICAgIH0sXG4gICAgXVxuICAgICAgLmZpbHRlcigoY29vcmRPYmopID0+IGNvb3JkT2JqLmlzVmFsaWQpXG4gICAgICAuZmlsdGVyKChjb29yZE9iaikgPT4gIWdldEJvYXJkKClbY29vcmRPYmouY29vcmRpbmF0ZUluZGV4XS5pc0NlbGxIaXQoKSlcbiAgICAgIC5tYXAoKGNvb3JkT2JqKSA9PiB7XG4gICAgICAgIGNvb3JkT2JqLmF4aXMgPSBjb29yZE9iai5kaXIgPT09ICd0b3AnIHx8IGNvb3JkT2JqLmRpciA9PT0gJ2JvdHRvbScgPyAneUF4aXMnIDogJ3hBeGlzJztcbiAgICAgICAgY29vcmRPYmouY29vcmRpbmF0ZSA9IGdldENvb3JkaW5hdGUoY29vcmRPYmouY29vcmRpbmF0ZUluZGV4KTtcbiAgICAgICAgcmV0dXJuIGNvb3JkT2JqO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmFsaWRBZGphY2VudEluZGV4ID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICByZXR1cm4gZ2V0VmFsaWRBZGphY2VudENvb3JkaW5hdGVJbk9iaihjb29yZGluYXRlKS5tYXAoKGNvb3JkT2JqKSA9PiBjb29yZE9iai5jb29yZGluYXRlSW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IHNldFNoaXBEeW5hbWljYWxseSA9ICgpID0+IHtcbiAgICBjb25zdCBhdmFpbGFibGVMZW4gPSBbNCwgMywgMywgMiwgMiwgMiwgMSwgMSwgMSwgMV07XG4gICAgY29uc3QgYWxsQ29vcmRpbmF0ZSA9IGdldEFsbENvb3JkaW5hdGUoKTtcblxuICAgIGNvbnN0IGlzU2hpcFNldCA9IChsZW4pID0+IHtcbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsQ29vcmRpbmF0ZS5sZW5ndGgpO1xuICAgICAgcmV0dXJuIHNldFNoaXAoeyBsZW4sIGlkOiAnY29tcHV0ZXInIH0sIGFsbENvb3JkaW5hdGVbcmFuZG9tSW5kZXhdKTtcbiAgICB9O1xuXG4gICAgd2hpbGUgKGF2YWlsYWJsZUxlbi5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGxlbiA9IGF2YWlsYWJsZUxlbi5zaGlmdCgpO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBpZiAoaXNTaGlwU2V0KGxlbikpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVPZlNoaXAoKVxuICAgICAgLnNsaWNlKDIpXG4gICAgICAuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBzd2l0Y2hTaGlwQXhpcyhjb29yZGluYXRlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGlzQWxsU2hpcFN1bmsgPSAoKSA9PiB7XG4gICAgY29uc3QgY2VsbFdpdGhTaGlwID0gYm9hcmQuZmlsdGVyKChjZWxsKSA9PiBjZWxsLmdldFNoaXAoKSk7XG4gICAgcmV0dXJuIGNlbGxXaXRoU2hpcC5ldmVyeSgoY2VsbCkgPT4gY2VsbC5nZXRTaGlwKCkuaXNTdW5rKCkpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckFsbFNoaXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5uZXcgU2V0KGJvYXJkLmZpbHRlcigoY2VsbCkgPT4gY2VsbC5nZXRTaGlwKCkpLm1hcCgoY2VsbCkgPT4gY2VsbC5nZXRTaGlwKCkpKV07XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZU9mU2hpcCA9ICgpID0+IGZpbHRlckFsbFNoaXAoKS5tYXAoKHNoaXApID0+IHNoaXAuZ2V0Q29vcmRpbmF0ZSgpKTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gIGNvbnN0IGdldENlbGxJbk9yZGVyT2ZIaXQgPSAoKSA9PiBjZWxsSW5PcmRlck9mSGl0O1xuXG4gIGNvbnN0IGdldEFsbENvb3JkaW5hdGUgPSAoKSA9PiBib2FyZC5tYXAoKGNlbGwpID0+IGNlbGwuZ2V0Q29vcmRpbmF0ZSgpKTtcblxuICBjb25zdCBnZXRDb29yZGluYXRlID0gKGluZGV4KSA9PiBib2FyZFtpbmRleF0uZ2V0Q29vcmRpbmF0ZSgpO1xuXG4gIGNvbnN0IGdldElEID0gKCkgPT4gaWQ7XG5cbiAgY29uc3QgZ2V0SGl0Q2VsbENvb3JkaW5hdGUgPSAoKSA9PlxuICAgIGJvYXJkLmZpbHRlcigoY2VsbCkgPT4gY2VsbC5pc0NlbGxIaXQoKSkubWFwKChjZWxsKSA9PiBjZWxsLmdldENvb3JkaW5hdGUoKSk7XG5cbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgcGxheUFnYWluKCk7XG4gICAgYm9hcmQuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgY2VsbC5yZW1vdmVTaGlwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcGxheUFnYWluID0gKCkgPT4ge1xuICAgIGJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IHNoaXAgPSBjZWxsLmdldFNoaXAoKTtcbiAgICAgIGlmIChzaGlwKSB7XG4gICAgICAgIHNoaXAucmVzZXQoKTtcbiAgICAgIH1cbiAgICAgIGNlbGwucmVzZXRIaXQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpc0FsbFNoaXBTZXQgPSAoKSA9PlxuICAgIGZpbHRlckFsbFNoaXAoKS5yZWR1Y2UoKGN1ckxlbiwgc2hpcCkgPT4gY3VyTGVuICsgc2hpcC5sZW4oKSwgMCkgPT09IEFMTF9TSElQX0xFTjtcblxuICBjb25zdCBnZXRIaXRDb29yZGluYXRlID0gKCkgPT4gaGl0Q29vcmRpbmF0ZTtcblxuICByZXR1cm4ge1xuICAgIHNldFNoaXAsXG4gICAgZ2V0U2hpcCxcbiAgICBzd2l0Y2hTaGlwQXhpcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGdldEhpdENlbGxDb29yZGluYXRlLFxuICAgIHNldFNoaXBEeW5hbWljYWxseSxcbiAgICBpc0FsbFNoaXBTdW5rLFxuICAgIGdldENvb3JkaW5hdGUsXG4gICAgZ2V0Qm9hcmQsXG4gICAgZ2V0QWxsQ29vcmRpbmF0ZSxcbiAgICBnZXRIaXRDb29yZGluYXRlLFxuICAgIGdldENvb3JkaW5hdGVJbmRleCxcbiAgICBnZXRDZWxsSW5PcmRlck9mSGl0LFxuICAgIGdldFZhbGlkQWRqYWNlbnRJbmRleCxcbiAgICBnZXRWYWxpZEFkamFjZW50Q29vcmRpbmF0ZUluT2JqLFxuICAgIGdldENvb3JkaW5hdGVPZlNoaXAsXG4gICAgaXNBbGxTaGlwU2V0LFxuICAgIGdldElELFxuICAgIHJlc2V0LFxuICAgIHBsYXlBZ2FpbixcbiAgfTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNoaXBJbWcxIGZyb20gJy4vaW1ncy9zaGlwX2xlbjMuc3ZnJztcbmltcG9ydCBzaGlwSW1nMiBmcm9tICcuL2ltZ3Mvc2hpcF9sZW4yLnN2Zyc7XG5pbXBvcnQgcGlyYXRlU2hpcCBmcm9tICcuL2ltZ3MvcGlyYXRlX3NoaXAuc3ZnJztcbmltcG9ydCBzYWlsaW5nU2hpcCBmcm9tICcuL2ltZ3Mvc2FpbGluZ1NoaXAuc3ZnJztcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IHBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5XScpO1xuY29uc3QgcmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yZXNldF0nKTtcbmNvbnN0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXktYWdhaW5dJyk7XG5jb25zdCBnZW5lcmFsTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2lubmVyLW5hbWVdJyk7XG5cbmNvbnN0IHRvZ2dsZVBsYXllck9uZVNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2dnbGUtcGxheWVyLW9uZS1zaGlwXScpO1xuY29uc3QgdG9nZ2xlUGxheWVyVHdvU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZS1wbGF5ZXItdHdvLXNoaXBdJyk7XG5cbmNvbnN0IHBsYXllck9uZU1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXllci1vbmUtbXNnXScpO1xuY29uc3QgcGxheWVyVHdvTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheWVyLXR3by1tc2ddJyk7XG5cbmNvbnN0IHBsYXllcjFOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheWVyMU5hbWVdJyk7XG5jb25zdCBwbGF5ZXIyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXllcjJOYW1lXScpO1xuXG5jb25zdCBwbGF5ZXJPbmVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXllci1ib2FyZD1cIm9uZVwiXScpO1xuY29uc3QgcGxheWVyVHdvQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5ZXItYm9hcmQ9XCJ0d29cIl0nKTtcbmNvbnN0IHBsYXllckJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBsYXllci1ib2FyZF0nKTtcblxuY29uc3Qgc2VsZWN0X3BsYXllcjJfb3JfY29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWxlY3RfY29tcHV0ZXJfb3JfcGxheWVyMl0nKTtcbmNvbnN0IHBsYXllck9uZVNlbGVjdFNoaXBCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlbGVjdC1zaGlwLWJvYXJkPVwicGxheWVyT25lXCJdJyk7XG5jb25zdCBwbGF5ZXJUd29TZWxlY3RTaGlwQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWxlY3Qtc2hpcC1ib2FyZD1cInBsYXllclR3b1wiXScpO1xuY29uc3Qgc2VsZWN0U2hpcEJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNlbGVjdC1zaGlwLWJvYXJkXScpO1xuY29uc3QgcGlyYXRlU2hpcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3Qgc2FpbGluZ1NoaXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGJnUGF0dGVybkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG5jb25zdCBzZWxlY3RTaGlwRGltID0gMjQwO1xuXG5jb25zdCBwbGF5ZXJPbmUgPSB7XG4gIGJvYXJkOiBHYW1lQm9hcmQoY3J5cHRvLnJhbmRvbVVVSUQoKSksXG59O1xuXG5jb25zdCBwbGF5ZXJUd28gPSB7XG4gIGJvYXJkOiBHYW1lQm9hcmQoY3J5cHRvLnJhbmRvbVVVSUQoKSksXG59O1xuXG5jb25zdCBjb21wdXRlciA9IHtcbiAgYm9hcmQ6IEdhbWVCb2FyZCgnY29tcHV0ZXInKSxcbn07XG5cbmNvbnN0IHBsYXllck9uZUlEID0gcGxheWVyT25lLmJvYXJkLmdldElEKCk7XG5jb25zdCBwbGF5ZXJUd29JRCA9IHBsYXllclR3by5ib2FyZC5nZXRJRCgpO1xuXG5wbGF5ZXJPbmVCb2FyZC5pZCA9IHBsYXllck9uZUlEO1xucGxheWVyVHdvQm9hcmQuaWQgPSBwbGF5ZXJUd29JRDtcblxuY29uc3Qgc2V0SW1nQmFja2dyb3VuZFRvQm9keSA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIHBpcmF0ZVNoaXBJbWcuY2xhc3NMaXN0LmFkZCgncGlyYXRlU2hpcCcpO1xuICBzYWlsaW5nU2hpcEltZy5jbGFzc0xpc3QuYWRkKCdzYWlsaW5nU2hpcCcpO1xuXG4gIHBpcmF0ZVNoaXBJbWcuc3JjID0gcGlyYXRlU2hpcDtcbiAgc2FpbGluZ1NoaXBJbWcuc3JjID0gc2FpbGluZ1NoaXA7XG5cbiAgYm9keS5hcHBlbmQocGlyYXRlU2hpcEltZywgc2FpbGluZ1NoaXBJbWcpO1xufTtcblxuY29uc3QgYXBwZW5kQ2VsbFRvU2VsZWN0U2hpcEJvYXJkID0gKHNlbGVjdFNoaXApID0+IHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgd2hpbGUgKGNvdW50IDwgMTAwKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LXNoaXAtY2VsbCcpO1xuICAgIHNlbGVjdFNoaXAuYXBwZW5kKGNlbGwpO1xuICAgIGNvdW50Kys7XG4gIH1cbn07XG5cbmNvbnN0IHNldERpbVRvU2VsZWN0U2hpcEJvYXJkID0gKHNlbGVjdFNoaXApID0+IHtcbiAgc2VsZWN0U2hpcC5zdHlsZS5taW5XaWR0aCA9IGAke3NlbGVjdFNoaXBEaW19cHhgO1xuICBzZWxlY3RTaGlwLnN0eWxlLm1pbkhlaWdodCA9IGAke3NlbGVjdFNoaXBEaW19cHhgO1xufTtcblxuc2VsZWN0U2hpcEJvYXJkcy5mb3JFYWNoKChzZWxlY3RTaGlwKSA9PiB7XG4gIHNldERpbVRvU2VsZWN0U2hpcEJvYXJkKHNlbGVjdFNoaXApO1xuICBhcHBlbmRDZWxsVG9TZWxlY3RTaGlwQm9hcmQoc2VsZWN0U2hpcCk7XG59KTtcblxuY29uc3Qgc2hpcFRlbXBsYXRlcyA9IFtcbiAgeyBsZW46IDQsIGluZDogMCwgc2hpcDogc2hpcEltZzEgfSxcbiAgeyBsZW46IDMsIGluZDogMjAsIHNoaXA6IHNoaXBJbWcxIH0sXG4gIHsgbGVuOiAzLCBpbmQ6IDI2LCBzaGlwOiBzaGlwSW1nMSB9LFxuICB7IGxlbjogMiwgaW5kOiA0MCwgc2hpcDogc2hpcEltZzIgfSxcbiAgeyBsZW46IDIsIGluZDogNDMsIHNoaXA6IHNoaXBJbWcyIH0sXG4gIHsgbGVuOiAyLCBpbmQ6IDQ2LCBzaGlwOiBzaGlwSW1nMiB9LFxuICB7IGxlbjogMSwgaW5kOiA2MCwgc2hpcDogc2hpcEltZzIgfSxcbiAgeyBsZW46IDEsIGluZDogNjMsIHNoaXA6IHNoaXBJbWcyIH0sXG4gIHsgbGVuOiAxLCBpbmQ6IDY2LCBzaGlwOiBzaGlwSW1nMiB9LFxuICB7IGxlbjogMSwgaW5kOiA2OSwgc2hpcDogc2hpcEltZzIgfSxcbl07XG5cbmNvbnN0IGFwcGVuZFNoaXBUZW1wbGF0ZU9uU2VsZWN0Qm9hcmQgPSAoc2VsZWN0Qm9hcmQsIHBsYXllcklEKSA9PiB7XG4gIHNoaXBUZW1wbGF0ZXMuZm9yRWFjaCgoc2hpcFRlbXBsYXRlKSA9PiB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IGNlbGwgPSBbLi4uc2VsZWN0Qm9hcmQuY2hpbGRyZW5dW3NoaXBUZW1wbGF0ZS5pbmRdO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdzaGlwSW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1sZW4nLCBzaGlwVGVtcGxhdGUubGVuKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdkYXRhLWltZycsICdzaGlwJyk7XG4gICAgaW1nLnN0eWxlLm1pbldpZHRoID0gYCR7KHNlbGVjdFNoaXBEaW0gLyAxMCkgKiBzaGlwVGVtcGxhdGUubGVufXB4YDtcbiAgICBpbWcuc3JjID0gc2hpcFRlbXBsYXRlLnNoaXA7XG4gICAgaW1nLmlkID0gcGxheWVySUQ7XG4gICAgY2VsbC5hcHBlbmQoaW1nKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhcHBlbmRDZWxsVG9Cb2FyZCA9ICgpID0+IHtcbiAgcGxheWVyT25lLmJvYXJkLmdldEFsbENvb3JkaW5hdGUoKS5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgY2VsbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZWxsRWxlbS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItYm9hcmQtY2VsbCcpO1xuICAgIHBsYXllckJvYXJkcy5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgICAgY29uc3QgY2xvbmVDZWxsID0gY2VsbEVsZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgY2xvbmVDZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlJywgY29vcmRpbmF0ZSk7XG4gICAgICBib2FyZC5hcHBlbmQoY2xvbmVDZWxsKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiB0b2dnbGVTaGlwRGlzcGxheShib2FyZCkge1xuICBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbWddJykuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmlsaXR5SGlkZGVuJykpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVQbGF5ZXJPbmVTaGlwKCkge1xuICBpZiAoIXBsYXllck9uZS5ib2FyZC5pc0FsbFNoaXBTZXQoKSkge1xuICAgIHRvZ2dsZVBsYXllck9uZU1zZyhgU2V0IGFsbCB5b3VyIFNoaXAgZmlyc3RgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdG9nZ2xlU2hpcERpc3BsYXkocGxheWVyT25lQm9hcmQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2dnbGVQbGF5ZXJUd29TaGlwKCkge1xuICBjb25zdCBpbnBDaGVja1BsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlucC1jaGVjay1wbGF5ZXJdOmNoZWNrZWQnKTtcblxuICBpZiAoaW5wQ2hlY2tQbGF5ZXIuaWQgPT09ICdjb21wdXRlcicpIHtcbiAgICB0b2dnbGVQbGF5ZXJUd29Nc2coYEZlYXR1cmUgTi9BIGZvciBDb21wdXRlcmApO1xuICB9IGVsc2UgaWYgKCFwbGF5ZXJUd28uYm9hcmQuaXNBbGxTaGlwU2V0KCkpIHtcbiAgICB0b2dnbGVQbGF5ZXJUd29Nc2coYFNldCBhbGwgeW91ciBTaGlwIGZpcnN0YCk7XG4gIH0gZWxzZSB7XG4gICAgdG9nZ2xlU2hpcERpc3BsYXkocGxheWVyVHdvQm9hcmQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIFNoaXBTZWxlY3Rpb24oKSB7XG4gIGxldCBzZWxlY3RlZFNoaXAgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIHNlbGVjdFNoaXAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3Qgc2hpcCA9IGUudGFyZ2V0O1xuICAgIGlmIChzaGlwLmRhdGFzZXQubGVuKSB7XG4gICAgICBzZWxlY3RlZFNoaXAgPSBzaGlwO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldFNlbGVjdGVkU2hpcCA9ICgpID0+IHNlbGVjdGVkU2hpcDtcblxuICBjb25zdCB1bnNlbGVjdFNoaXAgPSAoKSA9PiB7XG4gICAgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4geyBzZWxlY3RTaGlwLCBnZXRTZWxlY3RlZFNoaXAsIHVuc2VsZWN0U2hpcCB9O1xufVxuXG5jb25zdCBzaGlwU2VsID0gU2hpcFNlbGVjdGlvbigpO1xuXG5mdW5jdGlvbiBzZXRDb21wdXRlclNoaXAoKSB7XG4gIGNvbXB1dGVyLmJvYXJkLnNldFNoaXBEeW5hbWljYWxseSgpO1xuXG4gIHBsYXllclR3b0JvYXJkLmlubmVySFRNTCA9ICcnO1xuICBjb21wdXRlci5ib2FyZC5nZXRCb2FyZCgpLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjb25zdCBjZWxsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbGxFbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlJywgY2VsbC5nZXRDb29yZGluYXRlKCkpO1xuICAgIGNlbGxFbGVtLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1ib2FyZC1jZWxsJyk7XG4gICAgaWYgKGNlbGwuZ2V0U2hpcCgpKSB7XG4gICAgICBjZWxsRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGVuJywgYCR7Y2VsbC5nZXRTaGlwKCkubGVuKCl9YCk7XG4gICAgfVxuICAgIHBsYXllclR3b0JvYXJkLmFwcGVuZChjZWxsRWxlbSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVQbGF5ZXIyU2VsZWN0U2hpcEJvYXJkKCkge1xuICBjb25zdCBpbnBDaGVja1BsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlucC1jaGVjay1wbGF5ZXJdOmNoZWNrZWQnKTtcblxuICBpZiAoaW5wQ2hlY2tQbGF5ZXIuaWQgPT09ICdjb21wdXRlcicpIHtcbiAgICBwbGF5ZXJUd29TZWxlY3RTaGlwQm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9IGVsc2UgcGxheWVyVHdvU2VsZWN0U2hpcEJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblxuICBnYW1lLnJlc2V0KCk7XG59XG5cbmNvbnN0IHJlbW92ZVNoaXAgPSAoY2VsbEVsZW0pID0+IHtcbiAgY29uc3Qgc2hpcCA9IGNlbGxFbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxlbl0nKTtcbiAgaWYgKHNoaXApIHNoaXAucmVtb3ZlKCk7XG59O1xuXG5jb25zdCByZW1vdmVBdHRhY2tDZWxsID0gKGNlbGxFbGVtKSA9PiB7XG4gIGNvbnN0IGF0dGFja0NlbGxTdGF0dXMgPSBjZWxsRWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1oaXQtc3RhdHVzXScpO1xuICBpZiAoYXR0YWNrQ2VsbFN0YXR1cykge1xuICAgIGF0dGFja0NlbGxTdGF0dXMucmVtb3ZlKCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlc2V0U2VsZWN0U2hpcEJvYXJkVHdvID0gKCkgPT4ge1xuICBbLi4uWy4uLnNlbGVjdFNoaXBCb2FyZHNdWzFdLmNoaWxkcmVuXS5mb3JFYWNoKHJlbW92ZVNoaXApO1xuICBhcHBlbmRTaGlwVGVtcGxhdGVPblNlbGVjdEJvYXJkKHBsYXllclR3b1NlbGVjdFNoaXBCb2FyZCwgcGxheWVyVHdvSUQpO1xufTtcblxuY29uc3QgcmVzZXRTZWxlY3RTaGlwQm9hcmRPbmUgPSAoKSA9PiB7XG4gIFsuLi5bLi4uc2VsZWN0U2hpcEJvYXJkc11bMF0uY2hpbGRyZW5dLmZvckVhY2gocmVtb3ZlU2hpcCk7XG4gIGFwcGVuZFNoaXBUZW1wbGF0ZU9uU2VsZWN0Qm9hcmQocGxheWVyT25lU2VsZWN0U2hpcEJvYXJkLCBwbGF5ZXJPbmVJRCk7XG59O1xuXG5jb25zdCByZW1vdmVBdHRhY2tDZWxsTWFyayA9ICgpID0+IHtcbiAgcGxheWVyQm9hcmRzLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgWy4uLmJvYXJkLmNoaWxkcmVuXS5mb3JFYWNoKHJlbW92ZUF0dGFja0NlbGwpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVNoaXBGcm9tUGxheWVyT25lQm9hcmQgPSAoKSA9PiB7XG4gIFsuLi5wbGF5ZXJPbmVCb2FyZC5jaGlsZHJlbl0uZm9yRWFjaChyZW1vdmVTaGlwKTtcbn07XG5cbmNvbnN0IHJlbW92ZVNoaXBPbkZyb21QbGF5ZXJUd29Cb2FyZCA9ICgpID0+IHtcbiAgWy4uLnBsYXllclR3b0JvYXJkLmNoaWxkcmVuXS5mb3JFYWNoKHJlbW92ZVNoaXApO1xufTtcblxuZnVuY3Rpb24gaGFuZGxlUmVzZXRTZWxlY3RTaGlwQm9hcmRUd28oZSkge1xuICBjb25zdCBjaGVja1BsYXllciA9IGUudGFyZ2V0LmRhdGFzZXQuaW5wQ2hlY2tQbGF5ZXI7XG5cbiAgaWYgKCFjaGVja1BsYXllcikgcmV0dXJuO1xuXG4gIGlmIChjaGVja1BsYXllciA9PT0gJ2NvbXB1dGVyJykge1xuICAgIHJlc2V0U2VsZWN0U2hpcEJvYXJkVHdvKCk7XG4gICAgWy4uLnBsYXllclR3b0JvYXJkLmNoaWxkcmVuXS5mb3JFYWNoKHJlbW92ZVNoaXApO1xuICB9XG4gIHRvZ2dsZVBsYXllcjJTZWxlY3RTaGlwQm9hcmQoKTtcbn1cblxuY29uc3QgZmlsdGVyQ2VsbFdpdGhTaGlwID0gKGNlbGxFbGVtKSA9PiB7XG4gIHJldHVybiBjZWxsRWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sZW5dJyk7XG59O1xuXG5jb25zdCBtYWtlUG9pbnRlck5vbmUgPSAoY2VsbEVsZW0pID0+IHtcbiAgY2VsbEVsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtbGVuXScpLmNsYXNzTGlzdC5hZGQoJ3BvaW50ZXJFdmVudE5vbmUnKTtcbn07XG5cbmNvbnN0IG1ha2VJbnBSZWFkT25seSA9ICgpID0+IHtcbiAgW3BsYXllcjFOYW1lLCBwbGF5ZXIyTmFtZV0uZm9yRWFjaCgobmFtZSkgPT4gKG5hbWUucmVhZE9ubHkgPSB0cnVlKSk7XG59O1xuXG5jb25zdCByZW1vdmVSZWFkT25seUZyb21JbnAgPSAoKSA9PiB7XG4gIFtwbGF5ZXIxTmFtZSwgcGxheWVyMk5hbWVdLmZvckVhY2goKG5hbWUpID0+IChuYW1lLnJlYWRPbmx5ID0gZmFsc2UpKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVBsYXllck1zZyA9IChwbGF5ZXJNc2cpID0+IHtcbiAgcGxheWVyTXNnLmNsYXNzTGlzdC5yZW1vdmUoJ3NjYWxlVG8wJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4gcGxheWVyTXNnLmNsYXNzTGlzdC5hZGQoJ3NjYWxlVG8wJyksIDIwMDApO1xufTtcblxuY29uc3QgdG9nZ2xlUGxheWVyT25lTXNnID0gKG1zZykgPT4ge1xuICBwbGF5ZXJPbmVNc2cudGV4dENvbnRlbnQgPSBtc2c7XG4gIHRvZ2dsZVBsYXllck1zZyhwbGF5ZXJPbmVNc2cpO1xufTtcblxuY29uc3QgdG9nZ2xlUGxheWVyVHdvTXNnID0gKG1zZykgPT4ge1xuICBwbGF5ZXJUd29Nc2cudGV4dENvbnRlbnQgPSBtc2c7XG4gIHRvZ2dsZVBsYXllck1zZyhwbGF5ZXJUd29Nc2cpO1xufTtcblxuY29uc3Qgc2V0UGxheWVyVHVybk1zZyA9IChtc2cpID0+IHtcbiAgZ2VuZXJhbE1zZy50ZXh0Q29udGVudCA9IGAke21zZ30gdHVybmA7XG59O1xuXG5mdW5jdGlvbiBHYW1lKCkge1xuICBsZXQgaXNCdHcsIHBsYXllciwgd2lubmVyLCBnYW1lU3RhcnQ7XG5cbiAgY29uc3QgcGxheWVySW5mbyA9IHtcbiAgICBwbGF5ZXJPbmU6IHBsYXllck9uZS5ib2FyZCxcbiAgICBwbGF5ZXJPbmVOYW1lOiAnUGxheWVyIDEnLFxuICB9O1xuXG4gIGNvbnN0IGh1bWFuQW5kQ29tcHV0ZXIgPSB7XG4gICAgYXR0YWNrU2hpcChjZWxsLCBjb29yZGluYXRlKSB7XG4gICAgICBjb25zdCBib2FyZEVsZW1JRCA9IGNlbGwuY2xvc2VzdCgnW2RhdGEtcGxheWVyLWJvYXJkXScpLmlkO1xuXG4gICAgICBpZiAoYm9hcmRFbGVtSUQgPT09IHBsYXllck9uZUlEKSByZXR1cm47XG5cbiAgICAgIGxldCBhdHRhY2tTdGF0ZSA9IHBsYXllci5odW1hblR1cm4oY29vcmRpbmF0ZSk7XG5cbiAgICAgIGlmICghYXR0YWNrU3RhdGUpIHtcbiAgICAgICAgdG9nZ2xlUGxheWVyT25lTXNnKCdBbHJlYWR5IGhpdCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBtYXJrSGl0Q2VsbChjZWxsLCBhdHRhY2tTdGF0ZSk7XG5cbiAgICAgIGlmIChhdHRhY2tTdGF0ZSA9PT0gJ21pc3MnKSB7XG4gICAgICAgIHNldFBsYXllclR1cm5Nc2cocGxheWVyLmdldFBsYXllclR3b05hbWUoKSk7XG4gICAgICAgIGNvbnN0IGlzQWxsU2hpcFN1bmsgPSBwbGF5ZXIuY29tcHV0ZXJUdXJuKGZhbHNlLCAncmFuZG9tSW5kZXgnLCBjb21wdXRlclR1cm5DYik7XG4gICAgICAgIGlmIChpc0FsbFNoaXBTdW5rID09PSAnYWxsU3VuaycpIHtcbiAgICAgICAgICB3aW5uZXIgPSBwbGF5ZXIuZ2V0UGxheWVyVHdvTmFtZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbXB1dGVyLmJvYXJkLmlzQWxsU2hpcFN1bmsoKSkge1xuICAgICAgICAgIHdpbm5lciA9IHBsYXllci5nZXRQbGF5ZXJPbmVOYW1lKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHBsYXlBZ2FpbigpIHtcbiAgICAgIGNvbXB1dGVyLmJvYXJkLnBsYXlBZ2FpbigpO1xuICAgIH0sXG5cbiAgICByZXNldCgpIHtcbiAgICAgIGNvbXB1dGVyLmJvYXJkLnJlc2V0KCk7XG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBodW1hbkFuZEh1bWFuID0ge1xuICAgIGF0dGFja1NoaXAoY2VsbCwgY29vcmRpbmF0ZSkge1xuICAgICAgY29uc3QgYm9hcmRFbGVtSUQgPSBjZWxsLmNsb3Nlc3QoJ1tkYXRhLXBsYXllci1ib2FyZF0nKS5pZDtcbiAgICAgIGNvbnN0IGJvYXJkSUQgPSBwbGF5ZXIuZ2V0Q3VycmVudEJvYXJkSUQoKTtcblxuICAgICAgaWYgKGJvYXJkRWxlbUlEICE9PSBib2FyZElEKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRCb2FyZEF0dGFjayA9IHBsYXllci5nZXRDdXJyZW50Qm9hcmRUb0F0dGFjaygpO1xuICAgICAgY29uc3QgYXR0YWNrU3RhdGUgPSBjdXJyZW50Qm9hcmRBdHRhY2sucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcblxuICAgICAgaWYgKCFhdHRhY2tTdGF0ZSkge1xuICAgICAgICBpZiAocGxheWVyT25lSUQgPT09IGJvYXJkSUQpIHtcbiAgICAgICAgICB0b2dnbGVQbGF5ZXJPbmVNc2coJ0FscmVhZHkgaGl0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9nZ2xlUGxheWVyVHdvTXNnKCdBbHJlYWR5IGhpdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbWFya0hpdENlbGwoY2VsbCwgYXR0YWNrU3RhdGUpO1xuXG4gICAgICBpZiAoYXR0YWNrU3RhdGUgPT09ICdtaXNzJykge1xuICAgICAgICBwbGF5ZXIuc3dpdGNoQm9hcmRJRCgpO1xuICAgICAgICBwbGF5ZXIuc3dpdGNoQm9hcmQoKTtcbiAgICAgICAgcGxheWVyLnN3aXRjaFBsYXllck5hbWUoKTtcbiAgICAgICAgc2V0UGxheWVyVHVybk1zZyhwbGF5ZXIuZ2V0Q3VyUGxheWVyTmFtZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjdXJyZW50Qm9hcmRBdHRhY2suaXNBbGxTaGlwU3VuaygpKSB7XG4gICAgICAgICAgd2lubmVyID0gcGxheWVyLmdldEN1clBsYXllck5hbWUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwbGF5QWdhaW4oKSB7XG4gICAgICBwbGF5ZXJUd28uYm9hcmQucGxheUFnYWluKCk7XG4gICAgfSxcblxuICAgIHJlc2V0KCkge1xuICAgICAgcGxheWVyVHdvLmJvYXJkLnJlc2V0KCk7XG4gICAgICByZW1vdmVTaGlwT25Gcm9tUGxheWVyVHdvQm9hcmQoKTtcbiAgICAgIHJlc2V0U2VsZWN0U2hpcEJvYXJkVHdvKCk7XG4gICAgfSxcbiAgfTtcblxuICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoZ2FtZVN0YXJ0KSByZXR1cm47XG5cbiAgICBtYWtlSW5wUmVhZE9ubHkoKTtcbiAgICBjb25zdCBpbnBDaGVja1BsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlucC1jaGVjay1wbGF5ZXJdOmNoZWNrZWQnKTtcblxuICAgIHBsYXllckluZm8ucGxheWVyT25lTmFtZSA9IHBsYXllcjFOYW1lLnZhbHVlLnRyaW0oKSAhPT0gJycgPyBwbGF5ZXIxTmFtZS52YWx1ZSA6ICdQbGF5ZXIgMSc7XG4gICAgcGxheWVySW5mby5wbGF5ZXJUd29OYW1lID0gcGxheWVyMk5hbWUudmFsdWUudHJpbSgpICE9PSAnJyA/IHBsYXllcjJOYW1lLnZhbHVlIDogJ1BsYXllciAyJztcblxuICAgIGlmIChpbnBDaGVja1BsYXllci5pZCA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgaXNCdHcgPSBodW1hbkFuZENvbXB1dGVyO1xuXG4gICAgICBwbGF5ZXJJbmZvLnBsYXllclR3byA9IGNvbXB1dGVyLmJvYXJkO1xuXG4gICAgICBpZiAoIXBsYXllck9uZS5ib2FyZC5pc0FsbFNoaXBTZXQoKSkge1xuICAgICAgICB0b2dnbGVQbGF5ZXJPbmVNc2coYCR7cGxheWVySW5mby5wbGF5ZXJPbmVOYW1lfSBzZXQgYWxsIHlvdXIgU2hpcGApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldENvbXB1dGVyU2hpcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0J0dyA9IGh1bWFuQW5kSHVtYW47XG5cbiAgICAgIHBsYXllckluZm8ucGxheWVyVHdvID0gcGxheWVyVHdvLmJvYXJkO1xuXG4gICAgICBpZiAoIXBsYXllck9uZS5ib2FyZC5pc0FsbFNoaXBTZXQoKSkge1xuICAgICAgICB0b2dnbGVQbGF5ZXJPbmVNc2coYCR7cGxheWVySW5mby5wbGF5ZXJPbmVOYW1lfSBzZXQgYWxsIHlvdXIgU2hpcGApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKCFwbGF5ZXJUd28uYm9hcmQuaXNBbGxTaGlwU2V0KCkpIHtcbiAgICAgICAgdG9nZ2xlUGxheWVyVHdvTXNnKGAke3BsYXllckluZm8ucGxheWVyVHdvTmFtZX0gc2V0IGFsbCB5b3VyIFNoaXBgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBbLi4ucGxheWVyVHdvQm9hcmQuY2hpbGRyZW5dLmZpbHRlcihmaWx0ZXJDZWxsV2l0aFNoaXApLmZvckVhY2gobWFrZVBvaW50ZXJOb25lKTtcbiAgICB9XG5cbiAgICBwbGF5ZXIgPSBQbGF5ZXIocGxheWVySW5mbyk7XG5cbiAgICBbLi4ucGxheWVyT25lQm9hcmQuY2hpbGRyZW5dLmZpbHRlcihmaWx0ZXJDZWxsV2l0aFNoaXApLmZvckVhY2gobWFrZVBvaW50ZXJOb25lKTtcbiAgICBzZXRQbGF5ZXJUdXJuTXNnKHBsYXllci5nZXRQbGF5ZXJPbmVOYW1lKCkpO1xuICAgIGdhbWVTdGFydCA9IHRydWU7XG4gIH1cblxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xuICAgIHdpbm5lciA9IGZhbHNlO1xuICAgIGdhbWVTdGFydCA9IGZhbHNlO1xuICAgIGdlbmVyYWxNc2cuaW5uZXJIVE1MID0gJ/Cfjq8nO1xuICAgIHJlbW92ZUF0dGFja0NlbGxNYXJrKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGxheUFnYWluKCkge1xuICAgIGlmICghaXNCdHcpIHJldHVybjtcblxuICAgIGdhbWVTdGFydCA9IHRydWU7XG5cbiAgICBpc0J0dy5wbGF5QWdhaW4oKTtcbiAgICBwbGF5ZXJPbmUuYm9hcmQucGxheUFnYWluKCk7XG4gICAgcmVtb3ZlQXR0YWNrQ2VsbE1hcmsoKTtcbiAgICBnZW5lcmFsTXNnLnRleHRDb250ZW50ID0gJ0dhbWUgT25nb2luZyc7XG4gICAgcmVzZXRCb2FyZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaWYgKCFpc0J0dykgcmV0dXJuO1xuXG4gICAgaXNCdHcucmVzZXQoKTtcbiAgICBwbGF5ZXJPbmUuYm9hcmQucmVzZXQoKTtcblxuICAgIHJlbW92ZUF0dGFja0NlbGxNYXJrKCk7XG4gICAgcmVtb3ZlU2hpcEZyb21QbGF5ZXJPbmVCb2FyZCgpO1xuICAgIHJlc2V0U2VsZWN0U2hpcEJvYXJkT25lKCk7XG4gICAgcmVtb3ZlUmVhZE9ubHlGcm9tSW5wKCk7XG4gICAgcmVzZXRCb2FyZCgpO1xuICB9XG5cbiAgY29uc3QgbWFya0hpdENlbGwgPSAoY2VsbEVsZW0sIGF0dGFja1N0YXRlKSA9PiB7XG4gICAgY29uc3QgYXR0YWNrQ2VsbFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGF0dGFja0NlbGxTdGF0dXMuY2xhc3NMaXN0LmFkZCgnYXR0YWNrQ2VsbFN0YXR1cycpO1xuICAgIGF0dGFja0NlbGxTdGF0dXMuc2V0QXR0cmlidXRlKCdkYXRhLWhpdC1zdGF0dXMnLCAnJyk7XG4gICAgYXR0YWNrQ2VsbFN0YXR1cy5pbm5lckhUTUwgPSBhdHRhY2tTdGF0ZSA9PT0gJ2hpdCcgPyAn8J+SpScgOiAn4p2MJztcbiAgICBjZWxsRWxlbS5hcHBlbmQoYXR0YWNrQ2VsbFN0YXR1cyk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVdpbm5lck1zZyA9ICh3aW5uZXIpID0+IHtcbiAgICBpZiAod2lubmVyKSB7XG4gICAgICBnZW5lcmFsTXNnLnRleHRDb250ZW50ID0gYCR7d2lubmVyfSB3b25gO1xuICAgICAgZ2FtZVN0YXJ0ID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyVHVybkNiID0gKGNvb3JkaW5hdGUsIGF0dGFja1N0YXRlKSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IHBsYXllck9uZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvb3JkaW5hdGU9XCIke2Nvb3JkaW5hdGV9XCJdYCk7XG5cbiAgICBpZiAoYXR0YWNrU3RhdGUgPT09ICdtaXNzJykge1xuICAgICAgc2V0UGxheWVyVHVybk1zZyhwbGF5ZXIuZ2V0UGxheWVyT25lTmFtZSgpKTtcbiAgICB9XG4gICAgbWFya0hpdENlbGwoY2VsbCwgYXR0YWNrU3RhdGUpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGF0dGFja1NoaXAoZSkge1xuICAgIGlmICghZ2FtZVN0YXJ0IHx8ICFpc0J0dykgcmV0dXJuO1xuXG4gICAgbGV0IGNlbGwgPSBlLnRhcmdldDtcbiAgICBjb25zdCBjb29yZGluYXRlID0gY2VsbC5kYXRhc2V0LmNvb3JkaW5hdGU7XG5cbiAgICBpc0J0dy5hdHRhY2tTaGlwKGNlbGwsIGNvb3JkaW5hdGUpO1xuICAgIGRpc3BsYXlXaW5uZXJNc2cod2lubmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNoaXAoZSkge1xuICAgIGlmIChnYW1lU3RhcnQpIHJldHVybjtcblxuICAgIGNvbnN0IGNlbGwgPSBlLnRhcmdldDtcbiAgICBjb25zdCBzaGlwID0gZS50YXJnZXQ7XG4gICAgY29uc3QgYm9hcmRFbGVtID0gY2VsbC5jbG9zZXN0KCdbZGF0YS1wbGF5ZXItYm9hcmRdJyk7XG4gICAgY29uc3QgYm9hcmQgPSBib2FyZEVsZW0uZGF0YXNldC5wbGF5ZXJCb2FyZCA9PT0gJ29uZScgPyBwbGF5ZXJPbmUuYm9hcmQgOiBwbGF5ZXJUd28uYm9hcmQ7XG4gICAgbGV0IGNvb3JkaW5hdGUgPSBjZWxsLmRhdGFzZXQuY29vcmRpbmF0ZTtcblxuICAgIGlmIChzaGlwLmRhdGFzZXQubGVuKSB7XG4gICAgICBjb29yZGluYXRlID0gc2hpcC5jbG9zZXN0KCdbZGF0YS1jb29yZGluYXRlXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlJyk7XG4gICAgICBpZiAoYm9hcmQuc3dpdGNoU2hpcEF4aXMoY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvb3JkaW5hdGUpIHtcbiAgICAgIGNvbnN0IHNoaXBFbGVtID0gc2hpcFNlbC5nZXRTZWxlY3RlZFNoaXAoKTtcbiAgICAgIGlmICghc2hpcEVsZW0pIHJldHVybjtcbiAgICAgIGNvbnN0IGlkID0gc2hpcEVsZW0uaWQ7XG4gICAgICBjb25zdCBsZW4gPSArc2hpcEVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWxlbicpO1xuXG4gICAgICBjb25zdCBpc1NoaXBTZXQgPSBib2FyZC5zZXRTaGlwKHsgaWQsIGxlbiB9LCBjb29yZGluYXRlKTtcbiAgICAgIGlmIChpc1NoaXBTZXQpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHBsYXllck9uZUJvYXJkKS53aWR0aDtcbiAgICAgICAgc2hpcEVsZW0uc3R5bGUubWluV2lkdGggPSBgJHsoK3dpZHRoLnJlcGxhY2UoL1thLXpdL2dpLCAnJykgLyAxMCkgKiBsZW59cHhgO1xuICAgICAgICBjZWxsLmFwcGVuZChzaGlwRWxlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaWQgPT09IHBsYXllck9uZUlEKSB7XG4gICAgICAgICAgdG9nZ2xlUGxheWVyT25lTXNnKCdJbnZhbGlkIFBvc2l0aW9uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9nZ2xlUGxheWVyVHdvTXNnKCdJbnZhbGlkIFBvc2l0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBzZXRTaGlwLCBzdGFydCwgcGxheUFnYWluLCByZXNldCwgYXR0YWNrU2hpcCB9O1xufVxuXG5jb25zdCBnYW1lID0gR2FtZSgpO1xuXG5hcHBlbmRTaGlwVGVtcGxhdGVPblNlbGVjdEJvYXJkKHBsYXllck9uZVNlbGVjdFNoaXBCb2FyZCwgcGxheWVyT25lSUQpO1xuYXBwZW5kU2hpcFRlbXBsYXRlT25TZWxlY3RCb2FyZChwbGF5ZXJUd29TZWxlY3RTaGlwQm9hcmQsIHBsYXllclR3b0lEKTtcblxuc2V0SW1nQmFja2dyb3VuZFRvQm9keSgpO1xuYXBwZW5kQ2VsbFRvQm9hcmQoKTtcbnRvZ2dsZVBsYXllcjJTZWxlY3RTaGlwQm9hcmQoKTtcblxuc2VsZWN0X3BsYXllcjJfb3JfY29tcHV0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlUmVzZXRTZWxlY3RTaGlwQm9hcmRUd28pO1xuXG5wbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZS5zdGFydCk7XG5yZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWUucmVzZXQpO1xucGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZS5wbGF5QWdhaW4pO1xuXG5wbGF5ZXJPbmVTZWxlY3RTaGlwQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaGlwU2VsLnNlbGVjdFNoaXApO1xucGxheWVyVHdvU2VsZWN0U2hpcEJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hpcFNlbC5zZWxlY3RTaGlwKTtcblxucGxheWVyT25lQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lLnNldFNoaXApO1xucGxheWVyVHdvQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lLnNldFNoaXApO1xuXG5wbGF5ZXJPbmVCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWUuYXR0YWNrU2hpcCk7XG5wbGF5ZXJUd29Cb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWUuYXR0YWNrU2hpcCk7XG5cbnRvZ2dsZVBsYXllck9uZVNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2dnbGVQbGF5ZXJPbmVTaGlwKTtcbnRvZ2dsZVBsYXllclR3b1NoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2dnbGVQbGF5ZXJUd29TaGlwKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNoaXBTZWwudW5zZWxlY3RTaGlwKCk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcih7IHBsYXllck9uZSwgcGxheWVyT25lTmFtZSwgcGxheWVyVHdvLCBwbGF5ZXJUd29OYW1lIH0pIHtcbiAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgY29uc3QgYWxsQ29vcmRpbmF0ZSA9IHBsYXllclR3by5nZXRBbGxDb29yZGluYXRlKCk7XG5cbiAgY29uc3QgcGxheWVyT25lSUQgPSBwbGF5ZXJPbmUuZ2V0SUQoKTtcbiAgY29uc3QgcGxheWVyVHdvSUQgPSBwbGF5ZXJUd28uZ2V0SUQoKTtcblxuICBsZXQgcGxheWVySUQgPSBwbGF5ZXJUd29JRDtcbiAgbGV0IGJvYXJkVG9BdHRhY2sgPSBwbGF5ZXJUd287XG4gIGxldCBwbGF5ZXJOYW1lID0gcGxheWVyT25lTmFtZTtcblxuICBjb25zdCBzd2l0Y2hQbGF5ZXJOYW1lID0gKCkgPT4ge1xuICAgIHBsYXllck5hbWUgPSBwbGF5ZXJOYW1lID09PSBwbGF5ZXJPbmVOYW1lID8gcGxheWVyVHdvTmFtZSA6IHBsYXllck9uZU5hbWU7XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoQm9hcmRJRCA9ICgpID0+IHtcbiAgICBwbGF5ZXJJRCA9IHBsYXllcklEID09PSBwbGF5ZXJUd29JRCA/IHBsYXllck9uZUlEIDogcGxheWVyVHdvSUQ7XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoQm9hcmQgPSAoKSA9PiB7XG4gICAgYm9hcmRUb0F0dGFjayA9IGJvYXJkVG9BdHRhY2sgPT09IHBsYXllclR3byA/IHBsYXllck9uZSA6IHBsYXllclR3bztcbiAgfTtcblxuICBjb25zdCBnZXRDdXJyZW50Qm9hcmRJRCA9ICgpID0+IHBsYXllcklEO1xuXG4gIGNvbnN0IGdldEN1clBsYXllck5hbWUgPSAoKSA9PiBwbGF5ZXJOYW1lO1xuXG4gIGNvbnN0IGdldEN1cnJlbnRCb2FyZFRvQXR0YWNrID0gKCkgPT4gYm9hcmRUb0F0dGFjaztcblxuICBjb25zdCBjb21wdXRlclNlbmRBdHRhY2sgPSAoY29vcmRpbmF0ZU9iaiwgbW9kZUtleSwgY29tcHV0ZXJUdXJuQ2IpID0+IHtcbiAgICBsZXQgaXNTaGlwSGl0ID0gcGxheWVyT25lLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZU9iai5jb29yZGluYXRlKSA9PT0gJ2hpdCc7XG5cbiAgICBjb25zdCBhdHRhY2tTdGF0ZSA9IGlzU2hpcEhpdCA/ICdoaXQnIDogJ21pc3MnO1xuXG4gICAgY29tcHV0ZXJUdXJuQ2IoY29vcmRpbmF0ZU9iai5jb29yZGluYXRlLCBhdHRhY2tTdGF0ZSk7XG5cbiAgICBhbGxDb29yZGluYXRlLnNwbGljZShhbGxDb29yZGluYXRlLmluZGV4T2YoY29vcmRpbmF0ZU9iai5jb29yZGluYXRlKSwgMSk7XG5cbiAgICBpZiAoaXNTaGlwSGl0KSB7XG4gICAgICBjb25zdCBhcnJPZkNvb3JkaW5hdGUgPSBzdGFjay5zaGlmdCgpO1xuXG4gICAgICBjb25zdCBzaGlwID0gcGxheWVyT25lLmdldEJvYXJkKClbY29vcmRpbmF0ZU9iai5jb29yZGluYXRlSW5kZXhdLmdldFNoaXAoKTtcblxuICAgICAgY29uc3QgaGl0ID0gc2hpcC5nZXRIaXQoKTtcbiAgICAgIGNvbnN0IGxlbiA9IHNoaXAubGVuKCk7XG5cbiAgICAgIC8vIFdoZW4gaGl0IGlzIDIgdGhlbiB0aGUgYXhpcyBvZiB0aGUgc2hpcCBpcyBjZXJ0YWluLCBzbyBmaWx0ZXIgdGhlIHByZXZpb3VzIGNvb3JkaW5hdGUgdG8gdGFyZ2V0IHRoYXQgYXhpc1xuICAgICAgaWYgKGhpdCA9PT0gMiAmJiBsZW4gPiAyKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkQXhpc1RvVHJ5ID0gYXJyT2ZDb29yZGluYXRlLmZpbHRlcigoY29vcmQpID0+IGNvb3JkLmF4aXMgPT09IGNvb3JkaW5hdGVPYmouYXhpcyk7XG5cbiAgICAgICAgaWYgKGNvb3JkQXhpc1RvVHJ5Lmxlbmd0aCkge1xuICAgICAgICAgIHN0YWNrLnVuc2hpZnQoY29vcmRBeGlzVG9UcnkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyck9mQ29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoYXJyT2ZDb29yZGluYXRlLmxlbmd0aCkge1xuICAgICAgICAgIHN0YWNrLnVuc2hpZnQoYXJyT2ZDb29yZGluYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBWYWxpZEFkamFjZW50Q29vcmRpbmF0ZUluT2JqID0gcGxheWVyT25lLmdldFZhbGlkQWRqYWNlbnRDb29yZGluYXRlSW5PYmooXG4gICAgICAgIGNvb3JkaW5hdGVPYmouY29vcmRpbmF0ZUluZGV4LFxuICAgICAgKTtcblxuICAgICAgLy8gVXNlIHRoZSBoaXQgYXhpcyBmcm9tIHByZXZpb3VzIGF0dGFjayB0byBmaWx0ZXIgdGhlIG5leHQgYXhpcyB0byBhdHRhY2tcbiAgICAgIGlmIChoaXQgPiAxICYmIGhpdCA8IGxlbikge1xuICAgICAgICBjb25zdCBjb29yZEF4aXNUb1RyeSA9IFZhbGlkQWRqYWNlbnRDb29yZGluYXRlSW5PYmouZmlsdGVyKFxuICAgICAgICAgIChjb29yZCkgPT4gY29vcmQuYXhpcyA9PT0gY29vcmRpbmF0ZU9iai5heGlzLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChjb29yZEF4aXNUb1RyeS5sZW5ndGgpIHN0YWNrLnVuc2hpZnQoY29vcmRBeGlzVG9UcnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKFZhbGlkQWRqYWNlbnRDb29yZGluYXRlSW5PYmoubGVuZ3RoKSBzdGFjay51bnNoaWZ0KFZhbGlkQWRqYWNlbnRDb29yZGluYXRlSW5PYmopO1xuICAgICAgfVxuXG4gICAgICBpZiAocGxheWVyT25lLmlzQWxsU2hpcFN1bmsoKSkgcmV0dXJuICdhbGxTdW5rJztcbiAgICAgIGlmIChjb21wdXRlclR1cm4oZmFsc2UsIG1vZGVLZXksIGNvbXB1dGVyVHVybkNiKSkgcmV0dXJuICdhbGxTdW5rJztcbiAgICB9IGVsc2UgaWYgKHN0YWNrWzBdKSB7XG4gICAgICBpZiAoc3RhY2tbMF0ubGVuZ3RoID09PSAwKSBzdGFjay5zaGlmdCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb21wdXRlclR1cm4gPSAocHJlZGljdGFibGVDb29yZGluYXRlT2JqLCBtb2RlS2V5ID0gJ3JhbmRvbUluZGV4JywgY29tcHV0ZXJUdXJuQ2IpID0+IHtcbiAgICBsZXQgY29vcmRpbmF0ZU9iaiA9IHByZWRpY3RhYmxlQ29vcmRpbmF0ZU9iajtcblxuICAgIGlmIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAvLyB0cnkgYWRqYWNlbnQgc2xvdFxuICAgICAgY29uc3QgY29vcmRpbmF0ZVRvVHJ5ID0gc3RhY2tbMF07XG5cbiAgICAgIGNvbnN0IG1vZGUgPSB7XG4gICAgICAgIHByZWRpY3RhYmxlSW5kZXg6ICgpID0+IGNvb3JkaW5hdGVUb1RyeS5sZW5ndGggLSAxLFxuICAgICAgICByYW5kb21JbmRleDogKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29vcmRpbmF0ZVRvVHJ5Lmxlbmd0aCksXG4gICAgICB9O1xuICAgICAgY29vcmRpbmF0ZU9iaiA9IGNvb3JkaW5hdGVUb1RyeS5zcGxpY2UobW9kZVttb2RlS2V5XSgpLCAxKVswXTtcbiAgICB9IGVsc2UgaWYgKCFwcmVkaWN0YWJsZUNvb3JkaW5hdGVPYmopIHtcbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsQ29vcmRpbmF0ZS5sZW5ndGgpO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGFsbENvb3JkaW5hdGVbcmFuZG9tSW5kZXhdLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBjb29yZGluYXRlSW5kZXggPSBwbGF5ZXJPbmUuZ2V0Q29vcmRpbmF0ZUluZGV4KGNvb3JkaW5hdGUpO1xuXG4gICAgICBjb29yZGluYXRlT2JqID0geyBjb29yZGluYXRlLCBjb29yZGluYXRlSW5kZXggfTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXB1dGVyU2VuZEF0dGFjayhjb29yZGluYXRlT2JqLCBtb2RlS2V5LCBjb21wdXRlclR1cm5DYik7XG4gIH07XG5cbiAgY29uc3QgaHVtYW5UdXJuID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICByZXR1cm4gcGxheWVyVHdvLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxheWVyT25lTmFtZSA9ICgpID0+IHBsYXllck9uZU5hbWU7XG5cbiAgY29uc3QgZ2V0UGxheWVyVHdvTmFtZSA9ICgpID0+IHBsYXllclR3b05hbWU7XG5cbiAgcmV0dXJuIHtcbiAgICBodW1hblR1cm4sXG4gICAgY29tcHV0ZXJUdXJuLFxuICAgIHN3aXRjaFBsYXllck5hbWUsXG4gICAgc3dpdGNoQm9hcmQsXG4gICAgc3dpdGNoQm9hcmRJRCxcbiAgICBnZXRDdXJyZW50Qm9hcmRUb0F0dGFjayxcbiAgICBnZXRDdXJQbGF5ZXJOYW1lLFxuICAgIGdldEN1cnJlbnRCb2FyZElELFxuICAgIGdldFBsYXllck9uZU5hbWUsXG4gICAgZ2V0UGxheWVyVHdvTmFtZSxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobGVuZ3RoLCBjb29yZGluYXRlKSB7XG4gIGxldCBoaXRDb3VudCA9IDA7XG4gIGxldCBheGlzID0gJ3hBeGlzJztcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0Q291bnQrKztcbiAgfTtcblxuICBjb25zdCBnZXRIaXQgPSAoKSA9PiBoaXRDb3VudDtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdENvdW50ID09PSBsZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgbGVuID0gKCkgPT4gbGVuZ3RoO1xuXG4gIGNvbnN0IHN3aXRjaEF4aXMgPSAoKSA9PiB7XG4gICAgYXhpcyA9IGF4aXMgPT09ICd4QXhpcycgPyAneUF4aXMnIDogJ3hBeGlzJztcbiAgfTtcblxuICBjb25zdCBnZXRBeGlzID0gKCkgPT4gYXhpcztcblxuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBoaXRDb3VudCA9IDA7XG4gICAgYXhpcyA9ICd4QXhpcyc7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29vcmRpbmF0ZSA9ICgpID0+IGNvb3JkaW5hdGU7XG5cbiAgcmV0dXJuIHsgaGl0LCBnZXRIaXQsIHJlc2V0LCBpc1N1bmssIGxlbiwgZ2V0QXhpcywgc3dpdGNoQXhpcywgZ2V0Q29vcmRpbmF0ZSB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChjYWNoZWRNb2R1bGUuZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgY2FjaGVkTW9kdWxlLmVycm9yO1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwiaW5kZXguXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5Y2MwYzFjN2E3YTY2YjUzOWNjOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImJhdHRsZXNoaXA6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgY3VycmVudE1vZHVsZURhdGEgPSB7fTtcbnZhciBpbnN0YWxsZWRNb2R1bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jO1xuXG4vLyBtb2R1bGUgYW5kIHJlcXVpcmUgY3JlYXRpb25cbnZhciBjdXJyZW50Q2hpbGRNb2R1bGU7XG52YXIgY3VycmVudFBhcmVudHMgPSBbXTtcblxuLy8gc3RhdHVzXG52YXIgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzID0gW107XG52YXIgY3VycmVudFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4vLyB3aGlsZSBkb3dubG9hZGluZ1xudmFyIGJsb2NraW5nUHJvbWlzZXMgPSAwO1xudmFyIGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cbi8vIFRoZSB1cGRhdGUgaW5mb1xudmFyIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzO1xudmFyIHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQsIGZldGNoUHJpb3JpdHkpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQsIGZldGNoUHJpb3JpdHkpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogX21haW4sXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IF9tYWluID8gdW5kZWZpbmVkIDogbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwW2ldXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcF0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvLyBpbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuXHRcdHJlc3VsdHNbaV0gPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbn1cblxuZnVuY3Rpb24gdW5ibG9jaygpIHtcblx0aWYgKC0tYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRcdFx0dmFyIGxpc3QgPSBibG9ja2luZ1Byb21pc2VzV2FpdGluZztcblx0XHRcdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0bGlzdFtpXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhY2tCbG9ja2luZ1Byb21pc2UocHJvbWlzZSkge1xuXHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cdFx0LyogZmFsbHRocm91Z2ggKi9cblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcysrO1xuXHRcdFx0cHJvbWlzZS50aGVuKHVuYmxvY2ssIHVuYmxvY2spO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSByZXR1cm4gZm4oKTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcucHVzaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXNvbHZlKGZuKCkpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRyZXR1cm4gc2V0U3RhdHVzKFwiY2hlY2tcIilcblx0XHQudGhlbihfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicHJlcGFyZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlcyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmNzc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0XHR9LCBbXSlcblx0XHRcdFx0KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkoYXBwbHlPblVwZGF0ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzIChzdGF0ZTogXCIgK1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0dXMgK1xuXHRcdFx0XHRcdFwiKVwiXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0YXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuXHR2YXIgcmVzdWx0cyA9IGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikge1xuXHRcdHJldHVybiBoYW5kbGVyKG9wdGlvbnMpO1xuXHR9KTtcblx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSB1bmRlZmluZWQ7XG5cblx0dmFyIGVycm9ycyA9IHJlc3VsdHNcblx0XHQubWFwKGZ1bmN0aW9uIChyKSB7XG5cdFx0XHRyZXR1cm4gci5lcnJvcjtcblx0XHR9KVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0aWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImFib3J0XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3JzWzBdO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG5cdHZhciBkaXNwb3NlUHJvbWlzZSA9IHNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG5cblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmRpc3Bvc2UpIHJlc3VsdC5kaXNwb3NlKCk7XG5cdH0pO1xuXG5cdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcblx0dmFyIGFwcGx5UHJvbWlzZSA9IHNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG5cdHZhciBlcnJvcjtcblx0dmFyIHJlcG9ydEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuXHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuXHR9O1xuXG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblxuXHR2YXIgb25BY2NlcHRlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcblx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdHJlc3VsdHNcblx0XHRcdC5maWx0ZXIoZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0LmFwcGx5O1xuXHRcdFx0fSlcblx0XHRcdC5tYXAoZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdH0pXG5cdClcblx0XHQudGhlbihmdW5jdGlvbiAoYXBwbHlSZXN1bHRzKSB7XG5cdFx0XHRhcHBseVJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlcykge1xuXHRcdFx0XHRpZiAobW9kdWxlcykge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KVxuXHRcdC50aGVuKG9uQWNjZXB0ZWQpO1xufVxuXG5mdW5jdGlvbiBhcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcblx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdGlmICghY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMpIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuYmFzZVVSSSkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGViYXR0bGVzaGlwXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0dmFyIHJlc3VsdCA9IG5ld01vZHVsZUZhY3Rvcnlcblx0XHRcdFx0PyBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpXG5cdFx0XHRcdDoge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdFx0fTtcblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0dmFyIGFjY2VwdFByb21pc2VzID0gW107XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9IGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0YWNjZXB0UHJvbWlzZXMucHVzaChyZXN1bHQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvbkFjY2VwdGVkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIxLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoYWNjZXB0UHJvbWlzZXMpXG5cdFx0XHRcdC50aGVuKG9uQWNjZXB0ZWQpXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0IWN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF1cblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==