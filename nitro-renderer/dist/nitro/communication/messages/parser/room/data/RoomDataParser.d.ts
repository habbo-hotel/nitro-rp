import { IMessageDataWrapper } from '../../../../../../api';
export declare class RoomDataParser {
    static THUMBNAIL_BITMASK: number;
    static GROUPDATA_BITMASK: number;
    static ROOMAD_BITMASK: number;
    static SHOWOWNER_BITMASK: number;
    static ALLOW_PETS_BITMASK: number;
    static DISPLAY_ROOMAD_BITMASK: number;
    static OPEN_STATE: number;
    static DOORBELL_STATE: number;
    static PASSWORD_STATE: number;
    static INVISIBLE_STATE: number;
    static NOOB_STATE: number;
    private _roomId;
    private _roomName;
    private _showOwner;
    private _ownerId;
    private _ownerName;
    private _doorMode;
    private _userCount;
    private _maxUserCount;
    private _description;
    private _tradeMode;
    private _score;
    private _ranking;
    private _categoryId;
    private _totalStars;
    private _groupId;
    private _groupName;
    private _groupBadge;
    private _tags;
    private _bitMask;
    private _thumbnail;
    private _allowPets;
    private _displayAd;
    private _adName;
    private _adDescription;
    private _adExpiresIn;
    private _allInRoomMuted;
    private _canMute;
    private _officialRoomPicRef;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    private parseTags;
    private parseBitMask;
    get roomId(): number;
    get roomName(): string;
    set roomName(name: string);
    get ownerId(): number;
    get ownerName(): string;
    get doorMode(): number;
    get userCount(): number;
    get maxUserCount(): number;
    get description(): string;
    get tradeMode(): number;
    get score(): number;
    get ranking(): number;
    get categoryId(): number;
    get tags(): string[];
    get officialRoomPicRef(): string;
    get habboGroupId(): number;
    get groupName(): string;
    get groupBadgeCode(): string;
    get roomAdName(): string;
    get roomAdDescription(): string;
    get roomAdExpiresInMin(): number;
    get showOwner(): boolean;
    get allowPets(): boolean;
    get displayRoomEntryAd(): boolean;
    get canMute(): boolean;
    set canMute(k: boolean);
    get allInRoomMuted(): boolean;
    set allInRoomMuted(k: boolean);
}
