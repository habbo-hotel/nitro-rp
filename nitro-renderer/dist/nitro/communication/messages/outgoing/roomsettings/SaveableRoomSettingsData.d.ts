export declare class SaveableRoomSettingsData {
    private _roomId;
    private _name;
    private _description;
    private _doorMode;
    private _password;
    private _categoryId;
    private _maximumVisitors;
    private _tags;
    private _tradeMode;
    private _allowPets;
    private _allowFoodConsume;
    private _allowWalkThrough;
    private _allowNavigatorDynCats;
    private _hideWalls;
    private _wallThickness;
    private _floorThickness;
    private _whoCanMute;
    private _whoCanKick;
    private _whoCanBan;
    private _chatMode;
    private _chatBubbleSize;
    private _chatScrollUpFrequency;
    private _chatFullHearRange;
    private _chatFloodSensitivity;
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
    get password(): string;
    set password(password: string);
    get categoryId(): number;
    set categoryId(id: number);
    get maximumVisitors(): number;
    set maximumVisitors(max: number);
    get tags(): string[];
    set tags(tags: string[]);
    get whoCanMute(): number;
    set whoCanMute(mute: number);
    get whoCanKick(): number;
    set whoCanKick(kick: number);
    get whoCanBan(): number;
    set whoCanBan(ban: number);
    get chatMode(): number;
    set chatMode(mode: number);
    get chatBubbleSize(): number;
    set chatBubbleSize(size: number);
    get chatScrollUpFrequency(): number;
    set chatScrollUpFrequency(frequency: number);
    get chatFullHearRange(): number;
    set chatFullHearRange(range: number);
    get chatFloodSensitivity(): number;
    set chatFloodSensitivity(sensitivity: number);
    get allowNavigatorDynCats(): boolean;
    set allowNavigatorDynCats(flag: boolean);
}
