import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
import { FurnitureFloorDataParser } from './FurnitureFloorDataParser';
export declare class FurnitureFloorParser implements IMessageParser {
    private _owners;
    private _items;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    private parseOwners;
    get owners(): Map<number, string>;
    get items(): FurnitureFloorDataParser[];
}
