import { RoomEngineEvent } from './RoomEngineEvent';
export declare class RoomZoomEvent extends RoomEngineEvent {
    static ROOM_ZOOM: string;
    private _level;
    private _forceFlip;
    private _asDelta;
    constructor(roomId: number, level: number, forceFlip?: boolean, asDelta?: boolean);
    get level(): number;
    get forceFlip(): boolean;
    get asDelta(): boolean;
}
