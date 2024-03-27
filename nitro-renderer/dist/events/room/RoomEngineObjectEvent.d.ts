import { RoomEngineEvent } from './RoomEngineEvent';
export declare class RoomEngineObjectEvent extends RoomEngineEvent {
    static SELECTED: string;
    static DESELECTED: string;
    static ADDED: string;
    static REMOVED: string;
    static PLACED: string;
    static PLACED_ON_USER: string;
    static CONTENT_UPDATED: string;
    static REQUEST_MOVE: string;
    static REQUEST_ROTATE: string;
    static REQUEST_MANIPULATION: string;
    static MOUSE_ENTER: string;
    static MOUSE_LEAVE: string;
    static DOUBLE_CLICK: string;
    private _objectId;
    private _category;
    constructor(type: string, roomId: number, objectId: number, category: number);
    get objectId(): number;
    get category(): number;
}
