import { IMessageDataWrapper } from '../../../../../api';
export declare class RoomVisitData {
    private _roomId;
    private _roomName;
    private _enterHour;
    private _enterMinute;
    constructor(k: IMessageDataWrapper);
    get roomId(): number;
    get roomName(): string;
    get enterHour(): number;
    get enterMinute(): number;
}
