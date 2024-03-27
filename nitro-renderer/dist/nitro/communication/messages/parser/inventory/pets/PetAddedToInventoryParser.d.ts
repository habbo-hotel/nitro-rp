import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { PetData } from './PetData';
export declare class PetAddedToInventoryParser implements IMessageParser {
    private _pet;
    private _boughtAsGift;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get pet(): PetData;
    get boughtAsGift(): boolean;
}
