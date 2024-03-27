export declare class PendingGuideTicketData {
    private _type;
    private _secondsAgo;
    private _isGuide;
    private _otherPartyName;
    private _otherPartyFigure;
    private _description;
    private _roomName;
    constructor(type: number, secondsAgo: number, isGuide: boolean, otherPartyName: string, otherPartyFigure: string, description: string, roomName: string);
    get type(): number;
    set type(value: number);
    get secondsAgo(): number;
    set secondsAgo(value: number);
    get isGuide(): boolean;
    set isGuide(value: boolean);
    get otherPartyName(): string;
    set otherPartyName(value: string);
    get otherPartyFigure(): string;
    set otherPartyFigure(value: string);
    get description(): string;
    set description(value: string);
    get roomName(): string;
    set roomName(value: string);
}
