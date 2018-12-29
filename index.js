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

/***/ "./src/components/liveSearch.js":
/*!**************************************!*\
  !*** ./src/components/liveSearch.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//LIVE SEARCH\nclass Search {\n  constructor() {\n    this.resultsDiv = document.getElementById(\"search-overlay__results\");\n    this.openButton = document.getElementById(\"search-trigger\");\n    this.closeButton = document.getElementById(\"search-overlay-btn-close\");\n    this.searchOverlay = document.getElementById(\"search-overlay\");\n    this.searchField = document.getElementById(\"search-term\");\n    this.events();\n    this.isOverlayOpen = false;\n    this.isSpinnerVisible = false;\n    this.previousValue;\n    this.typingTimer;\n  } //events\n\n\n  events() {\n    this.openButton.addEventListener(\"click\", this.openOverlay.bind(this));\n    this.closeButton.addEventListener(\"click\", this.closeOverlay.bind(this));\n    document.addEventListener(\"keydown\", this.keyPressDispatcher.bind(this));\n    this.searchField.addEventListener(\"keyup\", this.typingLogic.bind(this));\n  } //methods\n\n\n  typingLogic() {\n    if (this.searchField.value !== this.previousValue) {\n      clearTimeout(this.typingTimer);\n\n      if (this.searchField.value) {\n        if (!this.isSpinnerVisible) {\n          this.resultsDiv.innerHTML = \"<div class='spinner-loader'></div>\";\n          this.isSpinnerVisible = true;\n        }\n\n        this.typingTimer = setTimeout(this.getResults.bind(this), 800);\n      } else {\n        this.resultsDiv.innerHTML = \"\";\n        this.isSpinnerVisible = false;\n      }\n    }\n\n    this.previousValue = this.searchField.value;\n  }\n\n  getResults() {\n    jQuery.getJSON(\"http://virtualtravel.local/wp-json/wp/v2/posts?search=\" + this.searchField.value, function (posts) {\n      alert(posts[0].title.rendered);\n    });\n    this.resultsDiv.innerHTML = \"paragraph\";\n    this.isSpinnerVisible = false;\n  }\n\n  keyPressDispatcher(e) {\n    if (e.keyCode === 27 && this.isOverlayOpen) {\n      this.closeOverlay();\n    }\n  }\n\n  openOverlay() {\n    event.preventDefault();\n    document.getElementsByTagName(\"body\")[0].classList.add(\"body-no-scroll\");\n    this.searchOverlay.classList.add(\"search-overlay--active\");\n    this.isOverlayOpen = true;\n  }\n\n  closeOverlay() {\n    document.getElementsByTagName(\"body\")[0].classList.remove(\"body-no-scroll\");\n    this.searchOverlay.classList.remove(\"search-overlay--active\");\n    this.isOverlayOpen = false;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n//# sourceURL=webpack:///./src/components/liveSearch.js?");

/***/ }),

/***/ "./src/components/slider.js":
/*!**********************************!*\
  !*** ./src/components/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//SLIDER 1.0\nfunction slider() {\n  let slideIndex = 0;\n  let slideArr = document.getElementsByClassName(\"slide\"); //automatic slidng\n\n  function changeSlide() {\n    //setting display = 'none' for all slides\n    for (let i = 0; i < slideArr.length; i++) {\n      slideArr[i].style.display = \"none\";\n    }\n\n    slideArr[slideIndex].style.display = \"initial\";\n    slideIndex++;\n\n    if (slideIndex > slideArr.length - 1) {\n      slideIndex = 0;\n    }\n\n    setTimeout(changeSlide, 5000);\n  }\n\n  changeSlide(); //span buttons funcitonality\n\n  function spanListeners() {\n    let leftSpan = document.getElementById(\"left-span\");\n    let rightSpan = document.getElementById(\"right-span\"); //for left-span changeIndex should be -1 & for rigt-span 1\n\n    function switchSlide(changeIndex) {\n      slideIndex += changeIndex;\n\n      for (let i = 0; i < slideArr.length; i++) {\n        slideArr[i].style.display = \"none\";\n      }\n\n      if (slideIndex > slideArr.length - 1) {\n        slideIndex = 0;\n      } else if (slideIndex < 0) {\n        slideIndex = slideArr.length - 1;\n      }\n\n      slideArr[slideIndex].style.display = \"initial\";\n    }\n\n    leftSpan.addEventListener(\"click\", function () {\n      switchSlide(-1);\n    });\n    rightSpan.addEventListener(\"click\", function () {\n      switchSlide(1);\n    });\n  }\n\n  spanListeners();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n//# sourceURL=webpack:///./src/components/slider.js?");

/***/ }),

/***/ "./src/components/slowScroll.js":
/*!**************************************!*\
  !*** ./src/components/slowScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//SLOWSCROLL\nfunction jQuerySlowScroll() {\n  jQuery(\"a\").on('click', function (event) {\n    // Make sure this.hash has a value before overriding default behavior\n    if (this.hash !== \"\") {\n      // Prevent default anchor click behavior\n      event.preventDefault(); // Store hash\n\n      var hash = this.hash; // Using jQuery's animate() method to add smooth page scroll\n      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area\n\n      jQuery('html, body').animate({\n        scrollTop: jQuery(hash).offset().top\n      }, 800, function () {\n        // Add hash (#) to URL when done scrolling (default click behavior)\n        window.location.hash = hash;\n      });\n    } // End if\n\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (jQuerySlowScroll);\n\n//# sourceURL=webpack:///./src/components/slowScroll.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_slowScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slowScroll */ \"./src/components/slowScroll.js\");\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slider */ \"./src/components/slider.js\");\n/* harmony import */ var _components_liveSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/liveSearch */ \"./src/components/liveSearch.js\");\n//VIR - TRAVEL BLOG THEME\n//PAGES FUNCTIONS\n//BY: mscbr\n\n\n\nconst liveSearch = new _components_liveSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\njQuery(document).ready(function () {\n  'use strict'; //functions to load\n\n  Object(_components_slowScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_components_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  liveSearch;\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });