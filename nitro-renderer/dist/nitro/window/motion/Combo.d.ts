import { Motion } from './Motion';
export declare class Combo extends Motion {
    private _runningMotions;
    private _removedMotions;
    constructor(...motions: Motion[]);
    start(): void;
    tick(k: number): void;
}
