import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class DiceValueMessageParser implements IMessageParser {
    private _itemId;
    private _value;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get itemId(): number;
    get value(): number;
}
