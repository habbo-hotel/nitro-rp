import { IAdvancedMap, IRoomObjectController, IRoomObjectManager } from '../api';
export declare class RoomObjectManager implements IRoomObjectManager {
    private _objects;
    private _objectsPerType;
    constructor();
    dispose(): void;
    getObject(id: number): IRoomObjectController;
    getObjectByIndex(index: number): IRoomObjectController;
    createObject(id: number, stateCount: number, type: string): IRoomObjectController;
    private addObject;
    removeObject(id: number): void;
    removeAllObjects(): void;
    private getTypeMap;
    get objects(): IAdvancedMap<number, IRoomObjectController>;
    get totalObjects(): number;
}
