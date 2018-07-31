(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["ng2-highcharts"] = factory(require("@angular/core"));
	else
		root["ng2-highcharts"] = factory(root["@angular/core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Ng2HighchartsBase; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by greg on 21/10/16.
 */

var Ng2HighchartsBase = /** @class */ (function () {
    function Ng2HighchartsBase(ele, _differs) {
        this.hostElement = ele;
        this.differ = _differs.find({}).create(null);
    }
    Object.defineProperty(Ng2HighchartsBase.prototype, "chart", {
        get: function () {
            return this.pChart;
        },
        enumerable: true,
        configurable: true
    });
    Ng2HighchartsBase.prototype.reflow = function () {
        var _this = this;
        if (!this.pChart || !this.options) {
            return;
        }
        if (getComputedStyle(this.hostElement.nativeElement).transitionDuration) {
            var duration = parseFloat(getComputedStyle(this.hostElement.nativeElement).transitionDuration);
            var interval = setInterval(function () {
                if (duration < 0) {
                    clearInterval(interval);
                }
                duration -= 50;
                try {
                    _this.pChart.reflow();
                }
                catch (e) {
                    // all right - component probably has been deleted.
                    clearInterval(interval);
                }
            }, duration);
        }
        this.pChart.reflow();
    };
    Ng2HighchartsBase.prototype.ngDoCheck = function () {
        if (this.currentWidth !== this.hostElement.nativeElement.offsetWidth) {
            this.reflow();
            this.currentWidth = this.hostElement.nativeElement.offsetWidth;
        }
        if (this.currentHeight !== this.hostElement.nativeElement.offsetHeight) {
            this.reflow();
            this.currentHeight = this.hostElement.nativeElement.offsetHeight;
        }
        if (this.differ.diff(this.options)) {
            this.draw(this.options);
        }
    };
    Ng2HighchartsBase.prototype.ngOnDestroy = function () {
        if (this.pChart) {
            this.pChart.destroy();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ng2-highcharts'),
        __metadata("design:type", Object /* HighchartsOptions */)
    ], Ng2HighchartsBase.prototype, "options", void 0);
    return Ng2HighchartsBase;
}());



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_highcharts_base__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Ng2Highcharts; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Ng2Highcharts = /** @class */ (function (_super) {
    __extends(Ng2Highcharts, _super);
    function Ng2Highcharts(ele, _differs) {
        var _this = _super.call(this, ele, _differs) || this;
        __webpack_require__(6)(window.Highcharts);
        return _this;
    }
    Ng2Highcharts.prototype.draw = function (opt /* HighchartsOptions */) {
        if (!opt) {
            console.log('No valid options...');
            console.log(opt);
            return;
        }
        if (opt.series || opt.data) {
            if (this.pChart) {
                this.pChart.destroy();
            }
            if (!opt.chart) {
                opt.chart = {};
            }
            opt.chart.renderTo = this.hostElement.nativeElement;
            this.pChart = new window.Highcharts.Chart(opt);
        }
        else {
            console.log('No valid options...');
            console.dir(opt);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ng2-highcharts'),
        __metadata("design:type", Object /* HighchartsOptions */)
    ], Ng2Highcharts.prototype, "options", void 0);
    Ng2Highcharts = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[ng2-highcharts]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"]])
    ], Ng2Highcharts);
    return Ng2Highcharts;
}(__WEBPACK_IMPORTED_MODULE_1__ng2_highcharts_base__["a" /* Ng2HighchartsBase */]));



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_highcharts_base__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Ng2Highmaps; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Ng2Highmaps = /** @class */ (function (_super) {
    __extends(Ng2Highmaps, _super);
    function Ng2Highmaps(ele, _differs) {
        return _super.call(this, ele, _differs) || this;
    }
    Ng2Highmaps.prototype.draw = function (opt /* HighchartsOptions */) {
        if (!opt) {
            console.log('No valid options...');
            console.log(opt);
            return;
        }
        if (opt.series || opt.data) {
            if (this.pChart) {
                this.pChart.destroy();
            }
            if (!opt.chart) {
                opt.chart = {};
            }
            opt.chart.renderTo = this.hostElement.nativeElement;
            this.pChart = new window.Highcharts.Map(opt);
        }
        else {
            console.log('No valid options...');
            console.dir(opt);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ng2-highmaps'),
        __metadata("design:type", Object /* HighchartsOptions */)
    ], Ng2Highmaps.prototype, "options", void 0);
    Ng2Highmaps = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[ng2-highmaps]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"]])
    ], Ng2Highmaps);
    return Ng2Highmaps;
}(__WEBPACK_IMPORTED_MODULE_1__ng2_highcharts_base__["a" /* Ng2HighchartsBase */]));



/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_highcharts_base__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Ng2Highstocks; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Ng2Highstocks = /** @class */ (function (_super) {
    __extends(Ng2Highstocks, _super);
    function Ng2Highstocks(ele, _differs) {
        return _super.call(this, ele, _differs) || this;
    }
    Ng2Highstocks.prototype.draw = function (opt /* HighchartsOptions */) {
        if (!opt) {
            console.log('No valid options...');
            console.log(opt);
            return;
        }
        if (opt.series || opt.data) {
            if (this.pChart) {
                this.pChart.destroy();
            }
            if (!opt.chart) {
                opt.chart = {};
            }
            opt.chart.renderTo = this.hostElement.nativeElement;
            this.pChart = new window.Highcharts.StockChart(opt);
        }
        else {
            console.log('No valid options...');
            console.dir(opt);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('ng2-highstocks'),
        __metadata("design:type", Object /* HighchartsOptions */)
    ], Ng2Highstocks.prototype, "options", void 0);
    Ng2Highstocks = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[ng2-highstocks]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"]])
    ], Ng2Highstocks);
    return Ng2Highstocks;
}(__WEBPACK_IMPORTED_MODULE_1__ng2_highcharts_base__["a" /* Ng2HighchartsBase */]));



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ng2_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_ng2_highmaps__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_ng2_highstocks__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Ng2HighchartsModule; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ng2_highcharts__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__src_ng2_highstocks__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__src_ng2_highmaps__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Ng2HighchartsModule = /** @class */ (function () {
    function Ng2HighchartsModule() {
    }
    Ng2HighchartsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__src_ng2_highcharts__["a" /* Ng2Highcharts */], __WEBPACK_IMPORTED_MODULE_2__src_ng2_highmaps__["a" /* Ng2Highmaps */], __WEBPACK_IMPORTED_MODULE_3__src_ng2_highstocks__["a" /* Ng2Highstocks */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__src_ng2_highcharts__["a" /* Ng2Highcharts */], __WEBPACK_IMPORTED_MODULE_2__src_ng2_highmaps__["a" /* Ng2Highmaps */], __WEBPACK_IMPORTED_MODULE_3__src_ng2_highstocks__["a" /* Ng2Highstocks */]]
        })
    ], Ng2HighchartsModule);
    return Ng2HighchartsModule;
}());



/***/ },
/* 6 */
/***/ function(module, exports) {

/**
* Custom events v2.1.6 (2018-07-20)
*
* (c) 2012-2018 Black Label
*
* License: Creative Commons Attribution (CC)
*/

/* global Highcharts setTimeout clearTimeout module:true */
/* eslint no-loop-func: 0 */

/**
 * @namespace customEvents
 **/

(function (factory) {
	if (typeof module === 'object' && module.exports) {
		module.exports = factory;
	} else {
		factory(Highcharts);
	}
}(function (HC) {

	/* global Highcharts :true, window */

	'use strict';

	var UNDEFINED,
		DBLCLICK = 'dblclick',
		TOUCHSTART = 'touchstart',
		CLICK = 'click',
		each = HC.each,
		pick = HC.pick,
		wrap = HC.wrap,
		merge = HC.merge,
		isArray = HC.isArray,
		objectEach = HC.objectEach,
		addEvent = HC.addEvent,
		isTouchDevice = HC.isTouchDevice,
		isObject = HC.isObject,
		isNumber = HC.isNumber,
		defaultOptions = HC.getOptions().plotOptions,
		axisProto = HC.Axis && HC.Axis.prototype,
		plotLineOrBandProto = HC.PlotLineOrBand && HC.PlotLineOrBand.prototype,
		seriesTypes = HC.seriesTypes,
		seriesProto = HC.Series && HC.Series.prototype,
		customEvents,
		proto,
		methods;

	/**
	 * WRAPPED FUNCTIONS
	 */

	// reset exis events
	if (plotLineOrBandProto) { // # condition for highmaps and custom builds
		wrap(plotLineOrBandProto, 'render', function (proceed) {
			var defaultEvents = this.options && this.options.events;
		
			// reset default events on plot lines or bands
			if (defaultEvents) {
				defaultEvents = false;
			}

			return proceed.apply(this, Array.prototype.slice.call(arguments, 1));
		});
	}
	if (seriesProto) { // # condition for highmaps and custom builds
		wrap(seriesProto, 'init', function (proceed, chart, options) {
			var chartOptions = chart.options,
				plotOptions = chartOptions.plotOptions,
				seriesOptions = chartOptions.plotOptions.series,
				userOptions = merge(seriesOptions, plotOptions[this.type], options),
				userOptionsEvents = userOptions && userOptions.events,
				userOptionsPointEvents = userOptions && userOptions.point && userOptions.point.events; // Fixed #70

			// reset default events on series and series point
			options.events = {};
			options.point = {
				events: {}
			};

			// Add support for legendItemClick
			if (userOptionsEvents) {
				options.events = {
					legendItemClick: userOptionsEvents && userOptionsEvents.legendItemClick
				};
			}

			// Add support for legendItemClick in pie chart
			if (userOptionsPointEvents) {
				options.point.events = {
					legendItemClick: userOptionsPointEvents && userOptionsPointEvents.legendItemClick,
					select: userOptionsPointEvents && userOptionsPointEvents.select,
					unselect: userOptionsPointEvents && userOptionsPointEvents.unselect
				};
			}

			// attach events to custom object, which is used in attach event
			options.customEvents = {
				series: userOptionsEvents,
				point: userOptionsPointEvents
			};

			// call default action
			proceed.apply(this, Array.prototype.slice.call(arguments, 1));

		});
	}

	HC.Chart.prototype.customEvent = {
		/**
		 * @description Example: [HC.Series, ['drawPoints', 'drawDataLabels']]
		 * @memberof customEvents
		 * @returns {Array} array of pairs: prototype, array of methods to wrap
		 **/
		getEventsProtoMethods: function () {
			var protoMethods = [
				[HC.Tick, ['addLabel']],
				[HC.Axis, ['render']],
				[HC.Axis, ['drawCrosshair']],
				[HC.Chart, ['setTitle']],
				[HC.Legend, ['renderItem']],
				[HC.PlotLineOrBand, ['render']],
				[HC.Series, ['drawPoints', 'drawDataLabels']]
			];
	  
			// support for extra series
			objectEach(seriesTypes, function (fn, seriesType) {
				protoMethods.push([
					seriesTypes[seriesType], ['drawPoints', 'drawDataLabels']
				]);
			});
	
			return protoMethods;
		},
		/**
		 * @description Init method, based on getEventsProtoMethods() array. Iterates on array of prototypes and methods to wrap
		 * @memberof customEvents
		 **/
		init: function () {
			var eventsProtoMethods = this.getEventsProtoMethods(); // array of pairs [object, [methods]]

			each(eventsProtoMethods, function (protoMethod) {
				if (isArray(protoMethod)) {
					proto = protoMethod[0] && protoMethod[0].prototype;
					methods = protoMethod[1];

					if (proto) {
						each(methods, function (method) {
							customEvents.attach(proto, method);
						});
					}
				}
			});
		},
		/**
		 * @description Wraps methods i.e drawPoints to extract SVG element and set an event by calling customEvents.add()
		 * @param {Object} proto Highcharts prototype i.e Highcharts.Series.prototype
		 * @param {Object} hcMethod name of wrapped method i.e drawPoints
		 * @memberof customEvents
		 **/
		attach: function (proto, hcMethod) {
			
			wrap(proto, hcMethod, function (proceed, param) {
				var eventElement = {
						events: UNDEFINED,
						element: UNDEFINED
					},
					proceedObject,
					len,
					j;

				//  call default actions
				proceedObject = proceed.apply(this, Array.prototype.slice.call(arguments, 1));

				//	call
				eventElement = customEvents.eventElement[hcMethod].call(this, param);

				//  stop, when events and SVG element do not exist
				if (!eventElement.events && !eventElement.eventsSubtitle && !eventElement.eventsPoint) {
					return proceedObject;
				}
				
				if (eventElement.eventsPoint) {

					len = eventElement.elementPoint.length;

					// attach events per each point
					for (j = 0; j < len; j++) {
						if (eventElement.elementPoint[j]) {
							var elemPoint = pick(eventElement.elementPoint[j].graphic, eventElement.elementPoint[j]);

							if (elemPoint && elemPoint !== UNDEFINED) {
								customEvents.add(elemPoint, eventElement.eventsPoint, eventElement.elementPoint[j], eventElement, true);
							}
						}
					}
				}

				// attach event to subtitle
				if (eventElement.eventsSubtitle) {
					customEvents.add(eventElement.elementSubtitle, eventElement.eventsSubtitle, eventElement, this);
				}

				// attach event to stackLabels
				if (eventElement.eventsStackLabel) {
					customEvents.add(eventElement.elementStackLabel, eventElement.eventsStackLabel, eventElement, this);
				}

				customEvents.add(eventElement.element, eventElement.events, eventElement, this);

				return proceedObject;

			});
		},
		/**
		 * @description adds event on a SVG element
		 * @param {Object} SVGelem graphic element
		 * @param {Object} events object with all events
		 * @param {Object} elemObj "this" object, which is available in the event
		 * @param {Object} series chart series
		 * @memberof customEvents
		 **/
		add: function (SVGelem, events, elemObj, eventElement, isPoint) {

			var eventObject = eventElement.eventObject || elemObj.eventObject, //	Fix series reference #89
				isSeries = elemObj.isSeries || eventElement.isSeries;


			// stop when SVG element does not exist
			if (!SVGelem || !SVGelem.element) {
				return false;
			}

			for (var action in events) {

				(function (event) {
					if (events.hasOwnProperty(event) && !SVGelem[event]) {
						if (isTouchDevice && event === DBLCLICK) { //  #30 - fallback for iPad
							
							var tapped = false;

							addEvent(SVGelem.element, TOUCHSTART, function (e) {
								
								e.stopPropagation();
								e.preventDefault();

								if (isSeries && !eventObject.directTouch) { // #93
									var chart = eventObject.chart,
										normalizedEvent = chart.pointer.normalize(e);

									elemObj = eventObject.searchPoint(normalizedEvent, eventObject.kdDimensions === 1) || elemObj; // #87 - wrong searchPoint for scatter series
									e.point = elemObj;	//	#89 point reference in mouse event
								}

								if ((eventObject && !isPoint) || (isNumber(eventObject.value))) { // #95 
									eventObject.value = elemObj.textStr;
									elemObj = eventObject;
								}

								if (elemObj && elemObj.textStr) { // labels
									elemObj.value = elemObj.textStr;
								}

								if (elemObj.drilldown) { // #114 - drillUp - undefined ddDupes []
									elemObj.doDrilldown(undefined, undefined, e);
								}

								if (!tapped) {

									tapped = setTimeout(function () {
										tapped = null;
										events[CLICK].call(elemObj, e); //	call single click action
									}, 300);

								} else {
									clearTimeout(tapped);

									tapped = null;
									events[event].call(elemObj, e);

								}

								return false;

							});

						} else {

							addEvent(SVGelem.element, event, function (e) {
								
								e.stopPropagation();
								e.preventDefault();

								if (isSeries) { // #108, #93 - references in e.point and this after chart.update()
									var chart = eventObject.chart,
										normalizedEvent = chart.pointer.normalize(e);

									elemObj = eventObject.searchPoint(normalizedEvent, eventObject.kdDimensions === 1) || elemObj; // #87 - wrong searchPoint for scatter series
									e.point = elemObj;	//	#89 point reference in mouse event

								}

								if ((eventObject && !isPoint) || (eventObject && isNumber(eventObject.value))) { // #95 wrong reference for axis labels
									eventObject.value = elemObj.textStr || eventObject.value; // #95, #98 wrong reference for axis labels
									elemObj = eventObject;
								}

								if (elemObj && elemObj.textStr) { // labels
									elemObj.value = elemObj.textStr;
								}

								if (elemObj.drilldown) { // #114 - drillUp - undefined ddDupes []
									elemObj.doDrilldown(undefined, undefined, e);
								}

								events[event].call(elemObj, e);

								return false;
							});
						}

						SVGelem[event] = function () {
							return true;
						};
					}
				})(action);
			}
		},
		eventElement: {
			/**
			* @typedef {Object} eventElement
			**/
			/**
			 * @description Extracts SVG elements from points
			 * @property {Object} eventsPoint events for point
			 * @property {Array} elementPoint array of SVG point elements
			 * @property {Object} eventObject object kept in this on i.e click
			 * @return {Object} { events: object, element: object }
			 * @memberof customEvents
			 **/
			addLabel: function () {
				var parent = this.parent,
					axis = this.axis,
					axisOptions = axis.options,
					eventsPoint = axisOptions.labels && axisOptions.labels.events,
					elementPoint = [this.label],
					len, i;

				if (parent) {
					var step = this; // current label

					while (step) {
						if (isArray(step)) {
							len = step.length;

							for (i = 0; i < len; i++) {
								elementPoint.push(step[i].label);
							}
						} else {
							elementPoint.push(step.label);
						}

						step = step.parent;
					}
				}

				return {
					eventsPoint: eventsPoint,
					elementPoint: elementPoint,
					eventObject: {
						axis: axis,
						isFirst: this.isFirst,
						isLast: this.isLast,
						chart: axis.chart,
						dateTimeLabelFormat: axisOptions.dateTimeLabelFormats,
						value: this.pos
					}
				};
			},
			/**
			 * @description Extracts SVG elements from title and subtitle
			 * @property {Object} events events for title
			 * @property {Array} elementPoint title SVG element
			 * @property {Object} eventsSubtitle events for subtitle
			 * @property {Array} elementSubtitle subtitle SVG element
			 * @return {Object} {event: object, element: object, eventsSubtitle: object, elementSubtitle: object }
			 * @memberof customEvents
			 **/
			setTitle: function () {
				var events = this.options.title && this.options.title.events,
					element = this.title,
					eventsSubtitle = this.options.subtitle && this.options.subtitle.events,
					elementSubtitle = this.subtitle;

				return {
					events: events,
					element: element,
					eventsSubtitle: eventsSubtitle,
					elementSubtitle: elementSubtitle
				};
			},
			/**
			 * @description Extracts SVG elements from dataLabels
			 * @property {Object} events events for dataLabels
			 * @property {Array} element dataLabels SVG element
			 * @return {Object} { events: object, element: object }
			 * @memberof customEvents
			 **/
			drawDataLabels: function () {
				var dataLabelsGroup = this.dataLabelsGroup;

				return {
					events: dataLabelsGroup ? this.options.dataLabels.events : UNDEFINED,
					element: dataLabelsGroup ? this.dataLabelsGroup : UNDEFINED
				};
			},
			/**
			 * @description Extracts SVG elements from axis title and stackLabels
			 * @property {Object} events events for axis title
			 * @property {Array} element axis title SVG element
			 * @property {Object} eventsPoint events for stacklabels
			 * @property {Array} elementPoint stacklabels SVG element
			 * @property {Object} eventsStackLabel events for stacklabels
			 * @property {Array} elementStackLabel stacklabels group SVG element
			 * @return {Object} { events: object, element: object, eventsPoint: object, elementPoint: object, eventsStackLabel: object, elementStackLabel: object }
			 * @memberof customEvents
			 **/
			render: function () {
				var stackLabels = this.options.stackLabels,
					events,
					element,
					eventsPoint,
					elementPoint,
					eventsStackLabel,
					elementStackLabel;

				if (this.axisTitle) {
					events = this.options.title.events;
					element = this.axisTitle;
				}

				if (stackLabels && stackLabels.enabled) {
					eventsPoint = stackLabels.events;
					elementPoint = this.stacks;
					eventsStackLabel = stackLabels.events;
					elementStackLabel = this.stackTotalGroup;
				}

				return {
					events: events,
					element: element,
					eventsPoint: eventsPoint,
					elementPoint: elementPoint,
					eventsStackLabel: eventsStackLabel,
					elementStackLabel: elementStackLabel
				};
			},
			/**
			 * @description Extracts SVG elements from series and series points
			 * @property {Object} events events for series
			 * @property {Array} element series SVG element
			 * @property {Object} events events for series points
			 * @property {Array} element series points SVG element
			 * @return {Object} { events: object, element: object, eventsPoint: object, elementPoint: object }
			 * @memberof customEvents
			 **/
			drawPoints: function () {
				var op = this.options,
					type = this.type,
					events = op.customEvents ? op.customEvents.series : op.events,
					element = this.group,
					eventsPoint = op.customEvents ? op.customEvents.point : op.point.events,
					elementPoint;

				if (defaultOptions[type] && defaultOptions[type].marker && !this.bubblePadding) {
					elementPoint = [this.markerGroup]; //	get markers when enabled
				} else {
					elementPoint = this.points; //	extract points
				}


				if (!this.kdTree && !this.buildingKdTree) {
					this.buildKDTree(); //	#86, missing reference to point on first mouseover
				}

				return {
					events: events,
					element: element,
					eventsPoint: eventsPoint,
					elementPoint: elementPoint,
					eventObject: this,
					isSeries: true
				};
			},
			/**
			 * @description Extracts SVG elements from legend item
			 * @property {Object} events events for legend item
			 * @property {Array} element legend item SVG element
			 * @return {Object} { events: object, element: object }
			 * @memberof customEvents
			 **/
			renderItem: function (item) {
				return {
					events: this.options.itemEvents,
					element: item.legendGroup,
					eventObject: item
				};
			},
			/**
			 * @description Extracts SVG elements from crosshair
			 * @property {Object} events events for crosshair
			 * @property {Array} element crosshair SVG element
			 * @return {Object} { events: object, element: object }
			 * @memberof customEvents
			 **/
			drawCrosshair: function () {
				var crosshair = this.options.crosshair;

				return {
					events: crosshair && crosshair.events,
					element: this.cross
				};
			}
		}
	};

	customEvents = HC.Chart.prototype.customEvent;
	customEvents.init();

}));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Ng2HighchartsModule", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Ng2Highcharts", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Ng2Highstocks", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Ng2Highmaps", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["d"]; });



/***/ }
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYmQ2OTZiNzhkMWU2NGI4NWNmYyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL25nMi1oaWdoY2hhcnRzLWJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25nMi1oaWdoY2hhcnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9uZzItaGlnaG1hcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25nMi1oaWdoc3RvY2tzLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL34vaGlnaGNoYXJ0cy1jdXN0b20tZXZlbnRzL2pzL2N1c3RvbUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9uZzItaGlnaGNoYXJ0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztHQUVHO0FBQ29HO0FBRXZHO0lBT0Ms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T0FBTztBQUN4QixpQkFBaUIsTUFBTTtBQUN2QixlQUFlLE9BQU8sRUFBRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLE1BQU07QUFDdkIsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLE1BQU07QUFDdkIsZUFBZSxPQUFPLEVBQUU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDLEtBQUs7QUFDTCxnQ0FBZ0M7QUFDaEM7OztBQUdBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLGlCQUFpQixNQUFNO0FBQ3ZCLGVBQWUsT0FBTyxFQUFFO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLGlCQUFpQixNQUFNO0FBQ3ZCLGVBQWUsT0FBTyxFQUFFO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQyxHOzs7Ozs7Ozs7Ozs7QUNuaEJ1QiIsImZpbGUiOiJuZzItaGlnaGNoYXJ0cy51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBhbmd1bGFyL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmcyLWhpZ2hjaGFydHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZzItaGlnaGNoYXJ0c1wiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vcnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9yeSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmYmQ2OTZiNzhkMWU2NGI4NWNmYyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGdyZWcgb24gMjEvMTAvMTYuXG4gKi9cbmltcG9ydCB7IElucHV0LCBLZXlWYWx1ZURpZmZlciwgRWxlbWVudFJlZiwgS2V5VmFsdWVEaWZmZXJzLCBPbkRlc3Ryb3ksIERvQ2hlY2sgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmcySGlnaGNoYXJ0c0Jhc2UgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIERvQ2hlY2sge1xuXHRASW5wdXQoJ25nMi1oaWdoY2hhcnRzJykgb3B0aW9uczogT2JqZWN0IC8qIEhpZ2hjaGFydHNPcHRpb25zICovO1xuXHRob3N0RWxlbWVudDogRWxlbWVudFJlZjtcblx0cENoYXJ0OiBhbnk7Ly9IaWdoY2hhcnRzQ2hhcnRPYmplY3Q7XG5cdGN1cnJlbnRXaWR0aDogbnVtYmVyO1xuXHRjdXJyZW50SGVpZ2h0OiBudW1iZXI7XG5cdGRpZmZlcjogS2V5VmFsdWVEaWZmZXI8YW55LCBhbnk+O1xuXHRjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYsIF9kaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMpIHtcblx0XHR0aGlzLmhvc3RFbGVtZW50ID0gZWxlO1xuXHRcdHRoaXMuZGlmZmVyID0gX2RpZmZlcnMuZmluZCh7fSkuY3JlYXRlKG51bGwpO1xuXHR9XG5cblx0cHVibGljIGdldCBjaGFydCgpOiBhbnkgLyogSGlnaGNoYXJ0c0NoYXJ0T2JqZWN0ICovIHtcblx0XHRyZXR1cm4gdGhpcy5wQ2hhcnQ7XG5cdH1cblxuXHRyZWZsb3coKSB7XG5cdFx0aWYgKCF0aGlzLnBDaGFydCB8fCAhdGhpcy5vcHRpb25zKSB7IHJldHVybjsgfVxuXG5cdFx0aWYgKGdldENvbXB1dGVkU3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50KS50cmFuc2l0aW9uRHVyYXRpb24pIHtcblx0XHRcdHZhciBkdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnRyYW5zaXRpb25EdXJhdGlvbik7XG5cdFx0XHR2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdGlmIChkdXJhdGlvbiA8IDApIHsgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7IH1cblx0XHRcdFx0ZHVyYXRpb24gLT0gNTA7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5wQ2hhcnQucmVmbG93KCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvLyBhbGwgcmlnaHQgLSBjb21wb25lbnQgcHJvYmFibHkgaGFzIGJlZW4gZGVsZXRlZC5cblx0XHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgZHVyYXRpb24pO1xuXHRcdH1cblxuXHRcdHRoaXMucENoYXJ0LnJlZmxvdygpO1xuXHR9XG5cblx0bmdEb0NoZWNrKCkge1xuXHRcdGlmICh0aGlzLmN1cnJlbnRXaWR0aCAhPT0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoKSB7XG5cdFx0XHR0aGlzLnJlZmxvdygpO1xuXHRcdFx0dGhpcy5jdXJyZW50V2lkdGggPSB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmN1cnJlbnRIZWlnaHQgIT09IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpIHtcblx0XHRcdHRoaXMucmVmbG93KCk7XG5cdFx0XHR0aGlzLmN1cnJlbnRIZWlnaHQgPSB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdH1cblx0XHRpZiAodGhpcy5kaWZmZXIuZGlmZih0aGlzLm9wdGlvbnMpKSB7XG5cdFx0XHR0aGlzLmRyYXcodGhpcy5vcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5wQ2hhcnQpIHtcblx0XHRcdHRoaXMucENoYXJ0LmRlc3Ryb3koKTtcblx0XHR9XG5cdH1cblxuXHRhYnN0cmFjdCBkcmF3KG9wdDogYW55IC8qSGlnaGNoYXJ0c09wdGlvbnMqLyk6IHZvaWQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbmcyLWhpZ2hjaGFydHMtYmFzZS50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEtleVZhbHVlRGlmZmVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZzJIaWdoY2hhcnRzQmFzZSB9IGZyb20gXCIuL25nMi1oaWdoY2hhcnRzLWJhc2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW25nMi1oaWdoY2hhcnRzXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMkhpZ2hjaGFydHMgZXh0ZW5kcyBOZzJIaWdoY2hhcnRzQmFzZSB7XHJcblx0QElucHV0KCduZzItaGlnaGNoYXJ0cycpIG9wdGlvbnM6IE9iamVjdCAvKiBIaWdoY2hhcnRzT3B0aW9ucyAqLztcclxuXHJcblx0Y29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmLCBfZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzKSB7XHJcblx0XHRzdXBlcihlbGUsIF9kaWZmZXJzKTtcclxuXHRcdHJlcXVpcmUoJ2hpZ2hjaGFydHMtY3VzdG9tLWV2ZW50cycpKCg8YW55PndpbmRvdykuSGlnaGNoYXJ0cyk7XHJcblx0fVxyXG5cclxuXHRkcmF3KG9wdDogYW55IC8qIEhpZ2hjaGFydHNPcHRpb25zICovKTogdm9pZCB7XHJcblx0XHRpZiAoIW9wdCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTm8gdmFsaWQgb3B0aW9ucy4uLicpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhvcHQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAob3B0LnNlcmllcyB8fCBvcHQuZGF0YSkge1xyXG5cdFx0XHRpZiAodGhpcy5wQ2hhcnQpIHtcclxuXHRcdFx0XHR0aGlzLnBDaGFydC5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFvcHQuY2hhcnQpIHtcclxuXHRcdFx0XHRvcHQuY2hhcnQgPSB7fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRvcHQuY2hhcnQucmVuZGVyVG8gPSB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHRcdHRoaXMucENoYXJ0ID0gbmV3ICg8YW55PndpbmRvdykuSGlnaGNoYXJ0cy5DaGFydChvcHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIHZhbGlkIG9wdGlvbnMuLi4nKTtcclxuXHRcdFx0Y29uc29sZS5kaXIob3B0KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL25nMi1oaWdoY2hhcnRzLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgS2V5VmFsdWVEaWZmZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nMkhpZ2hjaGFydHNCYXNlIH0gZnJvbSBcIi4vbmcyLWhpZ2hjaGFydHMtYmFzZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbbmcyLWhpZ2htYXBzXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMkhpZ2htYXBzIGV4dGVuZHMgTmcySGlnaGNoYXJ0c0Jhc2Uge1xyXG5cdEBJbnB1dCgnbmcyLWhpZ2htYXBzJykgb3B0aW9uczogT2JqZWN0IC8qIEhpZ2hjaGFydHNPcHRpb25zICovO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYsIF9kaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMpIHtcclxuXHRcdHN1cGVyKGVsZSwgX2RpZmZlcnMpO1xyXG5cdH1cclxuXHJcblx0ZHJhdyhvcHQ6IGFueSAvKiBIaWdoY2hhcnRzT3B0aW9ucyAqLyk6IHZvaWQge1xyXG5cdFx0aWYgKCFvcHQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIHZhbGlkIG9wdGlvbnMuLi4nKTtcclxuXHRcdFx0Y29uc29sZS5sb2cob3B0KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdC5zZXJpZXMgfHwgb3B0LmRhdGEpIHtcclxuXHRcdFx0aWYgKHRoaXMucENoYXJ0KSB7XHJcblx0XHRcdFx0dGhpcy5wQ2hhcnQuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghb3B0LmNoYXJ0KSB7XHJcblx0XHRcdFx0b3B0LmNoYXJ0ID0ge307XHJcblx0XHRcdH1cclxuXHRcdFx0b3B0LmNoYXJ0LnJlbmRlclRvID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cdFx0XHR0aGlzLnBDaGFydCA9IG5ldyAoPGFueT53aW5kb3cpLkhpZ2hjaGFydHMuTWFwKG9wdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTm8gdmFsaWQgb3B0aW9ucy4uLicpO1xyXG5cdFx0XHRjb25zb2xlLmRpcihvcHQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbmcyLWhpZ2htYXBzLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgS2V5VmFsdWVEaWZmZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nMkhpZ2hjaGFydHNCYXNlIH0gZnJvbSBcIi4vbmcyLWhpZ2hjaGFydHMtYmFzZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbbmcyLWhpZ2hzdG9ja3NdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmcySGlnaHN0b2NrcyBleHRlbmRzIE5nMkhpZ2hjaGFydHNCYXNlIHtcclxuXHRASW5wdXQoJ25nMi1oaWdoc3RvY2tzJykgb3B0aW9uczogT2JqZWN0IC8qIEhpZ2hjaGFydHNPcHRpb25zICovO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihlbGU6IEVsZW1lbnRSZWYsIF9kaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMpIHtcclxuXHRcdHN1cGVyKGVsZSwgX2RpZmZlcnMpO1xyXG5cdH1cclxuXHJcblx0ZHJhdyhvcHQ6IGFueSAvKiBIaWdoY2hhcnRzT3B0aW9ucyAqLyk6IHZvaWQge1xyXG5cdFx0aWYgKCFvcHQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIHZhbGlkIG9wdGlvbnMuLi4nKTtcclxuXHRcdFx0Y29uc29sZS5sb2cob3B0KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdC5zZXJpZXMgfHwgb3B0LmRhdGEpIHtcclxuXHRcdFx0aWYgKHRoaXMucENoYXJ0KSB7XHJcblx0XHRcdFx0dGhpcy5wQ2hhcnQuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghb3B0LmNoYXJ0KSB7XHJcblx0XHRcdFx0b3B0LmNoYXJ0ID0ge307XHJcblx0XHRcdH1cclxuXHRcdFx0b3B0LmNoYXJ0LnJlbmRlclRvID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cdFx0XHR0aGlzLnBDaGFydCA9IG5ldyAoPGFueT53aW5kb3cpLkhpZ2hjaGFydHMuU3RvY2tDaGFydChvcHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIHZhbGlkIG9wdGlvbnMuLi4nKTtcclxuXHRcdFx0Y29uc29sZS5kaXIob3B0KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL25nMi1oaWdoc3RvY2tzLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nMkhpZ2hjaGFydHMgfSBmcm9tICcuL3NyYy9uZzItaGlnaGNoYXJ0cyc7XG5pbXBvcnQgeyBOZzJIaWdobWFwcyB9IGZyb20gJy4vc3JjL25nMi1oaWdobWFwcyc7XG5pbXBvcnQgeyBOZzJIaWdoc3RvY2tzIH0gZnJvbSAnLi9zcmMvbmcyLWhpZ2hzdG9ja3MnO1xuXG5leHBvcnQgKiBmcm9tICcuL3NyYy9uZzItaGlnaGNoYXJ0cyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9uZzItaGlnaHN0b2Nrcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9uZzItaGlnaG1hcHMnO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtOZzJIaWdoY2hhcnRzLCBOZzJIaWdobWFwcywgTmcySGlnaHN0b2Nrc10sXG5cdGV4cG9ydHM6IFtOZzJIaWdoY2hhcnRzLCBOZzJIaWdobWFwcywgTmcySGlnaHN0b2Nrc11cbn0pXG5leHBvcnQgY2xhc3MgTmcySGlnaGNoYXJ0c01vZHVsZSB7IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9pbmRleC50cyIsIi8qKlxuKiBDdXN0b20gZXZlbnRzIHYyLjEuNiAoMjAxOC0wNy0yMClcbipcbiogKGMpIDIwMTItMjAxOCBCbGFjayBMYWJlbFxuKlxuKiBMaWNlbnNlOiBDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIChDQylcbiovXG5cbi8qIGdsb2JhbCBIaWdoY2hhcnRzIHNldFRpbWVvdXQgY2xlYXJUaW1lb3V0IG1vZHVsZTp0cnVlICovXG4vKiBlc2xpbnQgbm8tbG9vcC1mdW5jOiAwICovXG5cbi8qKlxuICogQG5hbWVzcGFjZSBjdXN0b21FdmVudHNcbiAqKi9cblxuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeTtcblx0fSBlbHNlIHtcblx0XHRmYWN0b3J5KEhpZ2hjaGFydHMpO1xuXHR9XG59KGZ1bmN0aW9uIChIQykge1xuXG5cdC8qIGdsb2JhbCBIaWdoY2hhcnRzIDp0cnVlLCB3aW5kb3cgKi9cblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIFVOREVGSU5FRCxcblx0XHREQkxDTElDSyA9ICdkYmxjbGljaycsXG5cdFx0VE9VQ0hTVEFSVCA9ICd0b3VjaHN0YXJ0Jyxcblx0XHRDTElDSyA9ICdjbGljaycsXG5cdFx0ZWFjaCA9IEhDLmVhY2gsXG5cdFx0cGljayA9IEhDLnBpY2ssXG5cdFx0d3JhcCA9IEhDLndyYXAsXG5cdFx0bWVyZ2UgPSBIQy5tZXJnZSxcblx0XHRpc0FycmF5ID0gSEMuaXNBcnJheSxcblx0XHRvYmplY3RFYWNoID0gSEMub2JqZWN0RWFjaCxcblx0XHRhZGRFdmVudCA9IEhDLmFkZEV2ZW50LFxuXHRcdGlzVG91Y2hEZXZpY2UgPSBIQy5pc1RvdWNoRGV2aWNlLFxuXHRcdGlzT2JqZWN0ID0gSEMuaXNPYmplY3QsXG5cdFx0aXNOdW1iZXIgPSBIQy5pc051bWJlcixcblx0XHRkZWZhdWx0T3B0aW9ucyA9IEhDLmdldE9wdGlvbnMoKS5wbG90T3B0aW9ucyxcblx0XHRheGlzUHJvdG8gPSBIQy5BeGlzICYmIEhDLkF4aXMucHJvdG90eXBlLFxuXHRcdHBsb3RMaW5lT3JCYW5kUHJvdG8gPSBIQy5QbG90TGluZU9yQmFuZCAmJiBIQy5QbG90TGluZU9yQmFuZC5wcm90b3R5cGUsXG5cdFx0c2VyaWVzVHlwZXMgPSBIQy5zZXJpZXNUeXBlcyxcblx0XHRzZXJpZXNQcm90byA9IEhDLlNlcmllcyAmJiBIQy5TZXJpZXMucHJvdG90eXBlLFxuXHRcdGN1c3RvbUV2ZW50cyxcblx0XHRwcm90byxcblx0XHRtZXRob2RzO1xuXG5cdC8qKlxuXHQgKiBXUkFQUEVEIEZVTkNUSU9OU1xuXHQgKi9cblxuXHQvLyByZXNldCBleGlzIGV2ZW50c1xuXHRpZiAocGxvdExpbmVPckJhbmRQcm90bykgeyAvLyAjIGNvbmRpdGlvbiBmb3IgaGlnaG1hcHMgYW5kIGN1c3RvbSBidWlsZHNcblx0XHR3cmFwKHBsb3RMaW5lT3JCYW5kUHJvdG8sICdyZW5kZXInLCBmdW5jdGlvbiAocHJvY2VlZCkge1xuXHRcdFx0dmFyIGRlZmF1bHRFdmVudHMgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmV2ZW50cztcblx0XHRcblx0XHRcdC8vIHJlc2V0IGRlZmF1bHQgZXZlbnRzIG9uIHBsb3QgbGluZXMgb3IgYmFuZHNcblx0XHRcdGlmIChkZWZhdWx0RXZlbnRzKSB7XG5cdFx0XHRcdGRlZmF1bHRFdmVudHMgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByb2NlZWQuYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG5cdFx0fSk7XG5cdH1cblx0aWYgKHNlcmllc1Byb3RvKSB7IC8vICMgY29uZGl0aW9uIGZvciBoaWdobWFwcyBhbmQgY3VzdG9tIGJ1aWxkc1xuXHRcdHdyYXAoc2VyaWVzUHJvdG8sICdpbml0JywgZnVuY3Rpb24gKHByb2NlZWQsIGNoYXJ0LCBvcHRpb25zKSB7XG5cdFx0XHR2YXIgY2hhcnRPcHRpb25zID0gY2hhcnQub3B0aW9ucyxcblx0XHRcdFx0cGxvdE9wdGlvbnMgPSBjaGFydE9wdGlvbnMucGxvdE9wdGlvbnMsXG5cdFx0XHRcdHNlcmllc09wdGlvbnMgPSBjaGFydE9wdGlvbnMucGxvdE9wdGlvbnMuc2VyaWVzLFxuXHRcdFx0XHR1c2VyT3B0aW9ucyA9IG1lcmdlKHNlcmllc09wdGlvbnMsIHBsb3RPcHRpb25zW3RoaXMudHlwZV0sIG9wdGlvbnMpLFxuXHRcdFx0XHR1c2VyT3B0aW9uc0V2ZW50cyA9IHVzZXJPcHRpb25zICYmIHVzZXJPcHRpb25zLmV2ZW50cyxcblx0XHRcdFx0dXNlck9wdGlvbnNQb2ludEV2ZW50cyA9IHVzZXJPcHRpb25zICYmIHVzZXJPcHRpb25zLnBvaW50ICYmIHVzZXJPcHRpb25zLnBvaW50LmV2ZW50czsgLy8gRml4ZWQgIzcwXG5cblx0XHRcdC8vIHJlc2V0IGRlZmF1bHQgZXZlbnRzIG9uIHNlcmllcyBhbmQgc2VyaWVzIHBvaW50XG5cdFx0XHRvcHRpb25zLmV2ZW50cyA9IHt9O1xuXHRcdFx0b3B0aW9ucy5wb2ludCA9IHtcblx0XHRcdFx0ZXZlbnRzOiB7fVxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gQWRkIHN1cHBvcnQgZm9yIGxlZ2VuZEl0ZW1DbGlja1xuXHRcdFx0aWYgKHVzZXJPcHRpb25zRXZlbnRzKSB7XG5cdFx0XHRcdG9wdGlvbnMuZXZlbnRzID0ge1xuXHRcdFx0XHRcdGxlZ2VuZEl0ZW1DbGljazogdXNlck9wdGlvbnNFdmVudHMgJiYgdXNlck9wdGlvbnNFdmVudHMubGVnZW5kSXRlbUNsaWNrXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBzdXBwb3J0IGZvciBsZWdlbmRJdGVtQ2xpY2sgaW4gcGllIGNoYXJ0XG5cdFx0XHRpZiAodXNlck9wdGlvbnNQb2ludEV2ZW50cykge1xuXHRcdFx0XHRvcHRpb25zLnBvaW50LmV2ZW50cyA9IHtcblx0XHRcdFx0XHRsZWdlbmRJdGVtQ2xpY2s6IHVzZXJPcHRpb25zUG9pbnRFdmVudHMgJiYgdXNlck9wdGlvbnNQb2ludEV2ZW50cy5sZWdlbmRJdGVtQ2xpY2ssXG5cdFx0XHRcdFx0c2VsZWN0OiB1c2VyT3B0aW9uc1BvaW50RXZlbnRzICYmIHVzZXJPcHRpb25zUG9pbnRFdmVudHMuc2VsZWN0LFxuXHRcdFx0XHRcdHVuc2VsZWN0OiB1c2VyT3B0aW9uc1BvaW50RXZlbnRzICYmIHVzZXJPcHRpb25zUG9pbnRFdmVudHMudW5zZWxlY3Rcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXR0YWNoIGV2ZW50cyB0byBjdXN0b20gb2JqZWN0LCB3aGljaCBpcyB1c2VkIGluIGF0dGFjaCBldmVudFxuXHRcdFx0b3B0aW9ucy5jdXN0b21FdmVudHMgPSB7XG5cdFx0XHRcdHNlcmllczogdXNlck9wdGlvbnNFdmVudHMsXG5cdFx0XHRcdHBvaW50OiB1c2VyT3B0aW9uc1BvaW50RXZlbnRzXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBjYWxsIGRlZmF1bHQgYWN0aW9uXG5cdFx0XHRwcm9jZWVkLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXG5cdFx0fSk7XG5cdH1cblxuXHRIQy5DaGFydC5wcm90b3R5cGUuY3VzdG9tRXZlbnQgPSB7XG5cdFx0LyoqXG5cdFx0ICogQGRlc2NyaXB0aW9uIEV4YW1wbGU6IFtIQy5TZXJpZXMsIFsnZHJhd1BvaW50cycsICdkcmF3RGF0YUxhYmVscyddXVxuXHRcdCAqIEBtZW1iZXJvZiBjdXN0b21FdmVudHNcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IGFycmF5IG9mIHBhaXJzOiBwcm90b3R5cGUsIGFycmF5IG9mIG1ldGhvZHMgdG8gd3JhcFxuXHRcdCAqKi9cblx0XHRnZXRFdmVudHNQcm90b01ldGhvZHM6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBwcm90b01ldGhvZHMgPSBbXG5cdFx0XHRcdFtIQy5UaWNrLCBbJ2FkZExhYmVsJ11dLFxuXHRcdFx0XHRbSEMuQXhpcywgWydyZW5kZXInXV0sXG5cdFx0XHRcdFtIQy5BeGlzLCBbJ2RyYXdDcm9zc2hhaXInXV0sXG5cdFx0XHRcdFtIQy5DaGFydCwgWydzZXRUaXRsZSddXSxcblx0XHRcdFx0W0hDLkxlZ2VuZCwgWydyZW5kZXJJdGVtJ11dLFxuXHRcdFx0XHRbSEMuUGxvdExpbmVPckJhbmQsIFsncmVuZGVyJ11dLFxuXHRcdFx0XHRbSEMuU2VyaWVzLCBbJ2RyYXdQb2ludHMnLCAnZHJhd0RhdGFMYWJlbHMnXV1cblx0XHRcdF07XG5cdCAgXG5cdFx0XHQvLyBzdXBwb3J0IGZvciBleHRyYSBzZXJpZXNcblx0XHRcdG9iamVjdEVhY2goc2VyaWVzVHlwZXMsIGZ1bmN0aW9uIChmbiwgc2VyaWVzVHlwZSkge1xuXHRcdFx0XHRwcm90b01ldGhvZHMucHVzaChbXG5cdFx0XHRcdFx0c2VyaWVzVHlwZXNbc2VyaWVzVHlwZV0sIFsnZHJhd1BvaW50cycsICdkcmF3RGF0YUxhYmVscyddXG5cdFx0XHRcdF0pO1xuXHRcdFx0fSk7XG5cdFxuXHRcdFx0cmV0dXJuIHByb3RvTWV0aG9kcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEBkZXNjcmlwdGlvbiBJbml0IG1ldGhvZCwgYmFzZWQgb24gZ2V0RXZlbnRzUHJvdG9NZXRob2RzKCkgYXJyYXkuIEl0ZXJhdGVzIG9uIGFycmF5IG9mIHByb3RvdHlwZXMgYW5kIG1ldGhvZHMgdG8gd3JhcFxuXHRcdCAqIEBtZW1iZXJvZiBjdXN0b21FdmVudHNcblx0XHQgKiovXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGV2ZW50c1Byb3RvTWV0aG9kcyA9IHRoaXMuZ2V0RXZlbnRzUHJvdG9NZXRob2RzKCk7IC8vIGFycmF5IG9mIHBhaXJzIFtvYmplY3QsIFttZXRob2RzXV1cblxuXHRcdFx0ZWFjaChldmVudHNQcm90b01ldGhvZHMsIGZ1bmN0aW9uIChwcm90b01ldGhvZCkge1xuXHRcdFx0XHRpZiAoaXNBcnJheShwcm90b01ldGhvZCkpIHtcblx0XHRcdFx0XHRwcm90byA9IHByb3RvTWV0aG9kWzBdICYmIHByb3RvTWV0aG9kWzBdLnByb3RvdHlwZTtcblx0XHRcdFx0XHRtZXRob2RzID0gcHJvdG9NZXRob2RbMV07XG5cblx0XHRcdFx0XHRpZiAocHJvdG8pIHtcblx0XHRcdFx0XHRcdGVhY2gobWV0aG9kcywgZnVuY3Rpb24gKG1ldGhvZCkge1xuXHRcdFx0XHRcdFx0XHRjdXN0b21FdmVudHMuYXR0YWNoKHByb3RvLCBtZXRob2QpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEBkZXNjcmlwdGlvbiBXcmFwcyBtZXRob2RzIGkuZSBkcmF3UG9pbnRzIHRvIGV4dHJhY3QgU1ZHIGVsZW1lbnQgYW5kIHNldCBhbiBldmVudCBieSBjYWxsaW5nIGN1c3RvbUV2ZW50cy5hZGQoKVxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBIaWdoY2hhcnRzIHByb3RvdHlwZSBpLmUgSGlnaGNoYXJ0cy5TZXJpZXMucHJvdG90eXBlXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGhjTWV0aG9kIG5hbWUgb2Ygd3JhcHBlZCBtZXRob2QgaS5lIGRyYXdQb2ludHNcblx0XHQgKiBAbWVtYmVyb2YgY3VzdG9tRXZlbnRzXG5cdFx0ICoqL1xuXHRcdGF0dGFjaDogZnVuY3Rpb24gKHByb3RvLCBoY01ldGhvZCkge1xuXHRcdFx0XG5cdFx0XHR3cmFwKHByb3RvLCBoY01ldGhvZCwgZnVuY3Rpb24gKHByb2NlZWQsIHBhcmFtKSB7XG5cdFx0XHRcdHZhciBldmVudEVsZW1lbnQgPSB7XG5cdFx0XHRcdFx0XHRldmVudHM6IFVOREVGSU5FRCxcblx0XHRcdFx0XHRcdGVsZW1lbnQ6IFVOREVGSU5FRFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cHJvY2VlZE9iamVjdCxcblx0XHRcdFx0XHRsZW4sXG5cdFx0XHRcdFx0ajtcblxuXHRcdFx0XHQvLyAgY2FsbCBkZWZhdWx0IGFjdGlvbnNcblx0XHRcdFx0cHJvY2VlZE9iamVjdCA9IHByb2NlZWQuYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG5cblx0XHRcdFx0Ly9cdGNhbGxcblx0XHRcdFx0ZXZlbnRFbGVtZW50ID0gY3VzdG9tRXZlbnRzLmV2ZW50RWxlbWVudFtoY01ldGhvZF0uY2FsbCh0aGlzLCBwYXJhbSk7XG5cblx0XHRcdFx0Ly8gIHN0b3AsIHdoZW4gZXZlbnRzIGFuZCBTVkcgZWxlbWVudCBkbyBub3QgZXhpc3Rcblx0XHRcdFx0aWYgKCFldmVudEVsZW1lbnQuZXZlbnRzICYmICFldmVudEVsZW1lbnQuZXZlbnRzU3VidGl0bGUgJiYgIWV2ZW50RWxlbWVudC5ldmVudHNQb2ludCkge1xuXHRcdFx0XHRcdHJldHVybiBwcm9jZWVkT2JqZWN0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoZXZlbnRFbGVtZW50LmV2ZW50c1BvaW50KSB7XG5cblx0XHRcdFx0XHRsZW4gPSBldmVudEVsZW1lbnQuZWxlbWVudFBvaW50Lmxlbmd0aDtcblxuXHRcdFx0XHRcdC8vIGF0dGFjaCBldmVudHMgcGVyIGVhY2ggcG9pbnRcblx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbGVuOyBqKyspIHtcblx0XHRcdFx0XHRcdGlmIChldmVudEVsZW1lbnQuZWxlbWVudFBvaW50W2pdKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBlbGVtUG9pbnQgPSBwaWNrKGV2ZW50RWxlbWVudC5lbGVtZW50UG9pbnRbal0uZ3JhcGhpYywgZXZlbnRFbGVtZW50LmVsZW1lbnRQb2ludFtqXSk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGVsZW1Qb2ludCAmJiBlbGVtUG9pbnQgIT09IFVOREVGSU5FRCkge1xuXHRcdFx0XHRcdFx0XHRcdGN1c3RvbUV2ZW50cy5hZGQoZWxlbVBvaW50LCBldmVudEVsZW1lbnQuZXZlbnRzUG9pbnQsIGV2ZW50RWxlbWVudC5lbGVtZW50UG9pbnRbal0sIGV2ZW50RWxlbWVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBhdHRhY2ggZXZlbnQgdG8gc3VidGl0bGVcblx0XHRcdFx0aWYgKGV2ZW50RWxlbWVudC5ldmVudHNTdWJ0aXRsZSkge1xuXHRcdFx0XHRcdGN1c3RvbUV2ZW50cy5hZGQoZXZlbnRFbGVtZW50LmVsZW1lbnRTdWJ0aXRsZSwgZXZlbnRFbGVtZW50LmV2ZW50c1N1YnRpdGxlLCBldmVudEVsZW1lbnQsIHRoaXMpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gYXR0YWNoIGV2ZW50IHRvIHN0YWNrTGFiZWxzXG5cdFx0XHRcdGlmIChldmVudEVsZW1lbnQuZXZlbnRzU3RhY2tMYWJlbCkge1xuXHRcdFx0XHRcdGN1c3RvbUV2ZW50cy5hZGQoZXZlbnRFbGVtZW50LmVsZW1lbnRTdGFja0xhYmVsLCBldmVudEVsZW1lbnQuZXZlbnRzU3RhY2tMYWJlbCwgZXZlbnRFbGVtZW50LCB0aGlzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGN1c3RvbUV2ZW50cy5hZGQoZXZlbnRFbGVtZW50LmVsZW1lbnQsIGV2ZW50RWxlbWVudC5ldmVudHMsIGV2ZW50RWxlbWVudCwgdGhpcyk7XG5cblx0XHRcdFx0cmV0dXJuIHByb2NlZWRPYmplY3Q7XG5cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQGRlc2NyaXB0aW9uIGFkZHMgZXZlbnQgb24gYSBTVkcgZWxlbWVudFxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBTVkdlbGVtIGdyYXBoaWMgZWxlbWVudFxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBldmVudHMgb2JqZWN0IHdpdGggYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtT2JqIFwidGhpc1wiIG9iamVjdCwgd2hpY2ggaXMgYXZhaWxhYmxlIGluIHRoZSBldmVudFxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzZXJpZXMgY2hhcnQgc2VyaWVzXG5cdFx0ICogQG1lbWJlcm9mIGN1c3RvbUV2ZW50c1xuXHRcdCAqKi9cblx0XHRhZGQ6IGZ1bmN0aW9uIChTVkdlbGVtLCBldmVudHMsIGVsZW1PYmosIGV2ZW50RWxlbWVudCwgaXNQb2ludCkge1xuXG5cdFx0XHR2YXIgZXZlbnRPYmplY3QgPSBldmVudEVsZW1lbnQuZXZlbnRPYmplY3QgfHwgZWxlbU9iai5ldmVudE9iamVjdCwgLy9cdEZpeCBzZXJpZXMgcmVmZXJlbmNlICM4OVxuXHRcdFx0XHRpc1NlcmllcyA9IGVsZW1PYmouaXNTZXJpZXMgfHwgZXZlbnRFbGVtZW50LmlzU2VyaWVzO1xuXG5cblx0XHRcdC8vIHN0b3Agd2hlbiBTVkcgZWxlbWVudCBkb2VzIG5vdCBleGlzdFxuXHRcdFx0aWYgKCFTVkdlbGVtIHx8ICFTVkdlbGVtLmVsZW1lbnQpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBhY3Rpb24gaW4gZXZlbnRzKSB7XG5cblx0XHRcdFx0KGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnQpICYmICFTVkdlbGVtW2V2ZW50XSkge1xuXHRcdFx0XHRcdFx0aWYgKGlzVG91Y2hEZXZpY2UgJiYgZXZlbnQgPT09IERCTENMSUNLKSB7IC8vICAjMzAgLSBmYWxsYmFjayBmb3IgaVBhZFxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0dmFyIHRhcHBlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHRcdGFkZEV2ZW50KFNWR2VsZW0uZWxlbWVudCwgVE9VQ0hTVEFSVCwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChpc1NlcmllcyAmJiAhZXZlbnRPYmplY3QuZGlyZWN0VG91Y2gpIHsgLy8gIzkzXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgY2hhcnQgPSBldmVudE9iamVjdC5jaGFydCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9ybWFsaXplZEV2ZW50ID0gY2hhcnQucG9pbnRlci5ub3JtYWxpemUoZSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1PYmogPSBldmVudE9iamVjdC5zZWFyY2hQb2ludChub3JtYWxpemVkRXZlbnQsIGV2ZW50T2JqZWN0LmtkRGltZW5zaW9ucyA9PT0gMSkgfHwgZWxlbU9iajsgLy8gIzg3IC0gd3Jvbmcgc2VhcmNoUG9pbnQgZm9yIHNjYXR0ZXIgc2VyaWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRlLnBvaW50ID0gZWxlbU9iajtcdC8vXHQjODkgcG9pbnQgcmVmZXJlbmNlIGluIG1vdXNlIGV2ZW50XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKChldmVudE9iamVjdCAmJiAhaXNQb2ludCkgfHwgKGlzTnVtYmVyKGV2ZW50T2JqZWN0LnZhbHVlKSkpIHsgLy8gIzk1IFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnRPYmplY3QudmFsdWUgPSBlbGVtT2JqLnRleHRTdHI7XG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtT2JqID0gZXZlbnRPYmplY3Q7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW1PYmogJiYgZWxlbU9iai50ZXh0U3RyKSB7IC8vIGxhYmVsc1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbU9iai52YWx1ZSA9IGVsZW1PYmoudGV4dFN0cjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbU9iai5kcmlsbGRvd24pIHsgLy8gIzExNCAtIGRyaWxsVXAgLSB1bmRlZmluZWQgZGREdXBlcyBbXVxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbU9iai5kb0RyaWxsZG93bih1bmRlZmluZWQsIHVuZGVmaW5lZCwgZSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCF0YXBwZWQpIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0dGFwcGVkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhcHBlZCA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50c1tDTElDS10uY2FsbChlbGVtT2JqLCBlKTsgLy9cdGNhbGwgc2luZ2xlIGNsaWNrIGFjdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgMzAwKTtcblxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGFwcGVkKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0dGFwcGVkID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50c1tldmVudF0uY2FsbChlbGVtT2JqLCBlKTtcblxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRhZGRFdmVudChTVkdlbGVtLmVsZW1lbnQsIGV2ZW50LCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGlzU2VyaWVzKSB7IC8vICMxMDgsICM5MyAtIHJlZmVyZW5jZXMgaW4gZS5wb2ludCBhbmQgdGhpcyBhZnRlciBjaGFydC51cGRhdGUoKVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGNoYXJ0ID0gZXZlbnRPYmplY3QuY2hhcnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vcm1hbGl6ZWRFdmVudCA9IGNoYXJ0LnBvaW50ZXIubm9ybWFsaXplKGUpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtT2JqID0gZXZlbnRPYmplY3Quc2VhcmNoUG9pbnQobm9ybWFsaXplZEV2ZW50LCBldmVudE9iamVjdC5rZERpbWVuc2lvbnMgPT09IDEpIHx8IGVsZW1PYmo7IC8vICM4NyAtIHdyb25nIHNlYXJjaFBvaW50IGZvciBzY2F0dGVyIHNlcmllc1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS5wb2ludCA9IGVsZW1PYmo7XHQvL1x0Izg5IHBvaW50IHJlZmVyZW5jZSBpbiBtb3VzZSBldmVudFxuXG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKChldmVudE9iamVjdCAmJiAhaXNQb2ludCkgfHwgKGV2ZW50T2JqZWN0ICYmIGlzTnVtYmVyKGV2ZW50T2JqZWN0LnZhbHVlKSkpIHsgLy8gIzk1IHdyb25nIHJlZmVyZW5jZSBmb3IgYXhpcyBsYWJlbHNcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50T2JqZWN0LnZhbHVlID0gZWxlbU9iai50ZXh0U3RyIHx8IGV2ZW50T2JqZWN0LnZhbHVlOyAvLyAjOTUsICM5OCB3cm9uZyByZWZlcmVuY2UgZm9yIGF4aXMgbGFiZWxzXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtT2JqID0gZXZlbnRPYmplY3Q7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW1PYmogJiYgZWxlbU9iai50ZXh0U3RyKSB7IC8vIGxhYmVsc1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbU9iai52YWx1ZSA9IGVsZW1PYmoudGV4dFN0cjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbU9iai5kcmlsbGRvd24pIHsgLy8gIzExNCAtIGRyaWxsVXAgLSB1bmRlZmluZWQgZGREdXBlcyBbXVxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbU9iai5kb0RyaWxsZG93bih1bmRlZmluZWQsIHVuZGVmaW5lZCwgZSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnRzW2V2ZW50XS5jYWxsKGVsZW1PYmosIGUpO1xuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0U1ZHZWxlbVtldmVudF0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKGFjdGlvbik7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRldmVudEVsZW1lbnQ6IHtcblx0XHRcdC8qKlxuXHRcdFx0KiBAdHlwZWRlZiB7T2JqZWN0fSBldmVudEVsZW1lbnRcblx0XHRcdCoqL1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAZGVzY3JpcHRpb24gRXh0cmFjdHMgU1ZHIGVsZW1lbnRzIGZyb20gcG9pbnRzXG5cdFx0XHQgKiBAcHJvcGVydHkge09iamVjdH0gZXZlbnRzUG9pbnQgZXZlbnRzIGZvciBwb2ludFxuXHRcdFx0ICogQHByb3BlcnR5IHtBcnJheX0gZWxlbWVudFBvaW50IGFycmF5IG9mIFNWRyBwb2ludCBlbGVtZW50c1xuXHRcdFx0ICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50T2JqZWN0IG9iamVjdCBrZXB0IGluIHRoaXMgb24gaS5lIGNsaWNrXG5cdFx0XHQgKiBAcmV0dXJuIHtPYmplY3R9IHsgZXZlbnRzOiBvYmplY3QsIGVsZW1lbnQ6IG9iamVjdCB9XG5cdFx0XHQgKiBAbWVtYmVyb2YgY3VzdG9tRXZlbnRzXG5cdFx0XHQgKiovXG5cdFx0XHRhZGRMYWJlbDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQsXG5cdFx0XHRcdFx0YXhpcyA9IHRoaXMuYXhpcyxcblx0XHRcdFx0XHRheGlzT3B0aW9ucyA9IGF4aXMub3B0aW9ucyxcblx0XHRcdFx0XHRldmVudHNQb2ludCA9IGF4aXNPcHRpb25zLmxhYmVscyAmJiBheGlzT3B0aW9ucy5sYWJlbHMuZXZlbnRzLFxuXHRcdFx0XHRcdGVsZW1lbnRQb2ludCA9IFt0aGlzLmxhYmVsXSxcblx0XHRcdFx0XHRsZW4sIGk7XG5cblx0XHRcdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0XHRcdHZhciBzdGVwID0gdGhpczsgLy8gY3VycmVudCBsYWJlbFxuXG5cdFx0XHRcdFx0d2hpbGUgKHN0ZXApIHtcblx0XHRcdFx0XHRcdGlmIChpc0FycmF5KHN0ZXApKSB7XG5cdFx0XHRcdFx0XHRcdGxlbiA9IHN0ZXAubGVuZ3RoO1xuXG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnRQb2ludC5wdXNoKHN0ZXBbaV0ubGFiZWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50UG9pbnQucHVzaChzdGVwLmxhYmVsKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3RlcCA9IHN0ZXAucGFyZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXZlbnRzUG9pbnQ6IGV2ZW50c1BvaW50LFxuXHRcdFx0XHRcdGVsZW1lbnRQb2ludDogZWxlbWVudFBvaW50LFxuXHRcdFx0XHRcdGV2ZW50T2JqZWN0OiB7XG5cdFx0XHRcdFx0XHRheGlzOiBheGlzLFxuXHRcdFx0XHRcdFx0aXNGaXJzdDogdGhpcy5pc0ZpcnN0LFxuXHRcdFx0XHRcdFx0aXNMYXN0OiB0aGlzLmlzTGFzdCxcblx0XHRcdFx0XHRcdGNoYXJ0OiBheGlzLmNoYXJ0LFxuXHRcdFx0XHRcdFx0ZGF0ZVRpbWVMYWJlbEZvcm1hdDogYXhpc09wdGlvbnMuZGF0ZVRpbWVMYWJlbEZvcm1hdHMsXG5cdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy5wb3Ncblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAZGVzY3JpcHRpb24gRXh0cmFjdHMgU1ZHIGVsZW1lbnRzIGZyb20gdGl0bGUgYW5kIHN1YnRpdGxlXG5cdFx0XHQgKiBAcHJvcGVydHkge09iamVjdH0gZXZlbnRzIGV2ZW50cyBmb3IgdGl0bGVcblx0XHRcdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IGVsZW1lbnRQb2ludCB0aXRsZSBTVkcgZWxlbWVudFxuXHRcdFx0ICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50c1N1YnRpdGxlIGV2ZW50cyBmb3Igc3VidGl0bGVcblx0XHRcdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IGVsZW1lbnRTdWJ0aXRsZSBzdWJ0aXRsZSBTVkcgZWxlbWVudFxuXHRcdFx0ICogQHJldHVybiB7T2JqZWN0fSB7ZXZlbnQ6IG9iamVjdCwgZWxlbWVudDogb2JqZWN0LCBldmVudHNTdWJ0aXRsZTogb2JqZWN0LCBlbGVtZW50U3VidGl0bGU6IG9iamVjdCB9XG5cdFx0XHQgKiBAbWVtYmVyb2YgY3VzdG9tRXZlbnRzXG5cdFx0XHQgKiovXG5cdFx0XHRzZXRUaXRsZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgZXZlbnRzID0gdGhpcy5vcHRpb25zLnRpdGxlICYmIHRoaXMub3B0aW9ucy50aXRsZS5ldmVudHMsXG5cdFx0XHRcdFx0ZWxlbWVudCA9IHRoaXMudGl0bGUsXG5cdFx0XHRcdFx0ZXZlbnRzU3VidGl0bGUgPSB0aGlzLm9wdGlvbnMuc3VidGl0bGUgJiYgdGhpcy5vcHRpb25zLnN1YnRpdGxlLmV2ZW50cyxcblx0XHRcdFx0XHRlbGVtZW50U3VidGl0bGUgPSB0aGlzLnN1YnRpdGxlO1xuXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXZlbnRzOiBldmVudHMsXG5cdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0XHRldmVudHNTdWJ0aXRsZTogZXZlbnRzU3VidGl0bGUsXG5cdFx0XHRcdFx0ZWxlbWVudFN1YnRpdGxlOiBlbGVtZW50U3VidGl0bGVcblx0XHRcdFx0fTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEBkZXNjcmlwdGlvbiBFeHRyYWN0cyBTVkcgZWxlbWVudHMgZnJvbSBkYXRhTGFiZWxzXG5cdFx0XHQgKiBAcHJvcGVydHkge09iamVjdH0gZXZlbnRzIGV2ZW50cyBmb3IgZGF0YUxhYmVsc1xuXHRcdFx0ICogQHByb3BlcnR5IHtBcnJheX0gZWxlbWVudCBkYXRhTGFiZWxzIFNWRyBlbGVtZW50XG5cdFx0XHQgKiBAcmV0dXJuIHtPYmplY3R9IHsgZXZlbnRzOiBvYmplY3QsIGVsZW1lbnQ6IG9iamVjdCB9XG5cdFx0XHQgKiBAbWVtYmVyb2YgY3VzdG9tRXZlbnRzXG5cdFx0XHQgKiovXG5cdFx0XHRkcmF3RGF0YUxhYmVsczogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgZGF0YUxhYmVsc0dyb3VwID0gdGhpcy5kYXRhTGFiZWxzR3JvdXA7XG5cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRldmVudHM6IGRhdGFMYWJlbHNHcm91cCA/IHRoaXMub3B0aW9ucy5kYXRhTGFiZWxzLmV2ZW50cyA6IFVOREVGSU5FRCxcblx0XHRcdFx0XHRlbGVtZW50OiBkYXRhTGFiZWxzR3JvdXAgPyB0aGlzLmRhdGFMYWJlbHNHcm91cCA6IFVOREVGSU5FRFxuXHRcdFx0XHR9O1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogQGRlc2NyaXB0aW9uIEV4dHJhY3RzIFNWRyBlbGVtZW50cyBmcm9tIGF4aXMgdGl0bGUgYW5kIHN0YWNrTGFiZWxzXG5cdFx0XHQgKiBAcHJvcGVydHkge09iamVjdH0gZXZlbnRzIGV2ZW50cyBmb3IgYXhpcyB0aXRsZVxuXHRcdFx0ICogQHByb3BlcnR5IHtBcnJheX0gZWxlbWVudCBheGlzIHRpdGxlIFNWRyBlbGVtZW50XG5cdFx0XHQgKiBAcHJvcGVydHkge09iamVjdH0gZXZlbnRzUG9pbnQgZXZlbnRzIGZvciBzdGFja2xhYmVsc1xuXHRcdFx0ICogQHByb3BlcnR5IHtBcnJheX0gZWxlbWVudFBvaW50IHN0YWNrbGFiZWxzIFNWRyBlbGVtZW50XG5cdFx0XHQgKiBAcHJvcGVydHkge09iamVjdH0gZXZlbnRzU3RhY2tMYWJlbCBldmVudHMgZm9yIHN0YWNrbGFiZWxzXG5cdFx0XHQgKiBAcHJvcGVydHkge0FycmF5fSBlbGVtZW50U3RhY2tMYWJlbCBzdGFja2xhYmVscyBncm91cCBTVkcgZWxlbWVudFxuXHRcdFx0ICogQHJldHVybiB7T2JqZWN0fSB7IGV2ZW50czogb2JqZWN0LCBlbGVtZW50OiBvYmplY3QsIGV2ZW50c1BvaW50OiBvYmplY3QsIGVsZW1lbnRQb2ludDogb2JqZWN0LCBldmVudHNTdGFja0xhYmVsOiBvYmplY3QsIGVsZW1lbnRTdGFja0xhYmVsOiBvYmplY3QgfVxuXHRcdFx0ICogQG1lbWJlcm9mIGN1c3RvbUV2ZW50c1xuXHRcdFx0ICoqL1xuXHRcdFx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBzdGFja0xhYmVscyA9IHRoaXMub3B0aW9ucy5zdGFja0xhYmVscyxcblx0XHRcdFx0XHRldmVudHMsXG5cdFx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0XHRldmVudHNQb2ludCxcblx0XHRcdFx0XHRlbGVtZW50UG9pbnQsXG5cdFx0XHRcdFx0ZXZlbnRzU3RhY2tMYWJlbCxcblx0XHRcdFx0XHRlbGVtZW50U3RhY2tMYWJlbDtcblxuXHRcdFx0XHRpZiAodGhpcy5heGlzVGl0bGUpIHtcblx0XHRcdFx0XHRldmVudHMgPSB0aGlzLm9wdGlvbnMudGl0bGUuZXZlbnRzO1xuXHRcdFx0XHRcdGVsZW1lbnQgPSB0aGlzLmF4aXNUaXRsZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChzdGFja0xhYmVscyAmJiBzdGFja0xhYmVscy5lbmFibGVkKSB7XG5cdFx0XHRcdFx0ZXZlbnRzUG9pbnQgPSBzdGFja0xhYmVscy5ldmVudHM7XG5cdFx0XHRcdFx0ZWxlbWVudFBvaW50ID0gdGhpcy5zdGFja3M7XG5cdFx0XHRcdFx0ZXZlbnRzU3RhY2tMYWJlbCA9IHN0YWNrTGFiZWxzLmV2ZW50cztcblx0XHRcdFx0XHRlbGVtZW50U3RhY2tMYWJlbCA9IHRoaXMuc3RhY2tUb3RhbEdyb3VwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRldmVudHM6IGV2ZW50cyxcblx0XHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0XHRcdGV2ZW50c1BvaW50OiBldmVudHNQb2ludCxcblx0XHRcdFx0XHRlbGVtZW50UG9pbnQ6IGVsZW1lbnRQb2ludCxcblx0XHRcdFx0XHRldmVudHNTdGFja0xhYmVsOiBldmVudHNTdGFja0xhYmVsLFxuXHRcdFx0XHRcdGVsZW1lbnRTdGFja0xhYmVsOiBlbGVtZW50U3RhY2tMYWJlbFxuXHRcdFx0XHR9O1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogQGRlc2NyaXB0aW9uIEV4dHJhY3RzIFNWRyBlbGVtZW50cyBmcm9tIHNlcmllcyBhbmQgc2VyaWVzIHBvaW50c1xuXHRcdFx0ICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50cyBldmVudHMgZm9yIHNlcmllc1xuXHRcdFx0ICogQHByb3BlcnR5IHtBcnJheX0gZWxlbWVudCBzZXJpZXMgU1ZHIGVsZW1lbnRcblx0XHRcdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBldmVudHMgZXZlbnRzIGZvciBzZXJpZXMgcG9pbnRzXG5cdFx0XHQgKiBAcHJvcGVydHkge0FycmF5fSBlbGVtZW50IHNlcmllcyBwb2ludHMgU1ZHIGVsZW1lbnRcblx0XHRcdCAqIEByZXR1cm4ge09iamVjdH0geyBldmVudHM6IG9iamVjdCwgZWxlbWVudDogb2JqZWN0LCBldmVudHNQb2ludDogb2JqZWN0LCBlbGVtZW50UG9pbnQ6IG9iamVjdCB9XG5cdFx0XHQgKiBAbWVtYmVyb2YgY3VzdG9tRXZlbnRzXG5cdFx0XHQgKiovXG5cdFx0XHRkcmF3UG9pbnRzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBvcCA9IHRoaXMub3B0aW9ucyxcblx0XHRcdFx0XHR0eXBlID0gdGhpcy50eXBlLFxuXHRcdFx0XHRcdGV2ZW50cyA9IG9wLmN1c3RvbUV2ZW50cyA/IG9wLmN1c3RvbUV2ZW50cy5zZXJpZXMgOiBvcC5ldmVudHMsXG5cdFx0XHRcdFx0ZWxlbWVudCA9IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdFx0ZXZlbnRzUG9pbnQgPSBvcC5jdXN0b21FdmVudHMgPyBvcC5jdXN0b21FdmVudHMucG9pbnQgOiBvcC5wb2ludC5ldmVudHMsXG5cdFx0XHRcdFx0ZWxlbWVudFBvaW50O1xuXG5cdFx0XHRcdGlmIChkZWZhdWx0T3B0aW9uc1t0eXBlXSAmJiBkZWZhdWx0T3B0aW9uc1t0eXBlXS5tYXJrZXIgJiYgIXRoaXMuYnViYmxlUGFkZGluZykge1xuXHRcdFx0XHRcdGVsZW1lbnRQb2ludCA9IFt0aGlzLm1hcmtlckdyb3VwXTsgLy9cdGdldCBtYXJrZXJzIHdoZW4gZW5hYmxlZFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW1lbnRQb2ludCA9IHRoaXMucG9pbnRzOyAvL1x0ZXh0cmFjdCBwb2ludHNcblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0aWYgKCF0aGlzLmtkVHJlZSAmJiAhdGhpcy5idWlsZGluZ0tkVHJlZSkge1xuXHRcdFx0XHRcdHRoaXMuYnVpbGRLRFRyZWUoKTsgLy9cdCM4NiwgbWlzc2luZyByZWZlcmVuY2UgdG8gcG9pbnQgb24gZmlyc3QgbW91c2VvdmVyXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGV2ZW50czogZXZlbnRzLFxuXHRcdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdFx0ZXZlbnRzUG9pbnQ6IGV2ZW50c1BvaW50LFxuXHRcdFx0XHRcdGVsZW1lbnRQb2ludDogZWxlbWVudFBvaW50LFxuXHRcdFx0XHRcdGV2ZW50T2JqZWN0OiB0aGlzLFxuXHRcdFx0XHRcdGlzU2VyaWVzOiB0cnVlXG5cdFx0XHRcdH07XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAZGVzY3JpcHRpb24gRXh0cmFjdHMgU1ZHIGVsZW1lbnRzIGZyb20gbGVnZW5kIGl0ZW1cblx0XHRcdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBldmVudHMgZXZlbnRzIGZvciBsZWdlbmQgaXRlbVxuXHRcdFx0ICogQHByb3BlcnR5IHtBcnJheX0gZWxlbWVudCBsZWdlbmQgaXRlbSBTVkcgZWxlbWVudFxuXHRcdFx0ICogQHJldHVybiB7T2JqZWN0fSB7IGV2ZW50czogb2JqZWN0LCBlbGVtZW50OiBvYmplY3QgfVxuXHRcdFx0ICogQG1lbWJlcm9mIGN1c3RvbUV2ZW50c1xuXHRcdFx0ICoqL1xuXHRcdFx0cmVuZGVySXRlbTogZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRldmVudHM6IHRoaXMub3B0aW9ucy5pdGVtRXZlbnRzLFxuXHRcdFx0XHRcdGVsZW1lbnQ6IGl0ZW0ubGVnZW5kR3JvdXAsXG5cdFx0XHRcdFx0ZXZlbnRPYmplY3Q6IGl0ZW1cblx0XHRcdFx0fTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEBkZXNjcmlwdGlvbiBFeHRyYWN0cyBTVkcgZWxlbWVudHMgZnJvbSBjcm9zc2hhaXJcblx0XHRcdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBldmVudHMgZXZlbnRzIGZvciBjcm9zc2hhaXJcblx0XHRcdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IGVsZW1lbnQgY3Jvc3NoYWlyIFNWRyBlbGVtZW50XG5cdFx0XHQgKiBAcmV0dXJuIHtPYmplY3R9IHsgZXZlbnRzOiBvYmplY3QsIGVsZW1lbnQ6IG9iamVjdCB9XG5cdFx0XHQgKiBAbWVtYmVyb2YgY3VzdG9tRXZlbnRzXG5cdFx0XHQgKiovXG5cdFx0XHRkcmF3Q3Jvc3NoYWlyOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBjcm9zc2hhaXIgPSB0aGlzLm9wdGlvbnMuY3Jvc3NoYWlyO1xuXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXZlbnRzOiBjcm9zc2hhaXIgJiYgY3Jvc3NoYWlyLmV2ZW50cyxcblx0XHRcdFx0XHRlbGVtZW50OiB0aGlzLmNyb3NzXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGN1c3RvbUV2ZW50cyA9IEhDLkNoYXJ0LnByb3RvdHlwZS5jdXN0b21FdmVudDtcblx0Y3VzdG9tRXZlbnRzLmluaXQoKTtcblxufSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oaWdoY2hhcnRzLWN1c3RvbS1ldmVudHMvanMvY3VzdG9tRXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXgnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vbmcyLWhpZ2hjaGFydHMudHMiXSwic291cmNlUm9vdCI6IiJ9