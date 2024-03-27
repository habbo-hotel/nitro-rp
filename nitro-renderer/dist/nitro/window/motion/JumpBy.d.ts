import { Interval } from './Interval';
export declare class JumpBy extends Interval {
    protected _startX: number;
    protected _startY: number;
    protected _deltaX: number;
    protected _deltaY: number;
    protected _height: number;
    protected _numJumps: number;
    constructor(target: HTMLElement, duration: number, deltaX: number, deltaY: number, height: number, numJumps: number);
    start(): void;
    update(k: number): void;
}
