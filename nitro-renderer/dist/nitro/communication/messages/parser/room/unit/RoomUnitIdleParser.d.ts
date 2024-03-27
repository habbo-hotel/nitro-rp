import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomUnitIdleParser implements IMessageParser {
    private _unitId;
    private _isIdle;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get unitId(): number;
    get isIdle(): boolean;
}
