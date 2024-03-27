import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class GroupFurniContextMenuInfoMessageParser implements IMessageParser {
    private _objectId;
    private _guildId;
    private _guildName;
    private _guildHomeRoomId;
    private _userIsMember;
    private _guildHasReadableForum;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get objectId(): number;
    get guildId(): number;
    get guildName(): string;
    get guildHomeRoomId(): number;
    get userIsMember(): boolean;
    get guildHasReadableForum(): boolean;
}
