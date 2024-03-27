import { IMessageDataWrapper } from '../../../../../../api';
export declare class NavigatorSavedSearch {
    private _id;
    private _code;
    private _filter;
    private _localization;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get id(): number;
    get code(): string;
    get filter(): string;
    get localization(): string;
}
