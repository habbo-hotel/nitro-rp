import { IMessageDataWrapper, IMessageParser, ObjectRolling } from '../../../../../../api';
export declare class ObjectsRollingParser implements IMessageParser {
    private _rollerId;
    private _itemsRolling;
    private _unitRolling;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get rollerId(): number;
    get itemsRolling(): ObjectRolling[];
    get unitRolling(): ObjectRolling;
}
