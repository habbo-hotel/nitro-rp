import { NitroEvent } from '../core';
export declare class RoomSessionUserTagsEvent extends NitroEvent {
    static UTRE_USER_TAGS_RECEIVED: string;
    private _userId;
    private _tags;
    constructor(k: number, _arg_2: string[]);
    get userId(): number;
    get tags(): string[];
}
