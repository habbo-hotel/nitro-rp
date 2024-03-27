import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
import { FurnitureFloorDataParser } from './FurnitureFloorDataParser';
export declare class FurnitureFloorAddParser implements IMessageParser {
    private _item;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get item(): FurnitureFloorDataParser;
}
