import { RoomMapData } from '../object';
export declare class RoomData {
    private _roomId;
    private _data;
    private _floorType;
    private _wallType;
    private _landscapeType;
    constructor(roomId: number, data: RoomMapData);
    get roomId(): number;
    get data(): RoomMapData;
    get floorType(): string;
    set floorType(k: string);
    get wallType(): string;
    set wallType(k: string);
    get landscapeType(): string;
    set landscapeType(k: string);
}
