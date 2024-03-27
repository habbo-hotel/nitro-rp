import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class _Str_9021 implements IMessageParser {
    private _itemId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get itemId(): number;
}
