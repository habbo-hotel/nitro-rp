import { NitroEvent } from '../core';
export declare class SessionDataPreferencesEvent extends NitroEvent {
    static UPDATED: string;
    private _uiFlags;
    constructor(k: number);
    get uiFlags(): number;
}
