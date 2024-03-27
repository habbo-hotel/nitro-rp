import { Interval } from './Interval';
export declare class Ease extends Interval {
    protected _interval: Interval;
    constructor(k: Interval);
    start(): void;
    update(k: number): void;
    stop(): void;
}
