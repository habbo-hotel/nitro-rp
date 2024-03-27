import { NitroEvent } from './core';
export declare class NitroSoundEvent extends NitroEvent {
    static PLAY_SOUND: string;
    private _sampleCode;
    constructor(type: string, sampleCode: string);
    get sampleCode(): string;
}
