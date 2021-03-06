import { Directive, ElementRef, Input, KeyValueDiffers } from '@angular/core';
import { Ng2HighchartsBase } from "./ng2-highcharts-base";

@Directive({
	selector: '[ng2-highcharts]'
})
export class Ng2Highcharts extends Ng2HighchartsBase {
	@Input('ng2-highcharts') options: Object /* HighchartsOptions */;

	constructor(ele: ElementRef, _differs: KeyValueDiffers) {
		super(ele, _differs);
		require('highcharts-custom-events')((<any>window).Highcharts);
	}

	draw(opt: any /* HighchartsOptions */): void {
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
			this.pChart = new (<any>window).Highcharts.Chart(opt);
		} else {
			console.log('No valid options...');
			console.dir(opt);
		}
	}
}
