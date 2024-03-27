import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { HabboSearchResultData } from './HabboSearchResultData';
export declare class HabboSearchResultParser implements IMessageParser {
    private _friends;
    private _others;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get friends(): HabboSearchResultData[];
    get others(): HabboSearchResultData[];
}
