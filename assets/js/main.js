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

eval("/* 파일 역할 : table 안의 아이템 클릭시 노션에 업데이트 하기 위해 필요한 정보 서버로 보내기 \n  (if click item in table, send data to server )  */\nconst btnFood = document.getElementById(\"btnFood\");\nconst btnBook = document.getElementById(\"btnBook\");\nconst user = document.getElementById(\"name\");\n// const tbody = document.querySelector(\"#position tbody\");\nconst cells = document.querySelectorAll(\"#position td\");\nconst total = document.getElementById(\"total\");\nconsole.log(total);\n\n// for (var i = 0; i < cells.length; i++) {\n//   cells[i].addEventListener(\"click\", async function () {\n//     console.log(\"click!!\");\n//     console.log(this);\n//     const row = cells.parentNode;\n//     console.log(row);\n\n//     const page_id = this.dataset.id;\n//     const name = this.dataset.name;\n\n//     const point = Number(this.innerHTML) + 1;\n\n//     await fetch(`/update/${page_id}`, {\n//       method: \"POST\",\n//       headers: {\n//         \"Content-Type\": \"application/json\",\n//       },\n//       body: JSON.stringify({ point, name }),\n//     });\n\n//     //화면에 표시\n//     this.innerHTML = `${point}`;\n//   });\n// }\n\n// Add click event listener to each cell\ncells.forEach(cell => {\n  cell.addEventListener('click', async () => {\n    console.log(\"click!!\");\n    // Get parent row of clicked cell\n    const row = cell.parentNode;\n    const page_id = cell.dataset.id;\n    const name = cell.dataset.name;\n    const total = row.children.total;\n    console.log(row);\n    console.log(row.children.total);\n    const point = Number(cell.innerHTML) + 1;\n    const totalPoint = Number(total.innerHTML) + 1;\n    await fetch(`/update/${page_id}`, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        point,\n        name\n      })\n    });\n\n    //화면에 표시\n    cell.innerHTML = `${point}`;\n    total.innerHTML = `${totalPoint}`;\n  });\n});\n\n//# sourceURL=webpack://jinee-stamp/./src/client/js/main.js?");

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