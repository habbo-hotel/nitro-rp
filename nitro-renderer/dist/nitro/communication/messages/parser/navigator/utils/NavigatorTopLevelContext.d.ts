import { IMessageDataWrapper } from '../../../../../../api';
import { NavigatorSavedSearch } from './NavigatorSavedSearch';
export declare class NavigatorTopLevelContext {
    private _code;
    private _savedSearches;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get code(): string;
    get savedSearches(): NavigatorSavedSearch[];
}
