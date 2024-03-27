import { NitroEvent } from '../core';
export declare class NitroLocalizationEvent extends NitroEvent {
    static LOADED: string;
    static FAILED: string;
    constructor(type: string);
}
