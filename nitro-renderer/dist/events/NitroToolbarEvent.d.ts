import { NitroEvent } from './core';
export declare class NitroToolbarEvent extends NitroEvent {
    static TOOLBAR_CLICK: string;
    static SELECT_OWN_AVATAR: string;
    private _iconId;
    private _iconName;
    constructor(type: string);
    get iconId(): string;
    set iconId(id: string);
    get iconName(): string;
    set iconName(name: string);
}
