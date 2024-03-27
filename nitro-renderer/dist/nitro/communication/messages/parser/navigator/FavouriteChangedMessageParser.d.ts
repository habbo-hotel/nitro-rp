import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class FavouriteChangedMessageParser implements IMessageParser {
    private _flatId;
    private _added;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get flatId(): number;
    get added(): boolean;
}
