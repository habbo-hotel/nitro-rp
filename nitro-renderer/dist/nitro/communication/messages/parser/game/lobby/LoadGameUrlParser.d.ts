import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class LoadGameUrlParser implements IMessageParser {
    private _gameTypeId;
    private _url;
    private _gameClientId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get gameTypeId(): number;
    get url(): string;
    get gameClientId(): string;
}
