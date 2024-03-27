import { IMessageDataWrapper } from '../../../../../../api';
import { RoomDataParser } from '../../room';
import { OfficialRoomEntryData } from './OfficialRoomEntryData';
export declare class GuestRoomSearchResultData {
    private _searchType;
    private _searchParam;
    private _rooms;
    private _ad;
    private _disposed;
    constructor(k: IMessageDataWrapper);
    dispose(): void;
    get disposed(): boolean;
    get searchType(): number;
    get searchParam(): string;
    get rooms(): RoomDataParser[];
    get ad(): OfficialRoomEntryData;
}
