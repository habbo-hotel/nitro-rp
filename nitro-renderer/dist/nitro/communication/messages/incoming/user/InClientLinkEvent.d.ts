import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { InClientLinkParser } from '../../parser';
export declare class InClientLinkEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): InClientLinkParser;
}
