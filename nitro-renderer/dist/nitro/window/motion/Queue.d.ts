import { Motion } from './Motion';
export declare class Queue extends Motion {
    private _motion;
    private _queue;
    constructor(...motions: Motion[]);
    get running(): boolean;
    start(): void;
    update(k: number): void;
    stop(): void;
    tick(k: number): void;
}
