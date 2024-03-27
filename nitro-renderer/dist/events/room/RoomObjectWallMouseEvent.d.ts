import { IRoomObject, IVector3D } from '../../api';
import { RoomObjectMouseEvent } from './RoomObjectMouseEvent';
export declare class RoomObjectWallMouseEvent extends RoomObjectMouseEvent {
    private _wallLocation;
    private _wallWd;
    private _wallHt;
    private _x;
    private _y;
    private _direction;
    constructor(type: string, object: IRoomObject, eventId: string, wallLocation: IVector3D, wallWidth: IVector3D, wallHeight: IVector3D, x: number, y: number, direction: number, altKey?: boolean, ctrlKey?: boolean, shiftKey?: boolean, buttonDown?: boolean);
    get wallLocation(): IVector3D;
    get wallWidth(): IVector3D;
    get wallHeight(): IVector3D;
    get x(): number;
    get y(): number;
    get direction(): number;
}
