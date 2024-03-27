import { RoomEngineEvent } from './RoomEngineEvent';
export declare class RoomDragEvent extends RoomEngineEvent {
    static ROOM_DRAG: string;
    private _offsetX;
    private _offsetY;
    constructor(roomId: number, offsetX: number, offsetY: number);
    get offsetX(): number;
    get offsetY(): number;
}
