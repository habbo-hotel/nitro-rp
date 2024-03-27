import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CatalogPublishedMessageParser implements IMessageParser {
    private _instantlyRefreshCatalogue;
    private _newFurniDataHash;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get instantlyRefreshCatalogue(): boolean;
    get newFurniDataHash(): string;
}
