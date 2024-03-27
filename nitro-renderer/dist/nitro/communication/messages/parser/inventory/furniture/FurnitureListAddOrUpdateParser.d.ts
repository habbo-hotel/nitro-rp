import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { FurnitureListItemParser } from './FurnitureListItemParser';
export declare class FurnitureListAddOrUpdateParser implements IMessageParser {
    private _items;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get items(): FurnitureListItemParser[];
}
