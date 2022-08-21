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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domBuilder */ \"./src/modules/domBuilder.js\");\n/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Game */ \"./src/modules/Game.js\");\n\n\n\n\n\nconst init = (() => {\n\n  _modules_domBuilder__WEBPACK_IMPORTED_MODULE_0__.render;\n   \n\n})();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/Classes/Board.js":
/*!**************************************!*\
  !*** ./src/modules/Classes/Board.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\nclass Board{\n\n    constructor(board){\n\n        this.board  =  board || [];\n    }\n  \n    cellShip(cell){\n\n        cell.hasShip = true;\n    }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Classes/Board.js?");

/***/ }),

/***/ "./src/modules/Classes/Cells.js":
/*!**************************************!*\
  !*** ./src/modules/Classes/Cells.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cells\": () => (/* binding */ Cells)\n/* harmony export */ });\nclass Cells{\n    constructor(x,y, element){\n\n        this.x = x;\n        this.y = y;\n        this.element = element;\n        this.hasShip = false;\n        this.isHit = false;\n        \n        \n    }\n\n    color(){\n\n        this.element\n            .style\n            .backgroundColor = 'red';\n    }\n\n    cellHit(){\n\n        this.isHit = true;\n\n    }\n\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Classes/Cells.js?");

/***/ }),

/***/ "./src/modules/Classes/Ship.js":
/*!*************************************!*\
  !*** ./src/modules/Classes/Ship.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship{\n    constructor(len, name, position){\n\n        this.name = name;\n        this.position = position || [];\n        this.len = len;\n    }\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Classes/Ship.js?");

/***/ }),

/***/ "./src/modules/Factories/shipFactory.js":
/*!**********************************************!*\
  !*** ./src/modules/Factories/shipFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateFleet\": () => (/* binding */ generateFleet),\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\n/* harmony import */ var _Classes_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Ship */ \"./src/modules/Classes/Ship.js\");\n\n\n\nconst generateFleet = (() => {\n\n    const playerFleet = [];\n\n    const carrier = {\n\n        name: 'Carrier',\n        len: 5,\n    }\n\n    const battleship = {\n\n        name: 'Battleship',\n        len: 4,\n    }\n\n    const destroyer = {\n\n        name: 'Destroyer',\n        len: 3,\n    }\n\n    const submarine = {\n\n        name: 'Submarine',\n        len: 3,\n    }\n\n    const ptboat = {\n\n        name: 'Patrol Boat',\n        len: 2,\n    }\n\n    const fleet = [carrier, battleship, destroyer, submarine, ptboat];\n    fleet.forEach((ship) =>{\n        const fleetShip = new _Classes_Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(ship.len, ship.name);\n        playerFleet.push(fleetShip);\n    })\n\n    return { playerFleet };\n\n});\n\nconst shipFactory = (() => {\n\n    function placeShip(fleetShip, clickedCell, axis, board){\n\n        let x = clickedCell.x;\n        let y = clickedCell.y;\n\n        if(axis === 'x'){\n            for(let i = 0; i < fleetShip.len; i++){\n\n                fleetShip\n                    .position\n                    .push([x + i, y]);\n            }\n        }\n        else if(axis === 'y'){\n            for(let i = 0; i < fleetShip.len; i++){\n\n                fleetShip\n                    .position\n                    .push([x, y + i]);\n            }\n        }\n        setCells(board, fleetShip.position, '');\n    }\n\n    function placeOpponentShips(fleetShip, axis, board){\n\n        //TODO: Create function that adds ships to the opponent's board and make them invisible.\n\n        let clickedCell = randomCell(board);\n            \n    \n        let x = clickedCell.x;\n        let y = clickedCell.y;\n\n            if(axis === 'x'){\n                for(let i = 0; i < fleetShip.len; i++){\n    \n                    fleetShip\n                        .position\n                        .push([x + i, y]);\n                }\n            }\n            else if(axis === 'y'){\n                \n                for(let i = 0; i < fleetShip.len; i++){\n\n                    if(y + fleetShip.len < 9){\n\n                        if(checkCellIsOccupied(board, x, y + i) === 0){\n\n\n                        fleetShip\n                        .position\n                        .push([x, y + i]);\n\n                        setCells(board, fleetShip.position,  'opponent');\n\n                        }\n                        else if(checkCellIsOccupied(board, x, y + i) != 0){\n\n                            fleetShip\n                            .position\n                            .push([x - i, y]);\n\n                            setCells(board, fleetShip.position, 'opponent');\n                            }\n            \n                    }\n                    else if( y + fleetShip.len >= 9){\n    \n                        if(checkCellIsOccupied(board, x, y - i) === 0){\n\n                            fleetShip\n                            .position\n                            .push([x, y - i]);\n\n\n                            setCells(board, fleetShip.position, 'opponent');\n\n                            }\n                            else if(checkCellIsOccupied(board, x, y - i) != 0){\n\n            \n                            fleetShip\n                            .position\n                            .push([x - i, y]);\n\n                            setCells(board, fleetShip.position, 'opponent');\n                            }\n                    }\n            }\n           \n        }\n    }\n\n    function checkCellIsOccupied(board, x, y){\n\n     let arr = [];\n\n     \n\n     board.board.forEach((cell) => {\n\n        if(cell.x == x && cell.y == y){\n            if(cell.hasShip == true){\n\n               arr.push('');\n\n            }\n        }\n\n     })\n     console.log(arr.length);\n\n     return arr.length;\n\n    }\n\n    function setCells(board, position, player){\n\n        board.board.forEach((cell) => {\n\n            for(let i = 0; i < position.length; i++){\n\n                if(cell.x == position[i][0] && cell.y == position[i][1]){\n\n                    board.cellShip(cell);\n\n                    if(player == ''){\n                        cell.color();\n\n                    }\n                    \n                }\n            }\n        })\n    }\n\n    function randomCell(board){\n\n        var len = 5;\n        let cellArr = [];\n\n        for(let i = 0; i < len; i++){\n\n            var rand = Math.floor(Math.random() * 99);\n            cellArr.push(rand);\n           \n\n        }\n        console.log(cellArr);\n\n        var random = Math.floor(Math.random() * 4);\n\n        console.log(random);\n\n        for(let j = 0; j < 5; j++){\n\n            if(board.board[cellArr[j]].hasShip == false){\n\n                // if(board.board[cellArr[j]].nextCell().hasShip == true){\n\n                //     break;\n                // }\n\n                var ship = board.board[cellArr[j]]; \n                board.cellShip(ship);\n                break;\n            }\n            else if(board.board[cellArr[j]].hasShip == true){\n\n                continue;\n            }\n            break;\n        }\n        \n        console.log(ship);\n        return ship;\n    \n    }\n\n   return { placeShip, placeOpponentShips };\n})();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Factories/shipFactory.js?");

/***/ }),

/***/ "./src/modules/Game.js":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"declareWinner\": () => (/* binding */ declareWinner),\n/* harmony export */   \"gameStart\": () => (/* binding */ gameStart),\n/* harmony export */   \"opponentTurn\": () => (/* binding */ opponentTurn),\n/* harmony export */   \"restartGame\": () => (/* binding */ restartGame),\n/* harmony export */   \"updateScore\": () => (/* binding */ updateScore)\n/* harmony export */ });\n/* harmony import */ var _domBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domBuilder */ \"./src/modules/domBuilder.js\");\n/* harmony import */ var _Factories_shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factories/shipFactory */ \"./src/modules/Factories/shipFactory.js\");\n\n\n\n//TODO: Add ability to swtch the axis.\n\nlet winMessage = document.querySelector('#winMessage');\nlet oscore = document.querySelector('#opponentscore');\n\nlet axis = 'y';\nfunction gameStart(){\n\n\n    let fleet = (0,_Factories_shipFactory__WEBPACK_IMPORTED_MODULE_1__.generateFleet)().playerFleet;\n\n    for(let i = 0; i < fleet.length; i++){\n\n        _Factories_shipFactory__WEBPACK_IMPORTED_MODULE_1__.shipFactory.placeOpponentShips(fleet[i], 'y', _domBuilder__WEBPACK_IMPORTED_MODULE_0__.render.opponentBoard);\n    }\n\n}\n\nfunction opponentTurn(){\n\n    let opponentScore = 0;\n    \n\n    var random = Math.floor(Math.random() * 99)+1;\n\n    let cell = _domBuilder__WEBPACK_IMPORTED_MODULE_0__.render.playerBoard.pBoard.board[random];\n\n    if(cell.hasShip == true && cell.isHit == false){\n\n        cell.element.style.backgroundColor = 'green';\n        opponentScore++;\n        updateScore(oscore);\n        cell.cellHit();\n\n        declareWinner(oscore, 'CPU');\n\n        \n\n    }\n\n    else if(cell.hasShip == false && cell.isHit == false){\n\n        cell.element.style.backgroundColor = 'blue';\n        cell.cellHit();\n    }\n\n   \n\n}\n\nfunction declareWinner(score, player){\n\n    if(score.innerHTML == 17){\n\n        //TODO: Create an element that shows the winner\n        \n        console.log('Winner', score);\n        gameEnd(player);\n    }\n\n}\n\nfunction restartGame(){\n\n    location.reload();\n    return false;\n\n}\n\nfunction changeAxis(){\n\n    if(axis = 'y'){\n\n        axis = 'x';\n    }\n\n    axis = 'y';\n\n}\n\nfunction gameEnd(player){\n\n\n    winMessage.style.display = 'flex';\n    winMessage.innerText = player + ' Wins!'; \n    \n\n\n\n}\n\nfunction updateScore(element){\n\n    element.innerHTML++;\n\n}\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/Game.js?");

/***/ }),

/***/ "./src/modules/domBuilder.js":
/*!***********************************!*\
  !*** ./src/modules/domBuilder.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _Classes_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/Board */ \"./src/modules/Classes/Board.js\");\n/* harmony import */ var _Factories_shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factories/shipFactory */ \"./src/modules/Factories/shipFactory.js\");\n/* harmony import */ var _Classes_Cells__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes/Cells */ \"./src/modules/Classes/Cells.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game */ \"./src/modules/Game.js\");\n\n\n\n\n\n\n\nconst renderBoard = ((grid, axis, player, score) =>{\n\n    const board = [];\n    const cols = 10;\n    const rows = 10;\n    const fleet = (0,_Factories_shipFactory__WEBPACK_IMPORTED_MODULE_1__.generateFleet)().playerFleet;\n    var count = 0;\n\n    grid\n        .style\n        .setProperty('--grid-cols', cols);\n    grid\n        .style\n        .setProperty('--grid-rows', rows);\n\n    for(let a = 0; a < cols; a++){\n        for(let b = 0; b < rows; b++){\n\n            let gridItem = document.createElement('div');\n\n            grid\n                .appendChild(gridItem);\n\n            grid\n                .appendChild(gridItem)\n                .className = \"cell\";\n\n            \n            if(player == ''){\n\n                grid\n                .appendChild(gridItem)\n                .addEventListener('click', function addShips(){\n\n                const ship = fleet[count];\n\n                if(cell.hasShip == false){\n\n                    _Factories_shipFactory__WEBPACK_IMPORTED_MODULE_1__.shipFactory.placeShip(ship, cell, axis, pBoard);\n                        \n                    count++;\n    \n                    if(count > 4){\n                        count = count - fleet.length;\n                        (0,_Game__WEBPACK_IMPORTED_MODULE_3__.gameStart)();\n                        \n                        console.log('All ships placed', count);\n                        \n                    }\n                }\n\n                });\n\n            }\n\n            else if( player == 'opponent'){\n\n                grid\n                .appendChild(gridItem)\n                .addEventListener('click', function playerTurn(){\n\n                    \n\n                    let playerScore = 0;\n                    \n\n                    if(cell.hasShip == true && cell.isHit == false){\n\n                        \n                \n                        cell.element.style.backgroundColor = 'green';\n\n                        (0,_Game__WEBPACK_IMPORTED_MODULE_3__.updateScore)(score);\n                        \n                        playerScore++;\n\n                        (0,_Game__WEBPACK_IMPORTED_MODULE_3__.declareWinner)(score, 'Player');\n                        \n                        cell.cellHit();\n                \n                        \n                        \n                \n                    }\n                \n                    else if(cell.hasShip == false && cell.isHit == false){\n                \n                        cell.element.style.backgroundColor = 'blue';\n                        cell.cellHit();\n                    }\n\n                    \n\n                    (0,_Game__WEBPACK_IMPORTED_MODULE_3__.opponentTurn)();\n                \n                });\n\n            }\n\n            //Creates cell objects and assigns the gridItem as the element property of the object.\n            //Pushes new cell to the board array and then returns the array.\n\n            const cell = new _Classes_Cells__WEBPACK_IMPORTED_MODULE_2__.Cells(a, b, gridItem);\n            board.push(cell);\n        }\n    }\n\n    const pBoard = new _Classes_Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](board);\n    console.log(pBoard);\n    return {pBoard};\n});\n\n\nconst render = (() => {\n\n    const pscore = document.getElementById('playerscore');\n\n    const axis = 'y';\n    const p1 = document.querySelector('#player1');\n    const playerBoard = renderBoard(p1, axis, '');\n\n\n    // const endScreen = document.querySelector('#endScreen');\n    \n\n    const restartBtn = document.querySelector('#restart');\n    restartBtn.addEventListener('click', _Game__WEBPACK_IMPORTED_MODULE_3__.restartGame);\n\n    // const axisBtn = document.querySelector('#axis');\n    // axisBtn.addEventListener('click', changeAxis);\n\n    const opponentBoardGrid = document.querySelector('#player2');\n    const opponentBoard = renderBoard(opponentBoardGrid, 'y', 'opponent',pscore).pBoard;\n    return {opponentBoard, playerBoard};\n    \n})();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/domBuilder.js?");

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