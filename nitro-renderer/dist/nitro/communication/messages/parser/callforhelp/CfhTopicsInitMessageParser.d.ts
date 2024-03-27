import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CallForHelpCategoryData } from './CallForHelpCategoryData';
export declare class CfhTopicsInitMessageParser implements IMessageParser {
    private _callForHelpCategories;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get callForHelpCategories(): CallForHelpCategoryData[];
}
