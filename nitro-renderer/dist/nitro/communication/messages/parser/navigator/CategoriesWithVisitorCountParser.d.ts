import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CategoriesWithVisitorCountData } from './utils';
export declare class CategoriesWithVisitorCountParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): CategoriesWithVisitorCountData;
}
