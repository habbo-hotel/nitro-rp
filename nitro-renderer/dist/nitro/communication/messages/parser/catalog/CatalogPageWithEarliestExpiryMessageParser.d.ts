import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CatalogPageWithEarliestExpiryMessageParser implements IMessageParser {
    private _pageName;
    private _secondsToExpiry;
    private _image;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get pageName(): string;
    get secondsToExpiry(): number;
    get image(): string;
}
