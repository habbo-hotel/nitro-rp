import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CatalogPublishedMessageParser } from '../../parser';
export declare class CatalogPublishedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CatalogPublishedMessageParser;
}
