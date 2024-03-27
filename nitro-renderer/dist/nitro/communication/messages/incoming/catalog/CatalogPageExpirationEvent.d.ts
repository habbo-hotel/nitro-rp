import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CatalogPageExpirationParser } from '../../parser';
export declare class CatalogPageExpirationEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CatalogPageExpirationParser;
}
