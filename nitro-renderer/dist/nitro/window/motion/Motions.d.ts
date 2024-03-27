import { Motion } from './Motion';
export declare class Motions {
    private static _QUEUED_MOTIONS;
    private static _RUNNING_MOTIONS;
    private static _REMOVED_MOTIONS;
    private static _TIMER;
    private static _IS_UPDATING;
    static get TIMER_TIME(): number;
    static runMotion(k: Motion): Motion;
    static removeMotion(k: Motion): void;
    static getMotionByTag(k: string): Motion;
    static getMotionByTarget(k: HTMLElement): Motion;
    static getMotionByTagAndTarget(k: string, _arg_2: HTMLElement): Motion;
    static get isRunning(): boolean;
    static get isUpdating(): boolean;
    private static onTick;
    private static startTimer;
    private static stopTimer;
    getNumRunningMotions(k: HTMLElement): number;
}
