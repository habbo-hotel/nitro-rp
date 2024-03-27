import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomUnitExpressionParser implements IMessageParser {
    private _unitId;
    private _expression;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get unitId(): number;
    get expression(): number;
}
