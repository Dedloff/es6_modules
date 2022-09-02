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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n  constructor(id, make, model, year) {\n    this.id = id;\n    this.make = make;\n    this.model = model;\n    this.year = year;\n  }\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\n\nlet wishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//Dom Elements\nlet form = document.querySelector(\"#submitForm\");\n//select the input for carmake\nlet makeInput = document.querySelector(\"#makeInput\");\n\nlet modelInput = document.querySelector(\"#modelInput\");\n\nlet yearInput = document.querySelector(\"#yearInput\");\n\nlet makeDisplay = document.querySelector(\"#car-make\");\n\nlet modelDisplay = document.querySelector(\"#car-model\");\n\nlet yearDisplay = document.querySelector(\"#car-year\");\n\nlet removeBtn = document.querySelector(\"#removeBtn\");\n\nlet listUl = document.querySelector(\"#wishListContainer > ul\");\n\nform.addEventListener(\"submit\", addCar);\n\nremoveBtn.addEventListener(\"click\", removeCar);\n\n// Functions\n\nfunction showCarDetails(car) {\n  //update car display texts\n  makeDisplay.textContent = car.make;\n  modelDisplay.textContent = car.model;\n  yearDisplay.textContent = car.year;\n  //enable the remove btn\n  removeBtn.disabled = false;\n  //set the current car ID to the data-carID attribute\n  removeBtn.setAttribute(\"data-carId\", car.id);\n}\n\nfunction updateDOMList() {\n  //clear the ul contents\n  listUl.innerHTML = \"\";\n\n  //iterate through the list of cars\n\n  wishlist.list.forEach((car) => {\n    //add a li to the UL for each car\n    let li = document.createElement(\"li\");\n    li.textContent = car.model;\n    // add a click event listener to showCarDetails per list item click\n    li.addEventListener(\"click\", () => showCarDetails(car));\n    listUl.appendChild(li);\n  });\n}\n\nfunction addCar(event) {\n  event.preventDefault();\n\n  let make = makeInput.value;\n  let model = modelInput.value;\n  let year = yearInput.value;\n\n  wishlist.add(make, model, year);\n\n  updateDOMList();\n\n  //reset form values\n\n  makeInput.value = \"\";\n  modelInput.value = \"\";\n  yearInput.value = \"\";\n}\n\nfunction removeCar() {\n  let carId = removeBtn.getAttribute(\"data-carId\");\n\n  //remove selected car\n  wishlist.remove(carId);\n\n  updateDOMList(); // update the dom list\n\n  //reset display\n  makeDisplay.textContent = \"\";\n  modelDisplay.textContent = \"\";\n  yearDisplay.textContent = \"\";\n\n  //disable remove button\n  removeBtn.disabled = true;\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\n\nclass Wishlist {\n  //two class properties\n  list = [];\n  nextID = 0;\n\n  //two methods\n  add(make, model, year) {\n    //use the Car class to create a new car\n    let car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.nextID++, make, model, year);\n    //add that car to the wishlist list\n    this.list.push(car);\n  }\n\n  remove(carId) {\n    //find the car in te wishlist list that matches the remove id\n    let index = this.list.findIndex((car) => car.id == carId); //\n    //remove it and update wishlist list\n    this.list.splice(index, 1);\n  }\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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