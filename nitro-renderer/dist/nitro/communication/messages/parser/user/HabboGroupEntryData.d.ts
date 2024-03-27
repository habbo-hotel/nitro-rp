import { IMessageDataWrapper } from '../../../../../api';
export declare class HabboGroupEntryData {
    private _groupId;
    private _groupName;
    private _badgeCode;
    private _colorA;
    private _colorB;
    private _favourite;
    private _ownerId;
    private _hasForum;
    constructor(wrapper: IMessageDataWrapper);
    get groupId(): number;
    get groupName(): string;
    get badgeCode(): string;
    get colorA(): string;
    get colorB(): string;
    get favourite(): boolean;
    get ownerId(): number;
    get hasForum(): boolean;
}
