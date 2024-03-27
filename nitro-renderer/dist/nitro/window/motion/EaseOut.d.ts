import { EaseRate } from './EaseRate';
import { Interval } from './Interval';
export declare class EaseOut extends EaseRate {
    constructor(k: Interval, _arg_2: number);
    update(k: number): void;
}
