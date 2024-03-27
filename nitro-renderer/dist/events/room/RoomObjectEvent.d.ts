import { IRoomObject } from '../../api';
import { NitroEvent } from '../../events';
export declare class RoomObjectEvent extends NitroEvent {
    private _object;
    constructor(type: string, object: IRoomObject);
    get object(): IRoomObject;
    get objectId(): number;
    get objectType(): string;
}
