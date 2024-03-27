import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { TradingOpenFailedParser } from '../../../parser';
export declare class TradingOpenFailedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): TradingOpenFailedParser;
}
