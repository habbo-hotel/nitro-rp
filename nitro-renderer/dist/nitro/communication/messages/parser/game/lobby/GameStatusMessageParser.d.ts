import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class GameStatusMessageParser implements IMessageParser {
    private static readonly OK;
    private static readonly MAINTENANCE;
    private _gameTypeId;
    private _status;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get gameTypeId(): number;
    get isOk(): boolean;
    get isInMaintenance(): boolean;
}
