import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CatalogPageWithEarliestExpiryMessageParser } from '../../parser';
export declare class CatalogPageWithEarliestExpiryMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CatalogPageWithEarliestExpiryMessageParser;
}
