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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: Cannot find module 'C:\\Users\\salvo\\Laravel_connection\\node_modules\\@babel\\helper-compilation-targets\\lib\\index.js'\n    at createEsmNotFoundErr (node:internal/modules/cjs/loader:960:15)\n    at finalizeEsmResolution (node:internal/modules/cjs/loader:953:15)\n    at resolveExports (node:internal/modules/cjs/loader:482:14)\n    at Function.Module._findPath (node:internal/modules/cjs/loader:522:31)\n    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:919:27)\n    at Function.Module._load (node:internal/modules/cjs/loader:778:27)\n    at Module.require (node:internal/modules/cjs/loader:1005:19)\n    at require (C:\\Users\\salvo\\Laravel_connection\\node_modules\\v8-compile-cache\\v8-compile-cache.js:159:20)\n    at _helperCompilationTargets (C:\\Users\\salvo\\Laravel_connection\\node_modules\\@babel\\core\\lib\\config\\validation\\option-assertions.js:28:16)\n    at assertTargets (C:\\Users\\salvo\\Laravel_connection\\node_modules\\@babel\\core\\lib\\config\\validation\\option-assertions.js:285:11)\n    at C:\\Users\\salvo\\Laravel_connection\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:118:5\n    at Array.forEach (<anonymous>)\n    at validateNested (C:\\Users\\salvo\\Laravel_connection\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:94:21)\n    at validate (C:\\Users\\salvo\\Laravel_connection\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:85:10)\n    at loadPrivatePartialConfig (C:\\Users\\salvo\\Laravel_connection\\node_modules\\@babel\\core\\lib\\config\\partial.js:80:50)\n    at loadPrivatePartialConfig.next (<anonymous>)\n    at loadFullConfig (C:\\Users\\salvo\\Laravel_connection\\node_modules\\@babel\\core\\lib\\config\\full.js:57:46)\n    at loadFullConfig.next (<anonymous>)\n    at Function.transform (C:\\Users\\salvo\\Laravel_connection\\node_modules\\@babel\\core\\lib\\transform.js:23:45)\n    at transform.next (<anonymous>)\n    at step (C:\\Users\\salvo\\Laravel_connection\\node_modules\\gensync\\index.js:261:32)\n    at evaluateAsync (C:\\Users\\salvo\\Laravel_connection\\node_modules\\gensync\\index.js:291:5)\n    at Function.errback (C:\\Users\\salvo\\Laravel_connection\\node_modules\\gensync\\index.js:113:7)\n    at transform (C:\\Users\\salvo\\Laravel_connection\\node_modules\\@babel\\core\\lib\\transform.js:35:19)\n    at node:internal/util:360:7\n    at new Promise (<anonymous>)\n    at transform (node:internal/util:346:12)\n    at C:\\Users\\salvo\\Laravel_connection\\node_modules\\babel-loader\\lib\\transform.js:22:22\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (C:\\Users\\salvo\\Laravel_connection\\node_modules\\babel-loader\\lib\\transform.js:3:103)\n    at _next (C:\\Users\\salvo\\Laravel_connection\\node_modules\\babel-loader\\lib\\transform.js:5:194)\n    at C:\\Users\\salvo\\Laravel_connection\\node_modules\\babel-loader\\lib\\transform.js:5:364\n    at new Promise (<anonymous>)\n    at C:\\Users\\salvo\\Laravel_connection\\node_modules\\babel-loader\\lib\\transform.js:5:97\n    at C:\\Users\\salvo\\Laravel_connection\\node_modules\\babel-loader\\lib\\transform.js:55:17\n    at C:\\Users\\salvo\\Laravel_connection\\node_modules\\babel-loader\\lib\\cache.js:150:26");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n8 │ @import '~bootstrap/scss/bootstrap';\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  C:\\Users\\salvo\\Laravel_connection\\resources\\sass\\app.scss 8:9  root stylesheet\n    at C:\\Users\\salvo\\Laravel_connection\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\salvo\\Laravel_connection\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\salvo\\Laravel_connection\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\salvo\\Laravel_connection\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:99012:16)\n    at render_closure1.call$2 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:84527:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:29558:18)\n    at _FutureListener.handleError$1 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:28080:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:28387:49)\n    at Object._Future__propagateToListeners (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:3901:77)\n    at _Future._completeError$2 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:28233:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:27881:12)\n    at Object._asyncRethrow (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:3704:17)\n    at C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:19778:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:3729:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:27900:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:27894:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:29558:18)\n    at _FutureListener.handleError$1 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:28080:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:28387:49)\n    at Object._Future__propagateToListeners (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:3901:77)\n    at _Future._completeError$2 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:28233:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:27881:12)\n    at Object._asyncRethrow (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:3704:17)\n    at C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:15279:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:3729:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:27900:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:27894:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:29558:18)\n    at _FutureListener.handleError$1 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:28080:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:28387:49)\n    at Object._Future__propagateToListeners (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:3901:77)\n    at _Future._completeError$2 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:28233:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:27881:12)\n    at Object._asyncRethrow (C:\\Users\\salvo\\Laravel_connection\\node_modules\\sass\\sass.dart.js:3704:17)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\salvo\Laravel_connection\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\salvo\Laravel_connection\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });