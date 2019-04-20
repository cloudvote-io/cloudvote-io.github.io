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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/local-storage/local-storage.js":
/*!*****************************************************!*\
  !*** ./node_modules/local-storage/local-storage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar stub = __webpack_require__(/*! ./stub */ \"./node_modules/local-storage/stub.js\");\n\nvar tracking = __webpack_require__(/*! ./tracking */ \"./node_modules/local-storage/tracking.js\");\n\nvar ls = 'localStorage' in global && global.localStorage ? global.localStorage : stub;\n\nfunction accessor(key, value) {\n  if (arguments.length === 1) {\n    return get(key);\n  }\n\n  return set(key, value);\n}\n\nfunction get(key) {\n  return JSON.parse(ls.getItem(key));\n}\n\nfunction set(key, value) {\n  try {\n    ls.setItem(key, JSON.stringify(value));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\nfunction remove(key) {\n  return ls.removeItem(key);\n}\n\nfunction clear() {\n  return ls.clear();\n}\n\naccessor.set = set;\naccessor.get = get;\naccessor.remove = remove;\naccessor.clear = clear;\naccessor.on = tracking.on;\naccessor.off = tracking.off;\nmodule.exports = accessor;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/local-storage/local-storage.js?");

/***/ }),

/***/ "./node_modules/local-storage/stub.js":
/*!********************************************!*\
  !*** ./node_modules/local-storage/stub.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ms = {};\n\nfunction getItem(key) {\n  return key in ms ? ms[key] : null;\n}\n\nfunction setItem(key, value) {\n  ms[key] = value;\n  return true;\n}\n\nfunction removeItem(key) {\n  var found = key in ms;\n\n  if (found) {\n    return delete ms[key];\n  }\n\n  return false;\n}\n\nfunction clear() {\n  ms = {};\n  return true;\n}\n\nmodule.exports = {\n  getItem: getItem,\n  setItem: setItem,\n  removeItem: removeItem,\n  clear: clear\n};\n\n//# sourceURL=webpack:///./node_modules/local-storage/stub.js?");

/***/ }),

/***/ "./node_modules/local-storage/tracking.js":
/*!************************************************!*\
  !*** ./node_modules/local-storage/tracking.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar listeners = {};\nvar listening = false;\n\nfunction listen() {\n  if (global.addEventListener) {\n    global.addEventListener('storage', change, false);\n  } else if (global.attachEvent) {\n    global.attachEvent('onstorage', change);\n  } else {\n    global.onstorage = change;\n  }\n}\n\nfunction change(e) {\n  if (!e) {\n    e = global.event;\n  }\n\n  var all = listeners[e.key];\n\n  if (all) {\n    all.forEach(fire);\n  }\n\n  function fire(listener) {\n    listener(JSON.parse(e.newValue), JSON.parse(e.oldValue), e.url || e.uri);\n  }\n}\n\nfunction on(key, fn) {\n  if (listeners[key]) {\n    listeners[key].push(fn);\n  } else {\n    listeners[key] = [fn];\n  }\n\n  if (listening === false) {\n    listen();\n  }\n}\n\nfunction off(key, fn) {\n  var ns = listeners[key];\n\n  if (ns.length > 1) {\n    ns.splice(ns.indexOf(fn), 1);\n  } else {\n    listeners[key] = [];\n  }\n}\n\nmodule.exports = {\n  on: on,\n  off: off\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/local-storage/tracking.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar g; // This works in non-strict mode\n\ng = function () {\n  return this;\n}();\n\ntry {\n  // This works if eval is allowed (see CSP)\n  g = g || new Function(\"return this\")();\n} catch (e) {\n  // This works if the window reference is available\n  if ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n} // g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/ftu-page.js":
/*!*************************!*\
  !*** ./src/ftu-page.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_ftu_page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/ftu-page.css */ \"./src/styles/ftu-page.css\");\n/* harmony import */ var _styles_ftu_page_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_ftu_page_css__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  markup: \"\\n      <div id=\\\"ftu-page-root\\\">\\n        <section class=\\\"info-card\\\">\\n          <img src=\\\"dist/images/cloud-logo.png\\\" />\\n          <section class=\\\"info-card-header\\\">\\n            Powerful cloud-based voting software tailored\\n            for your needs!\\n          </section>\\n        </section>\\n        <section class=\\\"info-card\\\">\\n          <section class=\\\"info-card-header\\\">\\n            1. Sign up with CloudVote and create your own profile!\\n          </section>\\n          <section class=\\\"info-card-body\\\">\\n            <form>\\n              <span style=\\\"margin-right: 4px;\\\">Sign up: </span>\\n              <input type=\\\"text\\\" placeholder=\\\"E-mail address\\\" />\\n              <input type=\\\"button\\\" value=\\\"Go!\\\" />\\n            </form>\\n          </section>\\n        </section>\\n        <section class=\\\"info-card\\\">\\n          <section class=\\\"info-card-header\\\">\\n            2. Customize your election needs us and schedule its\\n            opening!\\n          </section>\\n        </section>\\n        <section class=\\\"info-card\\\">\\n          <section class=\\\"info-card-header\\\">\\n            3. Sit back and watch votes casting in real-time with\\n            our profiling tools!\\n          </section>\\n        </section>\\n      </div>\\n  \"\n});\n\n//# sourceURL=webpack:///./src/ftu-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ftu_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ftu-page.js */ \"./src/ftu-page.js\");\n/* harmony import */ var _styles_root_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/root.css */ \"./src/styles/root.css\");\n/* harmony import */ var _styles_root_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_root_css__WEBPACK_IMPORTED_MODULE_1__);\nvar ls = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n\n\n\n\n(function () {\n  if (ls.get('userId') !== null) {\n    // sign in page\n    console.log(ls.get('userId'));\n    return;\n  }\n\n  document.getElementById('root').innerHTML = _ftu_page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].markup;\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/ftu-page.css":
/*!*********************************!*\
  !*** ./src/styles/ftu-page.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/ftu-page.css?");

/***/ }),

/***/ "./src/styles/root.css":
/*!*****************************!*\
  !*** ./src/styles/root.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/root.css?");

/***/ })

/******/ });