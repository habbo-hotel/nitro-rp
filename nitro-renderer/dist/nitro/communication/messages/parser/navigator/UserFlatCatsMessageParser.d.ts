import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { NavigatorCategoryDataParser } from './NavigatorCategoryDataParser';
export declare class UserFlatCatsMessageParser implements IMessageParser {
    private _categories;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get categories(): NavigatorCategoryDataParser[];
}
