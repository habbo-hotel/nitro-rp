import { IRoomObject } from '../../api';
import { RoomObjectMouseEvent } from './RoomObjectMouseEvent';
export declare class RoomObjectTileMouseEvent extends RoomObjectMouseEvent {
    private _tileX;
    private _tileY;
    private _tileZ;
    constructor(type: string, object: IRoomObject, eventId: string, tileX: number, tileY: number, tileZ: number, altKey?: boolean, ctrlKey?: boolean, shiftKey?: boolean, buttonDown?: boolean);
    get tileX(): number;
    get tileY(): number;
    get tileZ(): number;
    get tileXAsInt(): number;
    get tileYAsInt(): number;
    get tileZAsInt(): number;
}
