import { Interval } from './Interval';
export declare class ResizeTo extends Interval {
    protected _startW: number;
    protected _startH: number;
    protected _endW: number;
    protected _endH: number;
    protected _deltaW: number;
    protected _deltaH: number;
    constructor(k: HTMLElement, _arg_2: number, _arg_3: number, _arg_4: number);
    start(): void;
    update(k: number): void;
}
