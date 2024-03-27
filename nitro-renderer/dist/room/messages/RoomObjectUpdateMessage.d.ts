import { IVector3D } from '../../api';
export declare class RoomObjectUpdateMessage {
    private _location;
    private _direction;
    constructor(location: IVector3D, direction: IVector3D);
    get location(): IVector3D;
    get direction(): IVector3D;
}
