import { Motion } from './Motion';
export declare class Interval extends Motion {
    private _startTimeMs;
    private _duration;
    constructor(target: HTMLElement, duration: number);
    get duration(): number;
    start(): void;
    tick(time: number): void;
}
