import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { FriendParser } from './FriendParser';
export declare class FriendListFragmentParser implements IMessageParser {
    private _totalFragments;
    private _fragmentNumber;
    private _fragment;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get totalFragments(): number;
    get fragmentNumber(): number;
    get fragment(): FriendParser[];
}
