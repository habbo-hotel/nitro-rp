import { NitroEvent } from '../core';
export declare class RoomContentLoadedEvent extends NitroEvent {
    static RCLE_SUCCESS: string;
    static RCLE_FAILURE: string;
    static RCLE_CANCEL: string;
    private _contentType;
    constructor(type: string, contentType: string);
    get contentType(): string;
}
