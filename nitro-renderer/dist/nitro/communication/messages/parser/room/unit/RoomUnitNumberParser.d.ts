import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomUnitNumberParser implements IMessageParser {
    private _unitId;
    private _value;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get unitId(): number;
    get value(): number;
}
