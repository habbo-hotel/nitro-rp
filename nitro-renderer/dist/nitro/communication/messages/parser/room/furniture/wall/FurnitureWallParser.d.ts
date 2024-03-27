import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
import { FurnitureWallDataParser } from './FurnitureWallDataParser';
export declare class FurnitureWallParser implements IMessageParser {
    private _owners;
    private _items;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    private parseOwners;
    get owners(): Map<number, string>;
    get items(): FurnitureWallDataParser[];
}
