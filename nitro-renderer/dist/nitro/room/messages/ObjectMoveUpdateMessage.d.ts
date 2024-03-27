import { IVector3D } from '../../../api';
import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectMoveUpdateMessage extends RoomObjectUpdateMessage {
    private _targetLocation;
    private _isSlide;
    constructor(location: IVector3D, targetLocation: IVector3D, direction: IVector3D, isSlide?: boolean);
    get targetLocation(): IVector3D;
    get isSlide(): boolean;
}
