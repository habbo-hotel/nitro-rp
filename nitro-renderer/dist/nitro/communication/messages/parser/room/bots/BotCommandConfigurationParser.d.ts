import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class BotCommandConfigurationParser implements IMessageParser {
    private _botId;
    private _commandId;
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get botId(): number;
    get commandId(): number;
    get data(): string;
}
