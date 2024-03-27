import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuildEditFailedMessageParser implements IMessageParser {
    static readonly INSUFFICIENT_SUBSCRIPTION_LEVEL: number;
    private _reason;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get reason(): number;
}
