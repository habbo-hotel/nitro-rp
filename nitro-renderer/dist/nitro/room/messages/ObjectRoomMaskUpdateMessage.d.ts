import { IVector3D } from '../../../api';
import { RoomObjectUpdateMessage } from '../../../room';
export declare class ObjectRoomMaskUpdateMessage extends RoomObjectUpdateMessage {
    static ADD_MASK: string;
    static REMOVE_MASK: string;
    static DOOR: string;
    static WINDOW: string;
    static HOLE: string;
    private _type;
    private _maskId;
    private _maskType;
    private _maskLocation;
    private _maskCategory;
    constructor(type: string, maskId: string, maskType?: string, maskLocation?: IVector3D, maskCategory?: string);
    get type(): string;
    get maskId(): string;
    get maskType(): string;
    get maskLocation(): IVector3D;
    get maskCategory(): string;
}
