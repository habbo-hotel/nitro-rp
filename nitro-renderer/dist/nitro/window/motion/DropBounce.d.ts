import { Interval } from './Interval';
export declare class DropBounce extends Interval {
    private _height;
    private _offset;
    constructor(target: HTMLElement, duration: number, height: number);
    start(): void;
    update(time: number): void;
    protected getBounceOffset(k: number): number;
    stop(): void;
}
