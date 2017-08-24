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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initVue = initVue;

var _statBox = __webpack_require__(2);

var _statBox2 = _interopRequireDefault(_statBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initVue(initEvent) {
    console.log('init: ', initEvent);
    var character = initEvent.detail.character;
    new Vue({
        el: '#app',
        data: {
            title: character.character_name,
            stat_modifiers: character.stat_modifiers,
            stats: character.stats
        }
    });
}

window.addEventListener('initVueEvent', initVue);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var statBox = exports.statBox = Vue.component('stat-box', {
	props: ['statType', 'stat', 'statModifiers', "index"],
	data: function data() {
		var statObj = { value: this.stat };
		statObj.innerkey = this.statType + '-value';
		return statObj;
	},
	computed: {
		finalStatistic: function finalStatistic() {
			return this.value + this.statModifiers[this.statType];
		},
		activeModifier: function activeModifier() {
			var total = this.value + this.statModifiers[this.statType];
			switch (total) {
				case 8 <= total <= 10:

					break;
				default:

			}
		}
	},
	render: function render(h) {
		return h(
			'div',
			{
				attrs: { id: this.statType }
			},
			[h(
				'div',
				{
					attrs: { id: this.innerkey }
				},
				[this.finalStatistic]
			)]
		);
	}
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGQ5ZDBkNzA1MWE2YmUzMWU4ODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVnVlQ29tcG9uZW50cy9zdGF0Qm94LmpzeCJdLCJuYW1lcyI6WyJpbml0VnVlIiwiaW5pdEV2ZW50IiwiY29uc29sZSIsImxvZyIsImNoYXJhY3RlciIsImRldGFpbCIsIlZ1ZSIsImVsIiwiZGF0YSIsInRpdGxlIiwiY2hhcmFjdGVyX25hbWUiLCJzdGF0X21vZGlmaWVycyIsInN0YXRzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRCb3giLCJjb21wb25lbnQiLCJwcm9wcyIsInN0YXRPYmoiLCJ2YWx1ZSIsInN0YXQiLCJpbm5lcmtleSIsInN0YXRUeXBlIiwiY29tcHV0ZWQiLCJmaW5hbFN0YXRpc3RpYyIsInN0YXRNb2RpZmllcnMiLCJhY3RpdmVNb2RpZmllciIsInRvdGFsIiwicmVuZGVyIiwiaCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQzNEZ0JBLE8sR0FBQUEsTzs7QUFGaEI7Ozs7OztBQUVPLFNBQVNBLE9BQVQsQ0FBa0JDLFNBQWxCLEVBQTRCO0FBQy9CQyxZQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQkYsU0FBdEI7QUFDQSxRQUFJRyxZQUFZSCxVQUFVSSxNQUFWLENBQWlCRCxTQUFqQztBQUNBLFFBQUlFLEdBQUosQ0FBUTtBQUNOQyxZQUFJLE1BREU7QUFFTkMsY0FBTTtBQUNGQyxtQkFBT0wsVUFBVU0sY0FEZjtBQUVGQyw0QkFBZ0JQLFVBQVVPLGNBRnhCO0FBR0ZDLG1CQUFPUixVQUFVUTtBQUhmO0FBRkEsS0FBUjtBQVNIOztBQUVEQyxPQUFPQyxnQkFBUCxDQUF3QixjQUF4QixFQUF3Q2QsT0FBeEMsRTs7Ozs7Ozs7Ozs7O0FDaEJPLElBQU1lLDRCQUFVVCxJQUFJVSxTQUFKLENBQWMsVUFBZCxFQUEwQjtBQUM3Q0MsUUFBTyxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLGVBQXJCLEVBQXNDLE9BQXRDLENBRHNDO0FBRWhEVCxPQUFNLGdCQUFXO0FBQ1YsTUFBSVUsVUFBVSxFQUFFQyxPQUFPLEtBQUtDLElBQWQsRUFBZDtBQUNBRixVQUFRRyxRQUFSLEdBQW1CLEtBQUtDLFFBQUwsR0FBZ0IsUUFBbkM7QUFDQSxTQUFPSixPQUFQO0FBQ04sRUFOK0M7QUFPaERLLFdBQVU7QUFDVEMsa0JBQWdCLDBCQUFVO0FBQ3pCLFVBQU8sS0FBS0wsS0FBTCxHQUFhLEtBQUtNLGFBQUwsQ0FBbUIsS0FBS0gsUUFBeEIsQ0FBcEI7QUFDQSxHQUhRO0FBSVRJLGtCQUFnQiwwQkFBVTtBQUN6QixPQUFJQyxRQUFRLEtBQUtSLEtBQUwsR0FBYSxLQUFLTSxhQUFMLENBQW1CLEtBQUtILFFBQXhCLENBQXpCO0FBQ0EsV0FBUUssS0FBUjtBQUNDLFNBQU8sS0FBS0EsS0FBTCxJQUFjLEVBQXJCOztBQUVDO0FBQ0Q7O0FBSkQ7QUFPQTtBQWJRLEVBUHNDO0FBc0JoREMsU0FBUSxTQUFTQSxNQUFULENBQWdCQyxDQUFoQixFQUFtQjtBQUNwQixTQUNJO0FBQUE7QUFBQTtBQUFBLGFBQUssSUFBSyxLQUFLUCxRQUFmO0FBQUE7QUFBQSxJQUNJO0FBQUE7QUFBQTtBQUFBLGNBQUssSUFBSyxLQUFLRCxRQUFmO0FBQUE7QUFBQSxLQUNNLEtBQUtHLGNBRFg7QUFBQSxJQURKO0FBQUEsR0FESjtBQU9IO0FBOUI0QyxDQUExQixDQUFoQixDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkZDlkMGQ3MDUxYTZiZTMxZTg4MCIsImltcG9ydCBzdGF0Qm94IGZyb20gJy4vVnVlQ29tcG9uZW50cy9zdGF0Qm94JztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRWdWUgKGluaXRFdmVudCl7XG4gICAgY29uc29sZS5sb2coJ2luaXQ6ICcsIGluaXRFdmVudCk7XG4gICAgdmFyIGNoYXJhY3RlciA9IGluaXRFdmVudC5kZXRhaWwuY2hhcmFjdGVyO1xuICAgIG5ldyBWdWUoe1xuICAgICAgZWw6ICcjYXBwJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0aXRsZTogY2hhcmFjdGVyLmNoYXJhY3Rlcl9uYW1lLFxuICAgICAgICAgIHN0YXRfbW9kaWZpZXJzOiBjaGFyYWN0ZXIuc3RhdF9tb2RpZmllcnMsXG4gICAgICAgICAgc3RhdHM6IGNoYXJhY3Rlci5zdGF0c1xuICAgICAgfVxuICAgIH0pO1xuXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdpbml0VnVlRXZlbnQnLCBpbml0VnVlICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIiwiZXhwb3J0IGNvbnN0IHN0YXRCb3ggPSBWdWUuY29tcG9uZW50KCdzdGF0LWJveCcsIHtcbiAgICBwcm9wczogWydzdGF0VHlwZScsICdzdGF0JywgJ3N0YXRNb2RpZmllcnMnLCBcImluZGV4XCJdLFxuXHRkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN0YXRPYmogPSB7IHZhbHVlOiB0aGlzLnN0YXQgfTtcbiAgICAgICAgc3RhdE9iai5pbm5lcmtleSA9IHRoaXMuc3RhdFR5cGUgKyAnLXZhbHVlJztcbiAgICAgICAgcmV0dXJuIHN0YXRPYmo7XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0ZmluYWxTdGF0aXN0aWM6IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSArIHRoaXMuc3RhdE1vZGlmaWVyc1t0aGlzLnN0YXRUeXBlXTtcblx0XHR9LFxuXHRcdGFjdGl2ZU1vZGlmaWVyOiBmdW5jdGlvbigpe1xuXHRcdFx0bGV0IHRvdGFsID0gdGhpcy52YWx1ZSArIHRoaXMuc3RhdE1vZGlmaWVyc1t0aGlzLnN0YXRUeXBlXTtcblx0XHRcdHN3aXRjaCAodG90YWwpIHtcblx0XHRcdFx0Y2FzZSAoIDggPD0gdG90YWwgPD0gMTAgKTpcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXsgdGhpcy5zdGF0VHlwZSB9PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9eyB0aGlzLmlubmVya2V5IH0+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5maW5hbFN0YXRpc3RpYyB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WdWVDb21wb25lbnRzL3N0YXRCb3guanN4Il0sInNvdXJjZVJvb3QiOiIifQ==