import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { PetData } from './PetData';
export declare class PetReceivedMessageParser implements IMessageParser {
    private _boughtAsGift;
    private _pet;
    flush(): boolean;
    parse(k: IMessageDataWrapper): boolean;
    get boughtAsGift(): boolean;
    get pet(): PetData;
}
