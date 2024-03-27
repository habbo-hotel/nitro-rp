import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { PromoArticleData } from './PromoArticleData';
export declare class PromoArticlesMessageParser implements IMessageParser {
    private _articles;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get articles(): PromoArticleData[];
}
