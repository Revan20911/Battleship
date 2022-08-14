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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domBuilder */ \"./src/modules/domBuilder.js\");\n\n\nconst p1 = document.querySelector('#player1');\nconst p2 = document.querySelector('#player2');\n\nconst axis = 'y';\n\nconst render = (() => {\n\n   const player1 = (0,_modules_domBuilder__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(p1, axis);\n   const player2 = (0,_modules_domBuilder__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(p2, axis);\n\n})();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/Classes/Board.js":
/*!**************************************!*\
  !*** ./src/modules/Classes/Board.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\nclass Board{\n\n    constructor(board){\n\n        this.board  =  board || [];\n    }\n    cellHit(cell){\n\n        this.board[cell].Hit = true;\n    }\n    cellShip(cell){\n\n        this.board[cell].Ship = true;\n    }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Classes/Board.js?");

/***/ }),

/***/ "./src/modules/Classes/Cells.js":
/*!**************************************!*\
  !*** ./src/modules/Classes/Cells.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cells\": () => (/* binding */ Cells)\n/* harmony export */ });\nclass Cells{\n    constructor(x,y, element){\n\n        this.x = x;\n        this.y = y;\n        this.hasShip = false;\n        this.element = element;\n    }\n\n    color(){\n\n        this.element\n            .style\n            .backgroundColor = 'red';\n    }\n\n    isOccupied(){\n        return this.hasShip;\n    }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Classes/Cells.js?");

/***/ }),

/***/ "./src/modules/Classes/Ship.js":
/*!*************************************!*\
  !*** ./src/modules/Classes/Ship.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship{\n    constructor(len, name, position){\n\n        this.name = name;\n        this.position = position || [];\n        this.damage = [];\n        this.len = len;\n        this.isSunk = this.CheckIfSunk();\n\n    }\n\n    hit(index){\n        this.damage\n            .push(index);\n    }\n\n    CheckIfSunk(){\n        if(this.damage.length == this.len){ this.isSunk == true; }\n        else{ this.isSunk == false; }\n        return this.isSunk;\n    }\n\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Classes/Ship.js?");

/***/ }),

/***/ "./src/modules/Factories/shipFactory.js":
/*!**********************************************!*\
  !*** ./src/modules/Factories/shipFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateFleet\": () => (/* binding */ generateFleet),\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\n/* harmony import */ var _Classes_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Ship */ \"./src/modules/Classes/Ship.js\");\n\n\n\nconst generateFleet = (() => {\n\n    const playerFleet = [];\n\n    const carrier = {\n\n        name: 'Carrier',\n        len: 5,\n    }\n\n    const battleship = {\n\n        name: 'Battleship',\n        len: 4,\n    }\n\n    const destroyer = {\n\n        name: 'Destroyer',\n        len: 3,\n    }\n\n    const submarine = {\n\n        name: 'Submarine',\n        len: 3,\n    }\n\n    const ptboat = {\n\n        name: 'Patrol Boat',\n        len: 2,\n    }\n\n\n    const fleet = [carrier, battleship, destroyer, submarine, ptboat];\n\n    \n\n    fleet.forEach((ship) =>{\n\n        const fleetShip = new _Classes_Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(ship.len, ship.name);\n\n        playerFleet.push(fleetShip);\n    })\n\n\n    return { playerFleet };\n\n})();\n\nconst shipFactory = (() => {\n\n\n    function placeShip(fleetShip, clickedCell, axis, board){\n\n        let x = clickedCell.x;\n        let y = clickedCell.y;\n\n        if(axis === 'x'){\n    \n            for(let i = 0; i < fleetShip.len; i++){\n\n                fleetShip\n                    .position\n                    .push([x + i, y]);\n                \n            }\n            setCells(board, fleetShip.position);\n        }\n        else if(axis === 'y'){\n\n            for(let i = 0; i < fleetShip.len; i++){\n\n                fleetShip\n                    .position\n                    .push([x, y + i]);\n                \n            }\n            setCells(board, fleetShip.position);\n        }\n        \n    }\n\n    function setCells(board, position){\n\n        board.board.forEach((cell) => {\n            \n            for(let i = 0; i < position.length; i++){\n\n                if(cell.x == position[i][0] && cell.y == position[i][1]){\n\n                    cell.hasShip = true;\n                    cell.color();\n                    console.log(cell);\n\n                }\n\n            }\n        })\n    }\n\n   return { placeShip };\n})();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Factories/shipFactory.js?");

/***/ }),

/***/ "./src/modules/domBuilder.js":
/*!***********************************!*\
  !*** ./src/modules/domBuilder.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameButtons\": () => (/* binding */ gameButtons),\n/* harmony export */   \"renderBoard\": () => (/* binding */ renderBoard)\n/* harmony export */ });\n/* harmony import */ var _Classes_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/Board */ \"./src/modules/Classes/Board.js\");\n/* harmony import */ var _Factories_shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factories/shipFactory */ \"./src/modules/Factories/shipFactory.js\");\n/* harmony import */ var _Classes_Cells__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes/Cells */ \"./src/modules/Classes/Cells.js\");\n\n\n\n\n\n\nconst renderBoard = ((grid, axis) =>{\n\n    const board = [];\n    const cols = 10;\n    const rows = 10;\n    const fleet = _Factories_shipFactory__WEBPACK_IMPORTED_MODULE_1__.generateFleet.playerFleet;\n\n    let count = 0;\n\n    grid\n        .style\n        .setProperty('--grid-cols', cols);\n\n    grid\n        .style\n        .setProperty('--grid-rows', rows);\n\n    for(let a = 0; a < cols; a++){\n        for(let b = 0; b < rows; b++){\n\n            let gridItem = document.createElement('div');\n\n            grid\n                .appendChild(gridItem);\n\n            grid\n                .appendChild(gridItem)\n                .className = \"cell\";\n\n            grid\n                .appendChild(gridItem)\n                .addEventListener('click', function addShips(){\n\n                const ship = fleet[count];\n\n                if(cell.hasShip == false){\n\n                    _Factories_shipFactory__WEBPACK_IMPORTED_MODULE_1__.shipFactory.placeShip(ship, cell, axis, pBoard);\n                        \n                    count++;\n    \n                    if(count > 4){\n                        console.log('All ships placed');\n\n                        \n                    }\n                }\n\n            });\n\n            //Creates cell objects and assigns the gridItem as the element property of the object.\n            //Pushes new cell to the board array and then returns the array.\n\n            const cell = new _Classes_Cells__WEBPACK_IMPORTED_MODULE_2__.Cells(a, b, gridItem);\n            board.push(cell);\n        }\n    }\n\n    const pBoard = new _Classes_Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](board);\n\n    return {pBoard};\n});\n\nconst gameButtons = (() => {\n\n\n})\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/domBuilder.js?");

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