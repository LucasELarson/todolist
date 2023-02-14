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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { addProj, addTodo, removeProj, removeTodo } = __webpack_require__(/*! ./load */ \"./src/load.js\");\nlet projInput;\nlet todoInput;\n\nsetTimeout(() => {\n   // The Adding of a new project //\n   const projName = document.querySelector(\"#addproj\");\n   projName.addEventListener(\"click\", (e) => {\n      const x = document.getElementById(\"textinput\");\n      const y = document.getElementById(\"remproj\");\n      projInput = document.getElementById(\"inputinput\");\n      if (x.style.display === \"none\") {\n         x.style.display = \"block\";\n         y.style.display = \"block\";\n         projName.innerHTML = \"Add\";\n      } else {\n         addProj();\n         x.style.display = \"none\";\n         y.style.display = \"none\";\n         projInput.value = \"\";\n         projName.innerHTML = \"Edit Projects\";\n      }\n   });\n   const projNameClose = document.querySelector(\"#remproj\");\n   projNameClose.addEventListener(\"click\", (e) => {\n      const x = document.getElementById(\"textinput\");\n      const y = document.getElementById(\"remproj\");\n      projInput = document.getElementById(\"inputinput\");\n      if (x.style.display === \"block\") {\n         removeProj();\n         x.style.display = \"none\";\n         projInput.value = \"\";\n         y.style.display = \"none\";\n         projName.innerHTML = \"Edit Projects\";\n      }\n   });\n\n   // Adding A Todo Item //\n   const tdName = document.querySelector(\"#addtodo\");\n   tdName.addEventListener(\"click\", (e) => {\n      const x = document.getElementById(\"tdtextinput\");\n      const y = document.getElementById(\"remtodo\");\n      todoInput = document.getElementById(\"tdinputinput\");\n      if (x.style.display === \"none\") {\n         x.style.display = \"block\";\n         y.style.display = \"block\";\n         tdName.innerHTML = \"Add\";\n      } else {\n         addTodo();\n         x.style.display = \"none\";\n         y.style.display = \"none\";\n         todoInput.value = \"\";\n         tdName.innerHTML = \"Edit ToDos\";\n      }\n   });\n   const tdNameClose = document.querySelector(\"#remtodo\");\n   tdNameClose.addEventListener(\"click\", (e) => {\n      const x = document.getElementById(\"tdtextinput\");\n      const y = document.getElementById(\"remtodo\");\n      todoInput = document.getElementById(\"tdinputinput\");\n      if (x.style.display === \"block\") {\n         removeTodo();\n         x.style.display = \"none\";\n         todoInput.value = \"\";\n         y.style.display = \"none\";\n         tdName.innerHTML = \"Edit ToDos\";\n      }\n   });\n\n   // Toggles Correct Todo Items When a Project is focused //\n}, 1000);\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProj\": () => (/* binding */ addProj),\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"removeProj\": () => (/* binding */ removeProj),\n/* harmony export */   \"removeTodo\": () => (/* binding */ removeTodo)\n/* harmony export */ });\nlet makeTodoList;\nlet todoItems;\nlet tdName;\n\n// creates a project //\nfunction addProj() {\n   const todoTitle = document.querySelector(\"#tdtitle\");\n   const projName = document.getElementById(\"inputinput\").value;\n   todoItems = document.getElementById(\"todoitems\");\n\n   const projects = document.getElementById(\"project\");\n\n   const ppDiv = document.createElement(\"div\");\n   ppDiv.id = \"pp\";\n   ppDiv.classList.add(\"pp\");\n\n   const ppLabel = document.createElement(\"label\");\n   ppLabel.classList.add(\"radio\");\n\n   const ppButton = document.createElement(\"input\");\n   ppButton.type = \"radio\";\n   ppButton.name = \"radio\";\n\n   const ppSpan = document.createElement(\"span\");\n   ppSpan.classList.add(\"checkmark\");\n\n   ppLabel.appendChild(ppButton);\n   ppLabel.appendChild(ppSpan);\n   ppDiv.appendChild(ppLabel);\n   projects.appendChild(ppDiv);\n   ppDiv.insertAdjacentHTML(\"beforeend\", projName);\n   ppDiv.addEventListener(\"click\", (e) => {\n      todoTitle.innerHTML = ppDiv.innerText;\n      const list = document.getElementsByClassName(\"item\");\n      for (const item of list) {\n         if (item.classList.value === todoTitle.innerHTML + \" item\") {\n            item.style.display = \"grid\";\n         } else {\n            item.style.display = \"none\";\n         }\n      }\n   });\n\n   // Creates an Empty todo list //\n   makeTodoList = document.createElement(\"div\");\n   makeTodoList.id = \"todolist\";\n   makeTodoList.classList.add(ppDiv.innerText);\n   makeTodoList.classList.add(\"item\");\n   makeTodoList.style.display = \"none\";\n   todoItems.appendChild(makeTodoList);\n}\n\nfunction addTodo() {\n   const todoTitle = document.querySelector(\"#tdtitle\");\n   tdName = document.getElementById(\"tdinputinput\").value;\n   const todolist = document.createElement(\"div\");\n   todolist.id = \"todo\";\n\n   const tdDiv = document.createElement(\"div\");\n   tdDiv.id = \"td\";\n   tdDiv.classList.add(\"td\");\n\n   const tdButton = document.createElement(\"input\");\n   tdButton.type = \"checkbox\";\n   tdButton.name = \"check\";\n   tdButton.classList.add(\"checkbox\");\n\n   const tdText = document.createElement(\"h5\");\n   tdText.innerHTML = tdName;\n\n   const tdDate = document.createElement(\"input\");\n   tdDate.type = \"datetime-local\";\n   tdDate.name = \"date\";\n   tdDate.id = \"date\";\n\n   const IDDiv = document.createElement(\"div\");\n   IDDiv.innerHTML = tdDiv.appendChild(tdButton);\n   tdDiv.appendChild(tdText);\n   tdDiv.appendChild(tdDate);\n   todolist.appendChild(tdDiv);\n   // makeTodoList.appendChild(todolist);\n\n   const list = document.getElementsByClassName(\"item\");\n   for (const item of list) {\n      if (String(item.classList.value) === String(todoTitle.innerText + \" item\")) {\n         console.log(\"they equal\");\n         item.appendChild(todolist);\n      } else {\n         console.log(\"it no equal\");\n      }\n   }\n}\n\n// remove a project and all of its todos //\nfunction removeProj() {\n   const projName = document.getElementById(\"inputinput\").value;\n   const proj = document.getElementsByClassName(\"pp\");\n   for (const item of proj) {\n      if (item.innerText === projName) {\n         item.remove();\n         const list = document.getElementsByClassName(\"item\");\n         for (const tos of list) {\n            if (String(tos.classList.value) === String(projName + \" item\")) {\n               tos.remove();\n            } else {\n               console.log(\"it no equal\");\n            }\n         }\n      } else {\n         console.log(\"no match\");\n      }\n   }\n}\n\nfunction removeTodo() {\n   const tdH5 = document.getElementById(\"tdinputinput\").value;\n   const tdItem = document.getElementsByClassName(\"td\");\n   for (const item of tdItem) {\n      if (item.innerText === tdH5) {\n         item.remove();\n      } else {\n         console.log(\"trying next\");\n      }\n   }\n}\n\n\n//# sourceURL=webpack://todolist/./src/load.js?");

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