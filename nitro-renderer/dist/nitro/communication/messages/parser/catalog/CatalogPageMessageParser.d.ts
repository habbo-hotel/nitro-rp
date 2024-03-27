import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CatalogLocalizationData } from './CatalogLocalizationData';
import { CatalogPageMessageOfferData } from './CatalogPageMessageOfferData';
import { FrontPageItem } from './FrontPageItem';
export declare class CatalogPageMessageParser implements IMessageParser {
    private _pageId;
    private _catalogType;
    private _layoutCode;
    private _localization;
    private _offers;
    private _offerId;
    private _acceptSeasonCurrencyAsCredits;
    private _frontPageItems;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get pageId(): number;
    get catalogType(): string;
    get layoutCode(): string;
    get localization(): CatalogLocalizationData;
    get offers(): CatalogPageMessageOfferData[];
    get offerId(): number;
    get acceptSeasonCurrencyAsCredits(): boolean;
    get frontPageItems(): FrontPageItem[];
}
