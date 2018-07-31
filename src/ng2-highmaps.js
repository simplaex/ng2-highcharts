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
    Ng2Highmaps.decorators = [
        { type: Directive, args: [{
                    selector: '[ng2-highmaps]'
                },] },
    ];
    /** @nocollapse */
    Ng2Highmaps.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: KeyValueDiffers, },
    ]; };
    Ng2Highmaps.propDecorators = {
        'options': [{ type: Input, args: ['ng2-highmaps',] },],
    };
    return Ng2Highmaps;
}(Ng2HighchartsBase));
export { Ng2Highmaps };
