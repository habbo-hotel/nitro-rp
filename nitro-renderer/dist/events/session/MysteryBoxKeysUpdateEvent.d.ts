import { NitroEvent } from '../core';
export declare class MysteryBoxKeysUpdateEvent extends NitroEvent {
    static MYSTERY_BOX_KEYS_UPDATE: string;
    private _boxColor;
    private _keyColor;
    constructor(boxColor: string, keyColor: string);
    get boxColor(): string;
    get keyColor(): string;
}
