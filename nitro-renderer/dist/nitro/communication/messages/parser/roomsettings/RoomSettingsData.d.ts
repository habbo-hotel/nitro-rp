import { BannedUserData } from './BannedUserData';
import { FlatControllerData } from './FlatControllerData';
import { RoomChatSettings } from './RoomChatSettings';
import { RoomModerationSettings } from './RoomModerationSettings';
export declare class RoomSettingsData {
    static DOORMODE_OPEN: number;
    static DOORMODE_CLOSED: number;
    static DOORMODE_PASSWORD: number;
    static DOORMODE_INVISIBLE: number;
    static DOORMODE_NOOBS_ONLY: number;
    static TRADEMODE_NOT_ALLOWED: number;
    static TRADEMODE_WITH_CONTROLLER: number;
    static TRADEMODE_ALLOWED: number;
    private _roomId;
    private _name;
    private _description;
    private _doorMode;
    private _categoryId;
    private _maximumVisitors;
    private _maximumVisitorsLimit;
    private _tags;
    private _tradeMode;
    private _allowPets;
    private _allowFoodConsume;
    private _allowWalkThrough;
    private _hideWalls;
    private _wallThickness;
    private _floorThickness;
    private _controllersById;
    private _controllerList;
    private _highlightedUserId;
    private _bannedUsersById;
    private _bannedUsersList;
    private _roomModerationSettings;
    private _chatSettings;
    private _allowNavigatorDynamicCats;
    static from(settings: RoomSettingsData): RoomSettingsData;
    static getDoorModeLocalizationKey(k: number): string;
    get tradeMode(): number;
    set tradeMode(mode: number);
    get allowPets(): boolean;
    set allowPets(flag: boolean);
    get allowFoodConsume(): boolean;
    set allowFoodConsume(flag: boolean);
    get allowWalkThrough(): boolean;
    set allowWalkThrough(flag: boolean);
    get hideWalls(): boolean;
    set hideWalls(flag: boolean);
    get wallThickness(): number;
    set wallThickness(thickness: number);
    get floorThickness(): number;
    set floorThickness(thickness: number);
    get roomId(): number;
    set roomId(id: number);
    get name(): string;
    set name(name: string);
    get description(): string;
    set description(description: string);
    get doorMode(): number;
    set doorMode(mode: number);
    get categoryId(): number;
    set categoryId(id: number);
    get maximumVisitors(): number;
    set maximumVisitors(max: number);
    get maximumVisitorsLimit(): number;
    set maximumVisitorsLimit(limit: number);
    get tags(): string[];
    set tags(tags: string[]);
    setFlatController(id: number, data: FlatControllerData): void;
    get roomModerationSettings(): RoomModerationSettings;
    set roomModerationSettings(settings: RoomModerationSettings);
    get controllersById(): Map<number, FlatControllerData>;
    set controllersById(controllers: Map<number, FlatControllerData>);
    get controllerList(): FlatControllerData[];
    get highlightedUserId(): number;
    setBannedUser(id: number, data: BannedUserData): void;
    get bannedUsersById(): Map<number, BannedUserData>;
    get bannedUsersList(): BannedUserData[];
    get chatSettings(): RoomChatSettings;
    set chatSettings(settings: RoomChatSettings);
    get allowNavigatorDynamicCats(): boolean;
    set allowNavigatorDynamicCats(flag: boolean);
}
