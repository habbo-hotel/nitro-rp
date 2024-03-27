import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuildMemberMgmtFailedMessageParser implements IMessageParser {
    private _guildId;
    private _reason;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get guildId(): number;
    get reason(): number;
}
