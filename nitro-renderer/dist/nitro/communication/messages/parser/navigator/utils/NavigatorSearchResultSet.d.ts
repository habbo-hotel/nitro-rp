import { IMessageDataWrapper } from '../../../../../../api';
import { NavigatorSearchResultList } from './NavigatorSearchResultList';
export declare class NavigatorSearchResultSet {
    private _code;
    private _data;
    private _results;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get code(): string;
    get data(): string;
    get results(): NavigatorSearchResultList[];
}
