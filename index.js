import { NgModule } from '@angular/core';
import { Ng2Highcharts } from './src/ng2-highcharts';
import { Ng2Highmaps } from './src/ng2-highmaps';
import { Ng2Highstocks } from './src/ng2-highstocks';
export * from './src/ng2-highcharts';
export * from './src/ng2-highstocks';
export * from './src/ng2-highmaps';
var Ng2HighchartsModule = /** @class */ (function () {
    function Ng2HighchartsModule() {
    }
    Ng2HighchartsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [Ng2Highcharts, Ng2Highmaps, Ng2Highstocks],
                    exports: [Ng2Highcharts, Ng2Highmaps, Ng2Highstocks]
                },] },
    ];
    /** @nocollapse */
    Ng2HighchartsModule.ctorParameters = function () { return []; };
    return Ng2HighchartsModule;
}());
export { Ng2HighchartsModule };
