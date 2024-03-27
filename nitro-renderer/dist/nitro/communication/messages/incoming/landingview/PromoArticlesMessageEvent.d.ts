import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PromoArticlesMessageParser } from '../../parser';
export declare class PromoArticlesMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PromoArticlesMessageParser;
}
