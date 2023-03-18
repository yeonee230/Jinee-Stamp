/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/main.js":
/*!*******************************!*\
  !*** ./src/client/js/main.js ***!
  \*******************************/
/***/ (() => {

eval("const btnFood = document.getElementById(\"btnFood\");\nconst btnBook = document.getElementById(\"btnBook\");\nconst user = document.getElementById(\"name\");\nconst tbody = document.querySelector('#position tbody');\nconst cells = document.querySelectorAll(\"#position td\");\nfor (var i = 0; i < cells.length; i++) {\n  cells[i].addEventListener(\"click\", async function () {\n    console.log('click!');\n    const page_id = this.dataset.id;\n    const name = this.dataset.name;\n    const point = Number(this.innerHTML) + 1;\n    await fetch(`/update/${page_id}`, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        point,\n        name\n      })\n    });\n  });\n}\n\n//# sourceURL=webpack://jinee-stamp/./src/client/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/main.js"]();
/******/ 	
/******/ })()
;