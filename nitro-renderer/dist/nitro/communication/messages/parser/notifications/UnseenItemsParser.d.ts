import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class UnseenItemsParser implements IMessageParser {
    private _items;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    getItemsByCategory(category: number): number[];
    get categories(): number[];
}
