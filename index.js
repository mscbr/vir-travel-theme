/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//VIR - TRAVEL BLOG THEME\n//PAGES FUNCTIONS\n//BY: mscbr\n//SLOWSCROLL\nfunction jQuerySlowScroll() {\n  jQuery(\"a\").on('click', function (event) {\n    // Make sure this.hash has a value before overriding default behavior\n    if (this.hash !== \"\") {\n      // Prevent default anchor click behavior\n      event.preventDefault(); // Store hash\n\n      var hash = this.hash; // Using jQuery's animate() method to add smooth page scroll\n      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area\n\n      jQuery('html, body').animate({\n        scrollTop: jQuery(hash).offset().top\n      }, 800, function () {\n        // Add hash (#) to URL when done scrolling (default click behavior)\n        window.location.hash = hash;\n      });\n    } // End if\n\n  });\n} //SLIDER 1.0\n\n\nfunction slider() {\n  let slideIndex = 0;\n  let slideArr = document.getElementsByClassName(\"slide\"); //automatic slidng\n\n  function changeSlide() {\n    //setting display = 'none' for all slides\n    for (let i = 0; i < slideArr.length; i++) {\n      slideArr[i].style.display = \"none\";\n    }\n\n    slideArr[slideIndex].style.display = \"initial\";\n    slideIndex++;\n\n    if (slideIndex > slideArr.length - 1) {\n      slideIndex = 0;\n    }\n\n    setTimeout(changeSlide, 5000);\n  }\n\n  changeSlide(); //span buttons funcitonality\n\n  function spanListeners() {\n    let leftSpan = document.getElementById(\"left-span\");\n    let rightSpan = document.getElementById(\"right-span\"); //for left-span changeIndex should be -1 & for rigt-span 1\n\n    function switchSlide(changeIndex) {\n      slideIndex += changeIndex;\n\n      for (let i = 0; i < slideArr.length; i++) {\n        slideArr[i].style.display = \"none\";\n      }\n\n      if (slideIndex > slideArr.length - 1) {\n        slideIndex = 0;\n      } else if (slideIndex < 0) {\n        slideIndex = slideArr.length - 1;\n      }\n\n      slideArr[slideIndex].style.display = \"initial\";\n    }\n\n    leftSpan.addEventListener(\"click\", function () {\n      switchSlide(-1);\n    });\n    rightSpan.addEventListener(\"click\", function () {\n      switchSlide(1);\n    });\n  }\n\n  spanListeners();\n}\n\njQuery(document).ready(function () {\n  'use strict'; //functions to load\n\n  jQuerySlowScroll();\n  slider();\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });