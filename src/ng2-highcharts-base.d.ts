/**
 * Created by greg on 21/10/16.
 */
import { KeyValueDiffer, ElementRef, KeyValueDiffers, OnDestroy, DoCheck } from "@angular/core";
export declare abstract class Ng2HighchartsBase implements OnDestroy, DoCheck {
    options: Object;
    hostElement: ElementRef;
    pChart: any;
    currentWidth: number;
    currentHeight: number;
    differ: KeyValueDiffer<any, any>;
    constructor(ele: ElementRef, _differs: KeyValueDiffers);
    readonly chart: any;
    reflow(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    abstract draw(opt: any): void;
}
