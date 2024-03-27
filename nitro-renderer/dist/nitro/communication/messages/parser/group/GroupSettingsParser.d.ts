import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { GroupDataBadgePart } from './utils';
export declare class GroupSettingsParser implements IMessageParser {
    private _roomId;
    private _roomName;
    private _id;
    private _title;
    private _description;
    private _colorA;
    private _colorB;
    private _state;
    private _canMembersDecorate;
    private _badgeParts;
    private _badgeCode;
    private _membersCount;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
    get roomName(): string;
    get id(): number;
    get title(): string;
    get description(): string;
    get colorA(): number;
    get colorB(): number;
    get state(): number;
    get canMembersDecorate(): boolean;
    get badgeParts(): Map<number, GroupDataBadgePart>;
    get badgeCode(): string;
    get membersCount(): number;
}