import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class UnloadGameMessageParser implements IMessageParser {
    private _gameTypeId;
    private _gameClientId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get gameTypeId(): number;
    get gameClientId(): string;
}
