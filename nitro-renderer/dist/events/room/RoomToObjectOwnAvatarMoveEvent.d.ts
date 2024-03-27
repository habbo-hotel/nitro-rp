import { IVector3D } from '../../api';
import { RoomToObjectEvent } from './RoomToObjectEvent';
export declare class RoomToObjectOwnAvatarMoveEvent extends RoomToObjectEvent {
    static ROAME_MOVE_TO: string;
    private _targetLocation;
    constructor(type: string, targetLocation: IVector3D);
    get targetLocation(): IVector3D;
}
