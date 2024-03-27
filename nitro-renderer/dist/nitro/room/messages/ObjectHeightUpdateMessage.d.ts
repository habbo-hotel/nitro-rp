import { IVector3D } from '../../../api';
import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectHeightUpdateMessage extends RoomObjectUpdateMessage {
    private _height;
    constructor(location: IVector3D, direction: IVector3D, height: number);
    get height(): number;
}
