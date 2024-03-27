import { IRoomObjectModel } from '../../api';
export declare class RoomObjectModel implements IRoomObjectModel {
    private _map;
    private _updateCounter;
    constructor();
    dispose(): void;
    getValue<T>(key: string): T;
    setValue<T>(key: string, value: T): void;
    removeKey(key: string): void;
    get updateCounter(): number;
}
