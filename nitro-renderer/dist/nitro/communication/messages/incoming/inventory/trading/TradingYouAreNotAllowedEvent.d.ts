import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { TradingYouAreNotAllowedParser } from '../../../parser';
export declare class TradingYouAreNotAllowedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TradingYouAreNotAllowedParser;
}
