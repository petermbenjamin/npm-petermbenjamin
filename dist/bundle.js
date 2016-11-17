/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const { info } = __webpack_require__(1);

	module.exports = exports = info;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"name": "petermbenjamin",
		"version": "3.1.0",
		"description": "This is me!",
		"main": "index.js",
		"scripts": {
			"lint": "eslint --ignore-path .eslintignore .",
			"build": "webpack",
			"test": "mocha --reporter spec",
			"prepublish": "npm run test && npm run lint && npm run build"
		},
		"bin": {
			"pbenj": "./bin/cli.js"
		},
		"repository": {
			"type": "git",
			"url": "git+https://github.com/pmbenjamin/npm-petermbenjamin.git"
		},
		"author": "Peter Benjamin <petermbenjamin@gmail.com>",
		"license": "MIT",
		"bugs": {
			"url": "https://github.com/pmbenjamin/npm-petermbenjamin/issues"
		},
		"homepage": "https://github.com/pmbenjamin/npm-petermbenjamin#readme",
		"devDependencies": {
			"chai": "^3.5.0",
			"eslint": "^3.10.2",
			"eslint-config-airbnb": "^13.0.0",
			"eslint-plugin-import": "^2.2.0",
			"eslint-plugin-jsx-a11y": "^2.2.3",
			"eslint-plugin-react": "^6.7.1",
			"json-loader": "^0.5.4",
			"mocha": "^3.1.2",
			"webpack": "^1.13.3"
		},
		"dependencies": {
			"chalk": "^1.1.3",
			"cli-table": "^0.3.1",
			"commander": "^2.9.0"
		},
		"info": {
			"name": {
				"first": "Peter",
				"middle": "M",
				"last": "Benjamin",
				"title": "Senior Software Engineer"
			},
			"contact": {
				"codewars": "https://www.codewars.com/users/pmbenjamin",
				"devpost": "http://devpost.com/pmbenjamin",
				"email": "petermbenjamin@gmail.com",
				"github": "https://github.com/pmbenjamin",
				"keybase": "https://keybase.io/pbenj",
				"linkedIn": "https://linkedin.com/in/pmbenjamin",
				"medium": "https://medium.com/@pmbenjamin",
				"npm": "https://www.npmjs.com/~pmbenjamin",
				"quora": "https://www.quora.com/profile/Peter-Benjamin-2",
				"reddit": "https://www.reddit.com/user/Pmbenjamin/",
				"twitter": "https://twitter.com/pmbenjamin"
			}
		}
	};

/***/ }
/******/ ]);