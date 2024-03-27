import { Interval } from './Interval';
export declare class MoveTo extends Interval {
    protected _startX: number;
    protected _startY: number;
    protected _endX: number;
    protected _endY: number;
    protected _deltaX: number;
    protected _deltaY: number;
    constructor(k: HTMLElement, _arg_2: number, _arg_3: number, _arg_4: number);
    start(): void;
    update(k: number): void;
}
