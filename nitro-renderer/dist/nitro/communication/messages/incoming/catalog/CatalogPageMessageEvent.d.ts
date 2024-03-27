import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CatalogPageMessageParser } from '../../parser';
export declare class CatalogPageMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CatalogPageMessageParser;
}
