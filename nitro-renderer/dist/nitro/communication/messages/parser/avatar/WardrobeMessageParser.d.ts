import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { OutfitData } from './OutfitData';
export declare class WardrobeMessageParser implements IMessageParser {
    private _state;
    private _outfits;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get state(): number;
    get outfits(): OutfitData[];
}
