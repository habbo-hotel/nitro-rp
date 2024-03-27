import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CatalogIndexMessageParser } from '../../parser';
export declare class CatalogPagesListEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CatalogIndexMessageParser;
}
