import { IObjectData, ISelectedRoomObjectData, IVector3D, Vector3d } from '../../../api';
export declare class SelectedRoomObjectData implements ISelectedRoomObjectData {
    private _id;
    private _category;
    private _operation;
    private _loc;
    private _dir;
    private _typeId;
    private _instanceData;
    private _stuffData;
    private _state;
    private _animFrame;
    private _posture;
    constructor(id: number, category: number, operation: string, location: IVector3D, direction: IVector3D, typeId?: number, instanceData?: string, stuffData?: IObjectData, state?: number, frameNumber?: number, posture?: string);
    get id(): number;
    get category(): number;
    get operation(): string;
    get loc(): Vector3d;
    get dir(): Vector3d;
    get typeId(): number;
    get instanceData(): string;
    get stuffData(): IObjectData;
    get state(): number;
    get animFrame(): number;
    get posture(): string;
    dispose(): void;
}
