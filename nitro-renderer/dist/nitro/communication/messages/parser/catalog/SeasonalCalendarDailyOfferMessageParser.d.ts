import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CatalogPageMessageOfferData } from './CatalogPageMessageOfferData';
export declare class SeasonalCalendarDailyOfferMessageParser implements IMessageParser {
    private _pageId;
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get pageId(): number;
    get data(): CatalogPageMessageOfferData;
}
