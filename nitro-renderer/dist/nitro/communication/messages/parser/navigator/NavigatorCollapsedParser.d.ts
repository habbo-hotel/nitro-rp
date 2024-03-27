import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class NavigatorCollapsedParser implements IMessageParser {
    private _categories;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get categories(): string[];
}
