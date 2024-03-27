import { Motion } from './Motion';
export declare class Wait extends Motion {
    private _startTimeMs;
    private _waitTimeMs;
    constructor(k: number);
    get running(): boolean;
    start(): void;
    tick(k: number): void;
}
