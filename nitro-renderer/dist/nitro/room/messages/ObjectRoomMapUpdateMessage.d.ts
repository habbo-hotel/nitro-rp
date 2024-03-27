import { RoomObjectUpdateMessage } from '../../../room';
import { RoomMapData } from '../object';
export declare class ObjectRoomMapUpdateMessage extends RoomObjectUpdateMessage {
    static UPDATE_MAP: string;
    private _type;
    private _mapData;
    constructor(mapData: RoomMapData);
    get type(): string;
    get mapData(): RoomMapData;
}
