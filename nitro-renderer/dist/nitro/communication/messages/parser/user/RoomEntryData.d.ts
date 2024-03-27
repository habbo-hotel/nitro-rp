export declare class RoomEntryData {
    private _roomId;
    private _roomName;
    private _hasControllers;
    constructor(roomId: number, roomName: string, hasControllers: boolean);
    get roomId(): number;
    get roomName(): string;
    get hasControllers(): boolean;
}
