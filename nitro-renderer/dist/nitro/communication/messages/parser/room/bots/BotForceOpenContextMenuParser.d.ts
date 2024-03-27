import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class BotForceOpenContextMenuParser implements IMessageParser {
    private _botId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get botId(): number;
}
