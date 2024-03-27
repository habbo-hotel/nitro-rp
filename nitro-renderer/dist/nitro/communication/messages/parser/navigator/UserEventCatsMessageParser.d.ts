import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { NavigatorEventCategoryDataParser } from './NavigatorEventCategoryDataParser';
export declare class UserEventCatsMessageParser implements IMessageParser {
    private _categories;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get categories(): NavigatorEventCategoryDataParser[];
}
