import { NitroEvent } from '../core';
export declare class UserNameUpdateEvent extends NitroEvent {
    static UNUE_NAME_UPDATED: string;
    private _name;
    constructor(name: string);
    get name(): string;
}
