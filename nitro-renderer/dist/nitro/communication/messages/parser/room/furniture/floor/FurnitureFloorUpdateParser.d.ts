import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
import { FurnitureFloorDataParser } from './FurnitureFloorDataParser';
export declare class FurnitureFloorUpdateParser implements IMessageParser {
    private _item;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get item(): FurnitureFloorDataParser;
}
