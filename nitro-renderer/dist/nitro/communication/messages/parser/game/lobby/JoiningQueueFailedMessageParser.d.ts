import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class JoiningQueueFailedMessageParser implements IMessageParser {
    static readonly DUPLICATE_MACHINEID = 1;
    private _gameTypeId;
    private _reason;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get gameTypeId(): number;
    get reason(): number;
}
