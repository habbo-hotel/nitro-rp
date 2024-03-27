import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
import { FurnitureWallDataParser } from './FurnitureWallDataParser';
export declare class FurnitureWallUpdateParser implements IMessageParser {
    private _item;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get item(): FurnitureWallDataParser;
}
