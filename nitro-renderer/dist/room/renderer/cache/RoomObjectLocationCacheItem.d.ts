import { IRoomGeometry, IRoomObject, IVector3D } from '../../../api';
export declare class RoomObjectLocationCacheItem {
    private _roomObjectVariableAccurateZ;
    private _location;
    private _screenLocation;
    private _locationChanged;
    private _geometryUpdateId;
    private _objectUpdateId;
    constructor(accurateZ: string);
    dispose(): void;
    updateLocation(object: IRoomObject, geometry: IRoomGeometry): IVector3D;
    get locationChanged(): boolean;
}
