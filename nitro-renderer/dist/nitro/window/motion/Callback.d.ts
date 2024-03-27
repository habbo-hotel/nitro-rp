import { Motion } from './Motion';
export declare class Callback extends Motion {
    protected _callback: Function;
    constructor(k: Function);
    get running(): boolean;
    tick(k: number): void;
}
