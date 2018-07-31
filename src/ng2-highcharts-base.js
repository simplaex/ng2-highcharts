/**
 * Created by greg on 21/10/16.
 */
import { Input } from "@angular/core";
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
    Ng2HighchartsBase.propDecorators = {
        'options': [{ type: Input, args: ['ng2-highcharts',] },],
    };
    return Ng2HighchartsBase;
}());
export { Ng2HighchartsBase };
