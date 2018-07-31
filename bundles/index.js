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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYmQ2OTZiNzhkMWU2NGI4NWNmYyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL25nMi1oaWdoY2hhcnRzLWJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25nMi1oaWdoY2hhcnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9uZzItaGlnaG1hcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25nMi1oaWdoc3RvY2tzLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL34vaGlnaGNoYXJ0cy1jdXN0b20tZXZlbnRzL2pzL2N1c3RvbUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9uZzItaGlnaGNoYXJ0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztHQUVHO0FBQ29HO0FBRXZHO0lBT0Ms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O0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QyxLQUFLO0FBQ0wsZ0NBQWdDO0FBQ2hDOzs7QUFHQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsTUFBTTtBQUN2QixlQUFlLE9BQU8sRUFBRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsTUFBTTtBQUN2QixlQUFlLE9BQU8sRUFBRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUMsRzs7Ozs7Ozs7Ozs7O0FDbmhCdUIiLCJmaWxlIjoibmcyLWhpZ2hjaGFydHMudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nMi1oaWdoY2hhcnRzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmcyLWhpZ2hjaGFydHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJAYW5ndWxhci9jb3JlXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb3J5IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vcnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmJkNjk2Yjc4ZDFlNjRiODVjZmMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlZCBieSBncmVnIG9uIDIxLzEwLzE2LlxuICovXG5pbXBvcnQgeyBJbnB1dCwgS2V5VmFsdWVEaWZmZXIsIEVsZW1lbnRSZWYsIEtleVZhbHVlRGlmZmVycywgT25EZXN0cm95LCBEb0NoZWNrIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nMkhpZ2hjaGFydHNCYXNlIGltcGxlbWVudHMgT25EZXN0cm95LCBEb0NoZWNrIHtcblx0QElucHV0KCduZzItaGlnaGNoYXJ0cycpIG9wdGlvbnM6IE9iamVjdCAvKiBIaWdoY2hhcnRzT3B0aW9ucyAqLztcblx0aG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cdHBDaGFydDogYW55Oy8vSGlnaGNoYXJ0c0NoYXJ0T2JqZWN0O1xuXHRjdXJyZW50V2lkdGg6IG51bWJlcjtcblx0Y3VycmVudEhlaWdodDogbnVtYmVyO1xuXHRkaWZmZXI6IEtleVZhbHVlRGlmZmVyPGFueSwgYW55Pjtcblx0Y29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmLCBfZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzKSB7XG5cdFx0dGhpcy5ob3N0RWxlbWVudCA9IGVsZTtcblx0XHR0aGlzLmRpZmZlciA9IF9kaWZmZXJzLmZpbmQoe30pLmNyZWF0ZShudWxsKTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgY2hhcnQoKTogYW55IC8qIEhpZ2hjaGFydHNDaGFydE9iamVjdCAqLyB7XG5cdFx0cmV0dXJuIHRoaXMucENoYXJ0O1xuXHR9XG5cblx0cmVmbG93KCkge1xuXHRcdGlmICghdGhpcy5wQ2hhcnQgfHwgIXRoaXMub3B0aW9ucykgeyByZXR1cm47IH1cblxuXHRcdGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCkudHJhbnNpdGlvbkR1cmF0aW9uKSB7XG5cdFx0XHR2YXIgZHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50KS50cmFuc2l0aW9uRHVyYXRpb24pO1xuXHRcdFx0dmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRpZiAoZHVyYXRpb24gPCAwKSB7IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyB9XG5cdFx0XHRcdGR1cmF0aW9uIC09IDUwO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMucENoYXJ0LnJlZmxvdygpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Ly8gYWxsIHJpZ2h0IC0gY29tcG9uZW50IHByb2JhYmx5IGhhcyBiZWVuIGRlbGV0ZWQuXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIGR1cmF0aW9uKTtcblx0XHR9XG5cblx0XHR0aGlzLnBDaGFydC5yZWZsb3coKTtcblx0fVxuXG5cdG5nRG9DaGVjaygpIHtcblx0XHRpZiAodGhpcy5jdXJyZW50V2lkdGggIT09IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkge1xuXHRcdFx0dGhpcy5yZWZsb3coKTtcblx0XHRcdHRoaXMuY3VycmVudFdpZHRoID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jdXJyZW50SGVpZ2h0ICE9PSB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSB7XG5cdFx0XHR0aGlzLnJlZmxvdygpO1xuXHRcdFx0dGhpcy5jdXJyZW50SGVpZ2h0ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZGlmZmVyLmRpZmYodGhpcy5vcHRpb25zKSkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMub3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMucENoYXJ0KSB7XG5cdFx0XHR0aGlzLnBDaGFydC5kZXN0cm95KCk7XG5cdFx0fVxuXHR9XG5cblx0YWJzdHJhY3QgZHJhdyhvcHQ6IGFueSAvKkhpZ2hjaGFydHNPcHRpb25zKi8pOiB2b2lkO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL25nMi1oaWdoY2hhcnRzLWJhc2UudHMiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBLZXlWYWx1ZURpZmZlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmcySGlnaGNoYXJ0c0Jhc2UgfSBmcm9tIFwiLi9uZzItaGlnaGNoYXJ0cy1iYXNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tuZzItaGlnaGNoYXJ0c10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZzJIaWdoY2hhcnRzIGV4dGVuZHMgTmcySGlnaGNoYXJ0c0Jhc2Uge1xyXG5cdEBJbnB1dCgnbmcyLWhpZ2hjaGFydHMnKSBvcHRpb25zOiBPYmplY3QgLyogSGlnaGNoYXJ0c09wdGlvbnMgKi87XHJcblxyXG5cdGNvbnN0cnVjdG9yKGVsZTogRWxlbWVudFJlZiwgX2RpZmZlcnM6IEtleVZhbHVlRGlmZmVycykge1xyXG5cdFx0c3VwZXIoZWxlLCBfZGlmZmVycyk7XHJcblx0XHRyZXF1aXJlKCdoaWdoY2hhcnRzLWN1c3RvbS1ldmVudHMnKSgoPGFueT53aW5kb3cpLkhpZ2hjaGFydHMpO1xyXG5cdH1cclxuXHJcblx0ZHJhdyhvcHQ6IGFueSAvKiBIaWdoY2hhcnRzT3B0aW9ucyAqLyk6IHZvaWQge1xyXG5cdFx0aWYgKCFvcHQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIHZhbGlkIG9wdGlvbnMuLi4nKTtcclxuXHRcdFx0Y29uc29sZS5sb2cob3B0KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdC5zZXJpZXMgfHwgb3B0LmRhdGEpIHtcclxuXHRcdFx0aWYgKHRoaXMucENoYXJ0KSB7XHJcblx0XHRcdFx0dGhpcy5wQ2hhcnQuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghb3B0LmNoYXJ0KSB7XHJcblx0XHRcdFx0b3B0LmNoYXJ0ID0ge307XHJcblx0XHRcdH1cclxuXHRcdFx0b3B0LmNoYXJ0LnJlbmRlclRvID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cdFx0XHR0aGlzLnBDaGFydCA9IG5ldyAoPGFueT53aW5kb3cpLkhpZ2hjaGFydHMuQ2hhcnQob3B0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdObyB2YWxpZCBvcHRpb25zLi4uJyk7XHJcblx0XHRcdGNvbnNvbGUuZGlyKG9wdCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9uZzItaGlnaGNoYXJ0cy50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEtleVZhbHVlRGlmZmVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZzJIaWdoY2hhcnRzQmFzZSB9IGZyb20gXCIuL25nMi1oaWdoY2hhcnRzLWJhc2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW25nMi1oaWdobWFwc10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZzJIaWdobWFwcyBleHRlbmRzIE5nMkhpZ2hjaGFydHNCYXNlIHtcclxuXHRASW5wdXQoJ25nMi1oaWdobWFwcycpIG9wdGlvbnM6IE9iamVjdCAvKiBIaWdoY2hhcnRzT3B0aW9ucyAqLztcclxuXHJcblx0Y29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmLCBfZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzKSB7XHJcblx0XHRzdXBlcihlbGUsIF9kaWZmZXJzKTtcclxuXHR9XHJcblxyXG5cdGRyYXcob3B0OiBhbnkgLyogSGlnaGNoYXJ0c09wdGlvbnMgKi8pOiB2b2lkIHtcclxuXHRcdGlmICghb3B0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdObyB2YWxpZCBvcHRpb25zLi4uJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG9wdCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmIChvcHQuc2VyaWVzIHx8IG9wdC5kYXRhKSB7XHJcblx0XHRcdGlmICh0aGlzLnBDaGFydCkge1xyXG5cdFx0XHRcdHRoaXMucENoYXJ0LmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIW9wdC5jaGFydCkge1xyXG5cdFx0XHRcdG9wdC5jaGFydCA9IHt9O1xyXG5cdFx0XHR9XHJcblx0XHRcdG9wdC5jaGFydC5yZW5kZXJUbyA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuXHRcdFx0dGhpcy5wQ2hhcnQgPSBuZXcgKDxhbnk+d2luZG93KS5IaWdoY2hhcnRzLk1hcChvcHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIHZhbGlkIG9wdGlvbnMuLi4nKTtcclxuXHRcdFx0Y29uc29sZS5kaXIob3B0KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL25nMi1oaWdobWFwcy50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIEtleVZhbHVlRGlmZmVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZzJIaWdoY2hhcnRzQmFzZSB9IGZyb20gXCIuL25nMi1oaWdoY2hhcnRzLWJhc2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW25nMi1oaWdoc3RvY2tzXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nMkhpZ2hzdG9ja3MgZXh0ZW5kcyBOZzJIaWdoY2hhcnRzQmFzZSB7XHJcblx0QElucHV0KCduZzItaGlnaHN0b2NrcycpIG9wdGlvbnM6IE9iamVjdCAvKiBIaWdoY2hhcnRzT3B0aW9ucyAqLztcclxuXHJcblx0Y29uc3RydWN0b3IoZWxlOiBFbGVtZW50UmVmLCBfZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzKSB7XHJcblx0XHRzdXBlcihlbGUsIF9kaWZmZXJzKTtcclxuXHR9XHJcblxyXG5cdGRyYXcob3B0OiBhbnkgLyogSGlnaGNoYXJ0c09wdGlvbnMgKi8pOiB2b2lkIHtcclxuXHRcdGlmICghb3B0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdObyB2YWxpZCBvcHRpb25zLi4uJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG9wdCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmIChvcHQuc2VyaWVzIHx8IG9wdC5kYXRhKSB7XHJcblx0XHRcdGlmICh0aGlzLnBDaGFydCkge1xyXG5cdFx0XHRcdHRoaXMucENoYXJ0LmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIW9wdC5jaGFydCkge1xyXG5cdFx0XHRcdG9wdC5jaGFydCA9IHt9O1xyXG5cdFx0XHR9XHJcblx0XHRcdG9wdC5jaGFydC5yZW5kZXJUbyA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuXHRcdFx0dGhpcy5wQ2hhcnQgPSBuZXcgKDxhbnk+d2luZG93KS5IaWdoY2hhcnRzLlN0b2NrQ2hhcnQob3B0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdObyB2YWxpZCBvcHRpb25zLi4uJyk7XHJcblx0XHRcdGNvbnNvbGUuZGlyKG9wdCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9uZzItaGlnaHN0b2Nrcy50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZzJIaWdoY2hhcnRzIH0gZnJvbSAnLi9zcmMvbmcyLWhpZ2hjaGFydHMnO1xuaW1wb3J0IHsgTmcySGlnaG1hcHMgfSBmcm9tICcuL3NyYy9uZzItaGlnaG1hcHMnO1xuaW1wb3J0IHsgTmcySGlnaHN0b2NrcyB9IGZyb20gJy4vc3JjL25nMi1oaWdoc3RvY2tzJztcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvbmcyLWhpZ2hjaGFydHMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvbmcyLWhpZ2hzdG9ja3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvbmcyLWhpZ2htYXBzJztcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbTmcySGlnaGNoYXJ0cywgTmcySGlnaG1hcHMsIE5nMkhpZ2hzdG9ja3NdLFxuXHRleHBvcnRzOiBbTmcySGlnaGNoYXJ0cywgTmcySGlnaG1hcHMsIE5nMkhpZ2hzdG9ja3NdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkhpZ2hjaGFydHNNb2R1bGUgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vaW5kZXgudHMiLCIvKipcbiogQ3VzdG9tIGV2ZW50cyB2Mi4xLjYgKDIwMTgtMDctMjApXG4qXG4qIChjKSAyMDEyLTIwMTggQmxhY2sgTGFiZWxcbipcbiogTGljZW5zZTogQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbiAoQ0MpXG4qL1xuXG4vKiBnbG9iYWwgSGlnaGNoYXJ0cyBzZXRUaW1lb3V0IGNsZWFyVGltZW91dCBtb2R1bGU6dHJ1ZSAqL1xuLyogZXNsaW50IG5vLWxvb3AtZnVuYzogMCAqL1xuXG4vKipcbiAqIEBuYW1lc3BhY2UgY3VzdG9tRXZlbnRzXG4gKiovXG5cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShIaWdoY2hhcnRzKTtcblx0fVxufShmdW5jdGlvbiAoSEMpIHtcblxuXHQvKiBnbG9iYWwgSGlnaGNoYXJ0cyA6dHJ1ZSwgd2luZG93ICovXG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBVTkRFRklORUQsXG5cdFx0REJMQ0xJQ0sgPSAnZGJsY2xpY2snLFxuXHRcdFRPVUNIU1RBUlQgPSAndG91Y2hzdGFydCcsXG5cdFx0Q0xJQ0sgPSAnY2xpY2snLFxuXHRcdGVhY2ggPSBIQy5lYWNoLFxuXHRcdHBpY2sgPSBIQy5waWNrLFxuXHRcdHdyYXAgPSBIQy53cmFwLFxuXHRcdG1lcmdlID0gSEMubWVyZ2UsXG5cdFx0aXNBcnJheSA9IEhDLmlzQXJyYXksXG5cdFx0b2JqZWN0RWFjaCA9IEhDLm9iamVjdEVhY2gsXG5cdFx0YWRkRXZlbnQgPSBIQy5hZGRFdmVudCxcblx0XHRpc1RvdWNoRGV2aWNlID0gSEMuaXNUb3VjaERldmljZSxcblx0XHRpc09iamVjdCA9IEhDLmlzT2JqZWN0LFxuXHRcdGlzTnVtYmVyID0gSEMuaXNOdW1iZXIsXG5cdFx0ZGVmYXVsdE9wdGlvbnMgPSBIQy5nZXRPcHRpb25zKCkucGxvdE9wdGlvbnMsXG5cdFx0YXhpc1Byb3RvID0gSEMuQXhpcyAmJiBIQy5BeGlzLnByb3RvdHlwZSxcblx0XHRwbG90TGluZU9yQmFuZFByb3RvID0gSEMuUGxvdExpbmVPckJhbmQgJiYgSEMuUGxvdExpbmVPckJhbmQucHJvdG90eXBlLFxuXHRcdHNlcmllc1R5cGVzID0gSEMuc2VyaWVzVHlwZXMsXG5cdFx0c2VyaWVzUHJvdG8gPSBIQy5TZXJpZXMgJiYgSEMuU2VyaWVzLnByb3RvdHlwZSxcblx0XHRjdXN0b21FdmVudHMsXG5cdFx0cHJvdG8sXG5cdFx0bWV0aG9kcztcblxuXHQvKipcblx0ICogV1JBUFBFRCBGVU5DVElPTlNcblx0ICovXG5cblx0Ly8gcmVzZXQgZXhpcyBldmVudHNcblx0aWYgKHBsb3RMaW5lT3JCYW5kUHJvdG8pIHsgLy8gIyBjb25kaXRpb24gZm9yIGhpZ2htYXBzIGFuZCBjdXN0b20gYnVpbGRzXG5cdFx0d3JhcChwbG90TGluZU9yQmFuZFByb3RvLCAncmVuZGVyJywgZnVuY3Rpb24gKHByb2NlZWQpIHtcblx0XHRcdHZhciBkZWZhdWx0RXZlbnRzID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5ldmVudHM7XG5cdFx0XG5cdFx0XHQvLyByZXNldCBkZWZhdWx0IGV2ZW50cyBvbiBwbG90IGxpbmVzIG9yIGJhbmRzXG5cdFx0XHRpZiAoZGVmYXVsdEV2ZW50cykge1xuXHRcdFx0XHRkZWZhdWx0RXZlbnRzID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwcm9jZWVkLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXHRcdH0pO1xuXHR9XG5cdGlmIChzZXJpZXNQcm90bykgeyAvLyAjIGNvbmRpdGlvbiBmb3IgaGlnaG1hcHMgYW5kIGN1c3RvbSBidWlsZHNcblx0XHR3cmFwKHNlcmllc1Byb3RvLCAnaW5pdCcsIGZ1bmN0aW9uIChwcm9jZWVkLCBjaGFydCwgb3B0aW9ucykge1xuXHRcdFx0dmFyIGNoYXJ0T3B0aW9ucyA9IGNoYXJ0Lm9wdGlvbnMsXG5cdFx0XHRcdHBsb3RPcHRpb25zID0gY2hhcnRPcHRpb25zLnBsb3RPcHRpb25zLFxuXHRcdFx0XHRzZXJpZXNPcHRpb25zID0gY2hhcnRPcHRpb25zLnBsb3RPcHRpb25zLnNlcmllcyxcblx0XHRcdFx0dXNlck9wdGlvbnMgPSBtZXJnZShzZXJpZXNPcHRpb25zLCBwbG90T3B0aW9uc1t0aGlzLnR5cGVdLCBvcHRpb25zKSxcblx0XHRcdFx0dXNlck9wdGlvbnNFdmVudHMgPSB1c2VyT3B0aW9ucyAmJiB1c2VyT3B0aW9ucy5ldmVudHMsXG5cdFx0XHRcdHVzZXJPcHRpb25zUG9pbnRFdmVudHMgPSB1c2VyT3B0aW9ucyAmJiB1c2VyT3B0aW9ucy5wb2ludCAmJiB1c2VyT3B0aW9ucy5wb2ludC5ldmVudHM7IC8vIEZpeGVkICM3MFxuXG5cdFx0XHQvLyByZXNldCBkZWZhdWx0IGV2ZW50cyBvbiBzZXJpZXMgYW5kIHNlcmllcyBwb2ludFxuXHRcdFx0b3B0aW9ucy5ldmVudHMgPSB7fTtcblx0XHRcdG9wdGlvbnMucG9pbnQgPSB7XG5cdFx0XHRcdGV2ZW50czoge31cblx0XHRcdH07XG5cblx0XHRcdC8vIEFkZCBzdXBwb3J0IGZvciBsZWdlbmRJdGVtQ2xpY2tcblx0XHRcdGlmICh1c2VyT3B0aW9uc0V2ZW50cykge1xuXHRcdFx0XHRvcHRpb25zLmV2ZW50cyA9IHtcblx0XHRcdFx0XHRsZWdlbmRJdGVtQ2xpY2s6IHVzZXJPcHRpb25zRXZlbnRzICYmIHVzZXJPcHRpb25zRXZlbnRzLmxlZ2VuZEl0ZW1DbGlja1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgc3VwcG9ydCBmb3IgbGVnZW5kSXRlbUNsaWNrIGluIHBpZSBjaGFydFxuXHRcdFx0aWYgKHVzZXJPcHRpb25zUG9pbnRFdmVudHMpIHtcblx0XHRcdFx0b3B0aW9ucy5wb2ludC5ldmVudHMgPSB7XG5cdFx0XHRcdFx0bGVnZW5kSXRlbUNsaWNrOiB1c2VyT3B0aW9uc1BvaW50RXZlbnRzICYmIHVzZXJPcHRpb25zUG9pbnRFdmVudHMubGVnZW5kSXRlbUNsaWNrLFxuXHRcdFx0XHRcdHNlbGVjdDogdXNlck9wdGlvbnNQb2ludEV2ZW50cyAmJiB1c2VyT3B0aW9uc1BvaW50RXZlbnRzLnNlbGVjdCxcblx0XHRcdFx0XHR1bnNlbGVjdDogdXNlck9wdGlvbnNQb2ludEV2ZW50cyAmJiB1c2VyT3B0aW9uc1BvaW50RXZlbnRzLnVuc2VsZWN0XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdC8vIGF0dGFjaCBldmVudHMgdG8gY3VzdG9tIG9iamVjdCwgd2hpY2ggaXMgdXNlZCBpbiBhdHRhY2ggZXZlbnRcblx0XHRcdG9wdGlvbnMuY3VzdG9tRXZlbnRzID0ge1xuXHRcdFx0XHRzZXJpZXM6IHVzZXJPcHRpb25zRXZlbnRzLFxuXHRcdFx0XHRwb2ludDogdXNlck9wdGlvbnNQb2ludEV2ZW50c1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gY2FsbCBkZWZhdWx0IGFjdGlvblxuXHRcdFx0cHJvY2VlZC5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblxuXHRcdH0pO1xuXHR9XG5cblx0SEMuQ2hhcnQucHJvdG90eXBlLmN1c3RvbUV2ZW50ID0ge1xuXHRcdC8qKlxuXHRcdCAqIEBkZXNjcmlwdGlvbiBFeGFtcGxlOiBbSEMuU2VyaWVzLCBbJ2RyYXdQb2ludHMnLCAnZHJhd0RhdGFMYWJlbHMnXV1cblx0XHQgKiBAbWVtYmVyb2YgY3VzdG9tRXZlbnRzXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBhcnJheSBvZiBwYWlyczogcHJvdG90eXBlLCBhcnJheSBvZiBtZXRob2RzIHRvIHdyYXBcblx0XHQgKiovXG5cdFx0Z2V0RXZlbnRzUHJvdG9NZXRob2RzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgcHJvdG9NZXRob2RzID0gW1xuXHRcdFx0XHRbSEMuVGljaywgWydhZGRMYWJlbCddXSxcblx0XHRcdFx0W0hDLkF4aXMsIFsncmVuZGVyJ11dLFxuXHRcdFx0XHRbSEMuQXhpcywgWydkcmF3Q3Jvc3NoYWlyJ11dLFxuXHRcdFx0XHRbSEMuQ2hhcnQsIFsnc2V0VGl0bGUnXV0sXG5cdFx0XHRcdFtIQy5MZWdlbmQsIFsncmVuZGVySXRlbSddXSxcblx0XHRcdFx0W0hDLlBsb3RMaW5lT3JCYW5kLCBbJ3JlbmRlciddXSxcblx0XHRcdFx0W0hDLlNlcmllcywgWydkcmF3UG9pbnRzJywgJ2RyYXdEYXRhTGFiZWxzJ11dXG5cdFx0XHRdO1xuXHQgIFxuXHRcdFx0Ly8gc3VwcG9ydCBmb3IgZXh0cmEgc2VyaWVzXG5cdFx0XHRvYmplY3RFYWNoKHNlcmllc1R5cGVzLCBmdW5jdGlvbiAoZm4sIHNlcmllc1R5cGUpIHtcblx0XHRcdFx0cHJvdG9NZXRob2RzLnB1c2goW1xuXHRcdFx0XHRcdHNlcmllc1R5cGVzW3Nlcmllc1R5cGVdLCBbJ2RyYXdQb2ludHMnLCAnZHJhd0RhdGFMYWJlbHMnXVxuXHRcdFx0XHRdKTtcblx0XHRcdH0pO1xuXHRcblx0XHRcdHJldHVybiBwcm90b01ldGhvZHM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAZGVzY3JpcHRpb24gSW5pdCBtZXRob2QsIGJhc2VkIG9uIGdldEV2ZW50c1Byb3RvTWV0aG9kcygpIGFycmF5LiBJdGVyYXRlcyBvbiBhcnJheSBvZiBwcm90b3R5cGVzIGFuZCBtZXRob2RzIHRvIHdyYXBcblx0XHQgKiBAbWVtYmVyb2YgY3VzdG9tRXZlbnRzXG5cdFx0ICoqL1xuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBldmVudHNQcm90b01ldGhvZHMgPSB0aGlzLmdldEV2ZW50c1Byb3RvTWV0aG9kcygpOyAvLyBhcnJheSBvZiBwYWlycyBbb2JqZWN0LCBbbWV0aG9kc11dXG5cblx0XHRcdGVhY2goZXZlbnRzUHJvdG9NZXRob2RzLCBmdW5jdGlvbiAocHJvdG9NZXRob2QpIHtcblx0XHRcdFx0aWYgKGlzQXJyYXkocHJvdG9NZXRob2QpKSB7XG5cdFx0XHRcdFx0cHJvdG8gPSBwcm90b01ldGhvZFswXSAmJiBwcm90b01ldGhvZFswXS5wcm90b3R5cGU7XG5cdFx0XHRcdFx0bWV0aG9kcyA9IHByb3RvTWV0aG9kWzFdO1xuXG5cdFx0XHRcdFx0aWYgKHByb3RvKSB7XG5cdFx0XHRcdFx0XHRlYWNoKG1ldGhvZHMsIGZ1bmN0aW9uIChtZXRob2QpIHtcblx0XHRcdFx0XHRcdFx0Y3VzdG9tRXZlbnRzLmF0dGFjaChwcm90bywgbWV0aG9kKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAZGVzY3JpcHRpb24gV3JhcHMgbWV0aG9kcyBpLmUgZHJhd1BvaW50cyB0byBleHRyYWN0IFNWRyBlbGVtZW50IGFuZCBzZXQgYW4gZXZlbnQgYnkgY2FsbGluZyBjdXN0b21FdmVudHMuYWRkKClcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gSGlnaGNoYXJ0cyBwcm90b3R5cGUgaS5lIEhpZ2hjaGFydHMuU2VyaWVzLnByb3RvdHlwZVxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBoY01ldGhvZCBuYW1lIG9mIHdyYXBwZWQgbWV0aG9kIGkuZSBkcmF3UG9pbnRzXG5cdFx0ICogQG1lbWJlcm9mIGN1c3RvbUV2ZW50c1xuXHRcdCAqKi9cblx0XHRhdHRhY2g6IGZ1bmN0aW9uIChwcm90bywgaGNNZXRob2QpIHtcblx0XHRcdFxuXHRcdFx0d3JhcChwcm90bywgaGNNZXRob2QsIGZ1bmN0aW9uIChwcm9jZWVkLCBwYXJhbSkge1xuXHRcdFx0XHR2YXIgZXZlbnRFbGVtZW50ID0ge1xuXHRcdFx0XHRcdFx0ZXZlbnRzOiBVTkRFRklORUQsXG5cdFx0XHRcdFx0XHRlbGVtZW50OiBVTkRFRklORURcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHByb2NlZWRPYmplY3QsXG5cdFx0XHRcdFx0bGVuLFxuXHRcdFx0XHRcdGo7XG5cblx0XHRcdFx0Ly8gIGNhbGwgZGVmYXVsdCBhY3Rpb25zXG5cdFx0XHRcdHByb2NlZWRPYmplY3QgPSBwcm9jZWVkLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXG5cdFx0XHRcdC8vXHRjYWxsXG5cdFx0XHRcdGV2ZW50RWxlbWVudCA9IGN1c3RvbUV2ZW50cy5ldmVudEVsZW1lbnRbaGNNZXRob2RdLmNhbGwodGhpcywgcGFyYW0pO1xuXG5cdFx0XHRcdC8vICBzdG9wLCB3aGVuIGV2ZW50cyBhbmQgU1ZHIGVsZW1lbnQgZG8gbm90IGV4aXN0XG5cdFx0XHRcdGlmICghZXZlbnRFbGVtZW50LmV2ZW50cyAmJiAhZXZlbnRFbGVtZW50LmV2ZW50c1N1YnRpdGxlICYmICFldmVudEVsZW1lbnQuZXZlbnRzUG9pbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJvY2VlZE9iamVjdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYgKGV2ZW50RWxlbWVudC5ldmVudHNQb2ludCkge1xuXG5cdFx0XHRcdFx0bGVuID0gZXZlbnRFbGVtZW50LmVsZW1lbnRQb2ludC5sZW5ndGg7XG5cblx0XHRcdFx0XHQvLyBhdHRhY2ggZXZlbnRzIHBlciBlYWNoIHBvaW50XG5cdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGxlbjsgaisrKSB7XG5cdFx0XHRcdFx0XHRpZiAoZXZlbnRFbGVtZW50LmVsZW1lbnRQb2ludFtqXSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgZWxlbVBvaW50ID0gcGljayhldmVudEVsZW1lbnQuZWxlbWVudFBvaW50W2pdLmdyYXBoaWMsIGV2ZW50RWxlbWVudC5lbGVtZW50UG9pbnRbal0pO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChlbGVtUG9pbnQgJiYgZWxlbVBvaW50ICE9PSBVTkRFRklORUQpIHtcblx0XHRcdFx0XHRcdFx0XHRjdXN0b21FdmVudHMuYWRkKGVsZW1Qb2ludCwgZXZlbnRFbGVtZW50LmV2ZW50c1BvaW50LCBldmVudEVsZW1lbnQuZWxlbWVudFBvaW50W2pdLCBldmVudEVsZW1lbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gYXR0YWNoIGV2ZW50IHRvIHN1YnRpdGxlXG5cdFx0XHRcdGlmIChldmVudEVsZW1lbnQuZXZlbnRzU3VidGl0bGUpIHtcblx0XHRcdFx0XHRjdXN0b21FdmVudHMuYWRkKGV2ZW50RWxlbWVudC5lbGVtZW50U3VidGl0bGUsIGV2ZW50RWxlbWVudC5ldmVudHNTdWJ0aXRsZSwgZXZlbnRFbGVtZW50LCB0aGlzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGF0dGFjaCBldmVudCB0byBzdGFja0xhYmVsc1xuXHRcdFx0XHRpZiAoZXZlbnRFbGVtZW50LmV2ZW50c1N0YWNrTGFiZWwpIHtcblx0XHRcdFx0XHRjdXN0b21FdmVudHMuYWRkKGV2ZW50RWxlbWVudC5lbGVtZW50U3RhY2tMYWJlbCwgZXZlbnRFbGVtZW50LmV2ZW50c1N0YWNrTGFiZWwsIGV2ZW50RWxlbWVudCwgdGhpcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjdXN0b21FdmVudHMuYWRkKGV2ZW50RWxlbWVudC5lbGVtZW50LCBldmVudEVsZW1lbnQuZXZlbnRzLCBldmVudEVsZW1lbnQsIHRoaXMpO1xuXG5cdFx0XHRcdHJldHVybiBwcm9jZWVkT2JqZWN0O1xuXG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEBkZXNjcmlwdGlvbiBhZGRzIGV2ZW50IG9uIGEgU1ZHIGVsZW1lbnRcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gU1ZHZWxlbSBncmFwaGljIGVsZW1lbnRcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRzIG9iamVjdCB3aXRoIGFsbCBldmVudHNcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gZWxlbU9iaiBcInRoaXNcIiBvYmplY3QsIHdoaWNoIGlzIGF2YWlsYWJsZSBpbiB0aGUgZXZlbnRcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gc2VyaWVzIGNoYXJ0IHNlcmllc1xuXHRcdCAqIEBtZW1iZXJvZiBjdXN0b21FdmVudHNcblx0XHQgKiovXG5cdFx0YWRkOiBmdW5jdGlvbiAoU1ZHZWxlbSwgZXZlbnRzLCBlbGVtT2JqLCBldmVudEVsZW1lbnQsIGlzUG9pbnQpIHtcblxuXHRcdFx0dmFyIGV2ZW50T2JqZWN0ID0gZXZlbnRFbGVtZW50LmV2ZW50T2JqZWN0IHx8IGVsZW1PYmouZXZlbnRPYmplY3QsIC8vXHRGaXggc2VyaWVzIHJlZmVyZW5jZSAjODlcblx0XHRcdFx0aXNTZXJpZXMgPSBlbGVtT2JqLmlzU2VyaWVzIHx8IGV2ZW50RWxlbWVudC5pc1NlcmllcztcblxuXG5cdFx0XHQvLyBzdG9wIHdoZW4gU1ZHIGVsZW1lbnQgZG9lcyBub3QgZXhpc3Rcblx0XHRcdGlmICghU1ZHZWxlbSB8fCAhU1ZHZWxlbS5lbGVtZW50KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgYWN0aW9uIGluIGV2ZW50cykge1xuXG5cdFx0XHRcdChmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0XHRpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSAmJiAhU1ZHZWxlbVtldmVudF0pIHtcblx0XHRcdFx0XHRcdGlmIChpc1RvdWNoRGV2aWNlICYmIGV2ZW50ID09PSBEQkxDTElDSykgeyAvLyAgIzMwIC0gZmFsbGJhY2sgZm9yIGlQYWRcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdHZhciB0YXBwZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRcdFx0XHRhZGRFdmVudChTVkdlbGVtLmVsZW1lbnQsIFRPVUNIU1RBUlQsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoaXNTZXJpZXMgJiYgIWV2ZW50T2JqZWN0LmRpcmVjdFRvdWNoKSB7IC8vICM5M1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGNoYXJ0ID0gZXZlbnRPYmplY3QuY2hhcnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vcm1hbGl6ZWRFdmVudCA9IGNoYXJ0LnBvaW50ZXIubm9ybWFsaXplKGUpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtT2JqID0gZXZlbnRPYmplY3Quc2VhcmNoUG9pbnQobm9ybWFsaXplZEV2ZW50LCBldmVudE9iamVjdC5rZERpbWVuc2lvbnMgPT09IDEpIHx8IGVsZW1PYmo7IC8vICM4NyAtIHdyb25nIHNlYXJjaFBvaW50IGZvciBzY2F0dGVyIHNlcmllc1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS5wb2ludCA9IGVsZW1PYmo7XHQvL1x0Izg5IHBvaW50IHJlZmVyZW5jZSBpbiBtb3VzZSBldmVudFxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmICgoZXZlbnRPYmplY3QgJiYgIWlzUG9pbnQpIHx8IChpc051bWJlcihldmVudE9iamVjdC52YWx1ZSkpKSB7IC8vICM5NSBcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50T2JqZWN0LnZhbHVlID0gZWxlbU9iai50ZXh0U3RyO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbU9iaiA9IGV2ZW50T2JqZWN0O1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtT2JqICYmIGVsZW1PYmoudGV4dFN0cikgeyAvLyBsYWJlbHNcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1PYmoudmFsdWUgPSBlbGVtT2JqLnRleHRTdHI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW1PYmouZHJpbGxkb3duKSB7IC8vICMxMTQgLSBkcmlsbFVwIC0gdW5kZWZpbmVkIGRkRHVwZXMgW11cblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1PYmouZG9EcmlsbGRvd24odW5kZWZpbmVkLCB1bmRlZmluZWQsIGUpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmICghdGFwcGVkKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdHRhcHBlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YXBwZWQgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudHNbQ0xJQ0tdLmNhbGwoZWxlbU9iaiwgZSk7IC8vXHRjYWxsIHNpbmdsZSBjbGljayBhY3Rpb25cblx0XHRcdFx0XHRcdFx0XHRcdH0sIDMwMCk7XG5cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRhcHBlZCk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdHRhcHBlZCA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudHNbZXZlbnRdLmNhbGwoZWxlbU9iaiwgZSk7XG5cblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0YWRkRXZlbnQoU1ZHZWxlbS5lbGVtZW50LCBldmVudCwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChpc1NlcmllcykgeyAvLyAjMTA4LCAjOTMgLSByZWZlcmVuY2VzIGluIGUucG9pbnQgYW5kIHRoaXMgYWZ0ZXIgY2hhcnQudXBkYXRlKClcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBjaGFydCA9IGV2ZW50T2JqZWN0LmNoYXJ0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub3JtYWxpemVkRXZlbnQgPSBjaGFydC5wb2ludGVyLm5vcm1hbGl6ZShlKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbU9iaiA9IGV2ZW50T2JqZWN0LnNlYXJjaFBvaW50KG5vcm1hbGl6ZWRFdmVudCwgZXZlbnRPYmplY3Qua2REaW1lbnNpb25zID09PSAxKSB8fCBlbGVtT2JqOyAvLyAjODcgLSB3cm9uZyBzZWFyY2hQb2ludCBmb3Igc2NhdHRlciBzZXJpZXNcblx0XHRcdFx0XHRcdFx0XHRcdGUucG9pbnQgPSBlbGVtT2JqO1x0Ly9cdCM4OSBwb2ludCByZWZlcmVuY2UgaW4gbW91c2UgZXZlbnRcblxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmICgoZXZlbnRPYmplY3QgJiYgIWlzUG9pbnQpIHx8IChldmVudE9iamVjdCAmJiBpc051bWJlcihldmVudE9iamVjdC52YWx1ZSkpKSB7IC8vICM5NSB3cm9uZyByZWZlcmVuY2UgZm9yIGF4aXMgbGFiZWxzXG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudE9iamVjdC52YWx1ZSA9IGVsZW1PYmoudGV4dFN0ciB8fCBldmVudE9iamVjdC52YWx1ZTsgLy8gIzk1LCAjOTggd3JvbmcgcmVmZXJlbmNlIGZvciBheGlzIGxhYmVsc1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbU9iaiA9IGV2ZW50T2JqZWN0O1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtT2JqICYmIGVsZW1PYmoudGV4dFN0cikgeyAvLyBsYWJlbHNcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1PYmoudmFsdWUgPSBlbGVtT2JqLnRleHRTdHI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW1PYmouZHJpbGxkb3duKSB7IC8vICMxMTQgLSBkcmlsbFVwIC0gdW5kZWZpbmVkIGRkRHVwZXMgW11cblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1PYmouZG9EcmlsbGRvd24odW5kZWZpbmVkLCB1bmRlZmluZWQsIGUpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGV2ZW50c1tldmVudF0uY2FsbChlbGVtT2JqLCBlKTtcblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFNWR2VsZW1bZXZlbnRdID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KShhY3Rpb24pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZXZlbnRFbGVtZW50OiB7XG5cdFx0XHQvKipcblx0XHRcdCogQHR5cGVkZWYge09iamVjdH0gZXZlbnRFbGVtZW50XG5cdFx0XHQqKi9cblx0XHRcdC8qKlxuXHRcdFx0ICogQGRlc2NyaXB0aW9uIEV4dHJhY3RzIFNWRyBlbGVtZW50cyBmcm9tIHBvaW50c1xuXHRcdFx0ICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50c1BvaW50IGV2ZW50cyBmb3IgcG9pbnRcblx0XHRcdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IGVsZW1lbnRQb2ludCBhcnJheSBvZiBTVkcgcG9pbnQgZWxlbWVudHNcblx0XHRcdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBldmVudE9iamVjdCBvYmplY3Qga2VwdCBpbiB0aGlzIG9uIGkuZSBjbGlja1xuXHRcdFx0ICogQHJldHVybiB7T2JqZWN0fSB7IGV2ZW50czogb2JqZWN0LCBlbGVtZW50OiBvYmplY3QgfVxuXHRcdFx0ICogQG1lbWJlcm9mIGN1c3RvbUV2ZW50c1xuXHRcdFx0ICoqL1xuXHRcdFx0YWRkTGFiZWw6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHBhcmVudCA9IHRoaXMucGFyZW50LFxuXHRcdFx0XHRcdGF4aXMgPSB0aGlzLmF4aXMsXG5cdFx0XHRcdFx0YXhpc09wdGlvbnMgPSBheGlzLm9wdGlvbnMsXG5cdFx0XHRcdFx0ZXZlbnRzUG9pbnQgPSBheGlzT3B0aW9ucy5sYWJlbHMgJiYgYXhpc09wdGlvbnMubGFiZWxzLmV2ZW50cyxcblx0XHRcdFx0XHRlbGVtZW50UG9pbnQgPSBbdGhpcy5sYWJlbF0sXG5cdFx0XHRcdFx0bGVuLCBpO1xuXG5cdFx0XHRcdGlmIChwYXJlbnQpIHtcblx0XHRcdFx0XHR2YXIgc3RlcCA9IHRoaXM7IC8vIGN1cnJlbnQgbGFiZWxcblxuXHRcdFx0XHRcdHdoaWxlIChzdGVwKSB7XG5cdFx0XHRcdFx0XHRpZiAoaXNBcnJheShzdGVwKSkge1xuXHRcdFx0XHRcdFx0XHRsZW4gPSBzdGVwLmxlbmd0aDtcblxuXHRcdFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50UG9pbnQucHVzaChzdGVwW2ldLmxhYmVsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZWxlbWVudFBvaW50LnB1c2goc3RlcC5sYWJlbCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHN0ZXAgPSBzdGVwLnBhcmVudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGV2ZW50c1BvaW50OiBldmVudHNQb2ludCxcblx0XHRcdFx0XHRlbGVtZW50UG9pbnQ6IGVsZW1lbnRQb2ludCxcblx0XHRcdFx0XHRldmVudE9iamVjdDoge1xuXHRcdFx0XHRcdFx0YXhpczogYXhpcyxcblx0XHRcdFx0XHRcdGlzRmlyc3Q6IHRoaXMuaXNGaXJzdCxcblx0XHRcdFx0XHRcdGlzTGFzdDogdGhpcy5pc0xhc3QsXG5cdFx0XHRcdFx0XHRjaGFydDogYXhpcy5jaGFydCxcblx0XHRcdFx0XHRcdGRhdGVUaW1lTGFiZWxGb3JtYXQ6IGF4aXNPcHRpb25zLmRhdGVUaW1lTGFiZWxGb3JtYXRzLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMucG9zXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogQGRlc2NyaXB0aW9uIEV4dHJhY3RzIFNWRyBlbGVtZW50cyBmcm9tIHRpdGxlIGFuZCBzdWJ0aXRsZVxuXHRcdFx0ICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50cyBldmVudHMgZm9yIHRpdGxlXG5cdFx0XHQgKiBAcHJvcGVydHkge0FycmF5fSBlbGVtZW50UG9pbnQgdGl0bGUgU1ZHIGVsZW1lbnRcblx0XHRcdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBldmVudHNTdWJ0aXRsZSBldmVudHMgZm9yIHN1YnRpdGxlXG5cdFx0XHQgKiBAcHJvcGVydHkge0FycmF5fSBlbGVtZW50U3VidGl0bGUgc3VidGl0bGUgU1ZHIGVsZW1lbnRcblx0XHRcdCAqIEByZXR1cm4ge09iamVjdH0ge2V2ZW50OiBvYmplY3QsIGVsZW1lbnQ6IG9iamVjdCwgZXZlbnRzU3VidGl0bGU6IG9iamVjdCwgZWxlbWVudFN1YnRpdGxlOiBvYmplY3QgfVxuXHRcdFx0ICogQG1lbWJlcm9mIGN1c3RvbUV2ZW50c1xuXHRcdFx0ICoqL1xuXHRcdFx0c2V0VGl0bGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIGV2ZW50cyA9IHRoaXMub3B0aW9ucy50aXRsZSAmJiB0aGlzLm9wdGlvbnMudGl0bGUuZXZlbnRzLFxuXHRcdFx0XHRcdGVsZW1lbnQgPSB0aGlzLnRpdGxlLFxuXHRcdFx0XHRcdGV2ZW50c1N1YnRpdGxlID0gdGhpcy5vcHRpb25zLnN1YnRpdGxlICYmIHRoaXMub3B0aW9ucy5zdWJ0aXRsZS5ldmVudHMsXG5cdFx0XHRcdFx0ZWxlbWVudFN1YnRpdGxlID0gdGhpcy5zdWJ0aXRsZTtcblxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGV2ZW50czogZXZlbnRzLFxuXHRcdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdFx0ZXZlbnRzU3VidGl0bGU6IGV2ZW50c1N1YnRpdGxlLFxuXHRcdFx0XHRcdGVsZW1lbnRTdWJ0aXRsZTogZWxlbWVudFN1YnRpdGxlXG5cdFx0XHRcdH07XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAZGVzY3JpcHRpb24gRXh0cmFjdHMgU1ZHIGVsZW1lbnRzIGZyb20gZGF0YUxhYmVsc1xuXHRcdFx0ICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50cyBldmVudHMgZm9yIGRhdGFMYWJlbHNcblx0XHRcdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IGVsZW1lbnQgZGF0YUxhYmVscyBTVkcgZWxlbWVudFxuXHRcdFx0ICogQHJldHVybiB7T2JqZWN0fSB7IGV2ZW50czogb2JqZWN0LCBlbGVtZW50OiBvYmplY3QgfVxuXHRcdFx0ICogQG1lbWJlcm9mIGN1c3RvbUV2ZW50c1xuXHRcdFx0ICoqL1xuXHRcdFx0ZHJhd0RhdGFMYWJlbHM6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIGRhdGFMYWJlbHNHcm91cCA9IHRoaXMuZGF0YUxhYmVsc0dyb3VwO1xuXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXZlbnRzOiBkYXRhTGFiZWxzR3JvdXAgPyB0aGlzLm9wdGlvbnMuZGF0YUxhYmVscy5ldmVudHMgOiBVTkRFRklORUQsXG5cdFx0XHRcdFx0ZWxlbWVudDogZGF0YUxhYmVsc0dyb3VwID8gdGhpcy5kYXRhTGFiZWxzR3JvdXAgOiBVTkRFRklORURcblx0XHRcdFx0fTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEBkZXNjcmlwdGlvbiBFeHRyYWN0cyBTVkcgZWxlbWVudHMgZnJvbSBheGlzIHRpdGxlIGFuZCBzdGFja0xhYmVsc1xuXHRcdFx0ICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50cyBldmVudHMgZm9yIGF4aXMgdGl0bGVcblx0XHRcdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IGVsZW1lbnQgYXhpcyB0aXRsZSBTVkcgZWxlbWVudFxuXHRcdFx0ICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50c1BvaW50IGV2ZW50cyBmb3Igc3RhY2tsYWJlbHNcblx0XHRcdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IGVsZW1lbnRQb2ludCBzdGFja2xhYmVscyBTVkcgZWxlbWVudFxuXHRcdFx0ICogQHByb3BlcnR5IHtPYmplY3R9IGV2ZW50c1N0YWNrTGFiZWwgZXZlbnRzIGZvciBzdGFja2xhYmVsc1xuXHRcdFx0ICogQHByb3BlcnR5IHtBcnJheX0gZWxlbWVudFN0YWNrTGFiZWwgc3RhY2tsYWJlbHMgZ3JvdXAgU1ZHIGVsZW1lbnRcblx0XHRcdCAqIEByZXR1cm4ge09iamVjdH0geyBldmVudHM6IG9iamVjdCwgZWxlbWVudDogb2JqZWN0LCBldmVudHNQb2ludDogb2JqZWN0LCBlbGVtZW50UG9pbnQ6IG9iamVjdCwgZXZlbnRzU3RhY2tMYWJlbDogb2JqZWN0LCBlbGVtZW50U3RhY2tMYWJlbDogb2JqZWN0IH1cblx0XHRcdCAqIEBtZW1iZXJvZiBjdXN0b21FdmVudHNcblx0XHRcdCAqKi9cblx0XHRcdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgc3RhY2tMYWJlbHMgPSB0aGlzLm9wdGlvbnMuc3RhY2tMYWJlbHMsXG5cdFx0XHRcdFx0ZXZlbnRzLFxuXHRcdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdFx0ZXZlbnRzUG9pbnQsXG5cdFx0XHRcdFx0ZWxlbWVudFBvaW50LFxuXHRcdFx0XHRcdGV2ZW50c1N0YWNrTGFiZWwsXG5cdFx0XHRcdFx0ZWxlbWVudFN0YWNrTGFiZWw7XG5cblx0XHRcdFx0aWYgKHRoaXMuYXhpc1RpdGxlKSB7XG5cdFx0XHRcdFx0ZXZlbnRzID0gdGhpcy5vcHRpb25zLnRpdGxlLmV2ZW50cztcblx0XHRcdFx0XHRlbGVtZW50ID0gdGhpcy5heGlzVGl0bGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoc3RhY2tMYWJlbHMgJiYgc3RhY2tMYWJlbHMuZW5hYmxlZCkge1xuXHRcdFx0XHRcdGV2ZW50c1BvaW50ID0gc3RhY2tMYWJlbHMuZXZlbnRzO1xuXHRcdFx0XHRcdGVsZW1lbnRQb2ludCA9IHRoaXMuc3RhY2tzO1xuXHRcdFx0XHRcdGV2ZW50c1N0YWNrTGFiZWwgPSBzdGFja0xhYmVscy5ldmVudHM7XG5cdFx0XHRcdFx0ZWxlbWVudFN0YWNrTGFiZWwgPSB0aGlzLnN0YWNrVG90YWxHcm91cDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXZlbnRzOiBldmVudHMsXG5cdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdFx0XHRldmVudHNQb2ludDogZXZlbnRzUG9pbnQsXG5cdFx0XHRcdFx0ZWxlbWVudFBvaW50OiBlbGVtZW50UG9pbnQsXG5cdFx0XHRcdFx0ZXZlbnRzU3RhY2tMYWJlbDogZXZlbnRzU3RhY2tMYWJlbCxcblx0XHRcdFx0XHRlbGVtZW50U3RhY2tMYWJlbDogZWxlbWVudFN0YWNrTGFiZWxcblx0XHRcdFx0fTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEBkZXNjcmlwdGlvbiBFeHRyYWN0cyBTVkcgZWxlbWVudHMgZnJvbSBzZXJpZXMgYW5kIHNlcmllcyBwb2ludHNcblx0XHRcdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBldmVudHMgZXZlbnRzIGZvciBzZXJpZXNcblx0XHRcdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IGVsZW1lbnQgc2VyaWVzIFNWRyBlbGVtZW50XG5cdFx0XHQgKiBAcHJvcGVydHkge09iamVjdH0gZXZlbnRzIGV2ZW50cyBmb3Igc2VyaWVzIHBvaW50c1xuXHRcdFx0ICogQHByb3BlcnR5IHtBcnJheX0gZWxlbWVudCBzZXJpZXMgcG9pbnRzIFNWRyBlbGVtZW50XG5cdFx0XHQgKiBAcmV0dXJuIHtPYmplY3R9IHsgZXZlbnRzOiBvYmplY3QsIGVsZW1lbnQ6IG9iamVjdCwgZXZlbnRzUG9pbnQ6IG9iamVjdCwgZWxlbWVudFBvaW50OiBvYmplY3QgfVxuXHRcdFx0ICogQG1lbWJlcm9mIGN1c3RvbUV2ZW50c1xuXHRcdFx0ICoqL1xuXHRcdFx0ZHJhd1BvaW50czogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgb3AgPSB0aGlzLm9wdGlvbnMsXG5cdFx0XHRcdFx0dHlwZSA9IHRoaXMudHlwZSxcblx0XHRcdFx0XHRldmVudHMgPSBvcC5jdXN0b21FdmVudHMgPyBvcC5jdXN0b21FdmVudHMuc2VyaWVzIDogb3AuZXZlbnRzLFxuXHRcdFx0XHRcdGVsZW1lbnQgPSB0aGlzLmdyb3VwLFxuXHRcdFx0XHRcdGV2ZW50c1BvaW50ID0gb3AuY3VzdG9tRXZlbnRzID8gb3AuY3VzdG9tRXZlbnRzLnBvaW50IDogb3AucG9pbnQuZXZlbnRzLFxuXHRcdFx0XHRcdGVsZW1lbnRQb2ludDtcblxuXHRcdFx0XHRpZiAoZGVmYXVsdE9wdGlvbnNbdHlwZV0gJiYgZGVmYXVsdE9wdGlvbnNbdHlwZV0ubWFya2VyICYmICF0aGlzLmJ1YmJsZVBhZGRpbmcpIHtcblx0XHRcdFx0XHRlbGVtZW50UG9pbnQgPSBbdGhpcy5tYXJrZXJHcm91cF07IC8vXHRnZXQgbWFya2VycyB3aGVuIGVuYWJsZWRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtZW50UG9pbnQgPSB0aGlzLnBvaW50czsgLy9cdGV4dHJhY3QgcG9pbnRzXG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdGlmICghdGhpcy5rZFRyZWUgJiYgIXRoaXMuYnVpbGRpbmdLZFRyZWUpIHtcblx0XHRcdFx0XHR0aGlzLmJ1aWxkS0RUcmVlKCk7IC8vXHQjODYsIG1pc3NpbmcgcmVmZXJlbmNlIHRvIHBvaW50IG9uIGZpcnN0IG1vdXNlb3ZlclxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRldmVudHM6IGV2ZW50cyxcblx0XHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0XHRcdGV2ZW50c1BvaW50OiBldmVudHNQb2ludCxcblx0XHRcdFx0XHRlbGVtZW50UG9pbnQ6IGVsZW1lbnRQb2ludCxcblx0XHRcdFx0XHRldmVudE9iamVjdDogdGhpcyxcblx0XHRcdFx0XHRpc1NlcmllczogdHJ1ZVxuXHRcdFx0XHR9O1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogQGRlc2NyaXB0aW9uIEV4dHJhY3RzIFNWRyBlbGVtZW50cyBmcm9tIGxlZ2VuZCBpdGVtXG5cdFx0XHQgKiBAcHJvcGVydHkge09iamVjdH0gZXZlbnRzIGV2ZW50cyBmb3IgbGVnZW5kIGl0ZW1cblx0XHRcdCAqIEBwcm9wZXJ0eSB7QXJyYXl9IGVsZW1lbnQgbGVnZW5kIGl0ZW0gU1ZHIGVsZW1lbnRcblx0XHRcdCAqIEByZXR1cm4ge09iamVjdH0geyBldmVudHM6IG9iamVjdCwgZWxlbWVudDogb2JqZWN0IH1cblx0XHRcdCAqIEBtZW1iZXJvZiBjdXN0b21FdmVudHNcblx0XHRcdCAqKi9cblx0XHRcdHJlbmRlckl0ZW06IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXZlbnRzOiB0aGlzLm9wdGlvbnMuaXRlbUV2ZW50cyxcblx0XHRcdFx0XHRlbGVtZW50OiBpdGVtLmxlZ2VuZEdyb3VwLFxuXHRcdFx0XHRcdGV2ZW50T2JqZWN0OiBpdGVtXG5cdFx0XHRcdH07XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAZGVzY3JpcHRpb24gRXh0cmFjdHMgU1ZHIGVsZW1lbnRzIGZyb20gY3Jvc3NoYWlyXG5cdFx0XHQgKiBAcHJvcGVydHkge09iamVjdH0gZXZlbnRzIGV2ZW50cyBmb3IgY3Jvc3NoYWlyXG5cdFx0XHQgKiBAcHJvcGVydHkge0FycmF5fSBlbGVtZW50IGNyb3NzaGFpciBTVkcgZWxlbWVudFxuXHRcdFx0ICogQHJldHVybiB7T2JqZWN0fSB7IGV2ZW50czogb2JqZWN0LCBlbGVtZW50OiBvYmplY3QgfVxuXHRcdFx0ICogQG1lbWJlcm9mIGN1c3RvbUV2ZW50c1xuXHRcdFx0ICoqL1xuXHRcdFx0ZHJhd0Nyb3NzaGFpcjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgY3Jvc3NoYWlyID0gdGhpcy5vcHRpb25zLmNyb3NzaGFpcjtcblxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGV2ZW50czogY3Jvc3NoYWlyICYmIGNyb3NzaGFpci5ldmVudHMsXG5cdFx0XHRcdFx0ZWxlbWVudDogdGhpcy5jcm9zc1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjdXN0b21FdmVudHMgPSBIQy5DaGFydC5wcm90b3R5cGUuY3VzdG9tRXZlbnQ7XG5cdGN1c3RvbUV2ZW50cy5pbml0KCk7XG5cbn0pKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGlnaGNoYXJ0cy1jdXN0b20tZXZlbnRzL2pzL2N1c3RvbUV2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL25nMi1oaWdoY2hhcnRzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==