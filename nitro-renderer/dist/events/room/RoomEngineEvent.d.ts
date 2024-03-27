import { NitroEvent } from '../core';
export declare class RoomEngineEvent extends NitroEvent {
    static INITIALIZED: string;
    static ENGINE_INITIALIZED: string;
    static OBJECTS_INITIALIZED: string;
    static NORMAL_MODE: string;
    static GAME_MODE: string;
    static ROOM_ZOOMED: string;
    static DISPOSED: string;
    private _roomId;
    constructor(type: string, roomId: number);
    get roomId(): number;
}
