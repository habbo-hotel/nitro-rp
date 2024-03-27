import { RoomEngineObjectEvent } from './RoomEngineObjectEvent';
export declare class RoomEngineObjectPlacedEvent extends RoomEngineObjectEvent {
    private _wallLocation;
    private _x;
    private _y;
    private _z;
    private _direction;
    private _placedInRoom;
    private _placedOnFloor;
    private _placedOnWall;
    private _instanceData;
    constructor(type: string, roomId: number, objectId: number, category: number, wallLocation: string, x: number, y: number, z: number, direction: number, placedInRoom: boolean, placedOnFloor: boolean, placedOnWall: boolean, instanceData: string);
    get wallLocation(): string;
    get x(): number;
    get y(): number;
    get z(): number;
    get direction(): number;
    get placedInRoom(): boolean;
    get placedOnFloor(): boolean;
    get placedOnWall(): boolean;
    get instanceData(): string;
}
