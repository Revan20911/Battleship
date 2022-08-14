/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domBuilder */ \"./src/modules/domBuilder.js\");\n\n\nconst p1 = document.querySelector('#player1');\nconst p2 = document.querySelector('#player2');\n\nconst render = (() => {\n\n   const player1 = (0,_modules_domBuilder__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(p1);\n   const player2 = (0,_modules_domBuilder__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(p2);\n\n   console.log(player1.pBoard, player2.pBoard);\n   console.log(player1.pBoard.board[0]);\n\n})();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/Classes/Board.js":
/*!**************************************!*\
  !*** ./src/modules/Classes/Board.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\nclass Board{\n\n    constructor(board){\n\n        this.board  =  board || [];\n        if(!this.board.length) this.defaultBoardProps();\n    }\n\n    defaultBoardProps(){\n        for(let i = 0; i < this.board.length; i++){\n            this.board.push({Hit: false, Ship: false});\n        }\n    }\n\n    cellHit(cell){\n\n        this.board[cell].Hit = true;\n\n    }\n\n    cellShip(cell){\n\n        this.board[cell].Ship = true;\n    }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Classes/Board.js?");

/***/ }),

/***/ "./src/modules/domBuilder.js":
/*!***********************************!*\
  !*** ./src/modules/domBuilder.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderBoard\": () => (/* binding */ renderBoard)\n/* harmony export */ });\n/* harmony import */ var _Classes_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/Board */ \"./src/modules/Classes/Board.js\");\n\n\n\nconst renderBoard = ((grid) =>{\n\n    const board = [];\n    const cols = 10;\n    const rows = 10;\n\n    grid.style.setProperty('--grid-cols', cols);\n    grid.style.setProperty('--grid-rows', rows);\n\n    for(let a = 0; a < cols; a++){\n        for(let b = 0; b < rows; b++){\n\n            let x = a;\n            let y = b;\n\n            let gridItem = document.createElement('div');\n            grid.appendChild(gridItem);\n            grid.appendChild(gridItem).className = \"cell\";\n            grid.appendChild(gridItem).addEventListener('click', () => {\n\n                \n\n            });\n\n            board.push(gridItem,x,y);\n        }\n    }\n    const pBoard = new _Classes_Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](board);\n\n\n    return {pBoard};\n});\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/domBuilder.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;