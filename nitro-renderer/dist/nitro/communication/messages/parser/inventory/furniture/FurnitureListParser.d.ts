import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { FurnitureListItemParser } from './FurnitureListItemParser';
export declare class FurnitureListParser implements IMessageParser {
    private _totalFragments;
    private _fragmentNumber;
    private _fragment;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get totalFragments(): number;
    get fragmentNumber(): number;
    get fragment(): Map<number, FurnitureListItemParser>;
}
