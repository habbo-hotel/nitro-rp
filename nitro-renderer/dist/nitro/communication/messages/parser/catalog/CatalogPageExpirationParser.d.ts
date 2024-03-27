import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CatalogPageExpirationParser implements IMessageParser {
    private _pageName;
    private _pageId;
    private _secondsToExpiry;
    private _image;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get pageName(): string;
    get pageId(): number;
    get secondsToExpiry(): number;
    get image(): string;
}
