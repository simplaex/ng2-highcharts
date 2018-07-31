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
import { Directive, ElementRef, Input, KeyValueDiffers } from '@angular/core';
import { Ng2HighchartsBase } from "./ng2-highcharts-base";
var Ng2Highcharts = /** @class */ (function (_super) {
    __extends(Ng2Highcharts, _super);
    function Ng2Highcharts(ele, _differs) {
        var _this = _super.call(this, ele, _differs) || this;
        require('highcharts-custom-events')(window.Highcharts);
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
    Ng2Highcharts.decorators = [
        { type: Directive, args: [{
                    selector: '[ng2-highcharts]'
                },] },
    ];
    /** @nocollapse */
    Ng2Highcharts.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: KeyValueDiffers, },
    ]; };
    Ng2Highcharts.propDecorators = {
        'options': [{ type: Input, args: ['ng2-highcharts',] },],
    };
    return Ng2Highcharts;
}(Ng2HighchartsBase));
export { Ng2Highcharts };
