import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { NavigatorSavedSearch } from './utils';
export declare class NavigatorSearchesParser implements IMessageParser {
    private _searches;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get searches(): NavigatorSavedSearch[];
}
