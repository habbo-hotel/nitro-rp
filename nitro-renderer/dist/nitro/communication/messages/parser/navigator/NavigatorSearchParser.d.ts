import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { NavigatorSearchResultSet } from './utils';
export declare class NavigatorSearchParser implements IMessageParser {
    private _result;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get result(): NavigatorSearchResultSet;
}
