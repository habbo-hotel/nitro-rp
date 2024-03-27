import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { PetData } from './PetData';
export declare class PetInventoryParser implements IMessageParser {
    protected _totalFragments: number;
    protected _fragmentNumber: number;
    private _fragment;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get totalFragments(): number;
    get fragmentNumber(): number;
    get fragment(): Map<number, PetData>;
}
