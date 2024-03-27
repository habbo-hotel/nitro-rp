import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class LeftQueueMessageParser implements IMessageParser {
    private _gameTypeId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get gameTypeId(): number;
}
